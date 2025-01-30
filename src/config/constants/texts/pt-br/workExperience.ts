import { WorkExperienceTexts } from "@/types/texts";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { tags } from "../../tags";

export const workExperience: WorkExperienceTexts = {
  title: "Experiência Profissional",
  experiences: [
    {
      name: "Engenheiro de Software",
      companyName: "Muralis",
      description:
        "Na Muralis, atuei como Engenheiro de Software, utilizando Python (OpenCV, TensorFlow) para detecção de objetos, Java (Spring Boot, Spring JPA) para desenvolvimento backend e Node.js (React.js, Next.js, Tailwind) para aplicações frontend. Apliquei princípios arquiteturais como design system, arquitetura hexagonal e atomic design para garantir soluções escaláveis e de fácil manutenção. Minhas responsabilidades incluíam definir escopo de tarefas, estimar esforços e documentar conhecimento para padronização e compartilhamento. Colaborei ativamente com a equipe, incentivando discussões sobre melhorias técnicas e boas práticas. Além disso, alinhei atualizações do projeto com a liderança, identifiquei e comuniquei impedimentos e promovi feedbacks constantes para aprimoramento técnico e comportamental.",
      from: "2024-08-12",
      icon: "Spring",
      tags: [tags["Spring"], tags["Next.js"], tags["Tensorflow"]],
    },
    {
      name: "Desenvolvedor Frontend",
      companyName: "Mestres da Web",
      description:
        "Como Desenvolvedor Frontend na Mestres da Web, utilizo React, Next.js e TypeScript para desenvolver aplicações web de alta qualidade. Minhas responsabilidades incluem criar interfaces de usuário rápidas, interativas e acessíveis. Colaboro com a equipe de backend para integrar o frontend com os serviços de backend e garantir funcionalidade perfeita. Além disso, lido com a implantação de aplicações. Trabalhando em um ambiente ágil, contribuo ativamente para os esforços da equipe em entregar software de primeira linha.",
      from: "2023-01-01",
      to: "2024-06-01",
      tags: [tags["React.js"], tags["Next.js"], tags["Typescript"]],
      icon: "Next.js",
    },
    {
      name: "Estagiário em Desenvolvimento Frontend",
      companyName: "Mestres da Web",
      description:
        "Como Estagiário em Desenvolvimento Frontend na Mestres da Web, trabalhei no desenvolvimento de aplicações web utilizando React. Colaborei com a equipe para criar interfaces amigáveis e garantir a responsividade e o desempenho das aplicações. Também ganhei experiência em trabalhar com TypeScript e integrar o frontend com os serviços de backend. Durante meu estágio, aprendi as melhores práticas em desenvolvimento frontend e contribuí para os projetos da equipe.",
      from: "2022-07-05",
      to: "2022-12-01",
      tags: [tags["React.js"], tags["Typescript"]],
      icon: "React.js",
    },
  ],
};
