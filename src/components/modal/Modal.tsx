import "./Modal.scss";

import Form from "./Form";
import { useAppDispatch, useAppSelector } from "../../hook";
import { close } from "../../store/modalSlice";
import { ModalLevel } from "../../type";


const Modal: React.FC = () => {
  const dispatch = useAppDispatch()
  const modal = useAppSelector(state => state.modal);

  return (
    <div className="modal">
      <div className="modal__body">
        <h2 className="modal__title">{modal.type === ModalLevel.ADD ? "Add note" : "Edit note"}</h2>
        <button onClick={() => dispatch(close())} className="modal__close" ><i className="fa-solid fa-xmark"></i></button>
        <Form />
      </div>
    </div>
  )
}

export default Modal;