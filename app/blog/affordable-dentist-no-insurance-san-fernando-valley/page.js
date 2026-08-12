import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "affordable-dentist-no-insurance-san-fernando-valley");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["How can I afford dental work without insurance?",
   "Start with an exam and a written plan, then treat by urgency: infection and pain first, gum health second, function third, cosmetics last. Ask every office for the complete cost in writing before scheduling, and look for practices that publish fixed prices rather than quoting case by case."],
  ["Is dental insurance even worth it?",
   "It depends on your plan. Many cap annual benefits around $1,000–$2,000 and cover major work at a percentage, which is why patients needing implants or crowns are often effectively self-pay either way. Compare your premium plus deductible against the treatment you realistically expect."],
  ["What's the cheapest way to replace a missing tooth?",
   "A partial denture is least expensive up front; a bridge is mid-range but requires grinding the neighboring teeth; an implant costs most initially and typically lasts longest without affecting adjacent teeth. Judge across ten years, not one."],
  ["How do I know if a low quote is too good to be true?",
   "Ask what it excludes. Low implant prices often cover only the titanium post, with imaging, abutment, and crown billed later. A complete quote names every component and puts the total in writing."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: get an exam and a written treatment plan first, then treat in order of urgency — infection and pain, then gums, then function, then cosmetics.</strong> Being uninsured in the San Fernando Valley doesn't mean going without care. It means being deliberate about sequence and refusing to proceed without exact numbers.</p>

      <h2>The economics nobody explains</h2>
      <p>Almost every large dental bill started as something small that waited. A cleaning prevents the filling. A filling prevents the crown. A crown prevents the <Link href="/root-canals">root canal</Link> and, eventually, the extraction and implant. Preventive care isn't just healthier — it's by far the cheapest dentistry available, and the gap widens every year you postpone.</p>

      <h2>Triage when money is finite</h2>
      <ol>
        <li><strong>Infection and pain.</strong> Abscesses and untreated decay get worse, more expensive, and occasionally dangerous. Never the place to economize.</li>
        <li><strong>Gum health.</strong> <Link href="/blog/bleeding-gums-what-it-means">Periodontal disease</Link> takes more adult teeth than cavities and progresses painlessly. Hygiene visits are among the cheapest care available.</li>
        <li><strong>Function.</strong> Restoring the ability to chew — fillings, crowns, replacing a missing tooth.</li>
        <li><strong>Cosmetics.</strong> Whitening and veneers are wonderful, and they can wait.</li>
      </ol>

      <h2>How to protect yourself from an ambush bill</h2>
      <ul>
        <li>Ask for <strong>the complete cost in writing</strong> before anything is scheduled.</li>
        <li>Ask specifically <strong>what the quote excludes</strong> — this is where surprises live.</li>
        <li>Be careful with prices far below everyone else's; they usually signal a partial quote rather than a bargain. See <Link href="/blog/how-much-do-dental-implants-cost">how implant pricing really works</Link>.</li>
        <li>Ask whether <strong>payment arrangements</strong> are available for larger plans — many offices can discuss them.</li>
      </ul>

      <h2>Practices that publish their prices</h2>
      <p>Transparent fixed pricing is the exception in dentistry and a genuine advantage when you're paying directly. At <Link href="/insurance-financing">Sunland Dental Care</Link> in Sunland — serving Sun Valley, San Fernando, North Hollywood, Tujunga, and the wider Valley — a complete single dental implant is <strong>$2,000 fixed</strong>: consultation, 3D imaging, guided surgery, and the final crown, with the number in writing before treatment starts. Every other treatment comes with an exact written estimate at the consultation.</p>
      <p>That's possible because <Link href="/dr-emami">Dr. Mahvash Emami, DDS</Link> performs every stage herself in one office rather than routing patients through a referral chain — and because 40 years of experience makes the process efficient. If cost has kept you away, <Link href="/contact">start with a call</Link>: (818) 353-5520, in English, Español, or فارسی.</p>
    </BlogPost>
  );
}
