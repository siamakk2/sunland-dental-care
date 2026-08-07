import LegalPage from "../../components/LegalPage";
import { NAP } from "../../lib/practice";

export const metadata = {
  title: "Accessibility Statement",
  description: "Sunland Dental Care's commitment to making sunlanddentalcare.com and our Sunland, CA dental office accessible to all patients, and how to request assistance.",
  alternates: { canonical: "/accessibility" },
};

export default function Page() {
  return (
    <LegalPage title="Accessibility Statement" path="/accessibility"
      intro="We want every patient to be able to use this website and visit our office comfortably. If anything here gets in your way, tell us and we will fix it or help you directly.">
      <h2>Our commitment</h2>
      <p>Sunland Dental Care is committed to making our website usable by everyone, including people with disabilities. We aim to conform substantially to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, the widely recognized standard for accessible web content.</p>

      <h2>What we have done</h2>
      <ul>
        <li>Text and background colors chosen to meet contrast requirements for readability</li>
        <li>Visible focus indicators so the site can be navigated by keyboard alone</li>
        <li>Descriptive alternative text for meaningful images</li>
        <li>Semantic headings and landmarks that screen readers can navigate</li>
        <li>Form fields with proper labels, not placeholder text alone</li>
        <li>Responsive layouts that work when text is enlarged or on small screens</li>
        <li>Respect for reduced-motion preferences set in your operating system</li>
      </ul>

      <h2>Ongoing effort</h2>
      <p>Accessibility is not a one-time project. We review the site as we add content, and we welcome reports of anything that does not work well with your assistive technology. Some third-party content we embed — such as the map on our contact page — is outside our direct control, and we will provide the same information another way on request.</p>

      <h2>Need help right now?</h2>
      <p>If any part of this website prevents you from finding information or requesting an appointment, <strong>please call us at <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a></strong> during office hours ({NAP.hours}) and a member of our team will assist you directly — including scheduling, answering questions about treatment, and providing information in another format.</p>

      <h2>Accessibility at our office</h2>
      <p>If you have mobility, hearing, vision, or other accessibility needs for your visit, please tell us when you schedule. We will do our best to accommodate you and to make sure your appointment is comfortable.</p>

      <h2>Feedback</h2>
      <p>We take accessibility feedback seriously. Contact us by phone or email using the details below, and please describe the page and the difficulty you encountered so we can address it.</p>
    </LegalPage>
  );
}
