const Card = ({ title, bgColor }) => {
  return (
    <div className={`max-w-max ${bgColor} text-white font-sans mr-1`}>
      <div className="w-72 px-5 py-5">
        <h1 className="font-extrabold text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
