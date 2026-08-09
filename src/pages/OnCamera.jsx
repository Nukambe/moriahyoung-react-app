import PageTransition from "../components/ui/PageTransition";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/ui/Seo";
import Button from "../components/ui/Button";
import { reels } from "../data/site";

export default function OnCamera() {
  return (
    <PageTransition>
      <Seo
        title="On-Camera"
        description="On-camera reels from actress Moriah Young — dramatic scene work and commercial performance."
      />

      <PageHeader
        eyebrow="On-camera"
        title={
          <>
            Reels
            <span className="block italic text-gold-300">& scene work</span>
          </>
        }
        intro="Grounded, expressive performance for film, television and commercial work — from quiet dramatic beats to bright brand spots."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="space-y-24 lg:space-y-32">
          {reels.map((reel, index) => (
            <Reveal key={reel.src} delay={index * 0.05}>
              <article className="grid gap-8 lg:grid-cols-[minmax(0,8fr)_minmax(0,3fr)] lg:gap-14">
                <div className="overflow-hidden rounded-sm border border-ink-700 bg-ink-950 shadow-2xl shadow-black/50 lg:order-last lg:col-start-1 lg:row-start-1">
                  <div className="relative aspect-video">
                    <iframe
                      src={reel.src}
                      title={reel.title}
                      loading="lazy"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 size-full bg-ink-950"
                    />
                  </div>
                </div>

                <div className="lg:col-start-2 lg:row-start-1 lg:pt-4">
                  <span className="font-display text-sm text-gold-500">
                    0{index + 1}
                  </span>
                  <h2 className="mt-2 font-display text-3xl leading-tight text-bone-50 sm:text-4xl">
                    {reel.title}
                  </h2>
                  <div className="hairline my-6 hidden lg:block" />
                  <p className="text-sm leading-relaxed text-bone-400">
                    {reel.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-28 rounded-2xl border border-ink-800 bg-ink-950 p-10 text-center lg:p-14">
            <p className="eyebrow">Casting</p>
            <h2 className="mt-5 font-display text-3xl text-bone-50 sm:text-4xl">
              Need a self-tape or a full resume?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-bone-300">
              Self-tapes turn around quickly, and a current resume, sizes and
              additional footage are available on request.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="solid">
                Request materials
              </Button>
              <Button
                href="https://www.imdb.com/name/nm12554084/"
                target="_blank"
                rel="noreferrer nofollow"
                variant="outline"
              >
                View IMDb
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
