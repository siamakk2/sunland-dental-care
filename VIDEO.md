# Practice video — how it's wired

One video is live: the 37-second implant film on `/dental-implants`.

## Source of truth

`lib/video.js` holds everything about the video — title, description, upload
date, duration, chapters, transcript. The VideoObject schema, the video
sitemap, and the on-page player all read from it. **Change it there, nowhere
else**, or the schema and the sitemap drift apart and Search Console reports
a mismatch.

## Files

| Path | What it is |
|---|---|
| `public/media/dental-implants-sunland.mp4` | The video. 1080×1920, 36.87s, H.264/AAC, faststart, 4.8 MB |
| `public/media/dental-implants-sunland-poster.jpg` | Poster frame at 8.5s |
| `public/media/dental-implants-sunland.vtt` | WebVTT captions |
| `lib/video.js` | All video metadata |
| `components/VideoFeature.js` | The player block |
| `app/video-sitemap.xml/route.js` | Video sitemap |

## The rules that are easy to break

**`uploadDate` must carry a time and a UTC offset.** `2026-10-27T09:00:00-07:00`,
never `2026-10-27`. A bare date makes Search Console report an invalid
datetime and the video drops out of the Videos report entirely.

**Replacing the video reuses the same filename.** The URL appears in the
schema, the sitemap, the OG tags and llms.txt. A new filename means updating
all of them and starting the indexing over. Regenerate the poster whenever
the file is replaced:

```
ffmpeg -ss 8.5 -i public/media/dental-implants-sunland.mp4 -frames:v 1 -q:v 3 \
  public/media/dental-implants-sunland-poster.jpg
```

**One video, one page.** Do not embed this file on a second page. Google
indexes a video against one URL; two embeds split the signal and neither
ranks.

**The video sitemap is separate.** Next's built-in sitemap generator cannot
emit the `video:` namespace, so `/video-sitemap.xml` is its own static route.
Both sitemaps are listed in `robots.txt`.

**`?t=` has to keep working.** The VideoObject advertises a `SeekToAction`
pointing at `/dental-implants?t=<seconds>`, and the chapter list uses the same
mechanism. `VideoFeature` reads that parameter on mount and seeks. If that
breaks, the schema is making a promise the page doesn't keep.

## After any change

1. `npm run build`, push to main, wait for Vercel.
2. Check the mp4 returns `content-type: video/mp4` (not `text/html` — that
   means the deploy hasn't landed and you're getting the fallback page).
3. Check the page HTML still contains the VideoObject with the offset-stamped
   `uploadDate`.
4. Search Console → resubmit both sitemaps, Request Indexing on
   `/dental-implants`, and run the Rich Results test on the page.

## Standing compliance note

The video's voiceover says the consultation, 3D imaging, guided placement and
final crown are "all included." That matches `OFFER.includes`. What it does
not say is what sits outside the price, so `OfferNote` is rendered directly
beside the player and the same clarification is written into `llms.txt`.
Keep it there. If the price or what it covers ever changes, the video becomes
wrong before the page does — the file has to be re-cut, not just the copy.

The voiceover also states "forty years" and "thousands of implants placed."
Both are practice-sourced and still unverified in writing. The substantiation
bar for an advertisement is higher than for a web page.
