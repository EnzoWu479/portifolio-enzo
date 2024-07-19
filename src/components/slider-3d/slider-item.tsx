import { ReactNode } from "react";

interface Props {
  index: number;
  children: ReactNode;
  quantity: number;
}

export const SliderItem = ({ children, index, quantity }: Props) => {
  return (
    <div
      aria-label="item"
      className="absolute inset-0"
      style={{
        transform: `rotateY(calc(${index} * 360/${quantity} * 1deg)) translateZ(200px)`,
      }}
    >
      {children}
    </div>
  );
};
