import { useRef, useEffect } from "react";

import styled from "styled-components";

const Container = styled.dialog`
  width: 400px;
  border-radius: 8px;
  border: 1px solid #888;

  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

function isClickInsideRectangle(e, element) {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
}

function DialogModal({ title, isOpen, onProceed, onClose, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.body.classList.add("modal-open");
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const proceedAndClose = () => {
    onProceed();
    onClose();
  };

  return (
    <Container
      ref={ref}
      onCancel={onClose}
      onClick={(e) =>
        !ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
      }
    >
      <h3>{title}</h3>
      {children}
      <Buttons>
        <button onClick={proceedAndClose}>Proceed</button>
        <button onClick={onClose}>Close</button>
      </Buttons>
    </Container>
  );
}

export default DialogModal;
