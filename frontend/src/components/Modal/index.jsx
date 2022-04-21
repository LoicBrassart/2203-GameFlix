import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import SModal from "./style";

export default function Modal({ title, children, onCancel, onOK }) {
  const modal = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const hClose = () => {
    dispatch({ type: "HIDE" });
    if (onCancel) {
      onCancel();
    }
  };
  const hOK = () => {
    dispatch({ type: "HIDE" });
    onOK();
  };
  const hKeydown = (evt) => {
    if (evt.key === "Escape") {
      hClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", hKeydown);

    return () => {
      document.body.removeEventListener("keydown", hKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={modal.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 400 }}
    >
      <SModal className={modal.show && "open"} onClick={hClose}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className="content"
          onClick={(evt) => evt.stopPropagation()}
          onKeyDown={hKeydown}
        >
          <header>
            <h4>{title}</h4>
          </header>
          <div className="main">{children}</div>
          <footer>
            <button type="button" onClick={hClose}>
              Close
            </button>
            {onOK && (
              <button type="button" onClick={hOK}>
                OK
              </button>
            )}
          </footer>
        </div>
      </SModal>
    </CSSTransition>,
    document.getElementById("root")
  );
}
