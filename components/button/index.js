const Button = ({ title, bgColor, textColor, onClick, width, className }) => {
  return (
    <div className="max-w-max flex justify-center items-center mr-1">
      <button
        className={`
    ${bgColor || "bg-gray-300"}
    ${textColor || "text-blue-800"}
    ${width || "w-40"}
    ${className || "rounded-3xl"}
    p-1
    outline-none
    focus:outline-none
    `}
        onClick={onClick}
      >
        {title || "click me"}
      </button>
    </div>
  );
};

export default Button;
