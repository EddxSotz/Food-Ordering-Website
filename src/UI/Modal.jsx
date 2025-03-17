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
        <dialog ref={modalRef} className="modal">
         {children}
         <button onClick={onClose} id="close-modal-btn">Close</button>         
        </dialog>,
        document.getElementById('modal')
    );
    }