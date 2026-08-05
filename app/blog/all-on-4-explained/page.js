import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "all-on-4-explained");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["How is All-on-4 different from regular implants?",
   "Individual implants replace teeth one for one. Full-arch treatment supports an entire arch of fixed teeth on roughly four to six implants — far fewer implants and far less cost than replacing every tooth individually."],
  ["Are the teeth removable?",
   "No — that's the point. Full-arch implant teeth are fixed in place and cleaned in your mouth like natural teeth. Only your dentist removes them, and only for maintenance."],
  ["How long does the whole process take?",
   "Typically several months from surgery to final teeth, because the implants must fuse with bone before the permanent restoration goes on. Many patients leave surgery with a temporary set, so they're never without teeth."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: All-on-4 supports a full arch of fixed, non-removable teeth on about four implants per jaw</strong> — using angled placement to make use of the bone you still have, often avoiding the grafting older approaches required. It's the standard answer when most or all of a jaw's teeth are failing.</p>
      <h2>Why four instead of twenty-eight</h2>
      <p>Replacing every missing tooth with its own implant is neither necessary nor affordable. Bone accepts load from a well-distributed few, and angling the rear implants lets them anchor in denser bone toward the front of the jaw — which is exactly why many patients previously told they needed extensive grafting turn out to be candidates.</p>
      <h2>What it's like to live with</h2>
      <p>Fixed teeth behave like teeth. No adhesive, no removing them at night, no plate covering the palate — which means food tastes like food again, a detail denture wearers notice within a day. Chewing power returns to something near natural, and because implants transmit force into the jaw, the bone stops receding the way it does under a denture.</p>
      <h2>The honest trade-offs</h2>
      <ul>
        <li><strong>It's surgery</strong>, often including extraction of remaining failing teeth the same day.</li>
        <li><strong>It's a months-long process</strong>, with a temporary set worn while the implants integrate.</li>
        <li><strong>It's the largest investment in dentistry</strong> short of full-mouth individual implants — so quotes should always be exact and in writing.</li>
        <li><strong>It still needs maintenance.</strong> Gums around implants can get infected; hygiene visits remain non-negotiable.</li>
      </ul>
      <h2>When it isn't the right answer</h2>
      <p>If enough healthy teeth remain, saving them beats replacing them — every time. If budget rules out full-arch, an <Link href="/dentures">implant-supported denture</Link> delivers much of the stability for meaningfully less. A conservative practice tells you which camp you're in before selling anything; that conversation, plus 3D imaging and an exact quote, is what a <Link href="/full-arch-implants">full-arch consultation</Link> here is for.</p>
    </BlogPost>
  );
}
