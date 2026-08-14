import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "tooth-pain-at-night-dentist-closed");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Why does tooth pain get worse at night?",
   "Two reasons. Lying down increases blood flow to the head, raising pressure inside an already inflamed tooth. And with no distractions, there's nothing competing for your attention. It's a real phenomenon, not imagination."],
  ["What can I take for severe tooth pain at home?",
   "Over-the-counter ibuprofen is generally effective for dental pain if you're able to take it, and some people get better relief alternating it with acetaminophen — check with a pharmacist or physician about what's appropriate for you. Never place aspirin directly against the gum; it chemically burns the tissue."],
  ["When should I go to the emergency room for a toothache?",
   "Go immediately for facial swelling that affects breathing or swallowing, swelling spreading toward the eye or down the neck, high fever with dental pain, or trauma with uncontrolled bleeding. Hospitals can manage infection and airway but generally can't fix the tooth, so dental follow-up is still needed."],
  ["Does an ice pack or heat help a toothache?",
   "Cold on the outside of the cheek helps most dental pain and swelling. Avoid heat on a suspected infection — it can encourage swelling to spread."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: take an appropriate over-the-counter anti-inflammatory, apply cold to the outside of your cheek, sleep with your head elevated, and call your dentist the moment they open — unless you have facial swelling affecting breathing or swallowing, or a high fever, in which case go to the emergency room now.</strong></p>

      <h2>Why it always seems to peak at 2 a.m.</h2>
      <p>When you lie flat, blood flow to the head increases and pressure rises inside a tooth whose nerve is already inflamed with nowhere to expand. Add the absence of daytime distraction and pain that was a background ache becomes the only thing in the world. It's physiological, and it's why so many people end up searching for a dentist in the middle of the night.</p>

      <h2>What genuinely helps until morning</h2>
      <ol>
        <li><strong>Anti-inflammatory medication.</strong> Ibuprofen addresses dental pain well because it targets the inflammation causing it — assuming you can take it. A pharmacist can advise on dosing and whether alternating with acetaminophen is appropriate for you.</li>
        <li><strong>Sleep propped up.</strong> Extra pillows reduce the pressure that makes lying flat unbearable.</li>
        <li><strong>Cold compress</strong> on the outside of the cheek, 20 minutes on, 20 off.</li>
        <li><strong>Warm salt-water rinse</strong> — a teaspoon in a glass of warm water, gently.</li>
        <li><strong>Avoid the trigger side</strong> entirely: no chewing, and skip very hot or cold drinks.</li>
      </ol>

      <h2>What makes it worse</h2>
      <ul>
        <li><strong>Aspirin against the gum.</strong> It burns tissue chemically and does nothing for the tooth.</li>
        <li><strong>Heat on a swollen face.</strong> Encourages infection to spread.</li>
        <li><strong>Poking at it</strong> with anything — including "just checking" whether it's loose.</li>
        <li><strong>Leftover antibiotics</strong> from a previous prescription. Wrong drug, wrong dose, and it masks a problem that still needs treating.</li>
      </ul>

      <h2>The symptoms that can't wait for morning</h2>
      <p><strong>Go to the emergency room now if:</strong> swelling affects your breathing or swallowing, swelling is spreading toward your eye or down your neck, you have a high fever alongside dental pain, or there's facial trauma with bleeding you can't control. Dental infections can become serious medical emergencies, and this is not the moment for stoicism.</p>

      <h2>First thing in the morning</h2>
      <p>Call as soon as the office opens and describe your symptoms precisely — how long, what triggers it, whether there's swelling. Offices hold time for genuine emergencies, and patients who call at 9:00 get it. <Link href="/emergency-dentist">Sunland Dental Care</Link> is open Monday to Friday, 9 AM to 5 PM, at <strong>(818) 353-5520</strong>, and makes room for urgent pain during office hours.</p>
      <p>While you wait, <Link href="/blog/why-does-my-tooth-hurt">this guide to what different kinds of tooth pain mean</Link> may help you describe it — and tell you how worried to be.</p>
    </BlogPost>
  );
}
