import React, { useState, useEffect } from "react";
import { useSession } from "react-use-session";
import styled from "styled-components";

const useSessionModal = () => {
  const session = "bxscioly.github.io";
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    const modalKey = "modalSession";
    localStorage.setItem(modalKey, session);
    setShowModal(false);
  };

  useEffect(() => {
    const modalKey = "modalSession";
    const modalSession = localStorage.getItem(modalKey);
    setShowModal(modalSession !== session);
  });

  return [showModal, hideModal];
};

const Modal = () => {
  const [showModal, hideModal] = useSessionModal();
  return (
    <>
      {showModal ? (
        <Wrap>
          <TopWrap>
            <h1>IMPORTANT</h1>
            <Close onClick={hideModal}>Close</Close>
          </TopWrap>
          <h3 style={{ fontWeight: "200" }}>
            Thank you for visiting our website! Unfortunately, it has not yet
            been properly calibrated for mobile and tablet devices. If you are
            visiting on a mobile device, please consider switching to a device
            that has a 16:9 aspect ratio for the best user experience.
          </h3>
        </Wrap>
      ) : null}
    </>
  );
};

const Wrap = styled.div`
  position: fixed;
  background: white;
  width: 350px;
  padding: 20px;
  bottom: 2%;
  right: 2%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
`;

const TopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Close = styled.h4`
  color: #aaa;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: black;
  }
`;
export default Modal;
