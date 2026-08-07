import Link from "next/link";
import LegalPage from "../../components/LegalPage";
import { DOCTOR } from "../../lib/practice";

export const metadata = {
  title: "Terms of Use",
  description: "Terms governing use of sunlanddentalcare.com, including the important distinction between general dental information and personalized dental advice.",
  alternates: { canonical: "/terms-of-use" },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Use" path="/terms-of-use"
      intro="By using this website you agree to these terms. The most important point: nothing on this site is a substitute for an examination and a diagnosis.">
      <h2>1. Informational purpose only — not dental advice</h2>
      <p>All content on this website — including service pages, blog articles, and answers to frequently asked questions — is provided for <strong>general educational purposes only</strong>. It is not dental, medical, or health advice, and it is not a diagnosis or treatment recommendation for any individual.</p>
      <p>Dentistry is specific to the person. What is right for one patient's mouth may be wrong for yours. Never delay seeking professional care, disregard advice from your own dentist or physician, or begin or stop any treatment because of something you read here.</p>

      <h2>2. No dentist-patient relationship</h2>
      <p>Reading this website, submitting the appointment request form, sending an email, or calling our office does <strong>not</strong> create a dentist-patient relationship. That relationship begins only when you are seen in our office and accepted for care, and it is documented in your treatment record.</p>

      <h2>3. In an emergency</h2>
      <p>Do not use this website for urgent problems. If you are experiencing a dental emergency, call our office at (818) 353-5520 during business hours. For facial swelling that affects breathing or swallowing, uncontrolled bleeding, or any medical emergency, <strong>call 911 or go to the nearest emergency room immediately.</strong></p>

      <h2>4. No guarantee of results</h2>
      <p>Dentistry is a healthcare service, not a product with a warranted outcome. Descriptions of treatments, before-and-after results, patient experiences, and general timelines on this site reflect individual cases and <strong>do not guarantee that you will experience the same result</strong>. Individual outcomes depend on your anatomy, oral health, medical history, habits, and adherence to home care and follow-up.</p>

      <h2>5. Pricing</h2>
      <p>Prices published on this site, including the complete single dental implant price, describe a specific standard treatment as of the effective date above and are subject to change. Your case may require additional treatment (for example, extractions, bone grafting, or periodontal therapy) that is priced separately. <strong>The only binding price is the written treatment estimate you receive after an examination.</strong></p>

      <h2>6. Accuracy and availability</h2>
      <p>We work to keep this site accurate and current, but we do not warrant that content is complete, error-free, or up to date, and we may change or remove content at any time. We do not guarantee the site will be uninterrupted or free of errors.</p>

      <h2>7. Third-party links</h2>
      <p>Links to third-party websites are provided for convenience. We do not control, endorse, or assume responsibility for their content, products, or practices.</p>

      <h2>8. Intellectual property</h2>
      <p>The content, design, text, photographs, and logo on this site are the property of Sunland Dental Care or used with permission, and are protected by copyright and trademark law. You may view and print pages for your personal, non-commercial use. Any other reproduction or distribution requires our written permission.</p>

      <h2>9. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, Sunland Dental Care and {DOCTOR.name} are not liable for any indirect, incidental, or consequential damages arising from your <strong>use of, or inability to use, this website</strong> or from reliance on general information published on it.</p>
      <p><strong>This section applies to the website only.</strong> Nothing in these Terms limits, waives, or disclaims any responsibility we owe to you as a patient for the professional dental care we provide, and nothing here is intended to limit any liability that cannot be limited under California law.</p>

      <h2>10. Governing law</h2>
      <p>These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles. Any dispute relating to this website will be brought in the state or federal courts located in Los Angeles County, California.</p>

      <h2>11. Changes</h2>
      <p>We may revise these Terms at any time by posting an updated version on this page. Your continued use of the site after changes are posted constitutes acceptance of the revised Terms.</p>

      <p className="pt-4">See also our <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/hipaa-notice">Notice of Privacy Practices</Link>.</p>
    </LegalPage>
  );
}
