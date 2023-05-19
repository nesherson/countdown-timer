import { useRef, useEffect } from "react";

import styled from "styled-components";

const Container = styled.dialog`
  width: 400px;
  border-radius: 8px;
  border: 1px solid #888;
  padding: 26px 16px;
  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
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

function DialogModal({ isOpen, onClose, children }) {
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

  return (
    <Container
      ref={ref}
      onCancel={onClose}
      onClick={(e) =>
        !ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
      }
    >
      {children}
    </Container>
  );
}

export default DialogModal;
