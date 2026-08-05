import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS[2];
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Can a dental implant get a cavity?",
   "No — titanium and porcelain don't decay. But the gum and bone around an implant can absolutely get infected (peri-implantitis), which is why hygiene visits still matter as much as ever."],
  ["Will I ever need to replace the crown?",
   "Possibly. The implant post routinely lasts a lifetime; the crown on top lives a harder life of chewing and can need replacement after 10–15 years, a straightforward procedure that doesn't disturb the implant."],
  ["Do implants fail more in smokers?",
   "Yes, meaningfully — smoking impairs the blood supply that healing and gum health depend on. Smokers can still get implants, but honest counseling about the elevated risk is part of a real consultation."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: a well-placed dental implant routinely lasts decades — often the rest of your life.</strong> Implant dentistry has over sixty years of tracked cases behind it, and long-term success rates run north of 90–95%. But that number hides the useful truth: <em>when implants fail, it's almost never the implant.</em></p>
      <h2>The titanium isn't the weak point</h2>
      <p>Titanium fuses with living bone — the process is called osseointegration — and once fused, the post is mechanically part of your jaw. It doesn't rust, decay, or wear out. What determines an implant's lifespan is everything around it: the gums, the bone, and the bite.</p>
      <h2>What actually kills implants</h2>
      <ul>
        <li><strong>Gum infection (peri-implantitis).</strong> The same bacteria behind gum disease can inflame and dissolve the bone holding an implant. This is the #1 cause of late failure — and it's preventable with hygiene care.</li>
        <li><strong>Poor initial placement.</strong> An implant at the wrong angle or depth loads bone unevenly for years. This is why 3D-guided planning matters more than any brand of implant.</li>
        <li><strong>An unbalanced bite.</strong> Grinding and misaligned force fatigue the crown and stress the bone. A proper restoration is engineered for your bite, not just glued on.</li>
      </ul>
      <h2>The gums-first connection</h2>
      <p>This is why <Link href="/dr-emami">Dr. Emami's</Link> gums-first philosophy isn't a slogan — it's implant insurance. Every implant at <Link href="/dental-implants">Sunland Dental Care</Link> is built on a foundation of periodontal health, placed with 3D guidance, and maintained with hygiene visits designed around keeping it for life. Your implant should be the last tooth you ever have to think about.</p>
    </BlogPost>
  );
}
