import { useRef } from "react";

import Button from "../button";

const Carousel = ({ children }) => {
  const carousel = useRef();
  const moveLeft = (node) => {
    node.scrollLeft += node.offsetWidth;
  };
  const moveRight = (node) => {
    node.scrollLeft -= node.offsetWidth;
  };
  return (
    <div>
      <div
        className="w-full md:11/12 lg:w-10/12 mx-auto overflow-hidden mb-5"
        ref={carousel}
      >
        {}
        <div className={`flex w-full`}>{children}</div>
      </div>
      <div className="flex w-5/12 mx-auto justify-center">
        <Button
          title="<"
          bgColor="bg-blue-300"
          className="rounded-full outline-none"
          width="w-8"
          onClick={() => {
            moveRight(carousel.current);
          }}
        />
        <Button
          title=">"
          bgColor="bg-blue-300"
          className="rounded-full outline-none"
          width="w-8"
          onClick={() => {
            moveLeft(carousel.current);
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
