import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={cn(
        "border border-white flex items-center px-6 pb-2 h-12 text-white rounded-xl overflow-hidden pointer relative before:absolute before:top-0 before:left-0 before:w-full before:h-full bg-white button--hyperion",
        className
      )}
      
      {...rest}
    >
      <span className="block relative overflow-hidden">
        <span className="overflow-hidden mix-blend-difference ">
          {children}
        </span>
      </span>
    </button>
  );
};
