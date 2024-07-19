import { ContactTexts } from "@/types/texts";
import { EarthCanvas } from "../canvas/earth";
import { ContactForm } from "../contact-form/contact-form";

interface Props {
  texts: ContactTexts;
}

export const Contact = ({ texts }: Props) => {
  return (
    <section
      id="contact-me"
      className="grid grid-cols-2 py-32 px-20 text-white h-dvh [&>*]:z-10 max-md:flex max-md:flex-col"
    >
      <div>
        <div className="flex">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-black-blue" />
            <div className="w-1 sm:h-64 h-20 violet-gradient" />
          </div>
          <div className="ml-4 w-full">
            <h2 className="text-5xl font-bold ">{texts.title}</h2>
            <ContactForm texts={texts} />
          </div>
        </div>
      </div>
      <div className="max-md:hidden">
        <EarthCanvas />
      </div>
    </section>
  );
};
