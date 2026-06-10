import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "motion/react";
import { useState, type ReactNode } from "react";
import { MagneticButton, Aurora, Reveal } from "./anim";
import menardsIcon from "@/assets/menards-icon.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ overlay = false }: { overlay?: boolean }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  const dark = scrolled || overlay;

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(17,17,17,0.92)" : overlay ? "rgba(17,17,17,0)" : "rgba(252,249,245,0.9)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-300 md:px-10 lg:px-16 ${scrolled ? "py-4" : "py-6"}`}>
        <Link to="/" className="flex items-center gap-3">
          <img
            src={menardsIcon.url}
            alt="Menards"
            className="h-9 w-9 object-contain transition-[filter] duration-300"
            style={{ filter: dark ? "none" : "invert(1) brightness(0)" }}
          />
          <span
            className={`font-display text-xl font-black tracking-[0.18em] transition-colors ${
              dark ? "text-white" : "text-[color:var(--primary)]"
            }`}
          >
            MENARDS
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} dark={dark}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MagneticButton
            className={`hidden whitespace-nowrap rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors md:inline-flex ${
              dark
                ? "bg-[color:var(--gold)] text-white hover:bg-white hover:text-[color:var(--primary)]"
                : "bg-[color:var(--primary)] text-white hover:bg-[color:var(--gold)]"
            }`}
          >
            Get a Quote
          </MagneticButton>
          <button
            className={`md:hidden ${dark ? "text-white" : "text-[color:var(--primary)]"}`}
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 32 }}>
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container-x mx-auto flex flex-col gap-4 bg-[color:var(--primary)] pb-8 pt-2 md:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-white/80 text-sm uppercase tracking-[0.2em]"
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ to, children, dark }: { to: string; children: ReactNode; dark: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`relative text-[10px] uppercase tracking-[0.18em] transition-colors lg:text-[11px] lg:tracking-[0.22em] ${
        dark ? (active ? "text-white" : "text-white/60 hover:text-white") : active ? "text-[color:var(--primary)]" : "text-[color:var(--secondary)] hover:text-[color:var(--primary)]"
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[color:var(--gold)]"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--primary)] pb-10 pt-24 text-white">
      <div className="container-x mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="mb-6 flex flex-col">
            <span className="text-base font-black uppercase tracking-[0.2em]">MENARDS</span>
            <span className="mt-1 text-xs text-white/60">Building Dreams, Brick At A Time.</span>
          </div>
          <p className="max-w-xs text-sm text-white/60">
            Crafting architectural landmarks through precision engineering and artistic soul.
          </p>
          <div className="mt-8 flex gap-5">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/60 transition-transform hover:-translate-y-1 hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-white/60 transition-transform hover:-translate-y-1 hover:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3h-2.7v12.1a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.8a5.4 5.4 0 1 0 4.5 5.3V8.6a6.8 6.8 0 0 0 4 1.3V7.2a4.1 4.1 0 0 1-4-4.2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em]">Navigation</h5>
          <ul className="space-y-3 text-sm text-white/60">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="block transition-transform hover:translate-x-1 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em]">Resources</h5>
          <ul className="space-y-3 text-sm text-white/60">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h5 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em]">Contact</h5>
          <div className="space-y-3 text-sm text-white/60">
            <p>menardscontractorsltd@gmail.com</p>
            <p>+254 710 792 208</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
        <div className="col-span-12 mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © 2026 Menards Construction. Building Dreams, Brick At A Time.
        </div>
      </div>

      <Reveal>
        <div
          className="pointer-events-none mt-8 block w-full select-none text-center uppercase leading-none"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 900,
            fontSize: "clamp(80px, 18vw, 260px)",
            letterSpacing: "0.05em",
            lineHeight: 0.85,
            color: "rgba(255,255,255,0.08)",
            marginTop: "-0.1em",
          }}
        >
          MENARDS
        </div>
      </Reveal>
    </footer>
  );
}

export function SiteLayout({
  children,
  navOverlay = false,
}: {
  children: ReactNode;
  navOverlay?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav overlay={navOverlay} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
