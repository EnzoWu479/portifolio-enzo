import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ShinyButton = ({ className, children, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={cn("relative flex items-center justify-center h-16 bg-dark-gray-1 text-gray shiny", className)}
    >
      {children}
    </button>
  );
};
