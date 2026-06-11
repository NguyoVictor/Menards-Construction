import { createFileRoute, Link } from "@tanstack/react-router";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { SiteLayout } from "@/components/site-layout";
import {
  SplitText,
  BlurText,
  SpotlightCard,
  TiltCard,
  MagneticButton,
  Aurora,
  Particles,
  Reveal,
  Stagger,
  StaggerItem,
  CountUp,
} from "@/components/anim";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MENARDS | Architectural Excellence" },
      { name: "description", content: "Building dreams brick at a time — premium architecture, construction and infrastructure." },
      { property: "og:title", content: "MENARDS | Architectural Excellence" },
      { property: "og:image", content: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWBE7AGC6DBdgeJYbDkAReBHtmjpnyUuJZHw1WmGCrEU5lCbalzIWGoPcqbcg1XGYOHwR472Uf4Nswm6vFskcYA2Q-QvARPfEjPIzYeRSJmLX_EsS--z5aC8g3evR7H9xL2ZqEPTQiVzz68qQxSMiN8Z_sC3NhpB69bZaIJGsK9L5XwHofeoIOtRudSQXmq1QP8HiH1zmpuuF6p9yzW0YPZIDTy8VGgT6bPT3RnsnU5KsuCAEi6KTc1NWz1Mra1ICZPzz78gmpQtgq" },
    ],
  }),
  component: Home,
});

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDWBE7AGC6DBdgeJYbDkAReBHtmjpnyUuJZHw1WmGCrEU5lCbalzIWGoPcqbcg1XGYOHwR472Uf4Nswm6vFskcYA2Q-QvARPfEjPIzYeRSJmLX_EsS--z5aC8g3evR7H9xL2ZqEPTQiVzz68qQxSMiN8Z_sC3NhpB69bZaIJGsK9L5XwHofeoIOtRudSQXmq1QP8HiH1zmpuuF6p9yzW0YPZIDTy8VGgT6bPT3RnsnU5KsuCAEi6KTc1NWz1Mra1ICZPzz78gmpQtgq";

const ABOUT_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBgwiz4ln9vPcYufOv-jRwaK3bK0r76vww6Afje6N3s0X3Q8k0t1cW94Yh40BNy4QcLu4uInYDt4vOV9mqYyoD1ig1s2r2jNF4k6aoNhBks6xi6q8Z7MfWtot9KcSoOp0Ly6uBljrS57Hh_UitkL84p89_8v9wv6hE8lBZrGZeUPi4koXDuqrsmbhQkZPZNgpgNINFD6kl6xTemUfDpW5-vIrpPbiZz0pwywn32at55SKaImd05hgfGmbmHhYmeXfeojP7zoVzvvq2T";

const services = [
  { n: "01", t: "Commercial", d: "High-performance workspace designs and corporate headquarters built for the future.", i: "business" },
  { n: "02", t: "Residential", d: "Bespoke living spaces that harmonize with their surroundings and enhance lifestyle.", i: "home_work" },
  { n: "03", t: "Infrastructure", d: "Robust foundational projects designed for urban growth and logistical excellence.", i: "architecture" },
  { n: "04", t: "Renovation", d: "Restoring historical beauty and updating older structures with modern efficiency.", i: "construction" },
  { n: "05", t: "Project Mgmt", d: "End-to-end oversight ensuring precision, budget compliance, and timely delivery.", i: "assignment" },
  { n: "06", t: "Design", d: "Conceptual blueprints that challenge conventions and prioritize aesthetics.", i: "palette" },
];

