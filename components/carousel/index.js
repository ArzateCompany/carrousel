import Button from "../button";

const Carousel = ({ children }) => {
  return (
    <div className="w-full md:11/12 lg:w-10/12 mx-auto px-1">
      <div className="flex w-full overflow-auto mb-2">{children}</div>
      <div className="flex w-5/12 mx-auto justify-center">
        <Button
          title="<"
          bgColor="bg-blue-300"
          className="rounded-full"
          width="w-8"
        />
        <Button
          title=">"
          bgColor="bg-blue-300"
          className="rounded-full"
          width="w-8"
        />
      </div>
    </div>
  );
};

export default Carousel;
