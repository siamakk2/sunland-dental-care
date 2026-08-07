import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "gum-disease-and-implants");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Can I get implants if I've had gum disease?",
   "In most cases yes — but the gum disease must be treated and stabilized first. Placing an implant into active periodontal infection is how implants fail years later. Treat, stabilize, then place."],
  ["What is peri-implantitis?",
   "Gum disease around an implant. The same bacteria that attack teeth attack the tissue and bone supporting an implant, and because implants have no periodontal ligament, the damage can progress faster than around a natural tooth."],
  ["Is it better to have one doctor do the gum work and the implant?",
   "It removes the biggest coordination risk. When the same dentist treats the periodontal disease, places the implant, and maintains it afterward, nothing gets lost between offices — and one person is accountable for the long-term result."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: gum disease is the number one reason dental implants fail years after placement — and having gum disease in your history doesn't disqualify you, provided it's treated and controlled before the implant goes in.</strong> Titanium doesn't get infected. The tissue around it absolutely does.</p>
      <h2>Why implants fail late</h2>
      <p>Early failures are rare and usually mechanical — an implant that never fully integrated. Late failures, years down the line, are almost always biological: <Link href="/blog/bleeding-gums-what-it-means">periodontal bacteria</Link> colonize the gum around the implant, inflammation sets in, and the bone holding it recedes. It's called peri-implantitis, and it moves faster than gum disease around a natural tooth because implants lack the periodontal ligament that gives natural teeth some defense.</p>
      <h2>The right sequence</h2>
      <ol>
        <li><strong>Diagnose the gums first.</strong> Pocket depths, bleeding points, bone levels — before any implant plan is drawn.</li>
        <li><strong>Treat and stabilize.</strong> Deep cleaning, and <Link href="/periodontal-treatment">surgical therapy</Link> where pockets are too deep to reach otherwise.</li>
        <li><strong>Then place the implant</strong>, into healthy tissue with a healthy foundation.</li>
        <li><strong>Maintain indefinitely.</strong> More frequent hygiene visits protect the investment for decades.</li>
      </ol>
      <h2>Why doing it all in one office matters</h2>
      <p>The conventional Los Angeles path sends gum surgery to one specialist, implant placement to another, and restoration back to your general dentist. Every hand-off is a place where the sequence can slip — an implant scheduled before the periodontal treatment has been confirmed stable, or maintenance nobody clearly owns.</p>
      <p>At <Link href="/periodontal-treatment">Sunland Dental Care</Link>, Dr. Emami performs the periodontal therapy, the <Link href="/dental-implants">implant placement</Link>, and the restoration herself. One doctor sees the whole timeline, controls the sequence, and answers for the outcome — for as long as you keep the implant, which should be the rest of your life.</p>
    </BlogPost>
  );
}
