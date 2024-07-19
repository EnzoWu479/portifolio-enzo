"use client";
import { Experience } from "@/types/experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { countYears, formatDate } from "@/lib/date";

interface Props {
  experiences: Experience[];
}

export const ExperienceTimeline = ({ experiences }: Props) => {
  return (
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            visible
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={`De ${formatDate(experience.from, "MM/yy")} a ${
              experience.to ? formatDate(experience.to, "MM/yy") : "Momento"
            } - ${countYears(experience.from, experience.to)}`}
            icon={
              <div className="bg-dark-gray h-full w-full flex rounded-full">
                {
                  { "Next.js": <RiNextjsFill />, "React.js": <FaReact /> }[
                    experience.icon
                  ]
                }
              </div>
            }
            className="[&>*]:z-10"
          >
            <h3 className="vertical-timeline-element-title text-lg">
              {experience.name}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm text-light-blue">
              {experience.companyName}
            </h4>
            {/* <p>{experience.description}</p> */}
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
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
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
