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

    return createPortal(
        <dialog ref={modalRef} className="fixed top-0 bottom-0 right-0 w-3/4 md:1/2 lg:1/3 h-full bg-stone-300 text-gray-700 flex flex-col py-4 px-2 z-20" onClick={onClose}>         
         <button onClick={onClose} className="absolute top-0 right-0 text-xl font-bold hover:text-stone-50 hover:bg-gray-700 hover:cursor-pointer p-4">X</button>
         {children}                  
        </dialog>,
        document.getElementById('modal')
    );
    }