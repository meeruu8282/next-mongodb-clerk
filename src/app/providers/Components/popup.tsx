import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
   
  if (!isOpen) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Denna rad ger overlayen en svart genomskinlig bakgrund
      zIndex: 1000 // För att säkerställa att overlayen och modalen ligger ovanför all annat innehåll
    }}>
      <div style={{ 
        maxWidth: '400px', 
        margin: '100px auto', 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px', 
        zIndex: 1001 // Modalen bör ha en högre zIndex än overlayen
      }}>
        {children}
        <button onClick={onClose}>Stäng</button>
      </div>
    </div>
  );
}

export default Modal;
