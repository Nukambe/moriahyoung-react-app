import HomeButton from "./homeButton";
import headshot from "../../assets/content/0463-_Moriah_Young-_Larger_File.jpg";
import { motion } from "framer-motion";
import SocialLinks from "../socials/socials";
import HomeHero from "./homeHero";

export default function Home() {
  return (
    <>
      <div className="hidden md:flex flex-col lg:flex-row justify-between items-center bg-rose-50 w-full h-full">
        <HomeContent titleColor="rose-900" textColor="gray-600" />
        <div className="p-8 lg:p-0 h-full">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="shadow-xl lg:object-cover h-full"
            src={headshot}
            alt="Headshot"
          />
        </div>
      </div>
      <HomeHero>
        <HomeContent titleColor="white" textColor="white" />
      </HomeHero>
    </>
  );
}

function HomeContent({ titleColor, textColor }) {
  return (
    <div className="px-8 lg:min-w-[300px] lg:max-w-[400px] xl:min-w-[672px]">
      <h1
        className={`mt-24 text-4xl font-bold tracking-tight text-${titleColor} sm:mt-10 sm:text-6xl`}
      >
        Moriah Young
      </h1>
      <SocialLinks className="w-full text-3xl flex gap-8 text-rose-700 my-8 p-0" />
      <p className={`mt-6 text-lg leading-8 text-${textColor}`}>
        Welcome to the virtual home of a woman who thrives off the entertainment
        of others. Moriah Young is a voice over artist and on screen talent who
        loves little more than bringing smiles, joy and thought provoking
        emotions out of people. Please make yourself at home (browse) and see
        what she’s all about!
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <HomeButton text="Voice Work" link="/voice" />
        <HomeButton text="On-Camera Work" link="/oncamera" />
      </div>
    </div>
  );
}
