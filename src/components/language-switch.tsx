import Image from "next/image";
import Link from "next/link";
import { GiBrazilFlag } from "react-icons/gi";

export const LanguageSwitch = () => {
  return (
    <div className="flex flex-col gap-4 fixed bottom-4 right-4 z-10">
      <Link href="/pt-br">
        <Image
          src="/assets/lang/br.png"
          height={64}
          width={64}
          className="w-12 h-12"
          alt="Português Brasil"
        />
      </Link>
      <Link href="/en">
        <Image
          src="/assets/lang/en.png"
          height={64}
          width={64}
          className="w-12 h-12"
          alt="English"
        />
      </Link>
    </div>
  );
};
