// ClickableBox.tsx
import React, { useState } from "react";
import styles from "./ClickableBox.module.css";

const ClickableBox: React.FC<{ id: string }> = ({ id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleBoxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`box ${isChecked ? "checked" : ""}`}
      onClick={handleBoxClick}
    >
      {isChecked && <span>&#10003;</span>}
      <p>{id}</p> {/* Visa identifieraren */}
    </div>
  );
};

export default ClickableBox;
