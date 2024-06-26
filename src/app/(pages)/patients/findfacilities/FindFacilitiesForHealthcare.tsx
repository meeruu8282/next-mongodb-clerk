import React from 'react';
import Link from 'next/link';
import style from './findfacilities.module.css';
import { SearchiconLarge, LocationIcon } from '../components/svgComponent';
import ButtonSearch from '../../providers/Components/buttonSearch';

interface FindFacilitiesForHealthcareProps {
  title?: string;
}

const FindFacilitiesForHealthcare: React.FC<FindFacilitiesForHealthcareProps> = ({
  title
}) => {
  return (

    <div className="flex flex-col gap-6 mb-12">
      <h1 className={`${style.findFacilTitle} text-left text-[2.5rem]
      tracking-[-0.02em] leading-[3.25rem]`}>
        {title}
      </h1>

      <form action="" className="flex w-full">
        <div className="flex flex-col w-full">
          <div className={`${style.searchbarWrap} flex flex-row`}>
            {/* Search field */}
            <div className="w-full flex z-10 h-[75px] rounded-[20px]
              text-[1rem] xl:text-[1.2rem] bg-graySoftlight px-4">
              {/* Search option */}
              <div className="w-fit flex items-center whitespace-nowrap cursor-pointer
              text-black opacity-50">
                <div className="left-1 h-full flex justify-center items-center shrink-0 px-4">
                  <LocationIcon
                    width="14"
                    height="20"
                    color="black"
                  />
                </div>
                <div className="hidden sm:block"> {/* Hides text for smaller screens */}
                  <p>All Location</p>
                </div>
              </div>
              {/* Vertical line icon */}
              <div className={`${style.verticalLine} h-full w-full flex justify-center
              items-center px-4 max-w-[15%]`}>
                <svg width="2" height="53" viewBox="0 0 2 53" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.19238L1 51.1924" stroke="#E7E7E9" strokeWidth="2"
                  strokeLinecap="round"/>
                </svg>
              </div>
              {/* Search icon */}
              <div className="left-1 h-full flex justify-center items-center">
                <SearchiconLarge
                  width="21"
                  height="22"
                  color="black"
                  className="opacity-50"
                />
              </div>
              {/* Input field */}
              <input
                type="search"
                name=""
                id="SearchFind"
                title="Search hospitals, clinics, laboratories, or other medical facilities"
                placeholder="Search hospitals, clinics, laboratories, or other medical facilities"
                className="placeholder:text-black placeholder:opacity-50 cursor-text
                focus:cursor-text focus:outline-none h-full w-full min-w-[6rem] ml-4 mr-2
                bg-transparent truncate focus:placeholder:opacity-0"
              />
            </div>
            {/* Search Button */}
            <ButtonSearch moduleCss={style.searchbarButton} />

          </div>
        </div>
      </form>
    </div>
  )
}

export default FindFacilitiesForHealthcare
