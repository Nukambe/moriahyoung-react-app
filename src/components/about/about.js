import mainHeadshot from "../../assets/content/0463-_Moriah_Young-_Larger_File.jpg";
import sitcomHeadshot from "../../assets/content/0468-_Moriah_Young-_Larger_File.jpg";
import bestHeadshot from "../../assets/content/0534-_Moriah_Young-_Larger_File.jpg";
import bikerHeadshot from "../../assets/content/0615-_Moriah_Young-_Larger_File.jpg";
import badassHeadshot from "../../assets/content/0572-_Moriah_Young-_Larger_File.jpg";

export default function About() {
  return (
    <div className="relative isolate z-10 overflow-x-hidden bg-red-50 w-full h-full">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Moriah
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Welcome to the captivating world of Moriah, a versatile voice and
              on-camera actress whose magnetic performances leave an indelible
              mark on every project. With a passion for storytelling that
              transcends mediums, Moriah's talent shines both in front of the
              camera and on the stage. As a seasoned theater performer, she has
              graced the stage with her presence, delivering powerful and
              nuanced performances that resonate with audiences. Whether lending
              her voice to animated characters, breathing life into commercial
              scripts, or captivating audiences with her on-camera presence,
              Moriah brings a unique blend of skill, emotion, and charisma to
              every role. Explore the depth of Moriah's artistic journey as she
              continues to enchant and engage through the magic of her craft.
            </p>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <img
                  src={badassHeadshot}
                  alt="Bad-ass Headshot"
                  className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  src={mainHeadshot}
                  alt="Adorable Headshot"
                  className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  src={bestHeadshot}
                  alt="Lovable Headshot"
                  className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <img
                  src={sitcomHeadshot}
                  alt="Comedic Headshot"
                  className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  src={bikerHeadshot}
                  alt="Biker Headshot"
                  className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
