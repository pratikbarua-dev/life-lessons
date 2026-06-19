"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "/", isActive: true },
    { name: "Public Lessons", href: "/public-lessons", isActive: false },
    { name: "Add Lesson", href: "/add-lesson", isActive: false },
    { name: "My Lessons", href: "/my-lessons", isActive: false },
    { name: "Pricing", href: "/pricing", isActive: false },
  ];

  // Variants for the mobile menu container overlay
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delayChildren: 0.1, staggerChildren: 0.05 },
    },
  };

  // Variants for individual mobile links cascading down
  const linkVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={false}
      animate={scrolled || isOpen ? "scrolled" : "transparent"}
      variants={{
        transparent: {
          backgroundColor: "rgba(16, 20, 21, 0)",
          backdropFilter: "blur(0px)",
          borderBottomColor: "rgba(255,255,255,0)",
        },
        scrolled: {
          backgroundColor: "rgba(16, 20, 21, 0.85)",
          backdropFilter: "blur(24px)",
          borderBottomColor: "rgba(255,255,255,0.06)",
        },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-b"
      style={{ WebkitBackdropFilter: scrolled || isOpen ? "blur(24px)" : "blur(0px)" }}
    >
      <motion.div
        animate={{ height: scrolled ? 60 : 72 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex justify-between items-center px-4 sm:px-8 max-w-7xl mx-auto w-full relative z-50"
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="font-headline-md text-xl sm:text-2xl text-primary hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Digital Life Lessons
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 items-center h-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-body-md relative py-1 transition-all duration-300 group ${link.isActive
                ? "text-white font-bold"
                : "text-white/60 hover:text-white"
                }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-out ${link.isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Authentication Actions & Mobile Toggle */}
        <div className="flex gap-2 sm:gap-4 items-center">
          <div className="hidden md:flex gap-2 sm:gap-4 items-center">
            <Link
              href="/login"
              className="text-primary font-label-md px-4 py-1 hover:bg-white/5 rounded-lg transition-all relative group"
            >
              Login
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-primary/50 transition-all duration-300 group-hover:w-3/4" />
            </Link>
            <Link
              href="/get-started"
              className="relative bg-primary text-on-primary font-label-md px-5 py-2 rounded-lg shadow-lg shadow-primary/20 active:scale-95 duration-150 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 overflow-hidden group whitespace-nowrap"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none z-50 ml-2"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
              <motion.path
                strokeWidth="2"
                strokeLinecap="round"
                d="M 3.75 6.75 L 20.25 6.75"
                animate={isOpen ? { d: "M 4.5 19.5 L 19.5 4.5" } : { d: "M 3.75 6.75 L 20.25 6.75" }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                strokeWidth="2"
                strokeLinecap="round"
                d="M 3.75 12 L 20.25 12"
                initial={{ opacity: 1 }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                strokeWidth="2"
                strokeLinecap="round"
                d="M 3.75 17.25 L 20.25 17.25"
                animate={isOpen ? { d: "M 4.5 4.5 L 19.5 19.5" } : { d: "M 3.75 17.25 L 20.25 17.25" }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile/Tablet Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#101415]/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col justify-center px-6 sm:px-12 pt-20"
          >
            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-semibold tracking-wide block transition-colors ${link.isActive ? "text-primary" : "text-white/70 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <hr className="border-white/10 my-4" />

              {/* Mobile Auth actions (Visible only on mobile screen widths) */}
              <motion.div variants={linkVariants} className="flex flex-col sm:flex-row gap-4 md:hidden">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-primary border border-primary/20 bg-primary/5 py-3 rounded-xl font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="text-center bg-primary text-on-primary py-3 rounded-xl font-medium shadow-lg shadow-primary/20"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom glow line when scrolled */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled && !isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(195, 192, 255, 0.2), transparent)",
        }}
        aria-hidden="true"
      />
    </motion.nav>
  );
}