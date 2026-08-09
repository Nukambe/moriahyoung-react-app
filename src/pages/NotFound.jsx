import PageTransition from "../components/ui/PageTransition";
import Seo from "../components/ui/Seo";
import Button from "../components/ui/Button";
import Img from "../components/ui/Img";
import { images } from "../data/site";

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Page not found" description="This page could not be found." />

      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <Img
          name={images.portraitDramatic}
          alt=""
          aria-hidden="true"
          sizes="100vw"
          className="absolute inset-0 size-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-950/85 to-ink-950" />

        <div className="relative mx-auto max-w-2xl px-6 py-32 text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-6 font-display text-6xl text-bone-50 sm:text-7xl">
            Cut.
            <span className="block italic text-gold-300">Take it again.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-md text-bone-300">
            That page isn&apos;t in the script. Let&apos;s get you back to
            something worth watching.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <Button to="/" variant="solid">
              Back to home
            </Button>
            <Button to="/voice" variant="outline">
              Hear the demos
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
