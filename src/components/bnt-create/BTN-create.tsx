import { useAppDispatch } from "../../hook";
import { add } from "../../store/modalSlice";

const BTNCreate: React.FC = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(add())} className="mx-10 rounded border-2 px-4 p-1 hover:bg-primary transition">Create Note</button>
}

export default BTNCreate