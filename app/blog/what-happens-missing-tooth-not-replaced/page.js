import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "what-happens-missing-tooth-not-replaced");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is it okay to leave a missing tooth alone?",
   "For a back molar that nobody sees, many people do — but it isn't consequence-free. Bone recedes where the root used to be, the opposing tooth drifts down, and neighboring teeth tip into the gap, which changes your bite over years rather than days."],
  ["How fast does jawbone shrink after losing a tooth?",
   "Bone loss is fastest in the first year after extraction and continues more slowly afterward. This is why replacing a tooth sooner is generally simpler and cheaper than replacing it later, when grafting may be needed."],
  ["Do I need to replace a wisdom tooth?",
   "Usually not. Wisdom teeth sit at the end of the arch with nothing behind them to drift, so their absence rarely destabilizes the bite. Every other tooth is a different conversation."],
  ["What's the best way to replace one missing tooth?",
   "An implant replaces the root as well as the crown, so it preserves bone and doesn't involve the neighboring teeth. A bridge is faster but requires grinding down the teeth on either side. A partial denture is least expensive and least stable. The right answer depends on your bone, your neighbors, and your budget over ten years."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: a missing tooth doesn't stay one problem. Bone recedes where the root was, the tooth above drifts down into the space, and the teeth beside it tip inward — quietly changing your bite over several years.</strong> The gap you see is the least significant part of it.</p>

      <h2>The four things that happen next</h2>
      <ol>
        <li><strong>The bone starts disappearing.</strong> Jawbone exists to hold teeth; remove the root and the body reclaims the bone, fastest in the first year. This is why the same implant becomes more complex — and more expensive — the longer you wait.</li>
        <li><strong>The opposing tooth erupts further.</strong> Teeth continue moving toward whatever is opposite them. With no partner to meet, the tooth above or below gradually drifts into the gap, eventually becoming loose or unrestorable itself.</li>
        <li><strong>Neighboring teeth tip.</strong> The teeth on either side lean into the space, creating angles that trap food and plaque where a brush can't reach — a reliable path to decay and <Link href="/blog/bleeding-gums-what-it-means">gum disease</Link> in teeth that were previously healthy.</li>
        <li><strong>Your bite redistributes.</strong> Chewing force that the missing tooth used to carry loads onto others, accelerating wear, cracks, and sometimes jaw joint discomfort.</li>
      </ol>

      <h2>The cost of waiting, in plain terms</h2>
      <p>A tooth replaced within the first year is usually a straightforward <Link href="/dental-implants">implant</Link> into adequate bone. The same tooth replaced eight years later may require <Link href="/blog/not-enough-bone-for-implants">bone grafting</Link> first, plus orthodontic movement to reopen space the neighbors have closed, plus treatment of whatever decay collected in the tipped contacts. The delay doesn't save money; it defers and multiplies it.</p>

      <h2>The honest exceptions</h2>
      <p>Wisdom teeth generally need no replacement. A single missing back molar with a stable bite and good hygiene can sometimes be monitored rather than replaced, particularly for older patients where the calculation differs. Any dentist who tells you every gap is an emergency is overselling — but every gap does deserve an evaluation and an explicit decision, rather than drift.</p>

      <h2>What to do now</h2>
      <p>Get the site imaged and find out what bone you still have. That single piece of information determines whether your options are wide open or narrowing, and it's the difference between choosing a plan and being handed one. Compare <Link href="/blog/implants-vs-dentures-vs-bridges">implants, bridges, and dentures honestly</Link>, or <Link href="/contact">book a consultation</Link> — at Sunland Dental Care, 3D imaging and an exact written quote come before any decision.</p>
    </BlogPost>
  );
}
