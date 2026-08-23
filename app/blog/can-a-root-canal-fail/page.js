import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "can-a-root-canal-fail");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Can a root canal fail years later?",
   "Yes. Root canal treatment has high success rates, but a treated tooth can reinfect years afterward — commonly from a canal that couldn't be fully cleaned, a new crack, decay leaking around the restoration, or a crown that was never placed on a back tooth."],
  ["What are the signs of a failed root canal?",
   "Returning pain or tenderness when biting, swelling or a pimple-like bump on the gum near the tooth, the tooth darkening, or a bad taste. Some failures are silent and only appear on an X-ray as a shadow at the root tip, which is one reason routine X-rays matter."],
  ["Can a failed root canal be retreated?",
   "Often yes. Retreatment reopens the tooth, removes the previous filling material, cleans and disinfects the canals again, and reseals them. Where retreatment isn't feasible, an apicoectomy — removing the root tip surgically — is sometimes an option before extraction is considered."],
  ["Is it better to retreat or extract and place an implant?",
   "It depends on how much sound tooth structure remains, whether there's a crack, and the bone around the root. A savable natural tooth is usually worth saving. A tooth with a vertical root fracture or too little structure left is not, and an implant becomes the better long-term investment."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: yes, root canals can fail — though the large majority succeed and many treated teeth last a lifetime.</strong> When failure happens it's usually years later, and there's almost always a specific, identifiable reason. Knowing them tells you how to protect the tooth you've already paid to save.</p>

      <h2>Why a treated tooth can reinfect</h2>
      <ul>
        <li><strong>Complex canal anatomy.</strong> Roots aren't simple tubes — they branch, curve, and sometimes contain accessory canals that are difficult to find and clean. Bacteria surviving in an untreated branch can multiply later.</li>
        <li><strong>Coronal leakage.</strong> The most preventable cause. If the filling or crown sealing the tooth leaks, bacteria travel back down into the canals. A perfectly performed root canal fails if the seal above it doesn't hold.</li>
        <li><strong>No crown on a back tooth.</strong> Root-treated molars are more brittle and take enormous chewing force. Without cusp coverage, they fracture — see <Link href="/blog/crown-or-filling-after-root-canal">crown or filling after a root canal</Link>.</li>
        <li><strong>New decay</strong> at the margin, letting bacteria in around the restoration.</li>
        <li><strong>A vertical root fracture,</strong> which is the one cause that generally can't be repaired.</li>
      </ul>

      <h2>The warning signs</h2>
      <p>Pain or tenderness on biting that returns after months or years. Swelling, or a small pimple-like bump on the gum that may drain and recur. The tooth darkening. A persistent bad taste. And sometimes nothing at all — some failures are silent and show only as a shadow at the root tip on a routine X-ray, which is a good argument for keeping up with regular exams.</p>

      <h2>What can be done</h2>
      <h3>Retreatment</h3>
      <p>The tooth is reopened, the old filling material removed, the canals cleaned and disinfected again with the benefit of modern magnification and imaging, and resealed. Many retreated teeth go on to serve for decades.</p>
      <h3>Apicoectomy</h3>
      <p>When retreatment isn't practical — a post that can't safely be removed, for instance — the root tip and surrounding infected tissue can be removed surgically through the gum, and the root end sealed.</p>
      <h3>Extraction and replacement</h3>
      <p>When the tooth is cracked vertically or too little sound structure remains, saving it isn't the right investment. Then the conversation becomes <Link href="/dental-implants">implant</Link>, bridge, or partial — and <Link href="/blog/what-happens-missing-tooth-not-replaced">acting reasonably promptly matters</Link>, because bone recedes at the site once the tooth is out.</p>

      <h2>The honest framing</h2>
      <p>A failed root canal is disappointing, not a scandal. Biology is variable and roots are complicated. What matters is catching it early, understanding why it happened, and making a clear-eyed decision about whether this tooth is worth another investment. At <Link href="/root-canals">Sunland Dental Care</Link>, <Link href="/dr-emami">Dr. Emami</Link> will tell you honestly which category yours falls into — including when extraction is the smarter choice.</p>
    </BlogPost>
  );
}
