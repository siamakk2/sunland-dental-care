import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "same-day-dental-implants-explained");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Can you really get a dental implant in one day?",
   "You can have the implant placed and leave with a temporary tooth on it the same day — that's immediate loading, and it's genuine dentistry. What you cannot do is skip osseointegration, the months during which bone fuses to the implant before the final crown is fitted."],
  ["Is the tooth I leave with the final one?",
   "Usually not. Immediate restorations are typically temporary — designed to look right and keep you comfortable, but not to take full chewing force while the implant integrates. The permanent crown comes months later."],
  ["Who qualifies for immediate-load implants?",
   "Patients with sufficient bone density and volume for the implant to be stable at placement, healthy gums, and a bite that won't overload the site. 3D imaging determines this — it isn't a preference, it's a measurement."],
  ["Is same-day placement riskier?",
   "In well-selected cases, outcomes are comparable to conventional timing. In poorly selected ones — inadequate bone, active infection, heavy grinding — loading an implant early raises the failure risk. Candidate selection is the whole game."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: "teeth in a day" is real, but the teeth you go home with are usually temporary.</strong> The implant is placed and a provisional tooth attached the same day; the permanent crown follows months later, after the bone has fused to the titanium. That's not a bait and switch — it's how biology works, and a good office explains it before you book.</p>

      <h2>What can and can't be compressed</h2>
      <p>Two things happen with every implant. First, mechanical placement — the post going into bone, which genuinely takes one appointment. Second, <strong>osseointegration</strong> — bone cells growing onto and locking around the titanium surface, which takes roughly three to six months and cannot be hurried by any technique or marketing budget.</p>
      <p>Immediate loading attaches a temporary tooth right after placement so you're never without a visible tooth. The implant is still integrating underneath, quietly, on its own schedule.</p>

      <h2>Why the distinction matters to you</h2>
      <ul>
        <li><strong>Chewing restrictions.</strong> A temporary isn't built for steak. Overloading an integrating implant is one of the more preventable causes of early failure.</li>
        <li><strong>Appearance.</strong> Temporaries are good; final crowns are better — shaded and contoured with more precision.</li>
        <li><strong>Your calendar.</strong> If you booked expecting one appointment total, you should know now that there's a second one months out.</li>
        <li><strong>Your budget.</strong> Confirm the final crown is included in the quoted price and not billed later. See <Link href="/blog/cheap-dental-implant-ads-truth">how incomplete quotes work</Link>.</li>
      </ul>

      <h2>Who's actually a candidate</h2>
      <p>Immediate loading requires enough bone for the implant to be genuinely stable the moment it's placed, healthy gum tissue, no active infection at the site, and a bite that won't hammer it. This is determined by 3D imaging and examination, not by preference — which is why an honest office will sometimes say no. Read <Link href="/blog/not-enough-bone-for-implants">what to do if you've been told you lack bone</Link>.</p>

      <h2>The version that's genuinely transformative</h2>
      <p>Where same-day treatment changes lives is <Link href="/full-arch-implants">full-arch cases</Link>: patients whose remaining teeth are failing can have extractions, implant placement, and a fixed temporary arch in one visit — walking out with a full set of teeth rather than facing months in a removable denture. The final prosthesis still comes later, but the day-one difference is enormous.</p>
      <p>At <Link href="/dental-implants">Sunland Dental Care</Link>, every implant is planned in 3D before surgery, and <Link href="/dr-emami">Dr. Emami</Link> will tell you plainly what your case allows — including when waiting produces the better long-term result.</p>
    </BlogPost>
  );
}
