import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLongRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import PageTransition from "../components/ui/PageTransition";
import Seo from "../components/ui/Seo";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import SocialLinks from "../components/ui/SocialLinks";
import Img from "../components/ui/Img";
import { image } from "../lib/images";
import { disciplines, images, site } from "../data/site";

const specialties = [
  "Commercial",
  "Narration",
  "Animation",
  "E-Learning",
  "Film & TV",
  "Theater",
  "Explainer",
  "Character",
];

export default function Home() {
  return (
    <PageTransition>
      <Seo
        description="Moriah Young is a voice over artist and on-camera actress working across commercial, narration, animation and film."
      />
      <Hero />
      <Marquee />
      <Disciplines />
      <ClosingCta />
    </PageTransition>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Portrait layer — full-bleed on mobile, right half on desktop */}
      <div className="absolute inset-0 lg:left-[38%]">
        <motion.img
          {...image(images.portraitMain)}
          sizes="(min-width: 1024px) 62vw, 100vw"
          alt="Moriah Young"
          fetchPriority="high"
          className="h-full w-full object-cover object-[50%_25%]"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Scrims: vertical on mobile, a long horizontal fade on desktop */}
        <div className="absolute inset-0 bg-ink-950/75 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/35 to-ink-950/30 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(to_right,var(--color-ink-900)_0%,var(--color-ink-900)_22%,color-mix(in_srgb,var(--color-ink-900)_55%,transparent)_48%,transparent_78%)]" />
      </div>

      <div className="relative z-2 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pt-32 pb-28 lg:px-10">
        <div className="max-w-xl">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Voice over artist · On-camera talent
          </motion.p>

          <motion.h1
            className="mt-6 font-display text-[3.5rem] leading-[0.92] text-bone-50 sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Moriah
            <span className="block italic text-gold-300">Young</span>
          </motion.h1>

          <motion.p
            className="text-balance-pretty mt-8 max-w-lg text-lg leading-relaxed text-bone-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            {site.tagline}
          </motion.p>

          <motion.div
            className="mt-11 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <Button to="/voice" variant="solid">
              Hear the demos
            </Button>
            <Button to="/oncamera" variant="outline">
              Watch the reels
            </Button>
          </motion.div>

          <div className="mt-12">
            <SocialLinks delay={0.7} />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-8 z-2 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="flex flex-col items-center gap-2 text-[0.6rem] tracking-[0.3em] text-bone-400 uppercase">
          Scroll
          <ArrowDownIcon className="size-4 animate-float-slow" />
        </span>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const row = [...specialties, ...specialties];

  return (
    <section
      className="mask-fade-x overflow-hidden border-y border-ink-800 bg-ink-950 py-6"
      aria-label="Specialties"
    >
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-[0.7rem] tracking-[0.35em] text-bone-400 uppercase"
          >
            {item}
            <span className="text-gold-500" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Disciplines() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <p className="eyebrow">The work</p>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-bone-50 sm:text-5xl">
          Three rooms, one instinct — find the truth of the line and let it land.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 md:grid-cols-3">
        {disciplines.map((discipline, index) => (
          <Reveal key={discipline.title} delay={index * 0.1}>
            <Link
              to={discipline.to}
              className="group flex h-full flex-col justify-between bg-ink-900 p-9 transition-colors duration-500 hover:bg-ink-850"
            >
              <div>
                <span className="font-display text-sm text-gold-500">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-display text-3xl text-bone-50 transition-colors group-hover:text-gold-300">
                  {discipline.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone-300">
                  {discipline.blurb}
                </p>
              </div>
              <span className="mt-10 flex items-center gap-3 text-[0.65rem] tracking-[0.25em] text-bone-400 uppercase transition-colors group-hover:text-gold-300">
                Explore
                <ArrowLongRightIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-ink-800">
      <Img
        name={images.portraitEditorial}
        alt=""
        aria-hidden="true"
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-[50%_20%] opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/60" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-10 lg:py-36">
        <Reveal>
          <p className="eyebrow">Bookings & inquiries</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight text-bone-50 sm:text-6xl">
            Got a script that needs a voice — or a face?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-bone-300">
            Auditions, custom demos, live-directed sessions and on-camera bookings.
            Tell me about the project.
          </p>
          <div className="mt-10 flex justify-center">
            <Button to="/contact" variant="solid">
              Start a conversation
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
