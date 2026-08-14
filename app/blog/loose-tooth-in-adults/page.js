import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "loose-tooth-in-adults");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is a loose tooth in an adult always serious?",
   "It always warrants prompt evaluation. Adult teeth are held by bone and periodontal ligament, and mobility means one of those has been compromised — usually by gum disease, trauma, grinding, or infection. Some loose teeth are saveable; the odds fall the longer it's left."],
  ["Can a loose adult tooth tighten back up?",
   "Sometimes. If the cause is inflammation from gum infection or a bite that's overloading the tooth, treating the infection or adjusting the bite can allow the ligament to recover and the tooth to firm up. If supporting bone is already lost, that bone doesn't return."],
  ["Should I wiggle it to check?",
   "No. Repeated movement further damages the attachment and can turn a saveable tooth into a lost one. Chew on the other side and get it examined."],
  ["What happens if the tooth can't be saved?",
   "Extraction, followed by a plan to replace it — an implant, bridge, or partial. Replacing sooner is generally simpler, because bone begins receding at the site immediately after a tooth is lost."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: adults don't get loose teeth normally. Any mobility means the bone or ligament holding that tooth has been compromised — and how quickly you act often determines whether the tooth is saved or lost.</strong> Book an exam this week, and in the meantime, don't test it by wiggling.</p>

      <h2>What holds a tooth in, and what lets go</h2>
      <p>A tooth isn't fused to bone. It's suspended by the periodontal ligament — a thin, fibrous sling that anchors root to socket and allows microscopic movement while you chew. Looseness means either that ligament is inflamed, or the bone around it has been lost. Those two possibilities have very different prognoses, which is exactly why an exam and X-ray matter.</p>

      <h2>The four common causes</h2>
      <ul>
        <li><strong>Periodontal disease.</strong> The most common cause in adults. Infection destroys bone around the root, painlessly, over years. If your gums bleed or you have <Link href="/blog/bad-breath-wont-go-away">persistent bad breath</Link>, this is the likely culprit — see <Link href="/periodontal-treatment">periodontal treatment</Link>.</li>
        <li><strong>Trauma.</strong> A blow to the mouth can stretch or tear the ligament. Sometimes it heals with time and a soft diet; sometimes it needs splinting.</li>
        <li><strong>Grinding or a bite problem.</strong> A tooth taking more force than its neighbors can loosen from overload alone — often reversible once the bite is adjusted. See <Link href="/blog/wake-up-with-jaw-pain">signs of grinding</Link>.</li>
        <li><strong>Infection at the root tip.</strong> An abscess destroys bone locally and can loosen an otherwise healthy tooth. Usually painful, sometimes with swelling or a gum pimple.</li>
      </ul>

      <h2>How urgent is it?</h2>
      <p><strong>Same day:</strong> mobility with swelling, fever, or severe pain — that's infection. <strong>Same day:</strong> mobility following an injury. <strong>This week:</strong> gradual looseness with no pain, which usually means gum disease that has been progressing quietly for a long time. In every version, waiting reduces the options.</p>

      <h2>What treatment looks like</h2>
      <p>If infection is the cause, treating it — deep cleaning, periodontal therapy, or <Link href="/root-canals">root canal treatment</Link> — often lets the tooth firm up as inflammation resolves. Overloaded teeth can be relieved by bite adjustment. Traumatized teeth may be splinted to their neighbors while the ligament heals. Where too much bone is gone, the honest answer is extraction and a plan to <Link href="/blog/what-happens-missing-tooth-not-replaced">replace the tooth before the site deteriorates further</Link>.</p>
      <p>Whatever the cause, it isn't something to monitor at home. <Link href="/contact">Get it looked at</Link>.</p>
    </BlogPost>
  );
}
