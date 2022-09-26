import { useAppDispatch } from "../../../hook";
import { archiveNote, deleteNote, editNote } from "../../../store/noteSlice";
import { Note } from "../../../type";

const NoteHeaderItem: React.FC = () => {
  return (
    <>
      <p>Name</p>
      <p>Created</p>
      <p>Category</p>
      <p>Content</p>
      <p>Dates</p>
      <div>
        <button className="list__archive">Archive</button>
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
          {/* {icons[note.category]} */}
        </div>
        <p>{name}</p>
      </div>
      <p>{dateOfCreation}</p>
      <p>{category}</p>
      <p>{text}</p>
      <p>{date.join(", ")}</p>
      <div>
        <button onClick={() => dispatch(deleteNote(id))} className="list__btn"><i className="fa-solid fa-pen"></i></button>
        <button onClick={() => dispatch(editNote(id))} className="list__btn"><i className="fa-solid fa-box-archive"></i></button>
        <button onClick={() => dispatch(archiveNote(id))} className="list__btn"><i className="fa-solid fa-trash"></i></button>
      </div>
    </>
  )
}

export { NoteItem, NoteHeaderItem };