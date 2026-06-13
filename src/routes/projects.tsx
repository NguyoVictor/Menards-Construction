import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { BlurText, Reveal, Stagger, StaggerItem, TiltCard, motion } from "@/components/anim";
import { CtaBanner } from "./index";
import { useState, useEffect, useCallback } from "react";

const SITE_URL = "https://menardsconstruction.com";
const PROJECTS_OG_IMG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&q=80";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | Featured Construction Work | Menards Construction" },
      { name: "description", content: "Browse featured Menards Construction projects across commercial, residential and renovation in Kenya." },
      { name: "keywords", content: "Menards construction projects, Kenya construction portfolio, commercial buildings Nairobi, residential projects, renovation portfolio" },
      { property: "og:title", content: "Our Projects | Menards Construction" },
      { property: "og:description", content: "Featured construction projects by Menards across commercial, residential and renovation in Kenya." },
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

type Cat = "All" | "Commercial" | "Residential" | "Renovation";
type MediaItem = { type: "image"; src: string } | { type: "video"; src: string };
type Project = {
  t: string;
  c: Exclude<Cat, "All">;
  year: string;
  cover: string;
  media: MediaItem[];
};

const projects: Project[] = [
  {
    t: "Chaka Villa",
    c: "Residential",
    year: "2023",
    cover: "/media/chaka-villa-after.jpg",
    media: [
      { type: "image", src: "/media/chaka-villa-after.jpg" },
      { type: "image", src: "/media/chaka-villa-before.jpg" },
      { type: "image", src: "/media/chaka-1.jpeg" },
      { type: "image", src: "/media/chaka-2.jpeg" },
      { type: "image", src: "/media/chaka-3.jpeg" },
      { type: "image", src: "/media/chaka-4.jpeg" },
      { type: "image", src: "/media/chaka-6.jpeg" },
      { type: "image", src: "/media/chaka-7.jpeg" },
      { type: "image", src: "/media/chaka-8.jpeg" },
      { type: "image", src: "/media/chaka-9.jpeg" },
      { type: "image", src: "/media/chaka-10.jpeg" },
      { type: "image", src: "/media/chaka-11.jpeg" },
      { type: "image", src: "/media/chaka-12.jpeg" },
      { type: "image", src: "/media/chaka-13.jpeg" },
      { type: "image", src: "/media/chaka-14.jpeg" },
      { type: "image", src: "/media/chaka-15.jpeg" },
      { type: "image", src: "/media/chaka-16.jpeg" },
      { type: "video", src: "/media/chaka-5.mp4" },
    ],
  },
  {
    t: "Perfume Alchemy",
    c: "Commercial",
    year: "2023",
    cover: "/media/perfume-alchemy-after.jpeg",
    media: [
      { type: "image", src: "/media/perfume-alchemy-after.jpeg" },
      { type: "image", src: "/media/perfume-alchemy-before.jpeg" },
      { type: "image", src: "/media/perfume-1.jpeg" },
      { type: "image", src: "/media/perfume-2.jpeg" },
      { type: "image", src: "/media/perfume-3.jpeg" },
      { type: "video", src: "/media/perfume-vid-1.mp4" },
      { type: "video", src: "/media/perfume-vid-2.mp4" },
      { type: "video", src: "/media/perfume-vid-3.mp4" },
    ],
  },
  {
    t: "Kitengela Residence",
    c: "Residential",
    year: "2024",
    cover: "/media/kitengela-1.jpeg",
    media: [
      { type: "image", src: "/media/kitengela-1.jpeg" },
      { type: "image", src: "/media/kitengela-3.jpeg" },
      { type: "image", src: "/media/kitengela-4.jpeg" },
      { type: "image", src: "/media/kitengela-5.jpeg" },
      { type: "image", src: "/media/kitengela-6.jpeg" },
      { type: "image", src: "/media/kitengela-7.jpeg" },
      { type: "image", src: "/media/kitengela-8.jpeg" },
      { type: "image", src: "/media/kitengela-9.jpeg" },
      { type: "image", src: "/media/kitengela-10.jpeg" },
      { type: "video", src: "/media/kitengela-2.mp4" },
      { type: "image", src: "/media/kitengelamore1.jpg" },
      { type: "video", src: "/media/kitengelamore2.mp4" },
      { type: "video", src: "/media/kitengelamore3.mp4" },
      { type: "video", src: "/media/kitengelamore4.mp4" },
    ],
  },
  {
    t: "Milimani Residence",
    c: "Residential",
    year: "2026",
    cover: "/media/milimani-1.jpeg",
    media: [
      { type: "image", src: "/media/milimani-1.jpeg" },
      { type: "image", src: "/media/milimani-2.jpeg" },
      { type: "image", src: "/media/milimani-3.jpeg" },
      { type: "image", src: "/media/milimani-4.jpeg" },
      { type: "image", src: "/media/milimani-5.jpeg" },
      { type: "image", src: "/media/milimani-6.jpeg" },
      { type: "image", src: "/media/milimani-7.jpeg" },
      { type: "image", src: "/media/milimani-8.jpeg" },
      { type: "video", src: "/media/milimani-9.mp4" },
    ],
  },
  {
    t: "Nakuru Renovation",
    c: "Renovation",
    year: "2024",
    cover: "/media/nakuru-1.mp4",
    media: [
      { type: "video", src: "/media/nakuru-1.mp4" },
      { type: "video", src: "/media/nakuru-2.mp4" },
      { type: "video", src: "/media/nakuru-3.mp4" },
    ],
  },
  {
    t: "3 Bedroom Multi-Unit",
    c: "Residential",
    year: "2024",
    cover: "/media/multi-1.jpeg",
    media: [
      { type: "image", src: "/media/multi-1.jpeg" },
      { type: "image", src: "/media/multi-2.jpeg" },
      { type: "image", src: "/media/multi-3.jpeg" },
      { type: "image", src: "/media/multi-4.jpeg" },
      { type: "image", src: "/media/multi-5.jpeg" },
    ],
  },
  {
    t: "2 Bedroom Cottage",
    c: "Residential",
    year: "2026",
    cover: "/media/twobedroomcottage3.jpg",
    media: [
      { type: "image", src: "/media/twobedroomcottage3.jpg" },
      { type: "image", src: "/media/twobedroomcottage4.jpg" },
      { type: "image", src: "/media/twobedroomcottage5.jpg" },
      { type: "video", src: "/media/twobedroomcottage1.mp4" },
      { type: "video", src: "/media/twobedroomcottage2.mp4" },
    ],
  },
  {
    t: "3 Bedroom Timber House",
    c: "Residential",
    year: "2026",
    cover: "/media/3bedroomtimberhouse1.jpg",
    media: [
      { type: "image", src: "/media/3bedroomtimberhouse1.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse2.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse3.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse4.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse5.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse6.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse7.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse8.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse9.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse10.jpg" },
      { type: "image", src: "/media/3bedroomtimberhouse11.jpg" },
      { type: "video", src: "/media/3bedroomtimberhouse12.mp4" },
    ],
  },
];

