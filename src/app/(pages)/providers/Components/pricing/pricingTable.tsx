import React, { useState, useEffect } from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCheck);
import PricingCards from "./pricingCards";
import style from "../../pricing/pricing.module.css"

//Import data
import { subscription } from '../../pricing/data';

const billingCheckbox = [
  {
    id: 'monthly',
    text: 'Monthly billing'
  },
  {
    id: 'quarterly',
    text: 'Quarterly billing',
    savingsText: 'save 15%'
  },
  {
    id: 'yearly',
    text: 'Annual billing',
    savingsText: 'save 20%'
  },
];

interface Product {
  title: string;
  price: string;
  productId: string;
}

interface SelectedItem {
  id: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

interface PricingTableProps {
  selectedType: SelectedItem;
  onClickGetStarted: (productId: string) => void;
}

const PricingTable: React.FC<PricingTableProps> = ({ selectedType, onClickGetStarted }) => {
  const [products, setProducts] = useState<Product[]>(
  subscription.find(item => item.duration === 'monthly')?.products || []
  );

  //useEffect for console.log - remove later
  useEffect(() => {
    console.log('Updated duration type: ', selectedType.id);
  }, [selectedType.id]);

  //Handler when clicking on a billing button
  const handleTypeChange = (newType: string) => {
    selectedType.setItem(newType)
    const selectedProducts = subscription.find(item => item.duration === newType)?.products || [];
    setProducts(selectedProducts);
  };

  return (
    <>
      {/* Billing options checkboxes */}
      <div className={` ${style.checkboxContainer} min-w-[320px] grid grid-cols-1
      px-3 gap-2 mb-8 mt-4 w-full`}>

        {billingCheckbox.map((type, index) => (
          <div className={` ${style.checkboxWrapper} flex flex-row justify-end
          items-center`}>

            <div className={`${style.checkboxSaleText} text-sage font-semibold mt-2
            mb-1 mx-2 basis-1/3 flex justify-center items-center`}>
              {type?.savingsText}
            </div>
            <div
              key={index}
              className={`${style.checkboxButton} px-5 py-3 mr-4 border-2 rounded-[10px]
              font-semibold hover:cursor-pointer basis-2/3 flex justify-center
              items-center text-center
              ${
                type.id === selectedType.id
                ? "bg-sage text-white border-sage"
                : "bg-white hover:border-sage"
              }`}
              onClick={() => handleTypeChange(type.id)}
            >
              {type.text}
            </div>
          </div>
        ))}

      </div>
        <PricingCards
        onClickGetStarted={onClickGetStarted}
        products={products}
        />
    </>
  );
};

export default PricingTable;
