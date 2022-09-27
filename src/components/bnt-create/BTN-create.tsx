import { useAppDispatch } from "../../hook";
import { add } from "../../store/modalSlice";
import "./BTN-create.scss";

const BTNCreate: React.FC = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(add())} className="btn">Create Note</button>
}

export default BTNCreate