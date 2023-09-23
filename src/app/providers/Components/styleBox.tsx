"use client";
import React from "react";
import { useState } from "react";
import {SvgCheckmarkWhiteBackgound } from "./svgComponent"
export interface BoxProps {
  width?: string;
  height?: string;
  svg?: React.ReactNode;
 
  
}

const StyledBox: React.FC<BoxProps>  = ({

  width = "32px",
  height = "32px",
 
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
 
      <div
        style={{
          width,
          height,
          borderRadius: "8px",
          borderWidth: "2px",
          borderColor: "#45AC60",
        }}
      
      >
          {isChecked && <SvgCheckmarkWhiteBackgound />} 
      
      </div>





  
  );
};

export default StyledBox;
