import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

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

               

                {children}
                <div className='w-[457px] h-[54px] bg-[#45AC60] flex justify-center items-center'>
                    <div className='w-[67px] h-[22px] text-[#FFFFFF] flex items-center font-semibold'>Confirm </div>

                </div>
                <button onClick={onClose}></button>
            </div>

        </div>
    );
}

export default Modal;
