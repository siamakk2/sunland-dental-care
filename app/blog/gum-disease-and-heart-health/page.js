import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "gum-disease-and-heart-health");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is there really a connection between gum disease and heart problems?",
   "Research consistently finds an association: people with periodontal disease have higher rates of cardiovascular disease. What remains debated is whether gum disease causes heart disease, or whether both share underlying drivers like inflammation, smoking, diabetes, and age. The association is well documented; direct causation is not settled."],
  ["How could an infection in the gums affect the heart?",
   "The leading hypothesis is inflammation. Periodontal disease maintains a chronic inflammatory state and allows oral bacteria into the bloodstream, and chronic inflammation is central to how arterial plaque develops. Oral bacteria have been identified within arterial plaques, though finding them there doesn't by itself prove they caused the damage."],
  ["Will treating my gums improve my heart health?",
   "Studies show periodontal treatment reduces markers of systemic inflammation. Whether that translates into fewer heart attacks or strokes hasn't been definitively demonstrated in large trials. Treating gum disease is clearly worth doing for your mouth; the cardiovascular benefit is plausible but not proven."],
  ["Does gum disease affect diabetes too?",
   "The diabetes relationship is better established and runs in both directions: diabetes raises the risk and severity of gum disease, and severe gum disease appears to make blood sugar harder to control. Treating periodontal disease is a recognized part of diabetes care."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: yes, there is a well-documented association between gum disease and cardiovascular disease — people with periodontitis have measurably higher rates of heart problems.</strong> Whether gum disease <em>causes</em> heart disease is a more careful question, and the honest answer is that it hasn't been proven. Here's what the evidence actually supports.</p>

      <h2>What's firmly established</h2>
      <p>Across many observational studies and different populations, periodontal disease and cardiovascular disease travel together. That finding is consistent enough that major dental and cardiology organizations acknowledge the association explicitly. This isn't fringe science.</p>

      <h2>What's still being worked out</h2>
      <p>Association isn't causation. Gum disease and heart disease share several powerful risk factors — smoking, diabetes, age, obesity, and socioeconomic factors that affect access to care. Some of the observed overlap is certainly explained by those shared drivers rather than one condition causing the other.</p>
      <p>The mechanism proposed for a genuine causal link is <strong>inflammation</strong>: periodontitis keeps the body in a low-grade inflammatory state, and inflammation is central to the development of arterial plaque. Oral bacteria have been found inside arterial plaques, which is suggestive — though bacteria being present doesn't establish that they caused the damage.</p>
      <p>Interventional studies show that treating gum disease lowers systemic inflammatory markers. Whether it reduces actual heart attacks and strokes hasn't been demonstrated in the kind of large trials that would settle it. Anyone telling you flatly that flossing prevents heart attacks is going beyond the evidence.</p>

      <h2>The relationship that's clearer: diabetes</h2>
      <p>The diabetes link is stronger and bidirectional. Diabetes increases both the risk and severity of periodontal disease, and severe periodontal disease appears to worsen blood sugar control. Treating gum disease is a recognized component of managing diabetes — a genuinely two-way street.</p>

      <h2>Why Dr. Emami treats gums first regardless</h2>
      <p>As she puts it: the mouth is the gateway to the body. You don't need the cardiovascular question resolved to justify treating periodontal disease, because the local case is already overwhelming — gum disease is the leading cause of adult tooth loss, it progresses painlessly, it's the number one cause of <Link href="/blog/can-dental-implants-fail">late dental implant failure</Link>, and in its early stage it is completely reversible.</p>
      <p>If reducing your body's total inflammatory burden turns out to be a genuine bonus, that's a very good bonus. But the gums alone are reason enough.</p>

      <h2>What to actually do</h2>
      <ol>
        <li>If your gums bleed when you brush, get evaluated — <Link href="/blog/bleeding-gums-what-it-means">bleeding is not normal</Link>.</li>
        <li>Ask for a <strong>periodontal charting</strong>, not just a cleaning. Pocket depths are the real measurement.</li>
        <li>Tell your dentist about heart conditions, diabetes, and all medications — several affect gum health directly.</li>
        <li>Tell your physician if you're being treated for periodontal disease. The connection matters to both.</li>
      </ol>
      <p><Link href="/periodontal-treatment">Periodontal treatment at Sunland Dental Care</Link> is performed in-house by Dr. Emami, from deep cleanings to gum surgery.</p>
    </BlogPost>
  );
}