const cats: Cat[] = ["All", "Commercial", "Residential", "Renovation"];

function LightboxVideo({ src }: { src: string }) {
  return (
    <video
      key={src}
      src={src}
      controls
      playsInline
      autoPlay
      muted
      controlsList="novolume"
      className="max-h-full max-w-full"
    />
  );
}

function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const current = project.media[index];

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? project.media.length - 1 : i - 1));
  }, [project.media.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === project.media.length - 1 ? 0 : i + 1));
  }, [project.media.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-black/95"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            {project.c} · {project.year}
          </span>
          <h2 className="text-xl font-black text-white">{project.t}</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/50">{index + 1} / {project.media.length}</span>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>close</span>
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-16">
        {current.type === "image" ? (
          <img
            key={current.src}
            src={current.src}
            alt={`${project.t} ${index + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <LightboxVideo key={current.src} src={current.src} />
        )}
        <button
          onClick={prev}
          className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={next}
          className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto px-6 py-4">
        {project.media.map((m, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded border-2 transition-all ${
              i === index ? "border-[color:var(--gold)]" : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            {m.type === "image" ? (
              <img src={m.src} alt="" loading="lazy" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-white/10">
                <span className="material-symbols-outlined text-white" style={{ fontSize: 24 }}>play_circle</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function Projects() {
  const [filter, setFilter] = useState<Cat>("All");
  const [selected, setSelected] = useState<Project | null>(null);
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
          <h1 className="max-w-4xl text-[clamp(48px,9vw,128px)] font-black leading-[0.95] text-white">
            Featured Projects
          </h1>
        </div>
      </section>

      <section className="container-x mx-auto max-w-[1440px] pt-20">
        <div className="flex flex-wrap gap-2 border-b border-[color:var(--outline)] pb-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="relative rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--secondary)] transition-colors hover:text-[color:var(--primary)]"
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

      <section className="section-pad container-x mx-auto max-w-[1440px] pt-12">
        {items.length === 0 ? (
          <div className="py-24 text-center text-[color:var(--secondary)]">
            No projects in this category yet.
          </div>
        ) : (
          <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {items.map((p) => (
              <StaggerItem key={p.t}>
                <div className="cursor-pointer" onClick={() => setSelected(p)}>
                  <TiltCard className="group">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--surface-high)]">
                      {p.cover.endsWith(".mp4") ? (
                        <video
                          src={p.cover}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src={p.cover}
                          alt={p.t}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5">
                        <span className="material-symbols-outlined text-white" style={{ fontSize: 14 }}>photo_library</span>
                        <span className="text-[10px] font-bold text-white">
                          {p.media.filter(m => m.type === "image").length > 0 &&
                            `${p.media.filter(m => m.type === "image").length} photos`}
                          {p.media.filter(m => m.type === "image").length > 0 &&
                            p.media.filter(m => m.type === "video").length > 0 && " · "}
                          {p.media.filter(m => m.type === "video").length > 0 &&
                            `${p.media.filter(m => m.type === "video").length} videos`}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                          {p.c} · {p.year}
                        </span>
                        <h3 className="mt-2 text-2xl font-black">{p.t}</h3>
                      </div>
                      <span className="material-symbols-outlined transition-transform group-hover:rotate-45" style={{ fontSize: 24 }}>
                        north_east
                      </span>
                    </div>
                  </TiltCard>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </section>

      {selected && (
        <Lightbox project={selected} onClose={() => setSelected(null)} />
      )}

      <CtaBanner title="Let's craft your" accent="architectural legacy together." />
    </SiteLayout>
  );
}