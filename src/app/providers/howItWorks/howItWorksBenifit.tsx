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
    <div className="flex justify-center items-center h-screen ">
      {sections.map((section, index) => (
        <div
          key={index}
          style={{ width: section.width, height: section.height }}
        >
          <div className="expanded withcheckmark w-[558px] h-[38px] flex items-center">
            <div className="w-[18px] h-[18px] mr-2 rounded-full border border-green-500 "></div>
            <div className="flex flex-col w-[402px] h-[38px] text-[Poppins] font-semibold text-[24px]">
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
