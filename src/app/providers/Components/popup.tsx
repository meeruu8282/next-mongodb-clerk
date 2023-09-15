import React from "react";

import Image from "next/image";
import CheckboxItem from "./checkboxItem";
import { SvgIcon1, SvgIcon2, SvgIcon3 } from "./svgComponent";
import { link } from "fs";
import Link from "next/link";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}
type selectRoleCardProps = {
    title?: string;
    description?: string;
    imageSrc: "icon1" | "icon2" | "icon3";
};

const SelectRoleCard: React.FC<selectRoleCardProps> = ({
    title,
    description,
    imageSrc = "icon1",
}) => {
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
        <div className=" selectRoleCard  iconHover flex justify-center text-center   items-center w-[457px] h-[112px] border-[1px] rounded-[10px] mt-6   ">
            <div className="w-[360px] h-[64px]  flex   items-center  justify-between">
                <div className="w-[64px] h-[64px]  flex justify-center items-center">
                    <div className=" flex  items-center   border-[1px] rounded-full w-[64px] h-[64px]">
                        {renderIcon()}
                    </div>
                </div>
                <div className="  text-left  ">
                    <h1 className="w-[272px] h-[32px] text-[Poppins] text-[20px] tracking-[-2%]  font-semibold">
                        {title}
                    </h1>
                    <p className="w-[272px] h-[22px] font-normal text-[Poppins ">
                        {description}
                    </p>
                </div>
            </div>
            <div className="w-[28px] h-[28px] border-[1px] ml-6 rounded-full">
                <CheckboxItem size="large" checkMark="checkMedium" id="4" />
            </div>
        </div>
    );
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
                        {" "}
                        Select Your Role
                    </div>

                    <div className="w-[457px] h-[22px] font-[Poppins] font-normal text-[14px] opacity-50 text-center">
                        Choose one of role available
                    </div>
                </div>

                <SelectRoleCard
                    imageSrc="icon1"
                    title="Independent Doctor"
                    description="Paragraph of explanation is here ya"
                />
                <SelectRoleCard
                    imageSrc="icon2"
                    title="Independent Doctor"
                    description="Paragraph of explanation is here ya"
                />

                <SelectRoleCard
                    imageSrc="icon3"
                    title="Independent Doctor"
                    description="Paragraph of explanation is here ya"
                />
                <button onClick={onClose}>Close</button>

                <div className=" w-[457px] h-[384px]">
                    <div className="w-[457px] h-[54px] bg-[#45AC60] flex justify-center items-center mt-6">
                        <div className="w-[67px] h-[22px] text-[#FFFFFF] flex items-center font-semibold">
                            <Link
                                href="/providers/auth/signIn"
                                className="text-black gap-[5px}"
                            >
                                <nav className="flex text-1xl h-[22px] text-[16px]">
                                    Confirm
                                </nav>
                            </Link>{" "}
                        </div>
                    </div>
                </div>

                {children}

                <button onClick={onClose}></button>
            </div>
        </div>
    );
};

export default Modal;
