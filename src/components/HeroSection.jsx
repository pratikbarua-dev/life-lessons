"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import FloatingElements from "./FloatingElements";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const HERO_SLIDES = [
  {
    id: 1,
    badge: "Premium Edition",
    title: "Preserve Your",
    keyword: "Wisdom",
    description:
      "Your experiences are the blueprints for the next generation. Document, reflect, and share the lessons that truly matter in a space designed for depth.",
    bgImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1920&auto=format&fit=crop",
    primaryCta: { text: "Start Writing", href: "/write" },
    secondaryCta: { text: "Explore Archives", href: "/archives" },
  },
  {
    id: 2,
    badge: "Digital Archives",
    title: "Curate Your",
    keyword: "Legacy",
    description:
      "Build an organized collection of insights and personal milestones. Securely store your life's most valuable lessons in a digital vault.",
    bgImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1920&auto=format&fit=crop",
    primaryCta: { text: "Create Vault", href: "/vault" },
    secondaryCta: { text: "View Showcase", href: "/showcase" },
  },
  {
    id: 3,
    badge: "Shared Insights",
    title: "Pass Down",
    keyword: "Lessons",
    description:
      "Connect with readers looking for depth over noise. Identify patterns in your decision-making and accelerate your personal evolution.",
    bgImage:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1920&auto=format&fit=crop",
    primaryCta: { text: "Join Circle", href: "/join" },
    secondaryCta: { text: "Read Letters", href: "/letters" },
  },
];

const ROTATING_KEYWORDS = ["Wisdom", "Legacy", "Story", "Experience", "Journey"];

export default function HeroSection() {
  const targetRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  // Rotating keyword animation
  useEffect(() => {
    if (!shouldAnimate) return;
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % ROTATING_KEYWORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldAnimate]);

  // Map motion values for parallax effects
  const bgX = useTransform(mouseX, (v) => (shouldAnimate ? v * -5 : 0));
  const bgY = useTransform(mouseY, (v) => (shouldAnimate ? v * -5 : 0));
  const contentX = useTransform(mouseX, (v) => (shouldAnimate ? v * 2 : 0));
  const contentY = useTransform(mouseY, (v) => (shouldAnimate ? v * 2 : 0));

  // Mouse parallax handler
  const handleMouseMove = useCallback(
    (e) => {
      if (!shouldAnimate || window.innerWidth < 1024) return; // Disable parallax on tablet/mobile touch screens
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    },
    [shouldAnimate, mouseX, mouseY]
  );

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const slide = HERO_SLIDES[currentSlide];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section
      ref={targetRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] lg:min-h-[850px] w-full flex items-center overflow-hidden py-24 sm:py-32"
    >
      {/* Background Image Layer with cinematic animation & parallax */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundImage: `url('${slide.bgImage}')`,
              x: bgX,
              y: bgY,
            }}
            className="absolute inset-[-10px] sm:inset-[-20px] bg-cover bg-center grayscale opacity-15 sm:opacity-20 will-change-transform"
          />
        </AnimatePresence>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-neutral-950/85 sm:bg-neutral-950/80 pointer-events-none" />

        {/* Radial lighting effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(195, 192, 255, 0.04) 0%, transparent 70%), radial-gradient(ellipse at 20% 50%, rgba(195, 192, 255, 0.06) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        {/* Noise/grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02] sm:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Floating Decorative Elements - Hidden on mobile for performance */}
      <div className="hidden sm:block">
        <FloatingElements />
      </div>

      {/* Main Interactive Content Area wrapped in a Premium Glass Panel */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-8 max-w-7xl mx-auto mb-12 sm:mb-0"
        style={{
          x: contentX,
          y: contentY,
        }}
      >
        <motion.div
          className="max-w-2xl p-6 sm:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden group/card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={
            shouldAnimate
              ? {
                y: -2,
                scale: 1.005,
                transition: { duration: 0.3 },
              }
              : {}
          }
          style={{
            background: "rgba(10, 10, 10, 0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            boxShadow:
              "0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Ambient glow behind card */}
          <div
            className="absolute -inset-1 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(400px circle at 50% 50%, rgba(195, 192, 255, 0.05), transparent 60%)",
            }}
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.span
                className="inline-block px-3 py-1 bg-primary/15 text-primary text-xs font-semibold rounded-full mb-4 sm:mb-6 border border-primary/20 uppercase tracking-widest"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {slide.badge}
              </motion.span>

              {/* Title Header with rotating keyword */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-white leading-[1.15] min-h-[2.4em] sm:min-h-[auto]">
                {slide.title}
                <br />
                <span className="relative inline-block mt-1 min-w-[180px] sm:min-w-[auto]">
                  <AnimatePresence mode="wait">
                    {shouldAnimate ? (
                      <motion.span
                        key={ROTATING_KEYWORDS[keywordIndex]}
                        initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-primary inline-block font-extrabold"
                      >
                        {ROTATING_KEYWORDS[keywordIndex]}
                      </motion.span>
                    ) : (
                      <span className="text-primary inline-block font-extrabold">
                        {ROTATING_KEYWORDS[0]}
                      </span>
                    )}
                  </AnimatePresence>
                  {/* Underline accent */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
                </span>
              </h1>

              {/* Body Text */}
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 mb-8 sm:mb-10 leading-relaxed min-h-[72px] sm:min-h-[84px]">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4">
                {/* Primary CTA */}
                <Link
                  href={slide.primaryCta.href}
                  className="relative overflow-hidden bg-primary text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/40 sm:hover:-translate-y-0.5 transition-all duration-300 text-center group/btn flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                    {slide.primaryCta.text}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                  <span
                    className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    }}
                  />
                </Link>

                {/* Secondary CTA */}
                <Link
                  href={slide.secondaryCta.href}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium text-white hover:bg-white/10 transition-all duration-300 text-center border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 group/btn2 flex items-center justify-center gap-2 text-sm sm:text-base"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                  }}
                >
                  <span>{slide.secondaryCta.text}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn2:translate-x-1 opacity-60" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 lg:right-12 z-20 flex gap-4 items-center bg-black/70 backdrop-blur-md border border-white/10 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-[90%] sm:w-auto justify-between sm:justify-start">
        <div className="h-1 bg-white/25 w-24 sm:w-32 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:border-primary/30 transition-all text-white active:scale-95 group"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:border-primary/30 transition-all text-white active:scale-95 group"
            aria-label="Next slide"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgb(10, 10, 10), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}