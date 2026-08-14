import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "teeth-sensitive-to-cold");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Why did my teeth suddenly become sensitive to cold?",
   "Sudden cold sensitivity usually means dentin — the porous layer beneath enamel — has become exposed, through gum recession, enamel wear, a crack, or a failing filling. Dentin contains microscopic tubules leading to the nerve, so cold reaches it directly."],
  ["Does sensitivity mean I have a cavity?",
   "Not necessarily. Brief sensitivity that stops within seconds is often recession or wear. Sensitivity that lingers 30 seconds or more after the cold is gone points to nerve inflammation, which more often does mean decay or a crack."],
  ["Does sensitive toothpaste actually work?",
   "For genuine dentin sensitivity, yes — potassium nitrate formulas calm nerve response over about two to four weeks of consistent use. But they mask symptoms rather than fix causes, so if it's a cavity or crack underneath, you're only delaying the diagnosis."],
  ["When should I see a dentist about sensitivity?",
   "If it lingers after the trigger, wakes you at night, is limited to one specific tooth, hurts when you bite, or appeared suddenly in a tooth that was previously fine. Those patterns suggest something structural rather than general wear."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: how long the pain lasts tells you what's wrong. A zing that disappears within a few seconds is usually exposed dentin from gum recession or enamel wear. Pain that lingers 30 seconds or longer suggests the nerve is inflamed — decay, a crack, or a failing filling.</strong></p>

      <h2>What sensitivity actually is</h2>
      <p>Under your enamel sits dentin, threaded with microscopic tubules that run toward the nerve. Enamel and gum tissue normally seal those tubules off. When either is lost, cold, sweet, and air reach the tubules directly and the nerve reports it — instantly and sharply.</p>

      <h2>The five usual causes</h2>
      <ul>
        <li><strong>Gum recession.</strong> Roots have no enamel at all, so exposed root surface is sensitive by nature. See <Link href="/blog/why-are-my-gums-receding">why gums recede</Link>.</li>
        <li><strong>Enamel wear</strong> from grinding, acidic drinks, or aggressive brushing with a hard brush.</li>
        <li><strong>A cracked tooth.</strong> Classic sign: sharp pain on <em>releasing</em> a bite, plus cold sensitivity in one specific tooth.</li>
        <li><strong>A failing or leaking filling,</strong> letting temperature and bacteria beneath the restoration.</li>
        <li><strong>Decay</strong> reaching dentin — often the cause when sensitivity is new, localized, and worsening.</li>
      </ul>

      <h2>The timing test you can do at home</h2>
      <p>Sip something cold and count. <strong>Under ten seconds and gone:</strong> most likely dentin exposure — manageable, worth mentioning at your next visit. <strong>Lingering past 30 seconds:</strong> the nerve is inflamed; book an appointment this week. <strong>Spontaneous pain with no trigger, or pain that wakes you:</strong> that's <Link href="/root-canals">root canal territory</Link> and shouldn't wait.</p>

      <h2>What helps while you wait</h2>
      <ol>
        <li>Switch to a <strong>soft-bristled brush</strong> and stop scrubbing — pressure causes recession rather than cleaning better.</li>
        <li>Use a <strong>sensitivity toothpaste</strong> consistently for at least two weeks; results build gradually.</li>
        <li>Cut back on acidic drinks, and rinse with water rather than brushing immediately after them — enamel is temporarily softened.</li>
        <li>If you suspect <Link href="/blog/wake-up-with-jaw-pain">grinding</Link>, mention it; a night guard protects what's left.</li>
      </ol>

      <h2>What a dentist looks for</h2>
      <p>An exam distinguishes causes quickly: cold testing individual teeth, checking bite contacts, transillumination for cracks, and X-rays for decay under existing fillings. Caught early, most of these are small fixes. Ignored, sensitivity is often how a tooth announces a problem months before it becomes urgent.</p>
      <p>Sensitivity that's new, localized, or lingering deserves an exam — <Link href="/contact">book one</Link>, or read <Link href="/blog/why-does-my-tooth-hurt">how to decode other kinds of tooth pain</Link>.</p>
    </BlogPost>
  );
}
