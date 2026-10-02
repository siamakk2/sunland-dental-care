import { OFFER } from "../lib/practice";

export default function OfferNote({ es = false, tone = "light" }) {
  const cls = tone === "dark"
    ? "mt-5 rounded-xl border border-white/30 bg-white/10 p-4 text-sm leading-relaxed text-white/90"
    : "mt-5 rounded-xl border border-line bg-parchment p-4 text-sm leading-relaxed text-ink-soft";
  return (
    <p className={cls}>
      <strong className={tone === "dark" ? "text-white" : "text-ink"}>
        {es ? "Qué cubre este precio:" : "What this price covers:"}
      </strong>{" "}
      {es ? OFFER.qualifierEs : OFFER.qualifier}
    </p>
  );
}
