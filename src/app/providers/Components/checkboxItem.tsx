// "use client" is not a standard directive in TypeScript/JavaScript and may be removed.
"use client";

// Ernesto C: Importing the useState hook from React to manage component's state.
import { useEffect, useState } from "react";

// Ernesto C: Defining an interface for the CheckboxItem component's props. 
// It specifies the allowable values for id, size, and checkMark.
type CheckboxItemProps = {
  id?: "1" | "2" | "3";
  size?: "small" | "medium" | "large";
  checkMark?: "checkSmall" | "checkMedium" | "checkLarge";
};

// Ernesto C: Defining the CheckboxItem component with default values for its props.
const CheckboxItem: React.FC<CheckboxItemProps> = ({ size = "medium", checkMark = "medium", id = "id" }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Ernesto C: State to track whether the checkbox is checked or not.
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // Ernesto C: State to track the size of the input box. 
  // But this state is never updated in the current code.
  const [inputSize, SetInputsize] = useState("");

  // Ernesto C: Function that toggles the isChecked state between true and false when the checkbox is clicked.


  useEffect(() => {
    if (id === "1") {
      setIsChecked(true)
    }
  }, [id])

  const toggleCheckbox = () => {
    if (id === "1") return;
    setIsChecked(prevChecked => !prevChecked);
  };




  // Ernesto C: Function that returns CSS class names based on the value of inputSize.
  const getContainerSize = () => {
    switch (size) {
      case "small":
        return "w-[20px] h-[20px]";
      case "medium":
        return "w-[24px] h-[24px]";
      case "large":
        return "w-[32px] h-[32px]";
      default:
        return 'w-5 h-5';
    }
  };

  // Ernesto C: Function that returns CSS class names based on the value of checkMark.
  const getCheckmarkSize = () => {
    switch (checkMark) {
      case "checkSmall":
        return "w-[20px] h-[20px]";
      case "checkMedium":
        return "w-5 h-5";
      case "checkLarge":
        return "w-[32px] h-[32px]";
      default:
        return 'w-5 h-5';
    }
  }

  // Ernesto C: Rendering the checkbox item. The checkbox can be toggled and shows a checkmark if checked.
  return (
    <div className="w-[333.98] h-[24px] ">
      <div className="flex">
        <div className={`${getContainerSize()} + " border-[2px] rounded-lg border-[#45AC60] text-[#45AC60] " `} onClick={toggleCheckbox}>
          {isChecked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={getCheckmarkSize()}
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
       

      </div>
    </div>
  );
};

export default CheckboxItem;
