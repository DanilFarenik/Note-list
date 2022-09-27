import "./List.scss";

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
    <section className="list">
      <div className="list__table">
        <div className="list__row list__row-header" style={style}>
          {headerElements[type]}
        </div>
        {data.map((item) => {
          return (
            <div key={item.id} className="list__row" style={style}>
              {type === TypeLevel.NOTE ? itemElements[type](item as Note) : itemElements[type](item as Category)}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default List;