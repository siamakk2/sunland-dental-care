import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "bad-breath-wont-go-away");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Why does my breath smell bad even though I brush twice a day?",
   "Because the bacteria responsible usually live where a toothbrush doesn't reach — below the gumline, in the grooves at the back of the tongue, between teeth, or around a leaking filling. Brushing tooth surfaces well doesn't touch any of those places."],
  ["Can gum disease cause bad breath?",
   "Yes, and it's one of the most common causes. Bacteria in periodontal pockets produce volatile sulfur compounds — the specific smell people describe as persistent and hard to mask. Treating the gum infection resolves the odor."],
  ["Does scraping your tongue help?",
   "Meaningfully. The back of the tongue harbors a large share of odor-producing bacteria, and a tongue scraper removes far more of that coating than brushing it does. It's one of the highest-return habits for fresh breath."],
  ["When is bad breath a medical rather than dental problem?",
   "When your dentist finds no dental cause. Persistent halitosis can relate to sinus and tonsil issues, acid reflux, dry mouth from medications, uncontrolled diabetes, or liver and kidney conditions. Dental causes are more common, so start there, then see a physician if the mouth is clear."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: if brushing and mouthwash only buy you an hour, the problem isn't your hygiene effort — it's the location of the bacteria.</strong> The organisms that cause persistent bad breath live below the gumline, deep in the tongue's grooves, and between teeth. A toothbrush reaches none of those.</p>

      <h2>Where the smell actually comes from</h2>
      <p>Certain oral bacteria break down proteins and release volatile sulfur compounds — the same family of molecules responsible for the smell of rotten eggs. They thrive in low-oxygen environments, which is precisely why they colonize gum pockets and the rough back surface of the tongue rather than the smooth, brushed fronts of your teeth.</p>

      <h2>The five most common dental causes</h2>
      <ul>
        <li><strong>Gum disease.</strong> The leading cause. Deep pockets are anaerobic — ideal habitat. If your gums also <Link href="/blog/bleeding-gums-what-it-means">bleed when you brush</Link>, this is very likely your answer.</li>
        <li><strong>Tongue coating.</strong> A large reservoir of odor-producing bacteria that brushing barely disturbs.</li>
        <li><strong>Dry mouth.</strong> Saliva is the mouth's rinse cycle. Many common medications reduce it, which is why morning breath and medication-related dry mouth smell similar.</li>
        <li><strong>Decay or a failing restoration</strong> trapping food and bacteria where you cannot clean.</li>
        <li><strong>An abscess or dying nerve</strong> — usually accompanied by a bad taste, and always worth prompt attention.</li>
      </ul>

      <h2>What actually works</h2>
      <ol>
        <li><strong>Clean between your teeth daily.</strong> Floss or interdental brushes — this is the single biggest change most people can make.</li>
        <li><strong>Scrape your tongue,</strong> back to front, every morning.</li>
        <li><strong>Get a periodontal evaluation.</strong> If gum pockets are the source, no amount of home care fixes it — the bacteria live below where you can reach. <Link href="/periodontal-treatment">Professional cleaning does</Link>.</li>
        <li><strong>Hydrate,</strong> and ask your dentist about dry-mouth products if you take medications that cause it.</li>
        <li><strong>Skip alcohol-based mouthwash.</strong> It masks odor briefly and dries the mouth, which makes the underlying problem worse.</li>
      </ol>

      <h2>Why this is worth taking seriously</h2>
      <p>Beyond the social cost, persistent bad breath is frequently the first noticeable symptom of periodontal disease — a condition that progresses painlessly and is the leading cause of adult tooth loss. Treating the smell and treating the disease are the same project.</p>
      <p>If it has persisted despite good home care, <Link href="/contact">get the gums evaluated</Link>. It's usually fixable, and often faster than people expect.</p>
    </BlogPost>
  );
}
