import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { BlurText, Reveal, Stagger, StaggerItem, SpotlightCard, MagneticButton } from "@/components/anim";
import { CtaBanner } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | MENARDS Construction" },
      { name: "description", content: "Architectural design, structural engineering, project management, premium renovation and more." },
      { property: "og:title", content: "Services | MENARDS" },
    ],
  }),
  component: Services,
});

const services = [
  { t: "Architectural Design", d: "Conceptual through construction documentation with a relentless focus on materiality.", i: "draw" },
  { t: "Structural Engineering", d: "Performance-driven engineering for residential, commercial and infrastructure.", i: "engineering" },
  { t: "Project Management", d: "Single-point delivery — schedule, cost, scope and quality, owned end to end.", i: "assignment" },
  { t: "Interior Design", d: "Spaces that feel as considered as they look — bespoke, durable, beautiful.", i: "weekend" },
  { t: "Premium Renovation", d: "Surgical upgrades to historical and modern buildings with zero compromise on finish.", i: "construction" },
  { t: "Landscape Design", d: "Site planning that treats the ground plane as part of the architecture.", i: "park" },
  { t: "Custom Fabrication", d: "Bespoke metalwork, joinery and stone — fabricated in-house, installed by us.", i: "build" },
];

const process = [
  { n: "01", t: "Consultation", d: "We sit with you, understand the brief, the budget, and the ambition." },
  { n: "02", t: "Planning", d: "Site analysis, feasibility, permitting and program development." },
  { n: "03", t: "Design", d: "Concept, schematic and detailed drawings — every decision documented." },
  { n: "04", t: "Construction", d: "Self-perform and trusted partners under one quality system." },
  { n: "05", t: "Delivery", d: "Snag, sign-off, and a maintenance plan that protects the asset." },
];

const benchmarks = [
  { t: "Decades of Expertise", d: "Senior leadership with hundreds of completed projects between them." },
  { t: "Sustainable Precision", d: "Materials selected for both lifecycle and beauty." },
  { t: "Artisanal Craftsmanship", d: "Trades led by master fabricators who care about the millimeter." },
  { t: "Unwavering Reliability", d: "Tight cost control and a delivery schedule we keep." },
];

function Services() {
  return (
    <SiteLayout navOverlay>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[color:var(--primary)] pt-32">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&q=80"
          alt="Construction at golden hour"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="container-x relative z-10 mx-auto max-w-[1440px] pb-24">
          <Reveal>
            <span className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> WHAT WE DO
            </span>
          </Reveal>
          <h1 className="max-w-4xl text-[clamp(48px,9vw,128px)] font-black leading-[0.95] text-white">Services</h1>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad container-x mx-auto max-w-[1440px]">
        <Stagger className="grid grid-cols-1 border-t border-[color:var(--outline)] md:grid-cols-2">
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <SpotlightCard className="group flex items-start justify-between gap-8 border-b border-[color:var(--outline)] p-10 transition-colors hover:bg-[color:var(--primary)] md:border-r [&:nth-child(even)]:md:border-r-0 md:p-14">
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-black transition-colors group-hover:text-white md:text-3xl">{s.t}</h3>
                  <p className="max-w-md text-[color:var(--secondary)] group-hover:text-white/70">{s.d}</p>
                </div>
                <span className="material-symbols-outlined text-[color:var(--gold)] transition-transform group-hover:rotate-45" style={{ fontSize: 36 }}>{s.i}</span>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Process */}
      <section className="section-pad bg-[color:var(--surface-low)]">
        <div className="container-x mx-auto max-w-[1440px]">
          <BlurText className="mb-16 text-4xl font-black md:text-6xl" text="Our Process" />
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {process.map((p, i) => (
              <StaggerItem key={i}>
                <div className="border-t-2 border-[color:var(--gold)] pt-6">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">{p.n}</div>
                  <div className="mt-3 text-xl font-black">{p.t}</div>
                  <p className="mt-3 text-sm text-[color:var(--secondary)]">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Benchmark */}
      <section className="section-pad container-x mx-auto max-w-[1440px] grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <BlurText
            className="text-4xl font-black leading-tight md:text-6xl"
            text={
              <>
                Setting the<br />
                <span className="font-accent italic font-normal">Benchmark</span>
              </>
            }
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <Stagger className="grid grid-cols-1 gap-px bg-[color:var(--outline)] md:grid-cols-2">
            {benchmarks.map((b, i) => (
              <StaggerItem key={i} className="bg-[color:var(--background)] p-8">
                <h4 className="mb-3 text-lg font-black">{b.t}</h4>
                <p className="text-sm text-[color:var(--secondary)]">{b.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <MagneticButton className="mt-10 inline-flex items-center gap-3 rounded-full bg-[color:var(--primary)] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[color:var(--gold)]">
              Request a Consultation
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>east</span>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Ready to Start Your" accent="Legacy Project" />
    </SiteLayout>
  );
}
