import Link from "next/link";
import LegalPage from "../../components/LegalPage";
import { NAP, DOCTOR } from "../../lib/practice";

export const metadata = {
  title: "Notice of Privacy Practices (HIPAA)",
  description: "How Sunland Dental Care may use and disclose your protected health information, and your rights regarding that information under HIPAA and California law.",
  alternates: { canonical: "/hipaa-notice" },
};

export default function Page() {
  return (
    <LegalPage title="Notice of Privacy Practices" path="/hipaa-notice"
      intro="THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.">
      <h2>Our commitment</h2>
      <p>Sunland Dental Care is required by law to maintain the privacy of your protected health information ("PHI"), to give you this Notice of our legal duties and privacy practices, and to follow the terms of the Notice currently in effect. PHI is information about you, including demographic information, that may identify you and relates to your past, present, or future physical or dental health, treatment, or payment for care.</p>

      <h2>How we may use and disclose your health information without your authorization</h2>
      <h3>Treatment</h3>
      <p>We use your health information to provide, coordinate, and manage your dental care — for example, sharing X-rays or records with a laboratory fabricating your crown, or with a specialist or physician involved in your care.</p>
      <h3>Payment</h3>
      <p>We use and disclose your information to bill and collect payment — for example, submitting a claim to your dental plan, verifying coverage, or obtaining prior authorization.</p>
      <h3>Health care operations</h3>
      <p>We use your information for the business activities of the practice — quality assessment, staff training and review, licensing, and general administration.</p>
      <h3>Appointment reminders and treatment alternatives</h3>
      <p>We may contact you by phone, text, mail, or email to remind you of appointments, discuss treatment options, or tell you about health-related services that may benefit you. Tell us if you prefer a particular contact method or wish to limit reminders.</p>
      <h3>Other permitted or required disclosures</h3>
      <ul>
        <li>When required by federal, state, or local law</li>
        <li>For public health activities, including reporting disease or reactions to products</li>
        <li>To report suspected abuse, neglect, or domestic violence</li>
        <li>For health oversight activities such as audits and investigations</li>
        <li>In response to a court order, subpoena, warrant, or other lawful process</li>
        <li>For law enforcement purposes as permitted by law</li>
        <li>To coroners, medical examiners, and funeral directors</li>
        <li>To avert a serious and imminent threat to health or safety</li>
        <li>For workers' compensation claims as authorized by law</li>
        <li>For specialized government functions, including military and national security</li>
      </ul>
      <h3>Individuals involved in your care</h3>
      <p>Unless you object, we may share information relevant to your care with a family member, friend, or other person you involve in your treatment or payment.</p>

      <h2>Uses that always require your written authorization</h2>
      <p>The following require your written permission, which you may revoke at any time in writing:</p>
      <ul>
        <li><strong>Marketing</strong> communications, and any use of your photographs or images in advertising, on our website, or on social media</li>
        <li><strong>Sale</strong> of your health information (we do not sell your information)</li>
        <li><strong>Psychotherapy notes</strong>, if any exist</li>
        <li>Most other uses not described in this Notice</li>
      </ul>
      <p>If you consent to before-and-after photographs or a testimonial being published, that consent is documented separately and may be withdrawn in writing at any time.</p>

      <h2>Your rights regarding your health information</h2>
      <ul>
        <li><strong>Inspect and copy</strong> your dental records, including an electronic copy where we maintain them electronically. We may charge a reasonable, cost-based fee.</li>
        <li><strong>Request an amendment</strong> if you believe information is incorrect or incomplete. We may deny the request in certain circumstances and will explain why in writing.</li>
        <li><strong>Request restrictions</strong> on how we use or disclose your information. We are not required to agree, except that we must agree to withhold information from your health plan if you pay for that service in full out of pocket.</li>
        <li><strong>Request confidential communications</strong> — for example, asking us to call a specific number or write to a specific address.</li>
        <li><strong>Receive an accounting of disclosures</strong> we have made, other than for treatment, payment, and operations.</li>
        <li><strong>Receive a paper copy of this Notice</strong> at any time, even if you agreed to receive it electronically.</li>
        <li><strong>Be notified</strong> if a breach occurs that compromises the privacy or security of your information.</li>
        <li><strong>Choose someone to act for you</strong> — a personal representative with legal authority may exercise your rights.</li>
      </ul>
      <p>To exercise any of these rights, contact our office in writing at the address below.</p>

      <h2>California privacy protections</h2>
      <p>California's Confidentiality of Medical Information Act provides protections that are in some respects stronger than federal law. Where state and federal law differ, we follow the standard more protective of your privacy.</p>

      <h2>Complaints</h2>
      <p>If you believe your privacy rights have been violated, you may file a complaint with our office at the contact information below, or with the U.S. Department of Health and Human Services, Office for Civil Rights, at 200 Independence Avenue SW, Washington, D.C. 20201, by calling 1-877-696-6775, or at <a href="https://www.hhs.gov/ocr/complaints" rel="noopener">hhs.gov/ocr/complaints</a>. <strong>You will not be retaliated against for filing a complaint.</strong></p>

      <h2>Changes to this Notice</h2>
      <p>We reserve the right to change this Notice and to make the revised Notice effective for information we already have as well as information we receive in the future. The current Notice will always be posted on this page and available in our office.</p>
    </LegalPage>
  );
}
