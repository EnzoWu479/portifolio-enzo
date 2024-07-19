import { SliderItem } from "./slider-item";

interface Props<T> {
  items: T[];
  sliderItem: (props: T) => JSX.Element;
}

export const Slider3D = function <T = unknown>({
  items,
  sliderItem,
}: Props<T>) {
  return (
    <div className="h-[30dvh] overflow-visible scale-75 sm:scale-75 md:scale-100">
      <div
        aria-label="banner"
        className="w-full h-dvh text-center overflow-hidden relative"
      >
        <div
          aria-label="slider"
          className="absolute w-48 h-60 top-[10%] left-[calc(50%-100px)] animate-AutoRun"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(400px)",
          }}
        >
          {/* <div aria-label="item" className="absolute inset-0" style={{
          transform: "translateZ(550px)"
          }}>
          <img src="/avatar.jpeg" className="h-full w-full object-cover" />
          </div> */}
          {/* {new Array(10).fill(null).map((_, index) => (
            <SliderItem index={index} key={index} quantity={10}>
              <img
                src="/avatar.jpeg"
                className="h-full w-full object-cover"
                alt="Avatar"
              />
            </SliderItem>
          ))} */}
          {items.map((item, index) => (
            <SliderItem index={index} key={index} quantity={items.length}>
              {sliderItem(item)}
            </SliderItem>
          ))}
        </div>
      </div>
    </div>
  );
};
