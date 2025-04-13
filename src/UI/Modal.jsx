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
        if (modalRef.current === e.target) {
            e.stopPropagation();
            onClose();
        }
    }

    return createPortal(
        <div className="fixed inset-0 w-screen h-screen bg-gray-900/50 z-20">
            <dialog ref={modalRef} className="h-screen w-screen sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mr-0 ml-auto bg-stone-300/95" onKeyDown={handleEscapeKey} onClick={handleClickOutside}>         
            <div className="relative flex flex-col items-center justify-start w-full h-full text-gray-700">
                <button onClick={onClose} className="absolute top-0 right-0 text-xl font-bold hover:text-stone-50 hover:bg-gray-600 hover:cursor-pointer active:bg-gray-800 active:text-stone-50 p-4">X</button>
                {children} 
            </div>                             
            </dialog>,
        </div>,
        document.getElementById('modal')
    );
    }