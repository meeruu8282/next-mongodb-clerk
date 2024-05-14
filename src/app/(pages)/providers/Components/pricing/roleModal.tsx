import React, { useState, useEffect } from "react";
import {
  IconIndDoc,
  IconClinic,
  IconHospital
} from "../svgComponent";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../pricing/pricing.module.css"

interface ModalProps {
  handleRoleChange: (role: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const RoleModal: React.FC<ModalProps> = ({
  handleRoleChange,
  isOpen,
  onClose
}) => {
  const [selectedRole, setSelectedRole] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setSelectedRole('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  //Handler when clicking the confirm button
  const handleConfirm = () => {
    handleRoleChange(selectedRole);
    onClose();
    window.location.href = '/sign-in';
  };

    const handleClosebutton = () => {
    setSelectedRole('');
    onClose();
  };

  //Role cards
  const SelectableRole: React.FC = () => {

    const cards = [
      {
        title: 'Independent Doctor',
        description: 'Paragraph of explanation is here',
        icon: 'IconIndDoc'
      },
      {
        title: 'Clinic',
        description: 'Paragraph of explanation is here',
        icon: 'IconClinic'
      },
      {
        title: 'Hospital',
        description: 'Paragraph of explanation is here',
        icon: 'IconHospital'
      },
    ];

    return (
      <div className="flex flex-col gap-4">
        {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => setSelectedRole(card.title)}
          className={`${style.roleModalCardContainer} group/card transition ease-out
          py-5 px-6 rounded-[10px] border-[0.1rem] cursor-pointer duration-300 ${
            selectedRole === card.title
            ? 'border-sage bg-sage/5'
            : 'border-gray-300 hover:border-greenHover'
          }`}
        >
          <div className={`${style.roleModalCard} flex items-center justify-between gap-4`}>
            <div className={`${style.roleModalCardIcon} h-[3.8rem] w-[3.8rem] flex
            justify-center items-center bg-neutral-50 rounded-full shrink-0 grow-0 ${
            selectedRole === card.title
            ? 'text-sage bg-sage/10'
            : 'bg-gray-50'
          }`}>
              {selectedRole === card.title ? (
                <>
                  {card.icon === 'IconIndDoc' &&
                  <IconIndDoc className="fill-current text-sage" />}
                  {card.icon === 'IconClinic' &&
                  <IconClinic className="fill-current text-sage" />}
                  {card.icon === 'IconHospital' &&
                  <IconHospital className="fill-current text-sage" />}
                </>
              ) : (
                <>
                  {card.icon === 'IconIndDoc' &&
                  <IconIndDoc className="fill-current text-neutral-400
                  group-hover/card:text-sage" />}
                  {card.icon === 'IconClinic' &&
                  <IconClinic className="fill-current text-neutral-400
                  group-hover/card:text-sage" />}
                  {card.icon === 'IconHospital' &&
                  <IconHospital className="fill-current text-neutral-400
                  group-hover/card:text-sage" />}
                </>
              )}
            </div>
            <div>
              <h1 className={`${style.roleModalCardtitle}
              text-[1.1rem] tracking-[-2%] font-bold`}>
                {card.title}
              </h1>
              <div className="font-normal text-[0.9rem]
              tracking-tight text-gray-500">
                {card.description}
              </div>
            </div>
            {/* Checkbox */}
            <div
              className={`${style.roleModalCardcheckbox} h-7 w-7 flex justify-center
              items-center rounded-full border-[0.1rem] shrink-0 grow-0 ${
                selectedRole === card.title
                ? "bg-sage border-sage"
                : "bg-white border-gray-300 group-hover/card:border-sage"
              }`}
              onClick={() => setSelectedRole(card.title)}
            >
              {selectedRole === card.title && (
                  <FontAwesomeIcon icon={faCheck} color="white" />
              )}
            </div>
          </div>
        </div>
      ))}
      </div>
    );
  };

  //Pop-up Modal
  return (
    <div className={`${style.roleModal} fixed overflow-auto top-0 left-0 w-full
    h-full flex flex-col items-center justify-center bg-black/20 z-[1005]`}>
      <div className={`${style.roleModalContent} relative bg-white p-8 my-2 mx-1
      rounded-[24px]`}>
        {/* close button */}
        <div className="flex justify-end">
          <button onClick={() => handleClosebutton()} className="absolute top-6 right-6
          bg-white bg-opacity-70 rounded-full text-gray-400 hover:text-gray-700">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* cards start */}
        <div className="flex flex-col items-center mb-4">
          <div className={`${style.roleModalTitle} font-bold
          text-[1.8rem] tracking-tight`}>
            Select Your Role
          </div>
          <div className="font-normal text-[0.9rem] tracking-tight
          text-neutral-600 mb-2">
            Choose one of role available
          </div>
        </div>
        <SelectableRole />
        <button
        onClick={handleConfirm}
        className={`w-full mt-4 bg-sage hover:bg-greenHover text-white
        text-[1rem] py-3 px-3 rounded-[10px] ${
          selectedRole === ""
          ? "pointer-events-none bg-gray-400" : ""
        }`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default RoleModal;
