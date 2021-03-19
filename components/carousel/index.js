const Carousel = ({ children }) => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex w-ful overflow-auto">{children}</div>
    </div>
  );
};

export default Carousel;
