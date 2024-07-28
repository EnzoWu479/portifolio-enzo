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
  title: "Projetos",
  projects: [
    {
      title: "E-commerce de livros",
      description:
        "E-commerce de livros feito com Next.js, Typescript, Prisma ORM e PostgreSQL",
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
      title: "Sistema de gerenciamento de janelas",
      description:
        "Sistema de gerenciamento de janelas feito com React.js, Typescript e Next.js",
      tags: [tags["React.js"], tags["Typescript"], tags["Next.js"]],
      image: img_windows,
      github: "https://github.com/EnzoWu479/swodniw",
      width: 1438,
      height: 737,
    },
    {
      title: "CRUD de usuários",
      description:
        "Simples CRUD de usuários feito com React.js consumindo uma API feita com C#, EF e .NET Core",
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
      title: "Clone do Instagram",
      description: "Clone do Instagram feito com Django e jQuery.",
      tags: [tags["Django"], tags["Python"], tags["jQuery"]],
      image: img_instagram,
      github: "https://github.com/EnzoWu479/InstagramDjango",
    },
    {
      title: "Sistema de gerenciamento de empréstimos de livros",
      description:
        "Sistema de gerenciamento de empréstimos de livros feito com Java, Swing e MongoDB.",
      tags: [tags["Java"], tags["MongoDB"]],
      image: img_biblioteca,
      github: "https://github.com/EnzoWu479/bibliotecav2",
    },
    {
      title: "Campo minado",
      description:
        "Jogo de campo minado feito com Next.js e Typescript.",
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
