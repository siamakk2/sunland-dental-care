import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "dental-implant-brands-does-it-matter");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Does the brand of dental implant really matter?",
   "On the day of surgery, less than most people think — placement accuracy and gum health matter more. Ten years later it matters a great deal, because that's when a part may need replacing and you need a system any dentist can identify and source components for."],
  ["What should I ask my dentist about the implant they're using?",
   "Ask for the manufacturer and model in writing, and ask for an implant card or documentation for your records. A dentist who places implants routinely will provide both without hesitation."],
  ["Are expensive implant brands better?",
   "They're better documented. Established systems have decades of published clinical data, worldwide parts availability, and predictable components. That isn't the same as a newer or cheaper implant being unsafe — it means the long-term evidence and the repair path are stronger."],
  ["What happens if my implant's parts are discontinued?",
   "Replacing a damaged abutment or screw becomes difficult, and in the worst case the entire implant may need removal and replacement — a far larger procedure than a simple component swap. This is the practical reason brand continuity matters."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: the implant brand barely affects how surgery day goes — and it heavily affects what happens in year twelve, when a component needs replacing and someone has to find a part that fits.</strong> That's the honest case for caring about it.</p>

      <h2>What actually determines whether an implant succeeds</h2>
      <p>In order of impact: the health of your gums and bone, the accuracy of placement, the design of the bite loading it, and your ongoing hygiene. A well-placed mid-tier implant in a healthy mouth outperforms a premium implant placed badly, every time. Anyone selling you on brand alone has the priorities backwards — read <Link href="/blog/how-long-do-dental-implants-last">what actually makes implants fail</Link>.</p>

      <h2>Where brand genuinely matters</h2>
      <ul>
        <li><strong>Parts availability, a decade out.</strong> Crowns and abutments are the wearing components. If your system is well established, any dentist can order the matching part. If it was an unbranded fixture from a supplier that no longer exists, a simple repair becomes a removal.</li>
        <li><strong>Documented clinical history.</strong> The major systems have decades of published survival data. Newer entrants may be perfectly good — they simply haven't been observed for as long.</li>
        <li><strong>Portability.</strong> You may move, or your dentist may retire. A documented system travels with you; an anonymous one doesn't.</li>
      </ul>

      <h2>The paperwork to ask for</h2>
      <p>Request the manufacturer, the model, and the size of the fixture placed, in writing, for your own records. Reputable practices provide an implant card as a matter of course. Keep it with your medical documents — it's the thing a future dentist will need most, and it costs nothing to obtain today.</p>

      <h2>The question behind the question</h2>
      <p>Patients usually ask about brand when what they really want to know is: <em>am I being cut corners on?</em> That's a fair concern, and the better way to answer it is by asking what a quote includes and who performs each stage — see <Link href="/blog/cheap-dental-implant-ads-truth">how implant pricing really works</Link>. A complete, itemized, written quote from a dentist who places implants regularly tells you more about quality than any brand name.</p>
      <p>At <Link href="/dental-implants">Sunland Dental Care</Link>, <Link href="/dr-emami">Dr. Emami</Link> has placed thousands of implants over 40 years and will tell you exactly what she's using and why. Ask at your consultation — it's a good question, and good dentists enjoy answering it.</p>
    </BlogPost>
  );
}
