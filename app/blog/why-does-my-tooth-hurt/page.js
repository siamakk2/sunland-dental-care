import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS[4];
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["My toothache went away on its own. Am I in the clear?",
   "Be careful with this one — when an infected nerve dies, the pain stops but the infection continues silently into the bone. A toothache that vanished deserves an exam just as much as one that didn't."],
  ["What can I take for tooth pain right now?",
   "Over-the-counter ibuprofen (if you can take it) works well for dental pain, and a warm salt-water rinse soothes tissue. Never place aspirin against the gum — it chemically burns tissue. Then call, because painkillers treat the message, not the cause."],
  ["When is tooth pain an emergency?",
   "Facial swelling, fever with dental pain, pain that keeps you from sleeping, or trauma with a broken/loose tooth — call the same day. Swelling that affects breathing or swallowing means the emergency room first."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: the type of pain tells you the cause.</strong> Cold sensitivity that fades is usually minor; heat sensitivity and spontaneous throbbing usually mean the nerve; pain on biting suggests a crack or high spot; swelling means infection — and a same-day call. Here's how to read what your tooth is saying.</p>
      <h2>1. A zing with cold or sweets, gone in seconds</h2>
      <p>Usually exposed root surfaces or early enamel wear. Annoying, rarely urgent — but worth an exam, because it's also how small cavities introduce themselves.</p>
      <h2>2. Sensitivity that lingers after the trigger</h2>
      <p>When cold or sweet pain hangs on for 30+ seconds, the nerve is inflamed — often a deeper cavity. Caught now, it's a filling. Ignored, it's chapter one of a <Link href="/root-canals">root canal</Link> story.</p>
      <h2>3. Pain with heat</h2>
      <p>Heat sensitivity is the more serious sibling — it often signals a dying nerve. This one moves up the priority list: call this week, not this month.</p>
      <h2>4. Sharp pain when biting</h2>
      <p>Think cracked tooth, fractured filling, or a bite hitting one spot too hard. Cracks are time-sensitive: shallow ones are savable, deep ones aren't. Chew on the other side and book promptly.</p>
      <h2>5. Spontaneous throbbing, worse at night</h2>
      <p>Pain that arrives uninvited — especially when lying down — is classic nerve infection. This is <Link href="/root-canals">root canal</Link> territory, and the treatment is what ends this pain, not what causes it.</p>
      <h2>6. Swelling, bad taste, or a gum pimple</h2>
      <p>An abscess: infection that has escaped the tooth. It will not resolve on its own. <Link href="/emergency-dentist">Call the same day</Link> — and if swelling affects breathing or swallowing, the ER comes first.</p>
      <h2>7. Aching in several teeth at once</h2>
      <p>Often not the teeth at all — sinus pressure, grinding, or gum inflammation refer pain broadly. An exam sorts it out quickly.</p>
      <p>Whatever variety you have: dental pain is data, and it always means something. Bring it to someone who has read forty years of it — <Link href="/contact">the office is a two-minute call away</Link>.</p>
    </BlogPost>
  );
}
