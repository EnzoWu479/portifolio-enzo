import { cn } from "@/lib/utils";
import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = ({ className, error, ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={cn(
        "bg-dark-gray shadow-lg border border-black-blue h-10 py-2 text-sm px-4 rounded-lg w-full",
        error && "border-error",
        className
      )}
    />
  );
};
interface InputLabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}
export const InputLabel = ({ className, ...rest }: InputLabelProps) => {
  return <label {...rest} className={cn("", className)} />;
};

export const ErrorMessage = ({ children }: { children?: string }) => {
  if (!children) return null;
  return <span className="text-error text-sm ml-2">{children}</span>;
};
