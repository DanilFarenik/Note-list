import { useAppDispatch, useAppSelector } from "../../../hook";

import { edit } from "../../../store/modalSlice";
import { archive, archiveNote, deleteNote } from "../../../store/noteSlice";

import { Note } from "../../../type";
import Button from "../../button/Button";
import Icon, { nameType } from "../../icon";


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
        <Button onClick={() => dispatch(archive())} className="px-6 border-2" type="outline" color="white">{isArchive ? "Active" : "Archive"}</Button>
      </div>
    </>
  )
}

const NoteItem: React.FC<Note> = ({ name, dateOfCreation, category, text, date, id }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center">
        <Icon name={category as nameType} type="circle" color="grey" />
        <p>{name}</p>
      </div>
      <p>{dateOfCreation}</p>
      <p>{category}</p>
      <p>{text}</p>
      <p>{date.join(", ")}</p>
      <div>
        <button
          onClick={() => dispatch(edit({ name: name, category: category, text: text, id: id }))}
          className="mx-1"
        ><Icon name="edit" color="grey" type="default" /></button>
        <button
          onClick={() => dispatch(archiveNote(id))}
          className="mx-1"
        ><Icon name="archive" color="grey" type="default" /></button>
        <button
          onClick={() => dispatch(deleteNote(id))}
          className="mx-1"
        ><Icon name="delete" color="grey" type="default" /></button>
      </div>
    </>
  )
}

export { NoteItem, NoteHeaderItem };