import Link from "next/link";
import { POSTS } from "../../lib/posts";
import { DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, webPage } from "../../lib/schema";

export const metadata = {
  title: "Dental Health Blog — Straight Answers from Dr. Emami",
  description: `Straight answers to the questions patients actually search: implant costs, pain, toothaches, dentures vs implants, and dental anxiety — from ${DOCTOR.name}, 40 years in practice in Sunland, CA.`,
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/blog", name: "Dental Health Blog" }), breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]))}</Schema>
      <section className="border-b border-line bg-parchment/60">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <span className="accent-bar" aria-hidden="true"></span>
          <p className="chip">The Sunland Dental Care blog</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold md:text-5xl">Straight answers to what you're actually searching</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">Written from {DOCTOR.yearsExperience} years in the chairside trenches by {DOCTOR.name} — no scare tactics, no upsells, just how it really works.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-3xl border border-line bg-white p-7 shadow-sm transition hover:border-brand/50 hover:shadow-md">
              <p className="chip">{p.tag}</p>
              <h2 className="mt-2 text-2xl font-bold leading-snug group-hover:text-brand">{p.title}</h2>
              <p className="mt-3 text-ink-soft">{p.excerpt}</p>
              <p className="mt-4 text-sm font-bold text-brand">Read · {p.read} →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
