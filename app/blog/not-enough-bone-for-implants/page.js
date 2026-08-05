import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "not-enough-bone-for-implants");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["What is a bone graft, exactly?",
   "Grafting adds bone material to a site that has thinned, giving an implant something solid to integrate with. It's a routine, well-established procedure, and the graft is gradually replaced by your own bone as it heals."],
  ["Does bone grafting hurt?",
   "Most patients describe it as comparable to an extraction — sore for a few days, managed with over-the-counter medication. It's usually done under local anesthesia."],
  ["How long after grafting can the implant go in?",
   "It depends on the size of the graft. Small sites are sometimes grafted and implanted in the same visit; larger reconstructions may need several months of healing first. 3D imaging answers this for your specific case."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: "not enough bone" is often a solvable problem, not a permanent verdict — and if you were told this more than a few years ago, the answer may simply be out of date.</strong> Bone grafting, sinus lifts, angled placement, and 3D planning have moved a great many patients from "impossible" to "straightforward."</p>
      <h2>Why the bone disappeared</h2>
      <p>Jawbone exists to hold teeth. Remove the tooth and the body, efficient as ever, gradually reclaims the bone that supported it — fastest in the first year, then slowly onward. It's also why a long-worn denture eventually stops fitting: the ridge underneath keeps shrinking.</p>
      <h2>What can be done about it</h2>
      <ul>
        <li><strong>Bone grafting</strong> rebuilds width or height so an implant has something to integrate with.</li>
        <li><strong>Sinus lift</strong> creates room in the upper back jaw, where the sinus often sits low over missing molars.</li>
        <li><strong>Angled placement</strong> reaches denser bone without grafting at all — the principle behind <Link href="/blog/all-on-4-explained">All-on-4</Link>.</li>
        <li><strong>3D-guided planning</strong> finds usable bone a flat X-ray simply cannot show. Some "no" verdicts were really limits of old imaging.</li>
      </ul>
      <h2>Get the verdict re-examined</h2>
      <p>If you were turned down for implants — especially before 3D imaging was routine — the reasonable move is a fresh evaluation rather than accepting an aging conclusion. A consultation at <Link href="/dental-implants">Sunland Dental Care</Link> includes 3D imaging and an honest read: whether you're a candidate now, what grafting (if any) would be required, and what it would cost, in writing.</p>
      <p>And the honest flip side: sometimes the answer really is no, or the reconstruction is more than a patient wants to undertake. In that case a well-made <Link href="/dentures">denture</Link> or implant-supported denture is a genuinely good outcome, not a consolation prize.</p>
    </BlogPost>
  );
}
