import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { BlurText, Reveal, MagneticButton, SpotlightCard } from "@/components/anim";

const SITE_URL = "https://menardsconstruction.com";
const CONTACT_OG_IMG = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&q=80";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Get a Quote | Menards Construction Nairobi" },
      { name: "description", content: "Contact Menards Construction in Nairobi, Kenya for a quote on commercial, residential or infrastructure projects. Call +254 710 792 208." },
      { name: "keywords", content: "contact Menards Construction, construction quote Nairobi, Kenya contractor contact, construction company phone, hire builder Nairobi" },
      { property: "og:title", content: "Contact Menards Construction | Nairobi, Kenya" },
      { property: "og:description", content: "Start your project with Menards Construction — get a quote from our Nairobi team today." },
      { property: "og:image", content: CONTACT_OG_IMG },
      { property: "og:url", content: SITE_URL + "/contact" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Menards Construction" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Menards Construction" },
      { name: "twitter:description", content: "Get a quote from Menards Construction in Nairobi, Kenya." },
      { name: "twitter:image", content: CONTACT_OG_IMG },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
  }),
  component: Contact,
});


function Contact() {
  return (
    <SiteLayout>
      <section className="container-x mx-auto max-w-[1440px] pb-24 pt-40">
        <Reveal>
          <span className="mb-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> CONTACT
          </span>
        </Reveal>
        <BlurText
          className="text-5xl font-black leading-[0.95] md:text-7xl lg:text-[96px]"
          text={
            <>
              Let's build<br />
              <span className="font-accent italic font-normal">something real.</span>
            </>
          }
        />
      </section>

      <section className="section-pad container-x mx-auto max-w-[1440px] grid grid-cols-1 gap-16 pt-0 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <h3 className="mb-8 text-2xl font-black">Reach us</h3>
            <div className="space-y-6 text-[color:var(--secondary)]">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--primary)]">Email</div>
                <p className="mt-2">menardscontractorsltd@gmail.com</p>
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--primary)]">Phone</div>
                <p className="mt-2">+254 710 792 208</p>
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--primary)]">{"\n"}</div>
                <p className="mt-2">{"\n"}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <SpotlightCard className="md:col-span-7 border border-[color:var(--outline)] p-10">
          <form
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch.");
            }}
          >
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Company" name="company" className="md:col-span-2" />
            <Field label="Project type" name="type" className="md:col-span-2" />
            <Field label="Message" name="message" textarea className="md:col-span-2" />
            <div className="md:col-span-2">
              <MagneticButton
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-[color:var(--primary)] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[color:var(--gold)]"
              >
                Send Inquiry <span className="material-symbols-outlined" style={{ fontSize: 18 }}>east</span>
              </MagneticButton>
            </div>
          </form>
        </SpotlightCard>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  className?: string;
}) {
  const cls =
    "mt-2 w-full border-0 border-b border-[color:var(--outline)] bg-transparent py-3 outline-none focus:border-[color:var(--gold)]";
  return (
    <label className={className}>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)]">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} className={cls} />
      )}
    </label>
  );
}
