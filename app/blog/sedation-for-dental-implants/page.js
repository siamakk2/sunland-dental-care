import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "sedation-for-dental-implants");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is sedation necessary for a dental implant?",
   "For most patients, no — implant placement is comfortably done with local anesthesia alone. Sedation exists for patients whose anxiety, gag reflex, or case complexity makes the appointment harder than it needs to be."],
  ["Will I remember the procedure?",
   "Most sedated patients recall little or nothing of it. That's often the entire point for someone who has postponed treatment for years because of fear."],
  ["Is sedation safe?",
   "When preceded by a proper health and medication review and monitored appropriately, sedation is routine in dentistry. Your medical history determines what's suitable — which is why that conversation happens before surgery is scheduled, not on the day."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: sedation isn't necessary for most implant procedures, but for patients whose fear has postponed treatment for years, it turns an impossible appointment into a manageable one.</strong> At Sunland Dental Care it's offered specifically for implant placement — not for routine dentistry, which doesn't need it.</p>
      <h2>The cost of postponing</h2>
      <p>Fear is expensive in a way patients rarely see coming. When a tooth is lost and nothing replaces it, the jawbone at that site begins receding immediately — fastest in the first year. Wait long enough and a straightforward implant becomes an implant plus <Link href="/blog/not-enough-bone-for-implants">bone grafting</Link>, adding months and cost. The anxiety that delays treatment quietly makes the eventual treatment bigger.</p>
      <h2>Who it's genuinely for</h2>
      <ul>
        <li><strong>Significant dental anxiety</strong> — the patients who've rescheduled three times and mean to keep the fourth.</li>
        <li><strong>A strong gag reflex</strong>, which makes longer procedures difficult regardless of courage.</li>
        <li><strong>Multiple implants in one visit</strong>, where the appointment simply runs long.</li>
        <li><strong>Difficulty sitting comfortably</strong> for extended periods for medical reasons.</li>
      </ul>
      <h2>Who doesn't need it</h2>
      <p>Plenty of patients arrive expecting to need sedation and don't. A single implant, planned in 3D and placed with a surgical guide, is typically a short appointment that patients describe afterward as easier than the extraction that preceded it — read <Link href="/blog/do-dental-implants-hurt">what it actually feels like</Link>. There's no prize for being sedated, and no shame in asking for it.</p>
      <h2>How to decide</h2>
      <p>Bring it up at the consultation, along with your full medication list and health history. Dr. Emami will tell you plainly whether <Link href="/sedation-implant-dentistry">sedation</Link> makes sense for your case or whether local anesthesia will serve you perfectly well. Either way, the decision gets made before surgery day — never in the chair.</p>
    </BlogPost>
  );
}
