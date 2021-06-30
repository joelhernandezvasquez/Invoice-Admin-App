import React from 'react';
import ReactDom from 'react-dom';

const Modal = (props) => {
 return ReactDom.createPortal(
   
   <div className={`modal ${props.modalStyle}`}>
     <div>{props.content}</div>
   </div>,
   document.querySelector('#modal')
 )
}

export default Modal;
