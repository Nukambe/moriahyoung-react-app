import { motion } from "motion/react";

/** Shared editorial masthead used at the top of every interior page. */
export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="mx-auto max-w-7xl px-6 pt-36 pb-14 lg:px-10 lg:pt-44 lg:pb-20">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        className="mt-5 font-display text-5xl leading-[1.05] text-bone-50 sm:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          className="text-balance-pretty mt-7 max-w-2xl text-lg leading-relaxed text-bone-300"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {intro}
        </motion.p>
      )}
      <div className="hairline mt-12" />
    </header>
  );
}
