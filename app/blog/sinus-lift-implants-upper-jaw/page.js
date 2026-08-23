import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "sinus-lift-implants-upper-jaw");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Can an implant be placed if I have a low sinus and not enough bone?",
   "In most cases yes, with a sinus lift — a well-established procedure that raises the sinus membrane and adds bone graft material beneath it, creating the height an implant needs. Patients told years ago that upper implants were impossible are frequently candidates today."],
  ["What is a sinus lift?",
   "A procedure that gently lifts the floor of the maxillary sinus and places bone graft material in the space created. Over several months that graft becomes bone capable of holding an implant. It's routine in implant dentistry and done under local anesthesia."],
  ["Is a sinus lift painful?",
   "Most patients compare recovery to a tooth extraction — soreness and some swelling for a few days, managed with over-the-counter medication. You'll be asked to avoid nose-blowing and heavy lifting for a period so the graft isn't disturbed."],
  ["Can the implant be placed at the same time as the sinus lift?",
   "Sometimes. If enough existing bone remains for initial stability, the lift and implant can be done in one visit. When bone height is very limited, the graft heals first — often several months — before the implant is placed."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: a low sinus and thin bone in the upper jaw is one of the most common reasons patients are told they can't have implants — and one of the most reliably solvable.</strong> A sinus lift restores the bone height an implant needs, and it's routine work, not exotic surgery.</p>

      <h2>Why the sinus drops in the first place</h2>
      <p>Your maxillary sinuses are air spaces sitting directly above the upper back teeth. When an upper molar is lost, two things happen at once: the bone that held its roots begins receding, and the sinus above gradually expands downward into the space — a process called pneumatization. Years later, the strip of bone between mouth and sinus can be a few millimeters thick, far less than an implant requires.</p>
      <p>This is also why <Link href="/blog/what-happens-missing-tooth-not-replaced">replacing a tooth sooner is simpler than replacing it later</Link>. The site doesn't stay the same.</p>

      <h2>What a sinus lift actually does</h2>
      <p>The sinus is lined with a thin membrane. A sinus lift carefully raises that membrane upward and places bone graft material into the space created beneath it. Over roughly four to nine months, that material is replaced by your own bone — now thick enough to anchor an implant securely.</p>
      <p>There are two common approaches. A <strong>crestal (internal) lift</strong> works through the implant site itself when only a few millimeters of extra height are needed, and often allows the implant to go in the same day. A <strong>lateral window lift</strong> accesses the sinus from the side and is used when more substantial height is required; the graft usually heals before the implant is placed.</p>

      <h2>Recovery, honestly</h2>
      <ul>
        <li>Soreness and swelling for a few days — most patients compare it to an extraction.</li>
        <li><strong>No nose-blowing, no straws, no heavy lifting</strong> for the period your dentist specifies. Pressure changes are what disturb a healing graft.</li>
        <li>Sleeping slightly elevated for the first nights helps.</li>
        <li>Some patients notice minor congestion on that side, which settles.</li>
      </ul>

      <h2>Why 3D imaging changes the answer</h2>
      <p>A flat X-ray shows height poorly and volume not at all. A CBCT scan shows the sinus floor, the bone available, and its density in three dimensions — which is why patients turned down before 3D imaging became routine are so often candidates now. If your "no" is more than a few years old, it deserves re-examination rather than acceptance. See <Link href="/blog/not-enough-bone-for-implants">"you don't have enough bone" — is that still true?</Link></p>

      <h2>Getting a real answer for your case</h2>
      <p>A consultation at <Link href="/dental-implants">Sunland Dental Care</Link> includes 3D imaging and a straight assessment: whether you have adequate bone now, whether a lift would be needed, whether the implant could go in at the same visit, and what the whole thing would cost — in writing. <Link href="/dr-emami">Dr. Emami</Link> has 40 years of implant experience and performs grafting in-house rather than referring it out.</p>
      <p>And if the honest answer is that the reconstruction is more than you want to undertake, she'll say so, and a well-made <Link href="/dentures">implant-supported denture</Link> or partial remains a genuinely good outcome.</p>
    </BlogPost>
  );
}
