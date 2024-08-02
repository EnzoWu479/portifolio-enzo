import { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

interface Props extends PropsWithChildren {}

export const ButtonForm = ({ children }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-fit self-center md:self-end border-light-blue"
      type="submit"
      disabled={pending}
    >
      <span>{children}</span>
    </Button>
  );
};
