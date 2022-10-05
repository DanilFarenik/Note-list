import { Category } from "../../../type";
import Icon, { nameType } from "../../icon";


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
        <Icon name={name as nameType} type="circle" color="grey" />
        <p>{name}</p>
      </div>
      <p>{active}</p>
      <p>{archive}</p>
    </>
  )
}

export { CategoryItem, CategoryHeaderItem };