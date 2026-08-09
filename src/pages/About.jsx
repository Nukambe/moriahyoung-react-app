import { motion } from "motion/react";
import PageTransition from "../components/ui/PageTransition";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/ui/Seo";
import Button from "../components/ui/Button";
import Img from "../components/ui/Img";
import { atAGlance, bio, gallery, images } from "../data/site";

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About"
        description="Theater-trained, studio-ready. Meet Moriah Young — voice over artist and on-camera actress."
      />

      <PageHeader
        eyebrow="About"
        title={
          <>
            The actress
            <span className="block italic text-gold-300">behind the voice</span>
          </>
        }
        intro="Theater-trained, studio-ready, and endlessly curious about what makes a line finally sound like a person talking."
      />

      <Biography />
      <Gallery />
      <Studio />
    </PageTransition>
  );
}

function Biography() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <figure className="relative">
            <div
              className="absolute -inset-3 rounded-sm border border-gold-500/30"
              aria-hidden="true"
            />
            <Img
              name={images.portraitWarm}
              alt="Moriah Young, natural light portrait"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="relative w-full rounded-sm object-cover shadow-2xl shadow-black/50"
            />
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <div className="prose-editorial max-w-none">
              {bio.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-gold-300"
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 sm:grid-cols-2">
              {atAGlance.map((item) => (
                <div key={item.label} className="bg-ink-900 p-6">
                  <dt className="eyebrow">{item.label}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-bone-200">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button to="/voice" variant="solid">
                Listen to demos
              </Button>
              <Button to="/contact" variant="outline">
                Book Moriah
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="border-t border-ink-800 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-5 font-display text-4xl text-bone-50 sm:text-5xl">
            Headshots & portraits
          </h2>
        </Reveal>

        <div className="mt-14 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((photo, index) => (
            <motion.figure
              key={photo.name}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-sm bg-ink-850"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Img
                name={photo.name}
                alt={photo.alt}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Img
            name={images.studio}
            alt="Moriah Young's home recording booth"
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="w-full rounded-sm object-cover shadow-2xl shadow-black/40"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">The booth</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-bone-50 sm:text-5xl">
            A studio built for clean, fast turnarounds
          </h2>
          <div className="prose-editorial mt-7">
            <p>
              Sessions are recorded in a treated home booth with a broadcast
              signal chain — quiet floor, controlled reflections, and files that
              drop straight into an edit without a fight.
            </p>
            <p>
              Need to direct live? Source-Connect, Zoom, Riverside or a plain
              phone patch all work. Raw or edited, WAV or MP3, most jobs turn
              around inside a day.
            </p>
          </div>
          <div className="mt-10">
            <Button to="/contact" variant="outline">
              Request a custom audition
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
