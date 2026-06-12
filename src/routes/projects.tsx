import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { BlurText, Reveal, Stagger, StaggerItem, TiltCard, motion } from "@/components/anim";
import { CtaBanner } from "./index";
import { useState } from "react";

const SITE_URL = "https://menardsconstruction.com";
const PROJECTS_OG_IMG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&q=80";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | Featured Construction Work | Menards Construction" },
      { name: "description", content: "Browse featured Menards Construction projects across commercial, residential, infrastructure and renovation in Kenya." },
      { name: "keywords", content: "Menards construction projects, Kenya construction portfolio, commercial buildings Nairobi, residential projects, infrastructure work, renovation portfolio" },
      { property: "og:title", content: "Our Projects | Menards Construction" },
      { property: "og:description", content: "Featured construction projects by Menards across commercial, residential, infrastructure and renovation in Kenya." },
      { property: "og:image", content: PROJECTS_OG_IMG },
      { property: "og:url", content: SITE_URL + "/projects" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Menards Construction" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Projects | Menards Construction" },
      { name: "twitter:description", content: "Featured construction projects by Menards Construction in Kenya." },
      { name: "twitter:image", content: PROJECTS_OG_IMG },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/projects" }],
  }),
  component: Projects,
});


type Cat = "All" | "Commercial" | "Residential" | "Infrastructure" | "Renovation";

const projects: { t: string; c: Exclude<Cat, "All">; year: string; img: string }[] = [
  { t: "The Linear Residence", c: "Residential", year: "2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhaSLRPpAaE38BjjEVZY6riYoLNpRWRYjpnxY_d0W-frfirAjzIlDqRJS7xpjnKlNkRpjjcFVtCmyw_JCi0SReEz6i2mHIsZ8YQ6qbzuQaURkQYQkE1zTdHHjQXZ3IDNi2FR2RnfoSL69SnB7hWffXPdHux7gfxsCJ5oSZmjrVGT4VDoIhld8CBfgxnVy9nh4sA8b0TKYsKZmvySs10Hpf22x_nqpsELD-He_gJEtrah9wgSBgCrDWc-l7OXq-Hajq18zY37o9r0YZ" },
  { t: "Prism Corporate Hub", c: "Commercial", year: "2023", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80" },
  { t: "The Monolith Library", c: "Infrastructure", year: "2023", img: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1400&q=80" },
  { t: "Nova Workspace Atrium", c: "Commercial", year: "2024", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80" },
  { t: "Heritage Brownstone", c: "Renovation", year: "2022", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=80" },
  { t: "Skyline Towers", c: "Commercial", year: "2025", img: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=1400&q=80" },
  { t: "Cedar House", c: "Residential", year: "2024", img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1400&q=80" },
  { t: "Cross-Town Transit", c: "Infrastructure", year: "2025", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1400&q=80" },
];

const cats: Cat[] = ["All", "Commercial", "Residential", "Infrastructure", "Renovation"];

function Projects() {
  const [filter, setFilter] = useState<Cat>("All");
  const items = filter === "All" ? projects : projects.filter((p) => p.c === filter);

  return (
    <SiteLayout navOverlay>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[color:var(--primary)] pt-32">
        <img
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=2000&q=80"
          alt="Architectural masterpiece"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="container-x relative z-10 mx-auto max-w-[1440px] pb-24">
          <Reveal>
            <span className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" /> OUR WORK
            </span>
          </Reveal>
          <h1 className="max-w-4xl text-[clamp(48px,9vw,128px)] font-black leading-[0.95] text-white">Featured Projects</h1>
        </div>
      </section>

      {/* Filters */}
      <section className="container-x mx-auto max-w-[1440px] pt-20">
        <div className="flex flex-wrap gap-2 border-b border-[color:var(--outline)] pb-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="relative rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)] transition-colors hover:text-[color:var(--primary)]"
              data-cursor-hover
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-[color:var(--primary)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${filter === c ? "text-white" : ""}`}>{c}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad container-x mx-auto max-w-[1440px] pt-12">
        <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {items.map((p) => (
            <StaggerItem key={p.t}>
              <TiltCard className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden bg-[color:var(--surface-high)]">
                  <img src={p.img} alt={p.t} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">{p.c} · {p.year}</span>
                    <h3 className="mt-2 text-2xl font-black">{p.t}</h3>
                  </div>
                  <span className="material-symbols-outlined transition-transform group-hover:rotate-45" style={{ fontSize: 24 }}>north_east</span>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBanner title="Let's craft your" accent="architectural legacy together." />
    </SiteLayout>
  );
}
