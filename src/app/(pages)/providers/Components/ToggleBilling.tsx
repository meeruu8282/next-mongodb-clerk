"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCheck);

type ToggleBilling = {
  id: string;
  isChecked: boolean;
  onToggle: (id: string) => void;
  selectedBill: string | null;
  setSelectedBill: (id: string | null) => void;
  billingText: string;
  savesText?: string;
};

const ToggleBilling: React.FC<ToggleBilling> = ({
    id,
    isChecked,
    onToggle,
    billingText,
    savesText
  }) => {

  const [localChecked, setLocalChecked] = useState(isChecked);

  useEffect(() => {
    setLocalChecked(isChecked);
  }, [isChecked]);
  const handleToggle = () => {
    setLocalChecked(!localChecked);
    onToggle(id);
  };

  return (
    <>
    <div
      className={`h-7 w-7 border-2
      ${isChecked ? "bg-sage border-sage" : "border-sage hover:border-greenHover bg-white"}
      rounded-full mr-2 flex justify-center items-center cursor-pointer`}
      onClick={handleToggle}
    >
    {localChecked ? (
        <div>
          <FontAwesomeIcon icon={faCheck} className="text-white" />
        </div>
      ) : null}
    </div>
        <div className="flex text-[16px] text-[Popins] font-semibold pr-4">
          <h3 className="pr-1">{billingText}</h3>
          <p className="text-sage">{savesText}</p>
        </div>
    </>
  );
};

export default ToggleBilling;
