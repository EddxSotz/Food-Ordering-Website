import { createPortal } from "react-dom";
import { useRef, useEffect } from 'react';


export default function Modal({children, openStatus, onClose}) {
    const modalRef = useRef();
    
    useEffect(() => {
        if (openStatus) {
            modalRef.current.showModal();
        } else {
            modalRef.current.close();
        }
    }
    , [openStatus]);

  
    const handleEscapeKey = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }
    
    const handleClickOutside = (e) => {
        if (e.target === modalRef.current) {
            onClose();
        }
    }

    return createPortal(
        <div className="fixed inset-0 w-screen h-screen bg-gray-900/50 z-20">
            <dialog ref={modalRef} className="w-3/4 sm:w-1/2 md:w-1/3 h-screen mr-0 ml-auto mb-0 bg-stone-300/95 text-gray-700 flex flex-col" onKeyDown={handleEscapeKey} onClick={handleClickOutside}>         
            <button onClick={onClose} className="absolute top-0 right-0 text-xl font-bold hover:text-stone-50 hover:bg-gray-600 hover:cursor-pointer active:bg-gray-800 active:text-stone-50 p-4">X</button>
            {children}                  
            </dialog>,
        </div>,
        document.getElementById('modal')
    );
    }