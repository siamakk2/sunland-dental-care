import { IMPLANT_VIDEO as V } from "../../lib/video";

// Separate video sitemap: Next's built-in sitemap generator cannot emit the
// video namespace, so this route owns it. Listed alongside sitemap.xml in
// robots.txt. Values are read from lib/video.js so they can never drift out
// of sync with the VideoObject schema on the page.
export const dynamic = "force-static";

// Short keyword tags — video:tag takes keywords, not sentences.
const TAGS = [
  "dental implants", "dental implant cost", "Sunland dentist",
  "3D guided implant surgery", "Dr. Mahvash Emami", "cosmetic dentistry",
  "Los Angeles dental implants", "Sunland-Tujunga",
];

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${esc(V.pageUrl)}</loc>
    <video:video>
      <video:thumbnail_loc>${esc(V.thumbnailUrl)}</video:thumbnail_loc>
      <video:title>${esc(V.name)}</video:title>
      <video:description>${esc(V.description)}</video:description>
      <video:content_loc>${esc(V.contentUrl)}</video:content_loc>
      <video:duration>${V.durationSeconds}</video:duration>
      <video:publication_date>${esc(V.uploadDate)}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
      <video:uploader info="${esc(V.pageUrl)}">Sunland Dental Care</video:uploader>
${TAGS.map((t) => `      <video:tag>${esc(t)}</video:tag>`).join("\n")}
    </video:video>
  </url>
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
