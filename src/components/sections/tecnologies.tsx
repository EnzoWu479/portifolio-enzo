import { tecnologies } from "@/config/constants";
import { Slider3D } from "../slider-3d";
import { TechnologiesTexts } from "@/types/texts";

interface Props {
  techTexts: TechnologiesTexts;
}

export const Tecnologies = ({ techTexts }: Props) => {
  return (
    <section
      id="tech"
      className="text-white h-dvh overflow-hidden py-24 flex flex-col justify-center gap-8 [&>*]:z-10"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center">{techTexts.title}</h2>
      <div className="text-xs md:text-base max-w-[90dvw] w-[50rem] text-center mx-auto flex flex-col gap-4">
        {techTexts.description.split("\n").map((text, index) => {
          const converted = text
            .split(" ")
            .map((word, index) => {
              if (techTexts.highlights.includes(word)) {
                return `<strong key={index} class="text-light-blue">
                    ${word}
                  </strong>`;
              }
              return word;
            })
            .join(" ");
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{
                __html: converted,
              }}
            ></span>
          );
        })}
      </div>
      <div>
        <Slider3D
          items={tecnologies}
          sliderItem={(item) => (
            <div className="flex flex-col text-white  transition-all">
              <item.icon className="text-8xl self-center text-light-blue" />
              <h3 className="text-xl text-center hover:text-light-blue cursor-pointer">
                {item.name}
              </h3>
            </div>
          )}
        />
      </div>
    </section>
  );
};
