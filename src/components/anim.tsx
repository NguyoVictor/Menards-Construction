import { motion, useScroll, useTransform, useMotionValue, useSpring, animate, useInView, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ComponentProps } from "react";

/* =========================
   SplitText — letter-by-letter
   ========================= */
export function SplitText({
  text,
  className = "",
  as: Tag = "span",
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className} style={{ display: "inline-block" }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((ch, ci) => (
            <motion.span
              key={ci}
              style={{ display: "inline-block" }}
              initial={{ y: "0.9em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: delay + (wi * 4 + ci) * stagger,
                duration: 0.6,
                ease: [0.2, 0.7, 0.2, 1],
              }}
            >
              {ch}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}

/* =========================
   BlurText — fade in from blur on scroll
   ========================= */
export function BlurText({
  text,
  className = "",
  as: Tag = "h2",
}: {
  text: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref as any}
      initial={{ filter: "blur(14px)", opacity: 0, y: 24 }}
      animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <Tag className={className}>{text}</Tag>
    </motion.div>
  );
}

/* =========================
   SpotlightCard — gold cursor spotlight
   ========================= */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(184, 134, 11, 0.35)",
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [opacity, setOpacity] = useState(0);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
      data-cursor-hover
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(360px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

/* =========================
   TiltCard — 3D tilt on hover
   ========================= */
export function TiltCard({
  children,
  className = "",
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sy = useSpring(ry, { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * max);
        rx.set(-py * max);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{
        rotateX: sx,
        rotateY: sy,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={className}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}

/* =========================
   MagneticButton — cursor magnetism
   ========================= */
export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  ...rest
}: ComponentProps<typeof motion.button> & { strength?: number }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={className}
      data-cursor-hover
      {...rest}
    >
      {children}
    </motion.button>
  );
}

/* =========================
   Aurora — animated gradient background
   ========================= */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -inset-[40%] opacity-60"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #B8860B 0%, #1f1f1f 25%, #B8860B 50%, #1f1f1f 75%, #B8860B 100%)",
          filter: "blur(80px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(17,17,17,0.85) 75%)",
        }}
      />
    </div>
  );
}

/* =========================
   Particles — floating dots
   ========================= */
export function Particles({ count = 40, className = "" }: { count?: number; className?: string }) {
  const [dots, setDots] = useState<{ x: number; y: number; d: number; s: number }[]>([]);
  useEffect(() => {
    setDots(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: 8 + Math.random() * 12,
        s: 0.5 + Math.random() * 1.5,
      })),
    );
  }, [count]);
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.s,
            height: d.s,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: d.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* =========================
   Reveal — scroll-linked entrance
   ========================= */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   Stagger container
   ========================= */
export function Stagger({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = ({
  children,
  className = "",
  y = 30,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) => (
  <motion.div
    variants={{
      hidden: { y, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/* =========================
   CountUp — animate number when in view
   ========================= */
export function CountUp({
  to,
  suffix = "",
  className = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setVal(v),
    });
    return controls.stop;
  }, [inView, to, duration]);
  return (
    <span ref={ref} className={className}>
      {Math.round(val)}
      {suffix}
    </span>
  );
}

/* =========================
   Custom cursor
   ========================= */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.4 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-[color:var(--gold)] md:block"
      />
      <motion.div
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hover ? 0 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-[color:var(--gold)]/60 md:block"
      />
    </>
  );
}

/* Re-exports for convenience */
export { motion, AnimatePresence, useScroll, useTransform };
