import React, { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Portal: React.FC = ({ children }) => {
  return createPortal(children, document.body);
};

const Overload = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadein 1s;

  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(41, 45, 56, 0.9);
  z-index: 1;
`;

const Modal: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Portal>
      <Overload {...props} />
    </Portal>
  );
};

export default Modal;
