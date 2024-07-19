"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Tilt } from "react-tilt";
import "swiper/css";
import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface Props {
  projects: Project[];
}

export function SliderProjects({ projects }: Props) {
  return (
    <Swiper
      spaceBetween={20}
      // slidesPerView={"auto"}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="scale-95">
            <Tilt
              options={{
                max: 30,
                scale: 1,
                speed: 450,
              }}
              className="flex flex-col p-4 bg-dark-gray border border-white rounded-md gap-4 w-80 group relative mx-auto origin-center transition-all"
            >
              <div className="relative">
                <Image
                  height={project.height ?? 400}
                  width={project.width ?? 400}
                  src={project.image}
                  alt={project.title}
                  className="w-80 h-60 object-cover rounded-md"
                />
                <div className="flex gap-4  absolute top-2 right-2 scale-95 transition-all hover:scale-100 hover:brightness-110">
                  <Link
                    href={project.github}
                    className="text-white"
                    target="_blank"
                  >
                    <FaGithub
                      size={40}
                      className="bg-dark-gray p-1.5 rounded-full"
                    />
                  </Link>
                </div>
              </div>
              <div className="transition-all flex flex-col gap-2 [&>*]:z-10">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm max-w-60">{project.description}</p>
                <div className="text-sm space-x-2 flex flex-wrap text-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      style={{
                        color: tag.color,
                      }}
                      // className={`text-[${tag.color}]`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
