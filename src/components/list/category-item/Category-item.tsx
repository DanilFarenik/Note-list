import { Category } from "../../../type";

const CategoryHeaderItem: React.FC = () => {
  return (
    <>
      <div>Note Category</div>
      <div>Active</div>
      <div>Archived</div>
    </>
  )
}

const CategoryItem: React.FC<Category> = ({ name, active, archive }) => {
  return (
    <>
      <div className="list__name">
        <div className="list__icon">
          {/* {icons[nameCategory]} */}
        </div>
        <p>{name}</p>
      </div>
      <p>{active}</p>
      <p>{archive}</p>
    </>
  )
}

export { CategoryItem, CategoryHeaderItem };