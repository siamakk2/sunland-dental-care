import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "tooth-extraction-healing-time");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["How long does it take to heal after a tooth extraction?",
   "The gum surface typically closes within one to two weeks, and most people feel normal within three to five days. The bone underneath continues remodeling for several months, which is why implant timing is planned around it rather than the visible healing."],
  ["What is dry socket and how do I know if I have it?",
   "Dry socket occurs when the protective blood clot is dislodged, exposing bone. The signature is pain that improves for two or three days and then sharply worsens, often radiating to the ear, sometimes with a bad taste. It needs a dentist visit — it's treatable and relief is usually quick."],
  ["When can I eat normally after an extraction?",
   "Soft foods for the first day or two, then progress as comfort allows. Avoid chewing on the extraction side for about a week, and skip anything sharp, crunchy, or with small seeds that can lodge in the socket."],
  ["Why can't I use a straw after an extraction?",
   "Suction can dislodge the blood clot protecting the socket, which is the direct cause of dry socket. Avoid straws, smoking, and vigorous spitting for at least the first 48 to 72 hours."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: most people feel substantially better within three to five days, the gum closes over in one to two weeks, and the bone underneath keeps remodeling for months.</strong> What you do in the first 24 hours largely determines which of those weeks is comfortable and which isn't.</p>

      <h2>The timeline, day by day</h2>
      <ul>
        <li><strong>First 24 hours.</strong> A blood clot forms — this is the entire foundation of healing. Bite gently on gauze as instructed, keep your head elevated, use cold compresses on the outside of the cheek in 20-minute intervals, and rest. No rinsing, no straws, no smoking, no spitting.</li>
        <li><strong>Days 2–3.</strong> Swelling usually peaks then begins easing. Start gentle warm salt-water rinses (a swish and let it fall out, don't spit forcefully). Soft foods. This is also when dry socket announces itself if it's going to.</li>
        <li><strong>Days 4–7.</strong> Discomfort fades noticeably. Most people are back to normal routines, still chewing on the other side.</li>
        <li><strong>Weeks 2–3.</strong> Gum tissue closes over the socket. Any stitches either dissolve or come out.</li>
        <li><strong>Months 1–6.</strong> Bone fills and remodels beneath the surface — invisible, and the reason implant timing is planned around it. See <Link href="/blog/what-happens-missing-tooth-not-replaced">why replacement timing matters</Link>.</li>
      </ul>

      <h2>Dry socket: the complication to know about</h2>
      <p>It happens when the clot is lost and bone is exposed to the mouth. The tell is unmistakable in hindsight: you were improving, then around day three the pain sharply worsened, often radiating toward the ear, sometimes with a foul taste. It is genuinely painful — and also straightforward to treat. A dentist cleans and medicates the socket, and relief usually arrives quickly. Call rather than enduring it.</p>
      <p>Prevention is simple: no suction (straws, smoking, vigorous rinsing) for the first two to three days.</p>

      <h2>When to call regardless</h2>
      <ul>
        <li>Bleeding that hasn't slowed after several hours of firm gauze pressure</li>
        <li>Pain that worsens after day three rather than improving</li>
        <li>Swelling that increases after day three, fever, or difficulty swallowing</li>
        <li>Numbness that persists well beyond the expected anesthetic duration</li>
      </ul>

      <h2>Thinking ahead about the gap</h2>
      <p>Before the extraction, ask what comes next. Bone begins receding at the site immediately, so knowing whether you're heading toward an <Link href="/dental-implants">implant</Link>, a <Link href="/dentures">denture</Link>, or a bridge changes what's ideal — sometimes a graft placed at the time of extraction preserves bone for a future implant, which is far simpler than rebuilding it later.</p>
      <p>Questions about an upcoming or recent extraction? <Link href="/contact">Call the office</Link> — this is exactly what the phone is for.</p>
    </BlogPost>
  );
}
