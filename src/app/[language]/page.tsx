import { MainPage } from "@/components/main-page";
import { texts } from "@/config/constants";

export default function Home({
  params: { language },
}: {
  params: {
    language: string;
  };
}) {
  const text = texts[language] || texts["pt-br"];

  return <MainPage texts={text} />;
}
