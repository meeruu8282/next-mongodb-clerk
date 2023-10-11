"use client";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, fas, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CarelyoButton from "./getStartedButton";
library.add(faCheck);

type ToggleableBoxProps = {
  id: number;
  isChecked: boolean;
  onToggle: (id: number) => void;

};

const ToggleableBox: React.FC<ToggleableBoxProps> = ({
  id,
  isChecked,
  onToggle,
 
}) => {
  const [localChecked, setLocalChecked] = useState(isChecked);

  useEffect(() => {
    setLocalChecked(isChecked); // Uppdatera den lokala statusen när isChecked ändras
  }, [isChecked]);
  const handleToggle = () => {
    setLocalChecked(!localChecked);
    onToggle(id);
  };
  return (
    <div
      className={`box ${isChecked ? "checked" : ""}`}
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "10px",
        border: "2px solid #45AC60", // Grön kantfärg
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer", // Lägg till pekarkursorn för att indikera att den är klickbar
      }}
      onClick={handleToggle}
    >
      {localChecked ? (
        <div className="checked">
          <FontAwesomeIcon icon={faCheck} color="#45AC60" size="lg" />
        </div>
      ) : null}


    </div>
  );
};

export default ToggleableBox;
