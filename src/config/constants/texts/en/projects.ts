import { ProjectsTexts } from "@/types/texts";
import { tags } from "../../tags";
import {
  img_biblioteca,
  img_crud,
  img_ecommerce,
  img_instagram,
  img_minesweeper,
  img_windows,
} from "@/assets/images/projects";

export const projects: ProjectsTexts = {
  title: "Projects",
  projects: [
    {
      title: "Bookstore e-commerce",
      description:
        "Bookstore e-commerce made with Next.js, Typescript, Prisma ORM and PostgreSQL",
      tags: [
        tags["Next.js"],
        tags["Typescript"],
        tags["PrismaORM"],
        tags["PostgreSQL"],
      ],
      image: img_ecommerce,
      height: 1024,
      width: 1024,
      github: "https://github.com/EnzoWu479/ecommerce-les",
    },
    {
      title: "Window management system",
      description:
        "Window management system made with React.js, Typescript and Next.js",
      tags: [tags["React.js"], tags["Typescript"], tags["Next.js"]],
      image: img_windows,
      github: "https://github.com/EnzoWu479/swodniw",
      width: 1438,
      height: 737,
    },
    {
      title: "Users CRUD",
      description:
        "Simple users CRUD made with React.js consuming an API made with C#, EF and .NET Core",
      tags: [
        tags["React.js"],
        tags["Typescript"],
        tags[".NET"],
        tags["PostgreSQL"],
      ],
      image: img_crud,
      github: "https://github.com/EnzoWu479/clientes-cadastro-esIII",
      width: 1376,
      height: 779,
    },
    {
      title: "Instagram Clone",
      description: "Instagram clone made with Django and jQuery.",
      tags: [tags["Django"], tags["Python"], tags["jQuery"]],
      image: img_instagram,
      github: "https://github.com/EnzoWu479/InstagramDjango",
    },
    {
      title: "Book loans management system",
      description:
        "Book loans management system made with Java, Swing and MongoDB.",
      tags: [tags["Java"], tags["MongoDB"]],
      image: img_biblioteca,
      github: "https://github.com/EnzoWu479/bibliotecav2",
    },
    {
      title: "MineSweeper",
      description:
        "MineSweeper game made with Next.js, Typescript, Prisma ORM and PostgreSQL",
        tags: [
          tags["Next.js"],
          tags["Typescript"],
          tags["PrismaORM"],
          tags["PostgreSQL"],
        ],
      image: img_minesweeper,
      github: "https://github.com/EnzoWu479/playground-old-games",
    },
  ],
  
};
