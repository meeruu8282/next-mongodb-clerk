"use client";
import { BoxProps } from "./styleBox";
import { useEffect, useState } from "react";
import StyledBox from "./styleBox";
import ToggleableBox from "./ToggleableBoxProps";
export interface CheckboxItemProps {

  boxProps?: BoxProps & { isChecked?: boolean }; // uppdatera här också
  id: number;

}

const CheckboxItem: React.FC<CheckboxItemProps> = ({

 
 
}) => {
  function handelToggle(id: number): void {
    // Implementera din logik här för att hantera klickhändelsen
    console.log(`Toggle box with ID ${id}`);
    // Du kan ändra tillståndet för rutan här om det är relevant
  }
  
  
  
  return (
    <div>
    
      <div className="flex">
      
      <ToggleableBox id={1} isChecked={false} onToggle={handelToggle} />
        
      </div>
    </div>
  );
};

export default CheckboxItem;
