import { Note, TypeLevel, AccumulateCategory, Category } from "../../type";

import { uuid } from "../../util";
import { useAppSelector } from "../../hook";

import Header from "../header";
import List from "../list";
import BTNCreate from "../bnt-create/BTN-create";
import Modal from "../modal";


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

  const category = getCategory(notes);

  return (
    <>
      {modal.isOpen ? <Modal /> : ""}
      <Header />
      <main>
        <section className="">
          <List numberOfColumns={6} data={notes.filter(note => note.archived === isArchive)} type={TypeLevel.NOTE} />
          <div className="text-right">
            <BTNCreate />
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
