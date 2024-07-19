import { Texts } from "@/types/texts";
import { ptBr } from "./pt-br";
import { en } from "./en";

type TextRecord = Record<string, Texts>;

export const texts: TextRecord = {
  "pt-br": ptBr,
  en,
};
