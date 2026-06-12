import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Menards Construction" },
      { name: "description", content: "How Menards Construction collects, uses, and safeguards your personal information." },
      { property: "og:title", content: "Privacy Policy | Menards Construction" },
      { property: "og:description", content: "Privacy Policy for Menards Construction." },
      { property: "og:url", content: "https://menardsconstruction.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://menardsconstruction.com/privacy" }],
  }),
  component: Privacy,
});


function Privacy() {
  return (
    <SiteLayout navOverlay>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden bg-[color:var(--primary)] pt-32">
        <div className="container-x relative z-10 mx-auto max-w-[1440px] pb-16">
          <span className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> LEGAL
          </span>
          <h1 className="text-[clamp(40px,7vw,96px)] font-black leading-[0.95] text-white">Privacy Policy</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">Last Updated: 21 January 2026</p>
        </div>
      </section>

      <section className="section-pad container-x mx-auto max-w-3xl">
        <div className="space-y-8 text-[color:var(--secondary)]">
          <p>Menards Construction (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit https://menardsconstruction.com.</p>

          <div>
            <h2 className="mb-3 text-xl font-black text-[color:var(--primary)]">1. Information We Collect</h2>
            <p>We collect limited personal information only when you voluntarily submit it through our contact forms, including:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content</li>
            </ul>
            <p className="mt-3">We do not collect account credentials, payment details, location data, uploaded files, or analytics data.</p>
          </div>

          {[
            ["2. How We Collect Information", "Information is collected solely through contact forms submitted by users on the website."],
            ["3. Purpose of Data Collection", "Personal data is collected strictly for communication purposes, such as responding to inquiries and providing requested information."],
            ["4. Cookies and Tracking", "This website does not use cookies, analytics tools, tracking pixels, or session identifiers."],
            ["5. Data Storage and Security", "Submitted information is stored on secure cloud servers. We use HTTPS / SSL encryption to protect data in transit. While reasonable security measures are in place, no method of transmission over the internet is completely secure."],
            ["6. Third-Party Services", "We do not use third-party analytics, advertising, payment processors, or marketing platforms."],
            ["7. Data Retention", "Personal information is retained only as long as necessary to respond to inquiries and for legitimate business communication."],
            ["8. User Rights", "Depending on applicable laws, users may request access to or deletion of personal information by contacting us directly."],
            ["9. Children's Privacy", "This website is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors."],
            ["10. Legal Compliance", "This Privacy Policy complies with the Kenya Data Protection Act (2019), the General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA)."],
            ["11. Changes to This Policy", "We may update this Privacy Policy at any time. Changes will be posted on this page with a revised date."],
          ].map(([h, p]) => (
            <div key={h}>
              <h2 className="mb-3 text-xl font-black text-[color:var(--primary)]">{h}</h2>
              <p>{p}</p>
            </div>
          ))}

          <div>
            <h2 className="mb-3 text-xl font-black text-[color:var(--primary)]">12. Contact Information</h2>
            <p>For privacy-related inquiries, please contact us at:</p>
            <p className="mt-2">Email: Menardscontractorsltd@gmail.com</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
