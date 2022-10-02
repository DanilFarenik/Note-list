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
        <button onClick={() => dispatch(archive())} className="rounded border-2 px-6 hover:bg-white hover:text-grey transition">{isArchive ? "Active" : "Archive"}</button>
      </div>
    </>
  )
}

const NoteItem: React.FC<Note> = ({ name, dateOfCreation, category, text, date, id }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center">
        <div className="rounded-full w-[38px] text-center bg-icon p-2 mx-2 text-white">
          {icons[category as keyof typeof icons]}
        </div>
        <p>{name}</p>
      </div>
      <p>{dateOfCreation}</p>
      <p>{category}</p>
      <p>{text}</p>
      <p>{date.join(", ")}</p>
      <div>
        <button
          onClick={() => dispatch(edit({ name: name, category: category, text: text, id: id }))}
          className="m-1 text-3xl text-icon"><i className="fa-solid fa-pen"></i></button>
        <button
          onClick={() => dispatch(archiveNote(id))}
          className="m-1 text-3xl text-icon"><i className="fa-solid fa-box-archive"></i></button>
        <button
          onClick={() => dispatch(deleteNote(id))}
          className="m-1 text-3xl text-icon"><i className="fa-solid fa-trash"></i></button>
      </div>
    </>
  )
}

export { NoteItem, NoteHeaderItem };