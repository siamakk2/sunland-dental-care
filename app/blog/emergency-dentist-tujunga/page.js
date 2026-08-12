import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "emergency-dentist-tujunga");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Where can I find an emergency dentist near Tujunga?",
   "Sunland Dental Care is about five minutes from Tujunga at 7902 Foothill Blvd, Sunland, CA 91040. During office hours (Monday–Friday, 9 AM–5 PM) the office makes room for patients in urgent pain. Call (818) 353-5520 before you drive over so the team can advise you and prepare."],
  ["Is a knocked-out tooth an emergency?",
   "Yes, and the most time-sensitive one in dentistry. A permanent tooth replanted within about an hour has the best chance of survival. Handle it by the crown only, rinse gently without scrubbing, and keep it moist — back in the socket if you can manage it, otherwise in milk."],
  ["When should I go to the ER instead of a dentist?",
   "Go to the emergency room immediately for swelling that affects breathing or swallowing, dental pain with a high fever, or facial trauma with uncontrolled bleeding. Those are medical emergencies. Hospitals can control infection and airway; they generally cannot fix the tooth, so you'll still need dental follow-up."],
  ["What if my dental emergency happens at night or on the weekend?",
   "Call the office line and follow the instructions provided. Manage pain with over-the-counter ibuprofen if you can take it, rinse with warm salt water, and use a cold compress on the outside of the cheek. Never place aspirin directly against the gum — it burns the tissue."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: call a dentist immediately for a knocked-out tooth, facial swelling, or pain that stops you sleeping — and go to the ER first if swelling affects your breathing or swallowing.</strong> If you're in Tujunga, Sunland Dental Care is roughly five minutes down Foothill Boulevard at (818) 353-5520. Here's what to do in the meantime.</p>

      <h2>Knocked-out tooth — the first hour decides everything</h2>
      <p>Pick the tooth up by the crown, never the root. Rinse it briefly under water without scrubbing — the cells on the root surface are what allow reattachment. If you can, place it back in the socket and bite gently on a clean cloth. If not, keep it in milk (not water). Then get to a dentist inside the hour if at all possible.</p>

      <h2>Broken or chipped tooth</h2>
      <p>Save any fragments, rinse your mouth with warm water, and apply a cold compress outside the cheek for swelling. A chip may be cosmetic; a fracture that exposes the inner layers is urgent because bacteria reach the nerve fast. If it hurts to air or cold, treat it as urgent.</p>

      <h2>Severe toothache</h2>
      <p>Pain that throbs, wakes you at night, or doesn't respond to over-the-counter medication usually means the nerve is involved — <Link href="/root-canals">root canal territory</Link>. Warm salt-water rinses and ibuprofen (if you can take it) help until you're seen. Read <Link href="/blog/why-does-my-tooth-hurt">how to decode the type of pain</Link> for what your specific symptoms suggest.</p>

      <h2>Swelling or a gum pimple</h2>
      <p>This is an abscess — infection that has escaped the tooth — and it will not resolve on its own. Antibiotics may buy time, but the source has to be treated. Call the same day. If swelling spreads toward your eye or under your jaw and affects swallowing or breathing, that's the ER, immediately.</p>

      <h2>Lost filling or crown</h2>
      <p>Not usually an emergency, but don't wait weeks. The exposed tooth is vulnerable and can shift, which means the crown may no longer fit. Keep the crown, avoid chewing on that side, and book promptly.</p>

      <h2>Why Tujunga patients call here</h2>
      <p>Sunland Dental Care has been at the same Foothill Boulevard address since 1991 — a short drive from anywhere in Tujunga, with free parking and no medical-building maze at the other end. <Link href="/dr-emami">Dr. Mahvash Emami, DDS</Link> has 40 years of clinical experience, so very little arriving through the door is unfamiliar. Emergency visits focus on two things in order: getting you out of pain today, and giving you an honest plan with exact pricing for fixing the cause. See our <Link href="/emergency-dentist">emergency care page</Link> or the <Link href="/dentist-tujunga">Tujunga patient page</Link>.</p>
      <p><strong>Save the number now: (818) 353-5520.</strong> You won't want to be searching during the actual emergency.</p>
    </BlogPost>
  );
}
