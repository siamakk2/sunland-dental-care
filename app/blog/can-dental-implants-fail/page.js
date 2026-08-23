import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "can-dental-implants-fail");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is it true that a dental implant might fail?",
   "Yes, it's possible — implants are among the more predictable procedures in dentistry, with long-term success commonly reported above 90–95%, but no medical procedure succeeds every time. Most failures trace to identifiable causes: smoking, uncontrolled diabetes, untreated gum infection, grinding, or placement into inadequate bone."],
  ["What's the difference between early and late implant failure?",
   "Early failure happens in the first months, when the implant never fully integrates with bone — often related to healing conditions, infection at placement, or loading it too soon. Late failure happens years later and is usually peri-implantitis, gum and bone infection around an implant that had integrated perfectly well."],
  ["What are the warning signs of a failing implant?",
   "Looseness or any movement, persistent pain or tenderness around it, gums that bleed or swell at the implant, visible recession exposing metal, or difficulty chewing on that side. Any of these deserve prompt evaluation — early intervention sometimes saves the implant."],
  ["What happens if an implant fails?",
   "It's usually removed, the site is allowed to heal, and in many cases a new implant can be placed later — sometimes with bone grafting first. Failure is rarely the end of the road; it's a setback that adds time and cost."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: yes, implants can fail — but long-term success rates are commonly reported above 90–95%, and the majority of failures trace back to a short list of identifiable, largely manageable causes.</strong> This is a question patients ask Dr. Emami often, and the honest answer is more reassuring than a promise of perfection would be.</p>

      <h2>Two very different kinds of failure</h2>
      <h3>Early failure: the implant never integrates</h3>
      <p>In the first weeks and months, bone must grow onto the titanium surface — osseointegration. When that doesn't happen, the implant stays loose and has to be removed. Causes include infection at the surgical site, insufficient initial stability in soft bone, loading the implant too heavily too soon, smoking, or poorly controlled diabetes impairing healing. Early failure is uncommon and usually apparent within a few months.</p>
      <h3>Late failure: the implant integrated, then the environment turned</h3>
      <p>Years later, an implant that fused perfectly can be lost to <strong>peri-implantitis</strong> — infection of the gum and bone surrounding it. This is by far the more common category, and it's the same bacterial process behind <Link href="/blog/bleeding-gums-what-it-means">gum disease</Link>. Implants are actually more vulnerable than natural teeth here, because they lack the periodontal ligament that gives a real tooth some defense.</p>

      <h2>The risk factors that genuinely matter</h2>
      <ul>
        <li><strong>Smoking.</strong> The single largest modifiable risk — it restricts the blood supply healing and gum health depend on.</li>
        <li><strong>Untreated gum disease.</strong> Placing an implant into an infected mouth means placing it into the environment that causes late failure. This is why <Link href="/periodontal-treatment">periodontal treatment comes first</Link>.</li>
        <li><strong>Uncontrolled diabetes.</strong> Well-managed diabetes is generally fine; poorly controlled blood sugar impairs healing meaningfully.</li>
        <li><strong>Grinding and clenching.</strong> Excess force fatigues components and stresses bone — see <Link href="/blog/night-guard-after-dental-implant">why a night guard is often recommended after implant treatment</Link>.</li>
        <li><strong>Poor placement.</strong> An implant at the wrong angle or depth loads bone unevenly for years, which is precisely why 3D-guided planning matters more than implant brand.</li>
        <li><strong>Skipped maintenance.</strong> Implants don't decay, so patients sometimes assume they need less attention. The opposite is true of the gums around them.</li>
      </ul>

      <h2>How the risk is lowered before surgery</h2>
      <p>At <Link href="/dental-implants">Sunland Dental Care</Link>, every case is planned in 3D before any incision, so position, angle, and depth are decided digitally rather than discovered mid-surgery. Gum health is treated first. Bite forces are evaluated. And because <Link href="/dr-emami">Dr. Emami</Link> performs the planning, the placement, and the restoration herself, nothing is lost in a handoff between offices — one person is accountable for the whole timeline, including the maintenance years afterward.</p>

      <h2>What to do if you suspect a problem</h2>
      <p>Movement, pain, or bleeding around an implant is never something to wait out. Caught early, peri-implantitis can sometimes be treated and the implant saved. Left alone, the bone loss becomes irreversible. Read <Link href="/blog/how-long-do-dental-implants-last">what makes implants last decades</Link> — the protective habits are the same ones that prevent failure.</p>
    </BlogPost>
  );
}
