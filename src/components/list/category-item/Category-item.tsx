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
      <div className="flex items-center">
        <div className="rounded-full w-[38px] text-center bg-icon p-2 mx-2 text-white">
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