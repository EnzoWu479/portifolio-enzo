
import { WorkExperienceTexts } from "@/types/texts";
import { ExperienceTimeline } from "../experience-timeline";

interface Props {
  texts: WorkExperienceTexts;
}

export const Experiences = ({ texts }: Props) => {
  return (
    <section
      id="work-exp"
      // className="grid grid-cols-2 px-12 max-lg:grid-cols-1 h-dvh"
      className="flex flex-col h-auto min-h-dvh justify-center [&>*]:z-10 text-white"
    >
      <h2 className="text-5xl font-bold text-center mt-18">{texts.title}</h2>
      <ExperienceTimeline experiences={texts.experiences} />
    </section>
  );
};
