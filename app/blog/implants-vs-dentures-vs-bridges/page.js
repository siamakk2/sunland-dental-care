import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS[3];
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Which option is cheapest over 20 years?",
   "Usually the implant, surprisingly. A bridge often needs replacement every 10–15 years (and risks its anchor teeth); dentures need relines and remakes as the jaw changes. An implant done once, kept healthy, is done."],
  ["Can I start with a denture and switch to implants later?",
   "Yes, and many patients do — though waiting has a cost: the jawbone shrinks where teeth are missing, which can mean bone grafting later. If implants are the eventual goal, earlier placement preserves the bone you'll need."],
  ["Does a bridge damage the teeth next to the gap?",
   "It requires grinding them down for crowns, yes — healthy enamel is sacrificed to anchor the bridge. That's the quiet cost of bridges, and the main reason a conservative dentist often prefers an implant that leaves neighbors untouched."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: implants preserve bone and neighboring teeth and last longest; bridges are faster and cheaper up front but sacrifice the anchor teeth; dentures cost least initially but trade away stability and bone over time.</strong> Each one is genuinely right for somebody. Here's the honest sorting, from a dentist who provides all three.</p>
      <h2>Dental implants: the biological replacement</h2>
      <p>An <Link href="/dental-implants">implant</Link> replaces the root, not just the visible tooth — which is why it's the only option that stops the jawbone from shrinking where the tooth was lost. Nothing is done to neighboring teeth, chewing power is essentially natural, and a well-kept implant lasts decades. The trade-offs: it's surgery (a gentler one than its reputation), it takes months start to finish, and it costs the most up front — though at a fixed $2,000 complete here, far less than the LA norm.</p>
      <h2>Bridges: fast, fixed, and borrowed</h2>
      <p>A bridge spans the gap using crowns on the teeth beside it. It's non-surgical, quick, and looks great — but those anchor teeth must be ground down to accept crowns, and they now carry three teeth's workload. When a bridge fails at year 12, it often takes an anchor tooth with it. Bridges shine when the neighboring teeth already need crowns anyway.</p>
      <h2>Dentures: honest workhorses</h2>
      <p><Link href="/dentures">Dentures</Link> replace many teeth affordably and non-surgically, and a well-made one restores a natural smile. The costs come later: bone slowly shrinks under a denture, fits loosen, chewing power is a fraction of natural, and relines become routine. The modern middle path — an implant-supported denture that snaps onto two to four implants — fixes the stability problem at a fraction of full-arch cost.</p>
      <h2>How to actually choose</h2>
      <p>Count three things: how many teeth are missing, the health of the neighbors, and your honest budget across ten years, not one. Then get an exam where all three options are on the table from the same doctor — which is exactly how a <Link href="/new-patients">consultation here</Link> works. The right answer tends to be obvious once your specific mouth is in front of it.</p>
    </BlogPost>
  );
}