const projects = [
  { t: "The Linear Residence", c: "Residential · 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhaSLRPpAaE38BjjEVZY6riYoLNpRWRYjpnxY_d0W-frfirAjzIlDqRJS7xpjnKlNkRpjjcFVtCmyw_JCi0SReEz6i2mHIsZ8YQ6qbzuQaURkQYQkE1zTdHHjQXZ3IDNi2FR2RnfoSL69SnB7hWffXPdHux7gfxsCJ5oSZmjrVGT4VDoIhld8CBfgxnVy9nh4sA8b0TKYsKZmvySs10Hpf22x_nqpsELD-He_gJEtrah9wgSBgCrDWc-l7OXq-Hajq18zY37o9r0YZ" },
  { t: "Prism Corporate Hub", c: "Commercial · 2023", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80" },
  { t: "The Monolith Library", c: "Public · 2023", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80" },
  { t: "Nova Workspace Atrium", c: "Commercial · 2024", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80" },
];

const testimonials = [
  { q: "Menards construction exceeded our expectations in every way. Their attention to detail and commitment to quality, made Perfume Alchemy an achievement for us.", n: "Anonymous", r: "Perfume Alchemy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLnX9CRykPNyEogWPGekOCKLU0BTQB0bzWxvFRPi9SKwsMP1Ot-1k7P5KhI1KFBwQa2mlOpJrZ-DQu_iY4cP2u8Yvqsi9pjk5Bvr1OZWaB7Z2mZ8r2tCBzWtbsmFNmKMI3PWtJfDMpgPzc1pjzs2_jWdMC8wMUYkj_8rH7yfPi9hkM" },
  { q: "The collaborative process was seamless. They don't just build; they consult, innovate, and lead with absolute precision.", n: "Elena Rossi", r: "Creative Director, Studio Rossi", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEBAmqt7jVlWwpUsvw5hFn9Ln0sbnbr_k13jlFM5v0JCJw_NoOaXWiBR3MPj8Fmd8AorPMJWW4N4dbkLfwpG4iZ9u1rbfgeYgskt05SJNYS2FlziP-Pci9MCGoaJgVrDRZ9rzFkXobceTQc2bPHtVHMujPU0wsasb4DD0SnMC4rAiMUIIPP6hI12aXMIH-wlrcx06_8cgNqjrCsFhnrP1tf7e8ln94-Pp1LKPqnMJjRHG1dNdqdgNIIBtKPHcWw-0-Acf-14BUbqg8" },
  { q: "Their ability to blend sustainable materials with high-end aesthetic value makes them the only choice for our future developments.", n: "Marcus Thorne", r: "Director of Urban Planning", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIRpdOP7CbU94YQNuNIFoaH33rTakiMgMmpXdivI1aCU18v5_-a1M1grG8B1X1Py3yxYKieW2v1MXcRGRYs_K2SRwGpzIw2mtdQsEB02_rulYhygqUAVPO-lL-KGwsMAYqF5mEx-EK_NG4YC5XKA_hUedHjQ-KMsmPLK3ZuEwgxhtpQ9ZSlBEIw6-70Um5ZQWMVRTyU9I7jpop8Err_hNhxXDN8vNZbr0xqw2AZSujNdKVOb5A9p3OYyHEXF4MdGTdq9s8qq1rLHMf" },
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 400]);

  return (
    <section ref={ref} className="relative flex min-h-[92vh] items-end overflow-hidden pt-32">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={HERO_IMG} alt="Modern corporate architecture" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
      </motion.div>
      <Particles count={50} />
      <div className="container-x relative z-10 mx-auto w-full max-w-[1440px] pb-24">
        <div className="max-w-5xl">
          <h1 className="text-[clamp(48px,9vw,128px)] font-black leading-[0.95] tracking-tight text-white">
            <SplitText text="Architectural" />
            <br />
            <span className="font-accent italic font-normal text-stroke">
              <SplitText text="Excellence" delay={0.4} />
            </span>
          </h1>
          <Reveal delay={1.1}>
            <p className="mt-8 max-w-lg text-lg text-white/80">
              Creating spaces that inspire, endure, and redefine the boundaries of modern living. We build more than structures; we build legacies.
            </p>
          </Reveal>
          <Reveal delay={1.3}>
            <div className="mt-12 flex flex-col gap-4 md:flex-row">
              <MagneticButton className="inline-flex items-center gap-3 rounded-full bg-[color:var(--gold)] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                View Our Work <span className="material-symbols-outlined" style={{ fontSize: 18 }}>east</span>
              </MagneticButton>
              <MagneticButton className="inline-flex items-center gap-3 rounded-full border border-white/80 bg-transparent px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[color:var(--primary)]">
                Get In Touch
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="bg-[color:var(--primary)] container-x py-14">
      <Stagger className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 md:grid-cols-4">
        {[
          { v: 10, s: "+", l: "Projects Completed" },
          { v: 10, s: "+", l: "Expert Team" },
          { v: 5, s: "+", l: "Years Experience" },
          { v: 24, s: "/6", l: "Client Support" },
        ].map((s, i) => (
          <StaggerItem key={i} className="text-center md:text-left">
            <div className="text-4xl font-black text-white md:text-5xl">
              <CountUp to={s.v} suffix={s.s} />
            </div>
            <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">{s.l}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function AboutSnippet() {
  return (
    <section className="section-pad container-x mx-auto max-w-[1440px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col justify-center md:col-span-5">
          <Reveal>
            <span className="mb-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
              ABOUT US
            </span>
          </Reveal>
          <BlurText
            as="h2"
            className="mb-8 text-4xl font-black leading-tight md:text-6xl"
            text={
              <>
                Building Dreams<br />Brick At A Time
              </>
            }
          />
          <Reveal>
            <p className="mb-10 max-w-md text-lg text-[color:var(--secondary)]">
              Since our inception, Menards Construction has been dedicated to the pursuit of structural perfection. We blend technical mastery with visionary design to create environments that stand the test of time.
            </p>
          </Reveal>
          <Reveal>
            <Link to="/about" className="group inline-flex items-center gap-4">
              <span className="border-b-2 border-[color:var(--primary)] pb-1 text-[11px] font-bold uppercase tracking-[0.25em] group-hover:border-[color:var(--gold)]">Learn More</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2" style={{ fontSize: 20 }}>east</span>
            </Link>
          </Reveal>
        </div>
        <div className="relative col-span-12 mt-16 md:col-span-7 md:mt-0">
          <Reveal y={60}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={ABOUT_IMG} alt="Architectural detail" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="absolute -bottom-8 -left-4 bg-[color:var(--gold)] p-8 text-white md:-left-12 md:p-12">
              <div className="text-5xl font-black leading-none md:text-6xl">
                <CountUp to={5} suffix="+" />
              </div>
              <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em]">Years of<br />Excellence</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-pad bg-[color:var(--surface-low)]">
      <div className="container-x mx-auto max-w-[1440px]">
        <Reveal>
          <span className="mb-16 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]" />
            WHAT WE DO
          </span>
        </Reveal>
        <Stagger className="grid grid-cols-1 border-t border-[color:var(--outline)] md:grid-cols-3">
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <SpotlightCard className="group h-full border-b border-r-0 border-[color:var(--outline)] p-12 transition-colors duration-500 hover:bg-[color:var(--primary)] md:border-r [&:nth-child(3n)]:md:border-r-0">
                <span className="mb-8 block text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)] group-hover:text-white/60">{s.n}</span>
                <h3 className="mb-6 text-2xl font-black transition-colors group-hover:text-white md:text-3xl">{s.t}</h3>
                <p className="mb-8 max-h-0 translate-y-4 overflow-hidden text-[color:var(--secondary)] opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:translate-y-0 group-hover:text-white/80 group-hover:opacity-100">{s.d}</p>
                <span className="material-symbols-outlined transition-colors group-hover:text-white" style={{ fontSize: 48 }}>{s.i}</span>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  return (
    <section className="section-pad container-x mx-auto max-w-[1440px]">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <Reveal>
            <span className="mb-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
              PORTFOLIO
            </span>
          </Reveal>
          <BlurText className="text-4xl font-black md:text-6xl" text="Featured Works" />
        </div>
        <Link to="/projects" className="group hidden items-center gap-4 md:flex">
          <span className="border-b-2 border-[color:var(--primary)] pb-1 text-[11px] font-bold uppercase tracking-[0.25em]">View Portfolio</span>
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-45" style={{ fontSize: 20 }}>north_east</span>
        </Link>
      </div>
      <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((p, i) => (
          <StaggerItem key={i}>
            <TiltCard className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden bg-[color:var(--surface-high)]">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">{p.c}</span>
                  <h3 className="mt-2 text-2xl font-black">{p.t}</h3>
                </div>
                <span className="material-symbols-outlined transition-transform group-hover:rotate-45" style={{ fontSize: 24 }}>north_east</span>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-pad bg-[color:var(--surface-low)]">
      <div className="container-x mx-auto max-w-[1440px]">
        <Reveal>
          <span className="mb-16 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> TESTIMONIALS
          </span>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-px bg-[color:var(--outline)] md:grid-cols-3">
          {testimonials.map((t, i) => (
            <StaggerItem key={i} className="flex h-full flex-col justify-between bg-[color:var(--background)] p-12">
              <div>
                <span className="material-symbols-outlined mb-8 text-[color:var(--gold)]" style={{ fontSize: 40 }}>format_quote</span>
                <p className="mb-12 text-lg italic leading-relaxed text-[color:var(--foreground)]/80">"{t.q}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.n} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <span className="block text-sm font-bold">{t.n}</span>
                  <span className="text-xs text-[color:var(--secondary)]">{t.r}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function CtaBanner({ title, subtitle, accent }: { title: string; subtitle?: string; accent: string }) {
  return (
    <section className="section-pad relative overflow-hidden bg-[color:var(--primary)]">
      <Aurora />
      <div className="container-x relative z-10 mx-auto max-w-[1440px] text-center">
        <BlurText
          className="text-5xl font-black leading-[0.95] text-white md:text-7xl lg:text-[80px]"
          text={
            <>
              {title} <br />
              <span className="font-accent italic font-normal text-stroke">{accent}</span>
            </>
          }
        />
        {subtitle && <p className="mx-auto mt-8 max-w-xl text-white/70">{subtitle}</p>}
        <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row">
          <MagneticButton className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--gold)] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            Start a Project <span className="material-symbols-outlined" style={{ fontSize: 18 }}>east</span>
          </MagneticButton>
          <MagneticButton className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[color:var(--primary)]">
            View Our Work
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout navOverlay>
      <Hero />
      <StatsBar />
      <AboutSnippet />
      <ServicesSection />
      <ProjectsPreview />
      <Testimonials />
      <CtaBanner title="Ready to Build" accent="Your Vision?" />
    </SiteLayout>
  );
}
