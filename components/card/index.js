const Card = ({ titleCard, bgColor }) => {
  return (
    <div className={`max-w-min ${bgColor} px-5 py-5 m-2 text-white font-sans`}>
      <div className="w-80">
        <h1 className="font-extrabold text-lg">{titleCard}</h1>
      </div>
    </div>
  );
};

export default Card;
