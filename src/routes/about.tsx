import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { BlurText, Reveal, Stagger, StaggerItem, CountUp, SpotlightCard } from "@/components/anim";
import { CtaBanner } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | MENARDS Construction" },
      { name: "description", content: "Our story — building tomorrow's landmarks today with uncompromising precision and artistic integrity." },
      { property: "og:title", content: "About | MENARDS" },
    ],
  }),
  component: About,
});

const values = [
  { i: "precision_manufacturing", t: "Uncompromising Precision", d: "Every joint, every line, every angle is engineered to surpass industry standards." },
  { i: "eco", t: "Sustainable Innovation", d: "We integrate sustainable materials and energy-aware systems into every build." },
  { i: "draw", t: "Artistic Integrity", d: "Design is not an afterthought — it is the foundation of everything we deliver." },
];

const team = [
  { n: "Simon Migwi", r: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" },
  { n: "Chris Emmanuel", r: "Chief Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
  { n: "Aisha Nyong'o", r: "Head of Engineering", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" },
  { n: "David Otieno", r: "Project Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80" },
];

function About() {
  return (
    <SiteLayout navOverlay>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[color:var(--primary)] pt-32">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&q=80"
          alt="Construction site at dawn"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="container-x relative z-10 mx-auto max-w-[1440px] pb-24">
          <Reveal>
            <span className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> ABOUT US
            </span>
          </Reveal>
          <h1 className="max-w-4xl text-[clamp(48px,9vw,128px)] font-black leading-[0.95] text-white">Our Story</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad container-x mx-auto max-w-[1440px] grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <BlurText className="text-3xl font-black md:text-4xl" text="Building Tomorrow's Landmarks Today" />
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="text-lg text-[color:var(--secondary)]">
              Founded on the conviction that architecture should outlast trends, Menards is an East African construction studio focused on precision delivery. We design and build commercial, residential and infrastructure projects with a single bar: craft that compounds.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Big stat */}
      <section className="bg-[color:var(--primary)] py-20">
        <div className="container-x mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-8">
          <Reveal>
            <div className="text-[120px] font-black leading-none text-white md:text-[200px]">
              <CountUp to={5} suffix="+" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--gold)]">YEARS OF</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--gold)]">EXCELLENCE</div>
              <p className="mt-6 max-w-sm text-white/70">Half a decade of structural precision across the region.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad container-x mx-auto max-w-[1440px]">
        <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {values.map((v, i) => (
            <StaggerItem key={i}>
              <SpotlightCard className="h-full border border-[color:var(--outline)] p-10">
                <span className="material-symbols-outlined mb-8 text-[color:var(--gold)]" style={{ fontSize: 44 }}>{v.i}</span>
                <h3 className="mb-4 text-2xl font-black">{v.t}</h3>
                <p className="text-[color:var(--secondary)]">{v.d}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Vision / Mission */}
      <section className="section-pad bg-[color:var(--surface-low)]">
        <div className="container-x mx-auto grid max-w-[1440px] grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal>
            <h3 className="mb-6 text-3xl font-black">Our Vision</h3>
            <p className="text-lg text-[color:var(--secondary)]">
              To be the most trusted name in East African construction, defined by buildings that the next generation still admires.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="mb-6 text-3xl font-black">Our Mission</h3>
            <p className="text-lg text-[color:var(--secondary)]">
              Deliver every project on time, on budget, and at a finish that lets the client be proud of the seam, the surface, and the silhouette.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad container-x mx-auto max-w-[1440px]">
        <Reveal>
          <span className="mb-12 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> OUR PRINCIPLES
          </span>
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-px bg-[color:var(--outline)] md:grid-cols-4">
          {["Quality", "Delivery", "Precision", "Innovation"].map((v, i) => (
            <StaggerItem key={i} className="flex aspect-square items-center justify-center bg-[color:var(--background)] p-8 text-center">
              <span className="text-2xl font-black md:text-3xl">{v}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Team */}
      <section className="section-pad bg-[color:var(--surface-low)]">
        <div className="container-x mx-auto max-w-[1440px]">
          <BlurText className="mb-16 text-4xl font-black md:text-6xl" text="Leadership" />
          <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {team.map((m, i) => (
              <StaggerItem key={i}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-[color:var(--surface-high)]">
                    <img src={m.img} alt={m.n} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  </div>
                  <h4 className="mt-6 text-xl font-black">{m.n}</h4>
                  <p className="text-sm text-[color:var(--secondary)]">{m.r}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner title="Let's craft your" accent="legacy together." />
    </SiteLayout>
  );
}
