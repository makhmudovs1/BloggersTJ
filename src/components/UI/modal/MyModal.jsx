import React from 'react';
import "./MyModal.css";

const MyModal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal nactive" : "modal"}>
            <div className={active ? "modal__content nactive" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;