import { Note, TypeLevel, AccumulateCategory, Category } from "../../type";

import { uuid } from "../../util";
import { useAppDispatch, useAppSelector } from "../../hook";

import Header from "../header";
import List from "../list";
import Button from "../button/Button";
import Modal from "../modal";
import { add } from "../../store/modalSlice";


const getCategory = (notes: Note[]): Category[] => {
  const category = notes.reduce<AccumulateCategory>((accumulate, note) => {
    if (!accumulate[note.category]) {
      accumulate[note.category] = { active: 0, archive: 0 };
    }

    !note.archived ? ++accumulate[note.category].active : ++accumulate[note.category].archive;

    return accumulate;
  }, {})

  return Object.entries(category).map((item) => ({ name: item[0], id: uuid(), ...item[1] }))
}

const App: React.FC = () => {
  const { list: notes, isArchive } = useAppSelector(state => state.notes);
  const modal = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();
  const category = getCategory(notes);

  return (
    <>
      {modal.isOpen ? <Modal /> : ""}
      <Header />
      <main>
        <section>
          <List numberOfColumns={6} data={notes.filter(note => note.archived === isArchive)} type={TypeLevel.NOTE} />
          <div className="text-right">
            <Button className="mx-10" type="outline" color="grey" onClick={() => dispatch(add())}>Create Note</Button>
          </div>
        </section>
        <section>
          <List numberOfColumns={3} data={category} type={TypeLevel.CATEGORY} />
        </section>
      </main>
    </>
  );
}

export default App;
