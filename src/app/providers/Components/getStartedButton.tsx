interface CarelyoButtonProps {
  buttonText: string;
  buttonSize?: "sb" | "mb" | "lb";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
  className?: string;
}
const CarelyoButton: React.FC<CarelyoButtonProps> = ({
  buttonText,
  size = "medium",
  color = "primary",
  className = "",
  buttonSize = "mb",
}) => {
  const baseClass = "carelyoButton ";
  const sizeClasses = {
   
    small: "text-sm",
    medium: "text-[16px]",
    large: "text-lg",
  };
  const buttonSizeClasses = {
    sb: "w-[12px] h-[12px]",
    mb: "w-[208px] h-[52px]",
    lb: "w-[333.98px] h-[50px]",
};

  const colorClasses = {
    primary: " text-[#FFFFFF]  bg-[#45AC60]",
    secondary: "text-black bg-gray-300",
  };

  return (
    <button
      className={`${baseClass} ${colorClasses[color]} ${sizeClasses[size]} ${buttonSizeClasses[buttonSize]} } ${className}`}
    >
      <div>
        <div className="carelyoButtonText flex items-center justify-center w-full">
          {buttonText}
          <div className="ml-3">
            <div className="h-[28px] w-[28px] rounded-[100px] flex justify-center items-center bg-[#FFFFFF] bg-opacity-[25%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
export default CarelyoButton;
