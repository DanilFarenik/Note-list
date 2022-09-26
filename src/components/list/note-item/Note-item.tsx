import { useAppDispatch, useAppSelector } from "../../../hook";

import { edit } from "../../../store/modalSlice";
import { archive, archiveNote, deleteNote } from "../../../store/noteSlice";

import { Note } from "../../../type";
import icons from "../icons";

const NoteHeaderItem: React.FC = () => {
  const dispatch = useAppDispatch();
  const isArchive = useAppSelector(state => state.notes.isArchive);
  return (
    <>
      <p>Name</p>
      <p>Created</p>
      <p>Category</p>
      <p>Content</p>
      <p>Dates</p>
      <div>
        <button onClick={() => dispatch(archive())} className="list__archive">{isArchive ? "Active" : "Archive"}</button>
      </div>
    </>
  )
}

const NoteItem: React.FC<Note> = ({ name, dateOfCreation, category, text, date, id }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="list__name">
        <div className="list__icon">
          {icons[category as keyof typeof icons]}
        </div>
        <p>{name}</p>
      </div>
      <p>{dateOfCreation}</p>
      <p>{category}</p>
      <p>{text}</p>
      <p>{date.join(", ")}</p>
      <div>
        <button onClick={() => dispatch(edit({ name: name, category: category, text: text, id: id }))} className="list__btn"><i className="fa-solid fa-pen"></i></button>
        <button onClick={() => dispatch(archiveNote(id))} className="list__btn"><i className="fa-solid fa-box-archive"></i></button>
        <button onClick={() => dispatch(deleteNote(id))} className="list__btn"><i className="fa-solid fa-trash"></i></button>
      </div>
    </>
  )
}

export { NoteItem, NoteHeaderItem };