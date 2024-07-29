"use client";
import Spline from "@splinetool/react-spline";
import "@/styles/custom-animation.css";
import { HeroTexts } from "@/types/texts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComputersCanvas } from "../canvas/computer";
import { ParticlesBG } from "../particles";
import { downloadFile } from "@/utils/downloadFile";
import { Button } from "../ui/button";
import { motionVar } from "@/lib/motion";
import { ShinyButton } from "../shiny-button";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface Props {
  texts: HeroTexts;
}

export const Hero = ({ texts }: Props) => {
  return (
    <section
      id="hero"
      // className="grid grid-cols-2 px-12 max-lg:grid-cols-1 h-dvh"
      className="flex flex-col justify-center [&>*]:z-10"
    >
      <div className="flex gap-4 items-start mx-4 md:ml-[10%] md:mr-0 mt-6">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-black-blue" />
          <div className="w-1 sm:h-64 h-20 violet-gradient" />
        </div>

        <div className="text-white flex flex-col gap-2">
          {/* <span className="text-5xl">Ola,</span>
        // <span className="text-6xl">Meu nome é <span>Enzo Wu</span></span>
        <span className="text-4xl">Desenvolvedor Fullstack</span> */}
          <motion.span
            className="text-4xl max-md:text-3xl max-sm:text-xl"
            // initial={{
            //   x: -100,
            //   opacity: 0,
            // }}
            // viewport={{
            //   once: true,
            // }}
            // whileInView={{
            //   x: 0,
            //   opacity: 1,
            //   transition: {
            //     duration: 0.5,
            //   },
            // }}
            variants={motionVar}
            initial={"initial"}
            viewport={{
              once: true,
            }}
            whileInView={"fade-in"}
            transition={{
              duration: 0.5,
            }}
          >
            {texts.greetings}
            <span className="text-black-blue ml-2 font-bold">Enzo Wu</span>
          </motion.span>
          <motion.h1
            className="flex flex-wrap text-6xl font-bold z-10 max-md:text-5xl max-sm:text-3xl"
            variants={motionVar}
            initial={"initial"}
            viewport={{
              once: true,
            }}
            whileInView={"fade-in"}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            // whileInView={{
            //   x: 0,
            //   opacity: 1,
            //   transition: {
            //     delay: 0.3,
            //     duration: 0.5,
            //   },
            // }}
          >
            {texts.title.map((text, index) => (
              <span
                key={index}
                className={cn("mr-4", text.emphasis && "text-light-blue")}
              >
                {text.content}
              </span>
            ))}
          </motion.h1>
          <motion.span
            className="z-10 max-md:text-sm max-sm:text-xs"
            variants={motionVar}
            initial={"initial"}
            viewport={{
              once: true,
            }}
            whileInView={"fade-in"}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            {texts.subtitle}
          </motion.span>
          <div className="flex items-center gap-4 mt-4">
            <Button
              onClick={() => {
                downloadFile("/assets/cv.pdf", "EnzoWuCV.pdf");
              }}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="CV"
              data-tooltip-place="bottom"
              className="text-sm h-10 px-2 md:px-6 md:h-12 md:text-base w-fit border-light-blue"
            >
              {texts.cvButton}
            </Button>
            <Link
              href="https://www.linkedin.com/in/enzo-wu/"
              target="__blank"
              className="rounded-full"
              rel="external"
            >
              <ShinyButton
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Linkedin"
                data-tooltip-place="bottom"
                className="h-10 w-10 md:h-12 md:w-12 text-2xl rounded-full"
              >
                <FaLinkedinIn />
              </ShinyButton>
            </Link>
            <Link
              href="https://github.com/EnzoWu479"
              target="__blank"
              className="rounded-full"
              rel="external"
            >
              <ShinyButton
                className="h-10 w-10 md:h-12 md:w-12 text-2xl rounded-full"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Github"
                data-tooltip-place="bottom"
              >
                <TbBrandGithubFilled />
              </ShinyButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-1/3 self-center">
        <ComputersCanvas />
      </div>
    </section>
  );
};
