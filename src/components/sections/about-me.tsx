import { AboutMeTexts } from "@/types/texts";
import Image from "next/image";
import { BallCanvas } from "../canvas/ball";
import { img_avatar } from "@/assets/images";

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
        src={img_avatar}
        height={200}
        width={200}
        className="rounded-full w-32 md:w-48 h-32 md:h-48 mb-4"
        alt="Avatar"
      />
      {/* <div className="w-64 h-64">
        <BallCanvas imgUrl="/assets/images/avatar.jpeg" />
      </div> */}
      <span className="text-xl sm:text-3xl md:text-5xl font-semibold text-center leading-4">
        {texts.title} <span className="text-black-blue">Enzo Wu</span>
      </span>
      <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold sm:leading-3 mt-2 text-center">
        {texts.subtitle}
      </h2>
      <span className="text-white opacity-30 mt-4 md:mt-8 text-center">
        {texts.role}
      </span>
      <span className="w-5/6 text-center self-center text-white mt-4 md:mt-8 text-xs sm:text-base md:text-lg">
        {texts.description}
      </span>
    </section>
  );
};
