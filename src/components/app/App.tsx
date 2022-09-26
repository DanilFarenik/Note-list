import "./App.scss";

import { Note, TypeLevel, AccumulateCategory, Category } from "../../type";

import { uuid } from "../../util";
import { useAppSelector } from "../../hook";

import Header from "../header";
import List from "../list";

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
  const notes = useAppSelector(state => state.notes.list);

  const category = getCategory(notes)

  return (
    <>
      <Header />
      <main>
        <List numberOfColumns={6} data={notes} type={TypeLevel.NOTE} />
        <List numberOfColumns={3} data={category} type={TypeLevel.CATEGORY} />
      </main>
    </>
  );
}

export default App;
