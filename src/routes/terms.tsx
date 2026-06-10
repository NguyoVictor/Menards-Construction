import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | MENARDS Construction" },
      { name: "description", content: "Terms of Service governing your use of the Menards Construction website." },
      { property: "og:title", content: "Terms of Service | MENARDS" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout navOverlay>
      <section className="relative flex min-h-[40vh] items-end overflow-hidden bg-[color:var(--primary)] pt-32">
        <div className="container-x relative z-10 mx-auto max-w-[1440px] pb-16">
          <span className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> LEGAL
          </span>
          <h1 className="text-[clamp(40px,7vw,96px)] font-black leading-[0.95] text-white">Terms of Service</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">Last Updated: 21 January 2026</p>
        </div>
      </section>

      <section className="section-pad container-x mx-auto max-w-3xl">
        <div className="space-y-8 text-[color:var(--secondary)]">
          <p>These Terms of Service (“Terms”) govern your use of https://menardsconstruction.com. By accessing or using this website, you agree to these Terms.</p>

          {[
            ["1. About the Website", "This website is a portfolio and informational platform for Menards Construction, showcasing services, projects, and company information."],
            ["2. Eligibility", "You must be at least 18 years old to use this website."],
            ["3. Acceptable Use", "You agree to use the website only for lawful purposes and not to engage in activities that may harm, disrupt, or misuse the website."],
            ["4. Intellectual Property", "All content on this website, including text, images, logos, and designs, is the property of Menards Construction and is protected by intellectual property laws. Unauthorized use is prohibited."],
            ["5. User Submissions", "By submitting information through the contact form, you confirm that the information is accurate and may be used by us solely for communication purposes."],
            ["6. No Professional or Contractual Advice", "Content on this website does not constitute a binding agreement or professional advice. Any services provided are subject to separate written contracts."],
            ["7. Third-Party Links", "This website may include links to third-party websites. We are not responsible for the content or practices of those sites."],
            ["8. Limitation of Liability", "To the maximum extent permitted by law, Menards Construction shall not be liable for any damages arising from your use of this website."],
            ["9. Indemnification", "You agree to indemnify and hold harmless Menards Construction from any claims arising from your misuse of the website or violation of these Terms."],
            ["10. Privacy", "Your use of this website is also governed by our Privacy Policy."],
            ["11. Termination", "We reserve the right to restrict or terminate access to the website if these Terms are violated."],
            ["12. Governing Law", "These Terms are governed by the laws of the Republic of Kenya."],
            ["13. Changes to These Terms", "We may update these Terms at any time. Changes will be posted on this page with an updated date."],
          ].map(([h, p]) => (
            <div key={h}>
              <h2 className="mb-3 text-xl font-black text-[color:var(--primary)]">{h}</h2>
              <p>{p}</p>
            </div>
          ))}

          <div>
            <h2 className="mb-3 text-xl font-black text-[color:var(--primary)]">14. Contact Information</h2>
            <p>For questions regarding these Terms, contact:</p>
            <p className="mt-2">Email: Menardscontractorsltd@gmail.com</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
