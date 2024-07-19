import { Tecnology } from "@/types/tecnologies";
import { AArrowDown } from "lucide-react";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaCss3Alt, FaHtml5, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiVite } from "react-icons/si";

export const tecnologies: Tecnology[] = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Vite",
    icon: SiVite,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    icon: FaNode,
  },
  {
    name: ".NET",
    icon: AiOutlineDotNet,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript 
  },
  {
    name: "Python",
    icon: FaPython
  }
];
