"use client";
import React, { useState, MouseEventHandler, useEffect } from "react";

import Image from "next/image";
import CheckboxItem from "./checkboxItem";
import {
  SvgIcon1,
  SvgIcon2,
  SvgIcon3,
  SvgCheckmarkGreen,
} from "./svgComponent";

import Link from "next/link";

import { type } from "os";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, fas, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getLinkForRole } from "./getLinkForRole";
import { link } from "fs";

interface ModalProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
}
type selectRoleCardProps = {
  title?: string;
  description?: string;
  currentSelectedRole: "icon1" | "icon2" | "icon3" | null;
  isSelected: boolean;
  onSelect?: () => void;
  imageSrc: "icon1" | "icon2" | "icon3";
  onRoleChange: (role: "icon1" | "icon2" | "icon3" | null) => void;
};

const SelectRoleCard: React.FC<selectRoleCardProps> = ({
  title,
  description,
  imageSrc,
  isSelected,
  onSelect,
}) => {
  const [selectedRole, setSelectedRole] = useState<
    "icon1" | "icon2" | "icon3" | null
  >(null);
  const [showIcon, setShowIcon] = useState(false);

  const renderIcon = () => {
    switch (imageSrc) {
      case "icon1":
        return <SvgIcon1 />;
      case "icon2":
        return <SvgIcon2 />;
      case "icon3":
        return <SvgIcon3 />;
      default:
        return null;
    }
  };

  return (
    <div
      className="selectRoleCard iconHover cursor-pointer flex justify-center text-center
      items-center w-[457px] h-[112px] border-[1px] rounded-[10px] mt-6"
      onClick={onSelect}
    >
      <div className="w-[360px] h-[64px]  flex   items-center  justify-between">
        <div className="w-[64px] h-[64px]  flex justify-center items-center">
          <div className="flex items-center border-[1px] rounded-full w-[64px] h-[64px]">
            {renderIcon()}
          </div>
        </div>
        <div className="  text-left  ">
          <h1 className="w-[272px] h-[32px] text-[Poppins] text-[20px] tracking-[-2%]  font-semibold">
            {title}
          </h1>
          <div className="w-[272px] h-[22px] font-normal text-[Poppins ">
            {description}
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center items-center w-[23.33px] h-[23.33px] border rounded-full mt-6 ml-6 ${
          isSelected ? "bg-sage" : ""
        }`}
        onClick={onSelect}
      >
        {isSelected && (
          <div className="noHoverEffect">
            <FontAwesomeIcon icon={faCheck} color="white" />
          </div>
        )}
      </div>
    </div>
  );
};
const RoleSelection: React.FC<selectRoleCardProps> = ({ onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState<
    "icon1" | "icon2" | "icon3" | null
  >(null);

  useEffect(() => {
    onRoleChange(selectedRole);
  }, [selectedRole]);

  return (
    <div>
      <SelectRoleCard
        imageSrc="icon1"
        title="Independent Doctor"
        description="Paragraph of explanation is here ya"
        isSelected={selectedRole === "icon1"}
        onSelect={() => setSelectedRole("icon1")}
        currentSelectedRole={null}
        onRoleChange={function (
          role: "icon1" | "icon2" | "icon3" | null
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <SelectRoleCard
        imageSrc="icon2"
        title="Clinic"
        description="Paragraph of explanation is here ya"
        isSelected={selectedRole === "icon2"}
        onSelect={() => setSelectedRole("icon2")}
        currentSelectedRole={selectedRole}
        onRoleChange={function (
          role: "icon1" | "icon2" | "icon3" | null
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
      <SelectRoleCard
        imageSrc="icon3"
        title="Hospital"
        description="Paragraph of explanation is here ya"
        isSelected={selectedRole === "icon3"}
        onSelect={() => setSelectedRole("icon3")}
        currentSelectedRole={selectedRole}
        onRoleChange={function (
          role: "icon1" | "icon2" | "icon3" | null
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {


  const [selectedRole, setSelectedRole] = useState<
    "icon1" | "icon2" | "icon3" | null
  >(null);



  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!selectedRole) {
      e.preventDefault(); // Förhindra att länken navigerar om ingen roll är vald.

      alert("please select your role!")
    }
  };


  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Denna rad ger overlayen en svart genomskinlig bakgrund

        zIndex: 1000, // För att säkerställa att overlayen och modalen ligger ovanför all annat innehåll
      }}
    >
      <div
        style={{
          width: "521px",
          height: "631px",
          margin: "100px auto",
          backgroundColor: " #FFFFFF",
          padding: "32px",
          borderRadius: "24px",
          gap: "24px",
          // Endast suddig effekt
          zIndex: 500, // Modalen bör ha en högre zIndex än overlayen
        }}
      >
        <div className="w-[457px] border-[1px]flex items-center  ">
          <div className="w-[457px] h-[51px] font-[Poppins] font-semibold text-[32px] tracking-[-2%]  mt-[-2px] text-center">
            Select Your Role
          </div>

          <div className="w-[457px] h-[22px] font-[Poppins] font-normal text-[14px] opacity-50 text-center">
            Choose one of role available
          </div>
        </div>
        <div
          onClick={onClose}
          style={{
            position: "absolute",

            cursor: "pointer",
            zIndex: 1500,
          }}
        >
          <FontAwesomeIcon icon={faTimes} style={{ color: "black" }} />
        </div>
        <RoleSelection
          onRoleChange={setSelectedRole}
          currentSelectedRole={null}
          isSelected={false}
          imageSrc={"icon1"}
        />

        <div className=" w-[457px] h-[384px]">
          <div className="w-[457px] h-[54px] bg-sage flex justify-center items-center mt-6">
            <div className="w-[67px] h-[22px]flex items-center font-semibold">
              <Link
                href={getLinkForRole()}
                className=" text-white  gap-[5px}"
              >
                <nav
                  onClick={handleLinkClick}
                  className="flex text-1xl h-[22px] text-[16px]"
                >
                  Confirm
                </nav>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Modal;
