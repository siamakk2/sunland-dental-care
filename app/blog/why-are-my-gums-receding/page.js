import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "why-are-my-gums-receding");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Can receding gums grow back?",
   "Gum tissue does not regenerate on its own once it has receded. Recession can be stopped, and lost coverage can be restored surgically with a gum graft, but no toothpaste, rinse, or technique regrows it naturally."],
  ["Does brushing too hard cause gum recession?",
   "It's one of the most common causes. Hard bristles plus heavy pressure abrade both gum tissue and the root surface beneath. Softer brush, lighter pressure, and gentle circles protect far better than scrubbing."],
  ["Is gum recession always caused by gum disease?",
   "No. Aggressive brushing, grinding, orthodontic movement, thin genetic gum tissue, and tobacco all cause recession without periodontal infection. But gum disease is a major cause, so an exam is what distinguishes them."],
  ["When does recession need a gum graft?",
   "When the exposed root causes persistent sensitivity, when recession is progressing despite improved technique, when there's too little attached tissue left to protect the tooth, or when the appearance bothers you enough to treat."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: gums recede from a mix of infection, mechanical trauma, and genetics — and once they've receded, they don't grow back on their own.</strong> The honest goals are stopping the progression and, where it matters, restoring coverage surgically. Both work well. Neither happens from a toothpaste.</p>

      <h2>Why it matters beyond appearance</h2>
      <p>Roots have no enamel. When gum tissue withdraws and exposes them, you get sensitivity to cold and brushing, a surface far more vulnerable to decay than enamel is, and — as recession continues — less support holding the tooth. "Long in the tooth" describes something real.</p>

      <h2>The causes, in rough order of frequency</h2>
      <ul>
        <li><strong>Brushing too hard.</strong> Counterintuitive but extremely common. Hard bristles and heavy pressure wear tissue away over years. Recession that's worse on the side you hold the brush is a giveaway.</li>
        <li><strong>Periodontal disease.</strong> Infection destroys the attachment and the bone beneath it. Often accompanied by bleeding — see <Link href="/blog/bleeding-gums-what-it-means">what bleeding gums mean</Link>.</li>
        <li><strong>Grinding and clenching.</strong> Excess force flexes teeth at the gumline and contributes to both recession and notching. See <Link href="/blog/wake-up-with-jaw-pain">signs of grinding</Link>.</li>
        <li><strong>Thin gum biotype.</strong> Some people simply have thinner tissue genetically and are more prone regardless of technique.</li>
        <li><strong>Orthodontic movement</strong> that has taken a tooth beyond its bony envelope.</li>
        <li><strong>Tobacco,</strong> which impairs the blood supply gum tissue depends on.</li>
      </ul>

      <h2>What actually stops it</h2>
      <ol>
        <li><strong>Change the brushing.</strong> Soft bristles only, light pressure, gentle circles rather than sawing. An electric brush with a pressure sensor removes the guesswork.</li>
        <li><strong>Treat any gum infection.</strong> If periodontal disease is driving it, nothing else will hold — see <Link href="/periodontal-treatment">periodontal therapy</Link>.</li>
        <li><strong>Protect against grinding</strong> with a night guard if that's a contributor.</li>
        <li><strong>Monitor with measurements.</strong> Recession is gradual; recorded numbers at each visit show whether your changes are working or the problem is progressing.</li>
      </ol>

      <h2>When grafting makes sense</h2>
      <p>A gum graft places tissue over the exposed root to restore coverage, reduce sensitivity, and protect the tooth long term. It's a well-established procedure, done under local anesthesia, and at <Link href="/periodontal-treatment">Sunland Dental Care</Link> it's performed in-house by Dr. Emami rather than referred out. It isn't necessary for every case of recession — a conservative practice will tell you when watching is the better plan.</p>
      <p>If your gums look different than they did a few years ago, <Link href="/contact">have it measured</Link>. Stopping recession is far easier than restoring it.</p>
    </BlogPost>
  );
}
