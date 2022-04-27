import Modal from "../modal/Modal";
import "../main/Main.css";
import { useState } from "react";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const isShowModal = () => {
    setShowModal(!showModal);
  };
  const handleShowModal = () => {
    isShowModal();
  };
  return (
    <>
      <div>
        <Modal showModal={showModal} isShowModal={isShowModal} />
        <button className="btn-open" onClick={handleShowModal}>
          Open
        </button>
      </div>
    </>
  );
};

export default Main;
