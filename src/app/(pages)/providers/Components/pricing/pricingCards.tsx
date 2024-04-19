import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCheck);
import CarelyoButton from "../getStartedButton";
import RoleModal from "./roleModal";
import StyledBox from "../styleBox";
import style from "../../pricing/pricing.module.css"

//Import data
import { cardDescription } from '../../pricing/data';

interface Product {
  cardId?: number;
  title: string;
  price: string;
  productId: string;
}

interface CardsProps {
  onClickGetStarted: (productId: string) => void;
  products: Product[];
}

const PricingCards: React.FC<CardsProps> = ({
  onClickGetStarted,
  products
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  //Updates the select card state when selecting role in pop-up modal
  const handleSelectedRoleChange = (selectedRole: string) => {
    const index = combinedData.findIndex((data) => data.title === selectedRole);
    setSelectedCard(index);
  };

  //Removes body scrollbar when pop-up modal is opened
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  //Handler when clicking on a card's checkbox
  const handleBoxClick = (cardIndex: number) => {
    setSelectedCard(selectedCard === cardIndex ? null : cardIndex);
  };

  //Combines arrays with matching "title" value
  const combinedData = products.map((product) => {
    const cardDesc = cardDescription.find(
      (desc) => desc.title === product.title
    );
    if (!cardDesc) return null;
    return {
      ...product,
      description: cardDesc.description,
      features: cardDesc.features,
      cardId: cardDesc.cardId
    };
  });

  return (
    <>
      <div className="flex justify-center">
        {/* Show 3 cards based on the selected billing type */}
        <div className={` ${style.cardContainer} grid grid-cols-1 gap-2 px-4`}>

        {combinedData.map((data) => (
          <div className={`${style.priceCard} min-w-[17.5rem] max-w-[29rem]
          h-auto py-5 px-7 border-[3px] rounded-[25px] border-sage cursor-pointer
          ${
            selectedCard === data.cardId ? "bg-sage" : ""
          }`}
          key={data.cardId}
          onClick={() => handleBoxClick(data.cardId)}>
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <div
                  className={`items-center font-semibold text-[-2%] text-sage
                  ${selectedCard === data.cardId ? "text-white" : "text-sage"}`}
                >
                {data?.title}
                </div>
                <div
                  className={`bg-white h-8 w-8 border-2 mt-1 border-sage
                  rounded-[10px] flex justify-center items-center
                  ${
                    selectedCard === data.cardId
                    ? "border-white"
                    : "hover:border-greenHover"
                  }`}
                >
                  {selectedCard === data.cardId ? (
                    <div className="checked">
                      <FontAwesomeIcon icon={faCheck} className="text-sage" size="lg" />
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mt-4 flex text-[32px]">
                <h1
                  className={`leading-tight font-semibold ${
                selectedCard === data.cardId ? "text-white" : ""
              }`}
                >
                  {data?.price}
                </h1>
              </div>
            <div
              className={`h-fit mr-4 mt-4 opacity-50 font-normal
              whitespace-pre-line text-[14px] ${
                selectedCard === data.cardId ? "text-white opacity-[100]" : ""
              }`}
            >
              {data?.description}
            </div>
            <div
              className={`mt-4 mr-4 font-normal text-[14px]
              ${
                selectedCard === data.cardId ? "text-white" : ""
              }`}
            >

              {data?.features.map((feature, idx) => (
                <div className="mt-3 flex h-fit gap-2" key={idx}>
                  <div>
                    <StyledBox
                      type="fixed"
                      width="24px"
                      height="24px"
                      id={data.cardId}
                      selectedBox={selectedCard}
                    />
                  </div>
                  <div
                    className={`h-fit opacity-50} ${
                      selectedCard === data.cardId ? "text-white" : ""
                    }`}
                  >
                    <div>{feature}</div>
                  </div>
                </div>
              ))}

                </div>
              </div>
              <div className={`${style.CardButtonSpace} mt-6 mx-[2vw] flex justify-center items-center font-semibold`}>
                <CarelyoButton
                  buttonText="Get Started"
                  size="large"
                  color="primary"
                  buttonSize="prb"
                  className={`
                    ${
                      selectedCard === data.cardId
                        ? "outline outline-2 outline-white"
                        : "bg-sage"
                    }
                    ${
                      selectedCard !== null && selectedCard !== data.cardId
                        ? "pointer-events-none"
                        : ""
                    }
                  `}
                  onClick={() => {
                    if (selectedCard === null) {
                      //Opens pop-up if no card is selected
                      setModalOpen(true);
                    } else {
                      //sends the selected card's productId to pricing "page"
                      onClickGetStarted(data?.productId)
                    }
                  }}
                  />
                </div>
              </div>
            </div>
          ))}

          <RoleModal
            handleRoleChange={handleSelectedRoleChange}
            isOpen={isModalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
         />

        </div>
      </div>
    </>
  );
};

export default PricingCards;
