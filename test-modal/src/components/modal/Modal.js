import { useEffect, useState, useRef } from "react";
import "../modal/Modal.css";
const Modal = (props) => {
  const [className, setClassName] = useState("modal");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  let { isShowModal, showModal } = props;
  useEffect(() => {
    showModal ? setClassName("modal show") : setClassName("modal");
  }, [showModal]);
  return (
    <div className={className}>
      <div className="modal-header">
        <button className="modal-button-close" onClick={isShowModal}>
          Close
        </button>
      </div>
      <div className="modal-content">
        <input ref={inputRef} type="text" className="modal-input" />
      </div>
    </div>
  );
};

export default Modal;
