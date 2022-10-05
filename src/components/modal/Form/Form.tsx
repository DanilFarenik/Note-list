import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { FormValue, ModalLevel, NamesCategory, Note } from "../../../type";

import { useAppDispatch, useAppSelector } from "../../../hook";
import { addNote, editNote } from "../../../store/noteSlice";
import { close } from "../../../store/modalSlice";

import { getDateOfCreation, getDatesOfString, uuid } from "../../../util";


const createNoteFromData = (data: FormValue): Note => {
  return {
    name: data.name.trim(),
    date: getDatesOfString(data.text),
    category: data.category,
    text: data.text.trim(),
    dateOfCreation: getDateOfCreation(),
    archived: false,
    id: data.id || uuid(),
  }
}


const Form: React.FC = () => {
  const modal = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: modal.defaultValuesForm
  });

  useEffect(() => {
    reset(modal.defaultValuesForm);
  }, [modal.defaultValuesForm])

  return (
    <form onSubmit={handleSubmit((data) => {
      const note = createNoteFromData(data)

      modal.type === ModalLevel.ADD ? dispatch(addNote(note)) : dispatch(editNote(note))

      dispatch(close());
    })} className="flex flex-col p-3 items-center">
      <div className="flex justify-between w-full py-3">
        <label htmlFor="name">Name:</label>
        <input {...register("name", { required: true, maxLength: 100 })} type="text" className={`border-2 rounded px-1 ${errors.name ? "border-rose-500" : ""}`} />
      </div>
      <div className="flex justify-between w-full py-3">
        <label htmlFor="category">Category:</label>
        <select className="border-2 rounded px-1" {...register("category")} >
          <option value={NamesCategory.task}>Task</option>
          <option value={NamesCategory.idea}>Idea</option>
          <option value={NamesCategory.quote}>Quote</option>
          <option value={NamesCategory.random}>Random Thought</option>
        </select>
      </div>
      <textarea {...register("text", { required: true, maxLength: 200 })} className={`border-2 rounded px-1 w-full h-[100px] resize-none ${errors.text ? "modal__error" : ""}`}></textarea>
      <input className="border-2 rounded px-5 cursor-pointer m-3" type="submit" value="save" />
    </form>
  )
}

export default Form;