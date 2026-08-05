import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "dental-implants-for-seniors");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is there an age limit for dental implants?",
   "No. Dentists routinely place implants for patients in their seventies, eighties, and beyond. What's evaluated is bone volume, gum health, and general health — not the number on your driver's license."],
  ["Do common medications affect implants?",
   "Some do, which is why a full medication list matters at consultation. Blood thinners usually require planning rather than prevention, and certain bone medications (bisphosphonates, especially IV forms) need careful discussion. Bring the actual list."],
  ["Is it worth getting implants at 78?",
   "That's a personal calculation, but weigh what the alternative costs: difficulty eating, ongoing bone loss, and a smile you hide. Patients in their late seventies regularly say they wish they'd done it five years sooner."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: age alone almost never disqualifies anyone from dental implants.</strong> Bone density, gum health, and how well chronic conditions are controlled decide candidacy — and a healthy 80-year-old is frequently a better candidate than an unhealthy 45-year-old smoker. In four decades of practice, "you're too old" has virtually never been the honest reason to say no.</p>
      <h2>What actually determines candidacy</h2>
      <ul>
        <li><strong>Bone volume</strong> where the implant will go. Long-missing teeth mean the bone has shrunk — often addressable with grafting.</li>
        <li><strong>Gum health.</strong> Active periodontal infection is treated first; implants go into healthy tissue, not inflamed tissue.</li>
        <li><strong>Controlled health conditions.</strong> Well-managed diabetes is usually fine; uncontrolled diabetes impairs healing. It's control, not diagnosis.</li>
        <li><strong>Smoking</strong>, which measurably raises failure risk by restricting the blood supply healing depends on.</li>
      </ul>
      <h2>Healing when you're older</h2>
      <p>Healing may run slightly slower past a certain age, but it works — bone remodels throughout life. Because every case at <Link href="/dental-implants">Sunland Dental Care</Link> is planned in 3D and placed with surgical guides, the surgical site stays small, which matters more for older patients than anyone: less trauma, less swelling, faster return to normal.</p>
      <h2>The denture question</h2>
      <p>Many seniors arrive weighing implants against a new <Link href="/dentures">denture</Link>. Both are legitimate. The honest difference: a denture rests on gums and lets the jawbone keep shrinking, so fit degrades over the years; implants stop that shrinkage where they're placed. The practical middle path is an implant-supported denture — two to four implants that let a denture snap securely in place at a fraction of full-arch cost.</p>
      <h2>Cost, plainly</h2>
      <p>Medicare generally does not cover routine dental implants, which is why transparent pricing matters at this stage of life. A complete single implant here is $2,000 fixed — consultation, 3D imaging, guided surgery, and the crown — with the number in writing before anything starts. See <Link href="/pricing">how our pricing works</Link>.</p>
    </BlogPost>
  );
}
