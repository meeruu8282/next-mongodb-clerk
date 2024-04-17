import EllipseBackground from "./ellipseBackground";
import { SearchiconLarge } from "../../patients/components/svgComponent"
import { BgLeftRectandTriangle, BgRightRectandTriangle } from "./greenBackgroundShapes"
import ButtonSearch from "./buttonSearch";

interface SearchbarTemplateProps {
  title?: string;
  undertitle?: string;
}

const SearchBar: React.FC<SearchbarTemplateProps> = ({
  title,
  undertitle,
}) => {
	return (
		<div className="w-[97%] md:w-[90%]">
			{/* Green background container */}
			<div className="relative bg-gradient-to-br from-greenBackgroundFrom to-greenBackgroundTo backdrop-blur-md flex justify-center items-center py-[3.5rem] md:py-[4.2rem] rounded-[40px] overflow-hidden">
				{/* Background: grid 8x8 circles */}
				<EllipseBackground className="absolute bottom-[-2px] left-[315px]" />

				<div className="absolute w-fit h-full top-0 right-0">
					{/* Background: Left - green rectangle and triangle */}
					<BgLeftRectandTriangle />
				</div>
				<div className="absolute w-fit h-full bottom-0 left-0 hidden md:block">
					{/* Background: Right - green rectangle and triangle */}
					<BgRightRectandTriangle />
				</div>

				<div className="absolute w-full left-[60%] top-[182px]">
					{/* Background: green circle */}
					<div className="greenCircle w-[487px] h-[487px]"></div>
				</div>

				<form action="" className="flex relative w-full h-full justify-center
				items-center p-4 md:p-0 md:w-3/4 mx-auto">

					<div className="flex flex-col w-full">
						<label className="text-[25px] text-center md:text-left font-semibold
						leading-15 tracking-normal text-white mb-4" htmlFor="SearchHelp">
							{title}
						</label>
							<div className="flex flex-row h-[4.7rem]">
								<div className="z-10 bg-graySoftlight flex items-center w-full h-full rounded-[25px]">
									<SearchiconLarge
										width="21"
										height="22"
										color="black"
										className="ml-6 opacity-50"
									/>
									<input
									type="search"
									name=""
									id="SearchHelp"
									placeholder="Search Blog here..."
									className="placeholder:text-black placeholder:opacity-50 w-full h-full
									bg-transparent border-none cursor-pointer
									focus:outline-none text-[19px] md:text-[16px] focus:cursor-text mx-4"
									/>
								</div>

								{/* Search Button */}
								<ButtonSearch
								textMdHide={true}
								className="ml-4 md:ml-6 px-6 md:px-8"
								/>

							</div>
							<div className="text-center md:text-left font-semibold leading-15
							tracking-normal w-full mt-4 text-white hidden">
								{undertitle}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchBar
