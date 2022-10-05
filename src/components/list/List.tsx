import { Note, Category, TypeLevel } from "../../type";

import { NoteHeaderItem, NoteItem } from "./note-item";
import { CategoryHeaderItem, CategoryItem } from "./category-item"

interface List {
  numberOfColumns: number,
  data: Note[] | Category[],
  type: TypeLevel,
}

interface HeaderElementsType {
  [TypeLevel.NOTE]: React.ReactElement,
  [TypeLevel.CATEGORY]: React.ReactElement,
}

interface ItemElementsType {
  [TypeLevel.NOTE]: ({ }: Note) => React.ReactElement,
  [TypeLevel.CATEGORY]: ({ }: Category) => React.ReactElement,
}

const headerElements: HeaderElementsType = {
  [TypeLevel.NOTE]: <NoteHeaderItem />,
  [TypeLevel.CATEGORY]: <CategoryHeaderItem />,
}

const itemElements: ItemElementsType = {
  [TypeLevel.NOTE]: (note) => <NoteItem {...note} />,
  [TypeLevel.CATEGORY]: (category) => <CategoryItem {...category} />,
}

const List: React.FC<List> = ({ numberOfColumns, data, type }) => {
  const style = { gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }

  return (
    <section className="p-5 px-10">
      <div className="flex-col w-full min-w-[300px]">
        <div className={`grid my-3 rounded px-6 p-1 items-center font-bold bg-grey text-white`} style={style}>
          {headerElements[type]}
        </div>
        {data.map((item) => {
          return (
            <div key={item.id} className={`grid my-3 rounded px-6 p-1 items-center bg-ItemList`} style={style}>
              {type === TypeLevel.NOTE ? itemElements[type](item as Note) : itemElements[type](item as Category)}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default List;