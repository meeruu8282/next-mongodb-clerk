
'use client'
import React, { useState } from 'react';
import { Catagorys, All_providers, Family_physicians, Clinics, Hospitals } from './constants/constants';
import Image from 'next/image';
import MySVGComponent from '../components/svgarrow/Svgarrowcomp';
import style from './ProviderNetwork.module.css'


/**
 * ProviderNetwork component displays a list of healthcare providers based on selected categories.
 * It allows users to navigate through different pages of providers.
 */
const ProviderNetwork = () => {
  // State variables
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All Providers');

  // Constants
  const providersPerPage = 6;
  const categories = {
    'All Providers': All_providers,
    'Family Physicians': Family_physicians,
    'Clinics': Clinics,
    'Hospitals': Hospitals
  };

  // Calculate the index of the first and last provider on the current page
  const indexOfLastProvider = currentPage * providersPerPage;
  const indexOfFirstProvider = indexOfLastProvider - providersPerPage;

  // Select current providers based on the selected category
  let currentProviders = categories[selectedCategory].slice(indexOfFirstProvider, indexOfLastProvider);

  // Functions to handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages based on the selected category
  const calculateTotalPages = (category) => {
    const totalProviders = categories[category];
    return Math.ceil(totalProviders.length / providersPerPage);
  };

  const totalPages = calculateTotalPages(selectedCategory);

  // Generate an array of page numbers for pagination
  const pageNumbers = [currentPage - 1, currentPage, currentPage + 1, totalPages];


  return (

    <div className='h-full w-full flex flex-col justify-center items-center mx-5 my-5'>
      {/* Provider Network header */}
      <div className='w-full h-auto flex flex-col items-center justify-center'>
        <div className='max-w-[642px] flex flex-col h-auto gap-5'>
          <h1 className='text-poppins text-4xl font-normal leading-13 tracking-tighter text-center'>Provider Network</h1>
          <p className='text-poppins opacity-50% text-base font-normal leading-8 tracking-tighter text-center'>
            We built a strong and extensive network of healthcare providers
          </p>
        </div>
      </div>

      {/* Category selection */}
      <div className=' flex items-center justify-center w-full h-auto gap-5 cursor-pointer mt-10'>
        <div className='flex flex-col justify-center items-center max-w-[700px] w-full h-auto'>
          <div className={`max-w-[700px] grid grid-cols-4 p-5 ${style.catagorygrid} gap-8 w-full h-auto`}>
            {Catagorys.map((category, index) => (
              <h1
                key={index}
                className={`w-full h-auto  ${style.shadowcategorys} p-1 rounded-lg  hover:text-sage text-poppins text-20 font-semibold leading-32 tracking-tighter text-center`}
                onClick={() => { setSelectedCategory(category.catagoryname); resetPage(); }}>
                {category.catagoryname}
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* Display providers */}
      <div className='w-full h-auto flex justify-center items-center m-20'>
        <div className={`grid grid-cols-3 ${style.ipadgrid} gap-4`}>
          {currentProviders.map((provider, index) => (
            <div key={index} className="flex justify-center items-center w-full h-auto rounded-[25px]">
              <div className=" bg-[#FFFFFF] shadow-md p-2 max-w-[379px] w-full  h-auto gap-[24px]  rounded-[25px]  ">
                <div className="w-full h-auto rounded-[25px]">
                  <Image
                    className=""
                    layout="responsive"
                    width={350}
                    height={233}
                    src={provider.image}
                    alt={provider.header}
                  />
                </div>
                <div className="max-w-[346px]  w-full h-auto gap-[24px]">
                  <div className="max-w-[346px] h-auto  gap-[16px]">
                    <div className="w-[329.62px] h-auto gap-[3px] ">
                      <h1 className="text-[Poppins] text-[24px] leading-[29px] tracking-[0em] left-0 font-semibold mt-5 ">
                        {provider.header}
                      </h1>
                      <p className="h-auto text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-sage mt-2 ">
                        {provider.title}
                      </p>
                    </div>
                    <p className="max-w-[329px] w-full h-auto my-4  text-[Poppins] text-[16px] leading-[22px] tracking-[0em] left-0 text-grayLighter mt-1 ">
                      {provider.paragraph}
                    </p>
                  </div>
                  <button className="bg-[#45AC60] text-white rounded-full px-5 py-4">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        <button onClick={prevPage} disabled={currentPage === 1} className="mr-2 px-3  py-1 w-[44px] h-[44px]">
          <MySVGComponent reverse={false} />
        </button>
        {pageNumbers.map((number, index) => {
          if (number > 0 && number <= totalPages) {
            return (
              <button key={index} onClick={() => goToPage(number)} className={`mx-2 px-3 py-1 rounded ${currentPage === number ? ' text-sage' : ' text-black'}`}>{number}</button>
            );
          }
        })}
        <button onClick={nextPage} disabled={currentPage === totalPages} className="ml-2 px-3 py-1 w-[44px] h-[44px]"> <MySVGComponent reverse={true} /></button>
      </div>
    </div>
  );
}

export default ProviderNetwork;

