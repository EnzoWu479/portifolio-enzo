import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SliderProjects } from "../slider-projects";
import { Project } from "@/types/projects";
import { ProjectsTexts } from "@/types/texts";

interface Props {
  projectText: ProjectsTexts;
}

export const Projects = ({ projectText }: Props) => {
  return (
    <section
      id="projects"
      className="h-dvh text-white py-24 flex flex-col justify-center gap-24 [&>*]:z-10"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center">{projectText.title}</h2>
      <div className="flex flex-wrap">
        <SliderProjects projects={projectText.projects} />
      </div>
    </section>
  );
};
