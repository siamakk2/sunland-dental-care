import Link from "next/link";
import LegalPage from "../../components/LegalPage";
import { NAP, SITE } from "../../lib/practice";

export const metadata = {
  title: "Privacy Policy",
  description: "How Sunland Dental Care collects, uses, and protects information submitted through sunlanddentalcare.com, including your rights under California privacy law.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy"
      intro="This policy explains what information this website collects, why, and the choices you have. It covers the website only — health information created during your care is covered by our HIPAA Notice of Privacy Practices.">
      <h2>1. Who we are</h2>
      <p>Sunland Dental Care ("we," "us," "the Practice") operates sunlanddentalcare.com. Our contact details appear at the bottom of this page.</p>

      <h2>2. Two different sets of rules</h2>
      <p>Information you provide as a <strong>patient during dental care</strong> — your chart, X-rays, treatment records — is Protected Health Information governed by HIPAA and California's Confidentiality of Medical Information Act. That is addressed in our <Link href="/hipaa-notice">Notice of Privacy Practices</Link>.</p>
      <p>Information collected by <strong>this website</strong> — what you type into the contact form, and analytics about your visit — is governed by this Privacy Policy. Please do not submit detailed medical information through the website contact form.</p>

      <h2>3. Information we collect</h2>
      <h3>Information you give us</h3>
      <p>Our appointment request form asks for your name, phone number, the topic of your inquiry, your preferred days and times, and any message you choose to write. Submitting the form sends this information to the Practice by email so we can contact you.</p>
      <h3>Information collected automatically</h3>
      <p>We use Google Analytics to understand how visitors use the site — pages viewed, approximate location (city/region level), device and browser type, how you arrived at the site, and time spent on pages. Google Analytics sets cookies and may collect your IP address. We use this to improve the website, not to identify you individually. Google's practices are described at <a href="https://policies.google.com/privacy" rel="noopener">policies.google.com/privacy</a>, and you can opt out using Google's browser add-on at <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">tools.google.com/dlpage/gaoptout</a>.</p>
      <p>We may also receive limited aggregate information from our hosting provider (Vercel) for security and performance purposes.</p>

      <h2>4. How we use information</h2>
      <ul>
        <li>To respond to your appointment request or question</li>
        <li>To schedule, confirm, and follow up on appointments</li>
        <li>To operate, secure, and improve the website</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p><strong>We do not sell or rent your personal information.</strong> We do not share it with third parties for their own marketing purposes.</p>

      <h2>5. Who we share information with</h2>
      <p>We share information only with service providers who help us operate — such as our website host, email provider, and analytics provider — and only as needed for those services. We may also disclose information where required by law, to protect the safety of any person, or in connection with a legal claim.</p>

      <h2>6. Cookies and tracking</h2>
      <p>Cookies are small files stored by your browser. This site uses them for analytics as described above. Most browsers let you refuse or delete cookies through their settings; the site will still work if you do. We honor Global Privacy Control (GPC) signals where required by law.</p>

      <h2>7. Your California privacy rights</h2>
      <p>If you are a California resident, the California Consumer Privacy Act (as amended by the CPRA) gives you the right to:</p>
      <ul>
        <li><strong>Know</strong> what personal information we have collected about you and how we use it</li>
        <li><strong>Delete</strong> personal information we have collected, subject to legal exceptions</li>
        <li><strong>Correct</strong> inaccurate personal information</li>
        <li><strong>Opt out</strong> of any sale or sharing of personal information (we do not sell or share personal information)</li>
        <li><strong>Not be discriminated against</strong> for exercising these rights</li>
      </ul>
      <p>To exercise any of these rights, call us at <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a> or email <a href={`mailto:${NAP.email}`}>{NAP.email}</a>. We may need to verify your identity before responding. Note that medical information governed by HIPAA and the CMIA is generally exempt from CCPA and is handled under those laws instead.</p>

      <h2>8. Security</h2>
      <p>We use reasonable administrative and technical safeguards to protect information, and this website is served over an encrypted HTTPS connection. However, no method of transmission over the internet is completely secure. Email in particular is not a secure channel — please do not send sensitive medical details by email or through the website form.</p>

      <h2>9. Children</h2>
      <p>This website is not directed to children under 13, and we do not knowingly collect personal information from them through the site. Parents and guardians provide information on behalf of minor patients as part of the treatment relationship.</p>

      <h2>10. Third-party links</h2>
      <p>Our site links to third-party sites (for example, review platforms and health directories). We do not control those sites and are not responsible for their privacy practices. Review their policies before providing information.</p>

      <h2>11. Changes to this policy</h2>
      <p>We may update this policy from time to time. The effective date at the top reflects the most recent version, and material changes will be posted on this page.</p>
    </LegalPage>
  );
}
