"use client";
 import { BoxProps } from "./styleBox"
import { useEffect, useState } from "react";
import StyledBox from "./styleBox";

type CheckboxItemProps = {
  CustomComponent: React.ComponentType<BoxProps>;
  boxProps?: BoxProps;  // för att skicka in storlek etc.ny>;

};

const CheckboxItem: React.FC<CheckboxItemProps> = ({CustomComponent,boxProps}) => {
 



  return (
    <div className="w-[333.98] h-[24px] ">
      <div className="flex">
      <CustomComponent {...boxProps}/>
        <div></div>
      </div>
    </div>
  );
};

export default CheckboxItem;
