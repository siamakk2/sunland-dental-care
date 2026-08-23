import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "age-limits-dental-implants");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["What is the minimum age for a dental implant?",
   "Jaw growth has to be complete first — commonly around the late teens, and often later for males than females. Growth is assessed individually rather than by birthday, since it finishes at different times for different people."],
  ["Why can't teenagers get implants?",
   "An implant fuses to bone and then stays exactly where it was placed. A jaw that is still growing carries the natural teeth along with it, so an implant placed too early gets left behind — ending up visibly short, out of alignment, or submerged relative to the teeth around it."],
  ["Is there a maximum age for dental implants?",
   "No. Implants are routinely placed for patients in their seventies, eighties, and beyond. Bone quality, gum health, and how well medical conditions are controlled decide candidacy — not age itself."],
  ["What do teenagers do in the meantime if they lose a tooth?",
   "Usually a temporary solution that maintains the space and appearance — a bonded bridge or a removable partial — until growth is complete and an implant can be placed properly. Preserving the bone and the space is the goal during those years."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: there is no upper age limit for dental implants — but there is a real lower one.</strong> The jaw has to finish growing first, typically in the late teens and often later for young men. On the other end, an 85-year-old in good health is frequently a better candidate than a 40-year-old smoker with untreated gum disease.</p>

      <h2>The young end: why growth matters</h2>
      <p>Natural teeth move with the jaw as it develops. An implant does not — once it fuses to bone, it stays precisely where it was placed, permanently. Put one in a jaw that still has growing to do and the surrounding teeth continue erupting past it. Years later the implant crown sits visibly short, misaligned, or partially submerged, and correcting it means removing and replacing the implant.</p>
      <p>That's why timing is assessed individually rather than by age alone. Growth completes at different points for different people, and dentists use skeletal indicators and serial records rather than a birthday to make the call. Waiting an extra year or two is a small cost compared to redoing the work.</p>

      <h3>What a teenager does in the meantime</h3>
      <p>Losing a front tooth at 15 is genuinely difficult, and nobody should spend high school with a gap. The usual approach is a temporary that maintains appearance and holds the space — a bonded bridge or a removable partial — while the site is monitored. The implant follows once growth is done.</p>

      <h2>The older end: age is almost never the reason</h2>
      <p>The question Dr. Emami hears most from older patients is whether they're "too old." In 40 years of practice, that has virtually never been the honest reason to decline. What actually gets evaluated is:</p>
      <ul>
        <li><strong>Bone volume</strong> at the site — addressable with grafting or a <Link href="/blog/sinus-lift-implants-upper-jaw">sinus lift</Link> where needed.</li>
        <li><strong>Gum health,</strong> treated before any implant is placed.</li>
        <li><strong>Controlled medical conditions</strong> — well-managed diabetes is generally fine; poorly controlled is the problem.</li>
        <li><strong>Medications,</strong> particularly certain bone medications and blood thinners, which require planning rather than prevention.</li>
        <li><strong>Smoking,</strong> which raises risk meaningfully at any age.</li>
      </ul>
      <p>Healing may run slightly slower with age, but bone remodels throughout life. Read <Link href="/blog/dental-implants-for-seniors">dental implants for seniors</Link> for the fuller picture.</p>

      <h2>The counterintuitive part</h2>
      <p>For older patients, waiting often costs more than proceeding. Bone recedes continuously at a site where a tooth is missing, so a straightforward implant at 72 can become an implant plus grafting at 78. Patients in their late seventies routinely say they wish they'd done it five years sooner — and almost never the reverse.</p>
      <p><Link href="/contact">A consultation with 3D imaging</Link> answers the question for your specific case, at any age.</p>
    </BlogPost>
  );
}
