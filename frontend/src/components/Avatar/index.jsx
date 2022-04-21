import { useDispatch, useSelector } from "react-redux";
import Modal from "@components/Modal";
import FormAuth from "@components/FormAuth";
import ThemeBuilder from "@components/ThemeBuilder";

export default function Avatar() {
  const auth = useSelector((store) => store.auth);
  const modal = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const hClick = () => {
    dispatch({ type: "SHOW" });
  };

  return (
    <>
      <button onClick={hClick} type="button">
        <img src={auth.user?.avatar || ""} alt={auth.user?.pseudo || "Anon"} />
      </button>
      {modal.show && (
        <Modal title={auth.user.pseudo ? "Settings" : "Wanna login ?"}>
          {auth.user.pseudo ? <ThemeBuilder /> : <FormAuth />}
        </Modal>
      )}
    </>
  );
}
