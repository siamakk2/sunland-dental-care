import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "cosmetic-dentist-burbank-veneers");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["How much do porcelain veneers cost near Burbank?",
   "Porcelain veneers in the Los Angeles area commonly run roughly $1,000–$2,500 per tooth, and most smile makeovers involve six to ten teeth. Pricing depends on the material, the lab, and how much preparation each tooth requires — an exam and exact written quote is the only reliable number."],
  ["Do veneers ruin your natural teeth?",
   "Traditional veneers require removing a thin layer of enamel, which is permanent. How much depends on the case and the dentist's philosophy — conservative preparation removes the minimum necessary, and in some cases whitening or bonding achieves the goal with no enamel removal at all."],
  ["How long do veneers last?",
   "Well-made porcelain veneers typically last 10–15 years or more with good gum health and no grinding. They can chip or debond, and they don't change color with whitening, which is why whitening is usually done first."],
  ["Why do some veneers look obviously fake?",
   "Usually shade and proportion: too white for the patient's skin tone, too uniform in shape, and ignoring the natural translucency at the tooth edge. Natural-looking work varies each tooth slightly and matches the smile line to the face."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: porcelain veneers near Burbank commonly run about $1,000–$2,500 per tooth, and the difference between a great result and an obvious one comes down to shade, proportion, and how conservatively the teeth were prepared.</strong> You've seen hundreds of excellent veneers and never noticed a single one.</p>

      <h2>What actually makes veneers look real</h2>
      <ul>
        <li><strong>Shade chosen for your face,</strong> not the brightest available. Teeth whiter than the whites of your eyes read as artificial in every light.</li>
        <li><strong>Variation between teeth.</strong> Natural teeth differ subtly in shape and length; a row of identical rectangles is the classic tell.</li>
        <li><strong>Translucency at the edges,</strong> which good porcelain and a good lab reproduce and cheap work doesn't.</li>
        <li><strong>A smile line that follows your lip,</strong> matched to how you actually smile rather than to a template.</li>
      </ul>

      <h2>The conservative question worth asking</h2>
      <p>Veneers require permanently removing enamel — usually a thin layer, but it doesn't grow back. Before committing eight teeth to that, it's worth asking whether a smaller intervention reaches your goal: professional <Link href="/teeth-whitening">whitening</Link> for discoloration, bonding for a single chip, or <Link href="/invisalign">clear aligners</Link> for crowding that veneers would otherwise mask. Sometimes the answer is genuinely veneers. Often it's whitening plus alignment plus two veneers instead of ten.</p>

      <h2>Sequence matters</h2>
      <p>Whiten first, then match. Porcelain doesn't respond to whitening agents, so veneers placed before whitening lock in your current shade permanently — and any subsequent whitening of your natural teeth creates a mismatch. Alignment also comes before veneers where crowding is involved; straightening teeth first means less enamel removal to make them look straight.</p>

      <h2>Why Burbank patients drive twenty minutes</h2>
      <p>At <Link href="/cosmetic-dentistry">Sunland Dental Care</Link>, cosmetic work follows the same principle as everything else in the practice: preserve what's healthy. <Link href="/dr-emami">Dr. Mahvash Emami, DDS</Link> has 40 years of restorative experience, designs cases around your face rather than a catalogue, and — because whitening, alignment, restorative work, and implants all happen in the same office — sequences them under one plan and one doctor.</p>
      <p>Come in with the smile you have in mind. You'll get an honest read on whether veneers are the right tool, plus exact pricing in writing before anything begins. See the <Link href="/dentist-burbank">Burbank patient page</Link>.</p>
    </BlogPost>
  );
}
