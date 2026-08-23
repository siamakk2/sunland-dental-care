import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "crown-or-filling-after-root-canal");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Do I need a crown after a root canal?",
   "For back teeth — molars and premolars — a crown is usually recommended, because these teeth absorb heavy chewing force and become more prone to fracture after treatment. Some front teeth with conservative access and intact structure can be restored with a filling instead."],
  ["What happens if I skip the crown on a back tooth?",
   "The risk is fracture, sometimes a vertical root fracture that can't be repaired — meaning the tooth is lost despite a successful root canal. Skipping the crown is one of the most expensive savings in dentistry, because it can turn a treated tooth into an extraction and an implant."],
  ["Why do root-canalled teeth break more easily?",
   "Partly the treatment access, which removes structure from the middle of the tooth, and partly the prior decay or cracks that made the root canal necessary. Together these leave thinner walls with less resistance to the flexing that chewing causes."],
  ["How soon after a root canal should the crown be placed?",
   "Generally within a few weeks. A temporary filling isn't a durable seal, and leakage around it can reinfect the canals — one of the most common causes of root canal failure. Delaying the crown risks both fracture and reinfection."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: back teeth almost always need a crown after root canal treatment; some front teeth don't.</strong> The reason is mechanical — molars and premolars absorb the heaviest chewing forces, and a treated tooth without cusp coverage is a fracture waiting to happen.</p>

      <h2>Why the tooth is more fragile afterward</h2>
      <p>Two things weaken it, and only one is the treatment. First, whatever made the root canal necessary — deep decay, a large old filling, a crack — had already removed or compromised structure. Second, accessing the canals requires an opening through the middle of the tooth. Combined, the walls are thinner and flex more under load, and repeated flexing is how cracks propagate.</p>
      <p>The old explanation that root-treated teeth become "brittle" from drying out has largely been set aside. The dominant factor is simply how much sound tooth structure is left.</p>

      <h2>Back teeth: crown</h2>
      <p>Molars and premolars carry the bulk of chewing force, and they do it with cusps that act like wedges under load — precisely the geometry that splits a weakened tooth. A crown holds the cusps together and distributes force across the whole tooth. Root-treated back teeth restored with crowns survive markedly longer than those left with fillings alone; this is one of the better-supported recommendations in restorative dentistry.</p>
      <p>The failure mode to avoid is a <strong>vertical root fracture</strong>. Unlike decay or reinfection, it can't be repaired — the tooth comes out, and now you're weighing an <Link href="/dental-implants">implant</Link> after already paying for a root canal.</p>

      <h2>Front teeth: sometimes a filling is enough</h2>
      <p>Incisors and canines take shearing rather than crushing force and have simpler anatomy, so access is often conservative. If most of the natural tooth is intact, a well-placed bonded filling can serve well and preserves more of your own tooth — which is always preferable when it's genuinely sufficient. If the tooth is heavily restored, discolored, or structurally compromised, a crown becomes the better answer.</p>

      <h2>Don't wait on it</h2>
      <p>The temporary filling placed after treatment is exactly that. It isn't a durable seal, and leakage around it lets bacteria back into the canals — a leading cause of <Link href="/blog/can-a-root-canal-fail">root canal failure</Link>. Get the permanent restoration placed within the timeframe your dentist gives you, usually a few weeks.</p>

      <h2>The honest cost conversation</h2>
      <p>A crown adds meaningful cost right after you've already paid for the root canal, and it's tempting to defer. Consider what deferring risks: a fractured tooth means extraction plus replacement, several times the crown's price. If budget is the obstacle, say so — sequencing and payment arrangements exist, and that conversation is far better than a cracked molar. See <Link href="/insurance-financing">insurance and payment options</Link>.</p>
      <p>At <Link href="/root-canals">Sunland Dental Care</Link>, <Link href="/dr-emami">Dr. Emami</Link> performs both the root canal and the restoration, so the timing and the seal are handled by one person — no gap between offices where a temporary sits too long.</p>
    </BlogPost>
  );
}
