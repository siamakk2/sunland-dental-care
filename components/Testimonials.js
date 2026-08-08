import { TESTIMONIALS, AGGREGATE } from "../lib/testimonials";
import { REVIEWS } from "../lib/practice";

export default function Testimonials() {
  if (TESTIMONIALS.length < 2) return null;
  return (
    <section className="border-y border-line bg-parchment/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <span className="accent-bar" aria-hidden="true"></span>
        <h2 className="text-3xl font-bold md:text-4xl">In patients' own words</h2>
        <p className="mt-2 text-ink-soft">
          Published reviews from Google and Yelp.{" "}
          <a className="font-semibold text-brand underline" href={REVIEWS.google} rel="noopener">Read them all →</a>
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.quote.slice(0, 40)} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <p className="text-gold" aria-label={`${t.rating} out of 5 stars`}>{"\u2605".repeat(t.rating)}</p>
              <blockquote className="mt-3 text-ink-soft">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-ink">
                {t.name} <span className="font-medium text-ink-soft">· {t.source}{t.treatment ? ` · ${t.treatment}` : ""}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
