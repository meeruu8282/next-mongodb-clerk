import StyledBox from "../Components/styleBox";
import {
  SvgCheckmarkGreen,
  SvgCheckmarkWhiteBackgound,
} from "../Components/svgComponent";

interface Section {
  title?: string;
  description: string;
  width?: string;
  height?: string;
}

interface HowItWorksBenefitProps {
  sections: Section[];
}

const HowItWorksBenefit: React.FC<HowItWorksBenefitProps> = ({ sections }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      {sections.map((section, index) => (
        <div
          key={index}
          style={{ width: section.width, height: section.height }}
        >
          <div className="expanded withcheckmark w-[558px] h-[38px] flex items-center ">
            <div className="w-[20px] h-auto mr-2 rounded-full items-center">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM7.29 14.79L3.7 11.2C3.31 10.81 3.31 10.18 3.7 9.79C4.09 9.4 4.72 9.4 5.11 9.79L8 12.67L14.88 5.79C15.27 5.4 15.9 5.4 16.29 5.79C16.68 6.18 16.68 6.81 16.29 7.2L8.7 14.79C8.32 15.18 7.68 15.18 7.29 14.79Z"
                  fill="#45AC60"
                />
              </svg>
            </div>
            <div className="flex flex-col w-auto h-[38px] text-[Poppins] font-semibold text-[24px] ml-1  justify-center items-center">
              {section.title}
            </div>
          </div>
          <div className="w-[558] h-[64px] opacity-50 text-[20px] font-[Poppins] font-normal">
            {section.description}
          </div>
        </div>
      ))}
    </div>
  );
};
export default HowItWorksBenefit;
