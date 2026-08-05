import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "childs-first-dental-visit");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["When should a child first see a dentist?",
   "The widely recommended guideline is by the first birthday, or within six months of the first tooth appearing. Early visits are short and mostly about familiarity — a child who meets a dentist before anything hurts grows up without dental fear."],
  ["Do baby teeth really matter if they fall out anyway?",
   "Yes. Baby teeth hold space for the adult teeth behind them, and infection in a baby tooth can affect the permanent tooth developing underneath. Losing them early can crowd the adult bite for years."],
  ["What if my child is terrified?",
   "Say so when booking. A first visit can be nothing more than sitting in the chair, counting teeth, and leaving on a good note. Nothing is gained by forcing a frightened child through a full exam on day one."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: bring your child by their first birthday or within six months of the first tooth, and keep your own language neutral beforehand.</strong> How a family talks about the dentist at home shapes a child's dental anxiety far more than anything that happens in the chair.</p>
      <h2>Words to avoid the morning of</h2>
      <p>Well-meaning reassurance plants the ideas it means to prevent. "It won't hurt" introduces the concept of hurting. "Don't be scared" suggests there's something to fear. "They won't use the drill" — now there's a drill. Try instead: "The dentist is going to count your teeth and take pictures of them." Accurate, and boring in the best way.</p>
      <h2>What the first visit actually involves</h2>
      <p>For a toddler: a lap exam or a quick look in the chair, a count of the teeth that have arrived, a check that everything is developing normally, and a conversation with you about bottles, sippy cups, and brushing. For a school-age child: a gentle cleaning, a look for early decay, and often a fluoride varnish. Five to twenty minutes, and rarely dramatic.</p>
      <h2>What parents get asked</h2>
      <ul>
        <li><strong>Bottles and sippy cups at night</strong> — milk and juice pooling on teeth overnight is the leading cause of early childhood decay.</li>
        <li><strong>Brushing routine</strong> — children need help brushing until roughly age seven or eight; before that, their coordination isn't there yet.</li>
        <li><strong>Thumb-sucking and pacifiers</strong> — usually harmless early, worth watching as permanent teeth approach.</li>
        <li><strong>Snacking patterns</strong> — frequency matters more than quantity; constant grazing keeps teeth under acid attack all day.</li>
      </ul>
      <h2>Why a family practice helps</h2>
      <p><Link href="/general-dentistry">Sunland Dental Care</Link> has treated Sunland-Tujunga families since 1991, and it's common now for a parent who came here as a child to bring their own. That continuity matters for kids: the same office, the same faces, no transfer to a new dentist at eighteen. If your child needs care beyond routine dentistry, you'll be told plainly and referred to a specialist — but most children never need that.</p>
      <p>New to the practice? Here's <Link href="/new-patients">what a first visit looks like</Link>.</p>
    </BlogPost>
  );
}
