import { WorkExperienceTexts } from "@/types/texts";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Work Experience",
  experiences: [
    {
      name: "Frontend Software Engineer",
      companyName: "Mestres da Web",
      description:
        "As a Frontend Software Engineer at Mestres da Web, I use React, Next.js, and TypeScript to develop high-quality web applications. My responsibilities include creating fast, interactive, and accessible user interfaces. I collaborate with the backend team to integrate the frontend with backend services and ensure seamless functionality. Additionally, I handle the deployment of applications. Working in an agile environment, I actively contribute to the team's efforts in delivering top-notch software.",
      from: "2023-01-01",
      to: "2024-06-01",
      icon: "Next.js",
      tags: [tags["React.js"], tags["Next.js"], tags["Typescript"]],
    },
    {
      name: "Frontend Developer Intern",
      companyName: "Mestres da Web",
      description:
        "As a Frontend Developer Intern at Mestres da Web, I worked on developing web applications using React. I collaborated with the team to create user-friendly interfaces and ensure the applications' responsiveness and performance. I also gained experience in working with TypeScript and integrating the frontend with backend services. During my internship, I learned best practices in frontend development and contributed to the team's projects.",
      from: "2022-07-05",
      to: "2022-12-01",
      icon: "React.js",
      tags: [tags["React.js"], tags["Typescript"]],
    },
  ],
};
