import React, {useEffect, useRef} from 'react'
import {Modal as BootstrapModal} from 'bootstrap';

export default function Modal({isOpen,title, actionButtonText,onActionButtonClick,onClose,children}) {
  
    const modal = useRef(null);

    useEffect(() => {
        const bootstrapModal = BootstrapModal.getOrCreateInstance(modal.current);
        (isOpen) ? bootstrapModal.show() : bootstrapModal.hide()
    }, [isOpen])
    // if something changes like title, we dont need useeffect to run again. everytime isOpen changes, will run useEffect
    return (
        <div className="modal" tabIndex="-1" ref={modal}> //modal = variable
            <div className="modal-dialog" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
            <div className="modal-body">
                {children} 
            </div>
                <div className="modal-footer">
                    <button type="button" className="btn close-button" onClick={onClose}>Close</button>
                    <button type="button" className="btn save-button" onClick={onActionButtonClick}>
                        {actionButtonText}
                    </button>
                </div>
                </div>
            </div>
        </div>
  )
}
