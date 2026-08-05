import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS[0];
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Why do implant prices vary so much between offices?",
   "Mostly structure, not quality. When a general dentist, an oral surgeon, and a restorative dentist each bill separately — plus imaging fees — costs stack. Offices where one doctor performs every stage can price the complete treatment as one number."],
  ["Does dental insurance cover implants?",
   "Often partially at best. Many plans cover the crown portion or an allowance toward it, while treating the implant itself as elective. Call the office with your plan details and you'll get the real answer for your coverage before committing to anything."],
  ["Is a cheap implant a bad implant?",
   "Not necessarily — but an incomplete quote is a bad quote. Judge any implant price by three things: does it include imaging, surgery, AND the final crown; who actually performs each stage; and whether the number is fixed in writing."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: a single dental implant in the US typically costs $3,000–$5,000, and in Los Angeles commonly more than $5,000 — while at Sunland Dental Care a complete single implant is $2,000, fixed.</strong> The interesting question is why the same titanium post and porcelain crown can vary by thousands of dollars. It's rarely about quality. It's about how the bill is built.</p>
      <h2>What you're actually paying for</h2>
      <p>A "dental implant" is really four things: the consultation and 3D imaging, the surgical placement of the titanium post, the abutment that connects post to tooth, and the crown itself. Many advertised prices cover only the post — the number that gets you in the door — with imaging, abutment, and crown billed separately later. That's how a "$1,500 implant" becomes a $4,800 total.</p>
      <h2>Why Los Angeles runs expensive</h2>
      <p>In much of LA, an implant is a three-office journey: your general dentist refers you to an oral surgeon for placement, who sends you back for the crown. Each office has its own fees, margins, and imaging. None of those doctors is overcharging — the structure itself is expensive.</p>
      <h2>How $2,000 complete is possible</h2>
      <p>At <Link href="/dental-implants">Sunland Dental Care</Link>, Dr. Emami performs every stage herself — consultation, 3D-guided placement, and restoration — in one Sunland office she's run since 1991. Removing the referral chain removes its costs, and 40 years and thousands of implants make the process efficient. The $2,000 includes the consultation, 3D imaging, guided surgery, and the final crown. The price is fixed and put in writing before anything begins. See <Link href="/pricing">how our pricing works</Link>.</p>
      <h2>Questions to ask any implant office</h2>
      <ul>
        <li>Does this price include the crown and imaging, or just the post?</li>
        <li>Who places the implant, and who restores it? The same doctor?</li>
        <li>Will you give me the complete number in writing before I commit?</li>
      </ul>
      <p>Any good office — including this one — will welcome all three questions.</p>
    </BlogPost>
  );
}
