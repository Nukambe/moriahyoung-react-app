import headshot from "../../assets/content/0463-_Moriah_Young-_Larger_File.jpg";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-rose-50 w-full h-full">
      <div className="w-full md:w-3/4 p-16">
        <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
          Moriah Young
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to the virtual home of a woman who thrives off the
          entertainment of others. Moriah Young is a voice over artist and on
          screen talent who loves little more than bringing smiles, joy and
          thought provoking emotions out of people. Please make yourself at home
          (browse) and see what she’s all about!
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="/voice"
            className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Voice Work
          </a>
          <a
            href="/oncamera"
            className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            On-Camera Work
          </a>
        </div>
      </div>
      <img
        className="lg:h-full lg:w-full lg:object-cover pb-8 px-8 sm:px-36 md:px-16 lg:p-0 bg-rose-50"
        src={headshot}
        alt="Headshot"
      />
    </div>
  );
}
