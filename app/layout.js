import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
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
      <head>
        {/* Ordering here is load-bearing. React hoists <script async src> to the
            top of <head>, so a plain inline block placed above it still ends up
            running after GA. next/script makes the order explicit: the consent
            defaults are beforeInteractive, GA is afterInteractive. Without this,
            GA initialises with no consent state and the first pageview is sent
            with full storage before the visitor has chosen anything. */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
(function(){var d='denied',g='granted',B={ad_storage:d,ad_user_data:d,ad_personalization:d,functionality_storage:d,personalization_storage:d,security_storage:g,wait_for_update:500},m=function(o){var r={},k;for(k in B)r[k]=B[k];for(k in o)r[k]=o[k];return r};
gtag('consent','default',m({analytics_storage:g}));
gtag('consent','default',m({analytics_storage:d,region:'AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH'.split(' ')}));
try{var c=JSON.parse(localStorage.getItem('sk_consent_v1'));if(c&&c.v===1&&Date.now()-c.ts<15552e6){var a=c.ads?g:d,n=c.analytics?g:d,f=c.functional?g:d;gtag('consent','update',{ad_storage:a,ad_user_data:a,ad_personalization:a,analytics_storage:n,functionality_storage:f,personalization_storage:f,security_storage:g});}}catch(e){}})();` }}
        />
        <Script
          id="ga-loader"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XNGTJRKYRW"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XNGTJRKYRW');`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
        <Script id="consent-ui" strategy="afterInteractive" src="/consent.js" />
      </body>
    </html>
  );
}
