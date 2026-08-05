import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import Link from "next/link";
import { SITE, NAP, NAV, SERVICES, MORE_SERVICES, DOCTOR } from "../lib/practice";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${DOCTOR.name} — Dental Implants & Cosmetic Dentistry in Sunland, CA`,
    template: `%s | ${SITE.name}`,
  },
  description: `${SITE.name} is the implant-focused dental practice of ${DOCTOR.name}, serving Sunland-Tujunga since ${DOCTOR.established}. Complete $2,000 dental implants, 3D-guided surgery, cosmetic dentistry, and Invisalign at ${NAP.street}, ${NAP.city}, CA. Call ${NAP.phone}.`,
  openGraph: {
    siteName: SITE.name, locale: "en_US", type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sunland Dental Care — Dr. Mahvash Emami, DDS" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Sunland Dental Care" className="h-12 w-auto md:h-14" />
        </Link>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand">{n.label}</Link>
          ))}
        </nav>
        <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
          {NAP.phone}
        </a>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-line px-4 py-2 text-sm md:hidden">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className="whitespace-nowrap text-ink-soft">{n.label}</Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-parchment pb-14 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <img src="/images/logo.png" alt="Sunland Dental Care" className="h-14 w-auto" />
          <p className="mt-3 text-sm text-ink-soft">
            {DOCTOR.name} — implant-focused, minimally invasive dentistry serving
            Sunland-Tujunga and the Foothill communities since {DOCTOR.established}.
          </p>
          <p className="mt-4 text-sm">
            <a className="underline hover:text-brand" href={NAP.mapsUrl}>{NAP.street}, {NAP.city}, {NAP.state} {NAP.zip}</a><br />
            <a className="hover:text-brand" href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a><br />
            {NAP.hours} · Sat–Sun Closed<br />We welcome patients in English, Español, and فارسی
          </p>
        </div>
        <div>
          <p className="eyebrow text-ink-soft">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link className="hover:text-brand" href={`/${s.slug}`}>{s.name}</Link></li>
            ))}
            <li><Link className="hover:text-brand" href="/pricing">Pricing</Link></li>
            {MORE_SERVICES.map((s) => (
              <li key={s.slug}><Link className="hover:text-brand" href={`/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-ink-soft">Practice</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-brand" href="/dr-emami">Meet Dr. Emami</Link></li>
            <li><Link className="hover:text-brand" href="/about">About the Practice</Link></li>
            <li><Link className="hover:text-brand" href="/new-patients">New Patients</Link></li>
            <li><Link className="hover:text-brand" href="/faq">Patient FAQ</Link></li>
            <li><Link className="hover:text-brand" href="/contact">Contact & Location</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-4 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} {SITE.name}. {DOCTOR.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-cream/95 backdrop-blur md:hidden">
          <a href={`tel:${NAP.phoneIntl}`} className="flex items-center justify-center gap-1 py-3.5 text-sm font-bold text-brand">📞 Call</a>
          <a href={`sms:${NAP.phoneIntl}`} className="flex items-center justify-center gap-1 border-x border-line py-3.5 text-sm font-bold">💬 Text</a>
          <a href="/contact" className="flex items-center justify-center gap-1 py-3.5 text-sm font-bold">🗓️ Book</a>
        </nav>
      </body>
    </html>
  );
}
