import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = (props) =>{
    return (<div className='backdrop' onClick={props.onClose}></div>)
}

const ModalOverlay = (props) =>{
    return (<div className='modal'>
        <div className='content'>{props.children}</div>
    </div>)
}

let overlay = document.getElementById('overlay');

const Modal = props => {
    return (<Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,overlay)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,overlay)}
    </Fragment>)
}

export default Modal;