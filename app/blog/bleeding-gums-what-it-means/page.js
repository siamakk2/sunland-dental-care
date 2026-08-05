import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "bleeding-gums-what-it-means");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is it normal for gums to bleed when brushing?",
   "No. Healthy gums don't bleed from normal brushing any more than healthy skin bleeds from washing. Bleeding signals inflammation — usually gingivitis, which is reversible when addressed early."],
  ["Can gum disease be reversed?",
   "Gingivitis, the early stage, is reversible with professional cleaning and better home care. Once it progresses to periodontitis and bone is lost, that bone doesn't return on its own — treatment then aims to halt the damage and preserve what remains."],
  ["Why do dentists ask about heart disease and diabetes?",
   "Because gum disease is linked to both. Chronic oral infection adds inflammatory burden to the whole body, and diabetes and gum disease worsen each other in both directions."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: gums that bleed when you brush are inflamed, and inflammation is infection — not a sign you brushed too hard.</strong> It's the most commonly dismissed symptom in dentistry, and the one most connected to the rest of your health.</p>
      <h2>What's actually happening</h2>
      <p>Plaque bacteria collect at the gumline; the immune system responds; tissue becomes swollen and fragile enough to bleed at the slightest contact. That's gingivitis — uncomfortable, unattractive, and completely reversible. Left alone, the infection migrates below the gumline and begins dissolving the bone anchoring your teeth. That's periodontitis, and the bone it takes doesn't come back.</p>
      <h2>Why it's the leading cause of tooth loss</h2>
      <p>Most people assume cavities take the most teeth. Past a certain age, gum disease does — perfectly sound teeth simply lose their foundation. It's also painless until it's advanced, which is exactly what makes it dangerous: nothing hurts while the damage accumulates.</p>
      <h2>The whole-body part</h2>
      <p>As Dr. Emami puts it, the mouth is the gateway to the body: a chronic infection in your gums keeps the immune system engaged around the clock, and research consistently links periodontal disease with cardiovascular disease and with poorer blood-sugar control in diabetes. Treating gums isn't cosmetic housekeeping — it lowers the body's total inflammatory load, which is why hygiene visits at this practice start with the gums, not the teeth.</p>
      <h2>What to do about it</h2>
      <ol>
        <li><strong>Don't wait for pain</strong> — by the time gum disease hurts, it's late.</li>
        <li><strong>Get a periodontal evaluation.</strong> Pocket depths around each tooth tell the real story an eyeball exam can't.</li>
        <li><strong>Clean below the gumline.</strong> Brushing reaches the surface; professional cleaning reaches where the infection lives.</li>
        <li><strong>Floss daily</strong>, unglamorously and forever — it's the only home tool that reaches between teeth.</li>
      </ol>
      <p>If your gums bleed, <Link href="/general-dentistry">book a hygiene evaluation</Link>. Caught at the gingivitis stage, this is one of the few problems in medicine you can completely undo.</p>
    </BlogPost>
  );
}
