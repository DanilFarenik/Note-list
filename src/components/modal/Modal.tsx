import Form from "./Form";
import { useAppDispatch, useAppSelector } from "../../hook";
import { close } from "../../store/modalSlice";
import { ModalLevel } from "../../type";


const Modal: React.FC = () => {
  const dispatch = useAppDispatch()
  const modal = useAppSelector(state => state.modal);

  return (
    <div className="fixed flex items-center w-full h-full bg-modal top-0 justify-center">
      <div className="relative inline-block w-[400px] bg-white rounded">
        <h2 className="p-3 text-center font-bold text-xl">{modal.type === ModalLevel.ADD ? "Add note" : "Edit note"}</h2>
        <button onClick={() => dispatch(close())} className="absolute right-2 top-1" ><i className="fa-solid fa-xmark"></i></button>
        <Form />
      </div>
    </div>
  )
}

export default Modal;