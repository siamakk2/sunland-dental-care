import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import Link from "next/link";
import { Header, Footer, MobileBar } from "../components/Chrome";
import { SITE, NAP, NAV, SERVICES, MORE_SERVICES, DOCTOR } from "../lib/practice";
import { CITIES } from "../lib/cities";

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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
