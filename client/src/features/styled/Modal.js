import styled from "styled-components";
import { ClearButton } from "./Buttons";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  background: #3c4146dd;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: var(--light-color);
`;

export const ModalClose = styled(ClearButton)`
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  z-index: 5;
  background: var(--danger-color);
  color: var(--light-color);
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
