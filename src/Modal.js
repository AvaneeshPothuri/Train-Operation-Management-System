// src/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, title, children, onSave }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={onClose} className="close-button">Cancel</button>
          <button onClick={onSave} className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
