import React from 'react';
import Image from 'next/image';
import CheckboxItem from './checkboxItem';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}
type selectRoleCardProps = {
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
};
const Modal: React.FC<ModalProps & selectRoleCardProps> = ({ isOpen, onClose, children, title, description,


}) => {

    const SelectRoleCard: React.FC<selectRoleCardProps> = ({ title,
        description,
        imageSrc = "/",
        imageAlt = "",
        imageWidth = 64,
        imageHeight = 64 }) => {

        return (
            <div className=" selectRoleCard  flex justify-center text-center   items-center w-[457px] h-[112px] border-[1px] rounded-[10px] mt-6  ">
                <div className="w-[360px] h-[64px]  flex   items-center  justify-between">
                    <div className="w-[64px] h-[64px]  flex justify-center ">
                        <div className="  flex  items-center justify-between border-[1px] rounded-full  ">

                            <Image

                                src={imageSrc}
                                alt={imageAlt}
                                width={imageWidth}
                                height={imageHeight}
                            />


                        </div>

                    </div>
                    <div className="  text-left">

                        <h1 className="w-[272px] h-[32px] text-[Poppins] text-[20px] tracking-[-2%]  font-semibold">{title}</h1>
                        <p className="w-[272px] h-[22px] font-normal text-[Poppins]">{description}</p>
                    </div>

                </div>
                <div className="w-[28px] h-[28px] border-[1px] ml-6 rounded-full">
                    <CheckboxItem size="large" checkMark="checkMedium" id="4" />
                </div>
            </div>
        );
    }

    if (!isOpen) return null;

    return (
        <div


            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Denna rad ger overlayen en svart genomskinlig bakgrund

                zIndex: 1000, // För att säkerställa att overlayen och modalen ligger ovanför all annat innehåll

            }}>
            <div style={{
                width: '521px',
                height: "631px",
                margin: '100px auto',
                backgroundColor: ' #FFFFFF',
                padding: '32px',
                borderRadius: '24px',
                gap: "24px",
                // Endast suddig effekt
                zIndex: 500 // Modalen bör ha en högre zIndex än overlayen
            }}>
                <div className='w-[457px] border-[1px]flex items-center '>
                    <div className='w-[457px] h-[51px] font-[Poppins] font-semibold text-[32px] tracking-[-2%]  mt-[-2px] text-center'> Select Your Role</div>

                    <div className='w-[457px] h-[22px] font-[Poppins] font-normal text-[14px] opacity-50 text-center'>Choose one of role available</div>
                </div>
                <div className=''>
                    <SelectRoleCard imageSrc="/doctor.big.png" imageHeight={64} imageWidth={64} title='Independent Doctor' description='Paragraph of explanation is here ya'


                    />
                    <SelectRoleCard imageSrc='/Frame 1000005697.png' imageAlt='1' imageHeight={64} imageWidth={64} title='Clinic' description='Paragraph of explanation is here ya' />

                    <SelectRoleCard imageSrc='/hospital.png' title='Hospital' description='Paragraph of explanation is here ya' />
                </div>

                <div className=" w-[457px] h-[384px]   ">

                    <div className='w-[457px] h-[54px] bg-[#45AC60] flex justify-center items-center mt-6'>
                        <div className='w-[67px] h-[22px] text-[#FFFFFF] flex items-center font-semibold   '>Confirm </div>

                    </div>
                </div>

                {children}

                <button onClick={onClose}></button>
            </div>

        </div>
    );
}

export default Modal;
