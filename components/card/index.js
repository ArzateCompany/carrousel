const Card = ({ title, bgColor }) => {
  return (
    <div className={`min-w-full md:min-w-1/4 ${bgColor} text-white font-sans`}>
      <div className="px-5 py-5">
        <h1 className="font-extrabold text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
