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
    })} className="modal__form">
      <div className="modal__item">
        <label htmlFor="name">Name:</label>
        <input {...register("name", { required: true, maxLength: 100 })} type="text" className={errors.name ? "modal__error" : ""} />
      </div>
      <div className="modal__item">
        <label htmlFor="category">Category:</label>
        <select {...register("category")} >
          <option value={NamesCategory.task}>Task</option>
          <option value={NamesCategory.idea}>Idea</option>
          <option value={NamesCategory.quote}>Quote</option>
          <option value={NamesCategory.random}>Random Thought</option>
        </select>
      </div>
      <textarea {...register("text", { required: true, maxLength: 200 })} className={`modal__text ${errors.text ? "modal__error" : ""}`}></textarea>
      <input className="modal__btn" type="submit" value="save" />
    </form>
  )
}

export default Form;