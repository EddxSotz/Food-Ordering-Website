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
        <div className="fixed inset-0 w-screen h-screen z-50">
            <dialog ref={modalRef} className="h-screen w-auto sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mr-0 ml-auto bg-stone-300/95" onKeyDown={handleEscapeKey} onClick={handleClickOutside}>         
            <div className="relative flex flex-col items-center justify-start w-full h-full text-gray-700">
                <div className="w-full h-auto text-end bg-emerald-950/85">
                    <button onClick={onClose} className="text-lg font-bold text-stone-50 border-1 border-transparent rounded-b-md hover:text-lime-600 hover:border-lime-600 active:text-red-500 active:border-red-500 p-2">X</button>
                </div>                
                {children} 
            </div>                             
            </dialog>,
        </div>,
        document.getElementById('modal')
    );
    }