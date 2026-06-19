"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionDivider() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="relative w-full py-2 flex items-center justify-center" aria-hidden="true">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(195, 192, 255, 0.3) 30%, rgba(195, 192, 255, 0.5) 50%, rgba(195, 192, 255, 0.3) 70%, transparent 100%)",
        }}
      />
      {/* Center glow dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute w-2 h-2 rounded-full bg-primary/60"
        style={{
          boxShadow: "0 0 20px 6px rgba(195, 192, 255, 0.2)",
        }}
      />
    </div>
  );
}
