import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { BlurText, Reveal, Stagger, StaggerItem, CountUp, SpotlightCard } from "@/components/anim";
import { CtaBanner } from "./index";
import simonImg from "@/assets/simon-migwi.jpg.asset.json";
import chrisImg from "@/assets/chris-emmanuel.jpg.asset.json";

const SITE_URL = "https://menardsconstruction.com";
const ABOUT_OG_IMG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&q=80";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Menards Construction | Building Dreams Brick At A Time" },
      { name: "description", content: "Learn about Menards Construction — a Nairobi-based construction company building dreams brick at a time with precision, integrity and craftsmanship." },
      { name: "keywords", content: "about Menards Construction, construction company Kenya, Nairobi contractors, Simon Migwi, Chris Emmanuel, building company Kenya" },
      { property: "og:title", content: "About Us | Menards Construction" },
      { property: "og:description", content: "Building dreams brick at a time — meet the team behind Menards Construction in Nairobi, Kenya." },
      { property: "og:image", content: ABOUT_OG_IMG },
      { property: "og:url", content: SITE_URL + "/about" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Menards Construction" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Us | Menards Construction" },
      { name: "twitter:description", content: "Meet the team behind Menards Construction — building dreams brick at a time in Nairobi, Kenya." },
      { name: "twitter:image", content: ABOUT_OG_IMG },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
  }),
  component: About,
});


const values = [
  { i: "precision_manufacturing", t: "Uncompromising Precision", d: "Every joint, every line, every angle is engineered to surpass industry standards." },
  { i: "eco", t: "Sustainable Innovation", d: "We integrate sustainable materials and energy-aware systems into every build." },
  { i: "draw", t: "Artistic Integrity", d: "Design is not an afterthought — it is the foundation of everything we deliver." },
];

const team = [
  { n: "Simon Migwi", r: "Quantity Surveyor & Project Manager", b: "With over years in construction, Simon founded the company with a vision of excellence.", img: simonImg.url },
  { n: "Chris Emmanuel", r: "Architect", b: "With a strong architectural background, Chris Emmanuel brings design precision and innovation to every Menards Construction project.", img: chrisImg.url },
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
              We build landmark structures across commercial, residential, and infrastructure sectors. Trusted by clients nationwide for quality, precision, and on-time delivery.
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
              To be the premier construction partner for the global diaspora, recognized for transforming remote visions into tangible landmarks through precision, reliability, and world-class craftsmanship.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="mb-6 text-3xl font-black">Our Mission</h3>
            <p className="text-lg text-[color:var(--secondary)]">
              At Menards Construction and Contractors, we bridge the distance by delivering high-quality construction projects that strictly adhere to our clients' briefs. We are committed to timely delivery and unwavering reliability, ensuring that every diaspora client can invest in their home country with absolute confidence and pride.
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
          <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {team.map((m, i) => (
              <StaggerItem key={i}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-[color:var(--surface-high)]">
                    <img src={m.img} alt={m.n} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  </div>
                  <h4 className="mt-6 text-xl font-black">{m.n}</h4>
                  <p className="text-sm text-[color:var(--secondary)]">{m.r}</p>
                  <p className="mt-3 text-sm text-[color:var(--secondary)]">{m.b}</p>
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
