import { AboutMeTexts } from "@/types/texts";
import Image from "next/image";
import { BallCanvas } from "../canvas/ball";

interface Props {
  texts: AboutMeTexts;
}

export const AboutMe = ({ texts }: Props) => {
  return (
    <section
      id="about-me"
      className="flex flex-col px-12 justify-center items-center text-white h-dvh [&>*]:z-10"
    >
      <Image
        src="/assets/images/avatar.jpeg"
        height={200}
        width={200}
        className="rounded-full"
        alt="Avatar"
      />
      {/* <div className="w-64 h-64">
        <BallCanvas imgUrl="/assets/images/avatar.jpeg" />
      </div> */}
      <span className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center leading-4">
        {texts.title} <span className="text-black-blue">Enzo Wu</span>
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-3 mt-2 ">{texts.subtitle}</h2>
      <span className="text-white opacity-30 mt-8 text-center">{texts.role}</span>
      <span className="w-5/6 text-center self-center text-white mt-8 text-sm sm:text-base md:text-lg">
        {texts.description}
      </span>
    </section>
  );
};
