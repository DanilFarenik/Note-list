import { Category } from "../../../type";
import icons from "../icons";

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
          {icons[name as keyof typeof icons]}
        </div>
        <p>{name}</p>
      </div>
      <p>{active}</p>
      <p>{archive}</p>
    </>
  )
}

export { CategoryItem, CategoryHeaderItem };