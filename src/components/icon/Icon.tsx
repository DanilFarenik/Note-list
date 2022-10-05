const icons = {
  idea: <i className="fa-solid fa-pen"></i>,
  quote: <i className="fa-solid fa-quote-right"></i>,
  random: <i className="fa-solid fa-gear"></i>,
  task: <i className="fa-solid fa-list-check"></i>,
  close: <i className="fa-solid fa-xmark"></i>,
  edit: <i className="fa-solid fa-pen"></i>,
  delete: <i className="fa-solid fa-trash"></i>,
  archive: <i className="fa-solid fa-box-archive"></i>,
}


export type nameType = keyof typeof icons;
export type colorType = "black" | "white" | "green" | "grey" | "blue";
export type iconType = "circle" | "cube" | "default";


const styleType = {
  circle: "rounded-full w-[38px] text-center p-2 mx-2",
  cube: "rounded w-[38px] text-center p-2 mx-2",
  default: "text-3xl",
}


const styleColors = {
  black: (type: iconType) => type === "default" ? `text-black` : `bg-black text-white`,
  white: (type: iconType) => type === "default" ? `text-white` : `bg-white text-black`,
  green: (type: iconType) => type === "default" ? `text-[#00ff00]` : `bg-[#00ff00] text-white`,
  grey: (type: iconType) => type === "default" ? `text-icon` : `bg-icon text-white`,
  blue: (type: iconType) => type === "default" ? `text-[#0000ff]` : `bg-[#0000ff] text-white`,
}

export interface IIcon {
  className?: string,
  type: iconType,
  color: colorType,
  name: nameType,
}

const Icon: React.FC<IIcon> = ({ name = "task", className = '', type = "default", color = "grey" }) => {
  let style = `${styleColors[color](type)} ${styleType[type]} ${className}`;

  return (
    <div className={style}>
      {icons[name as keyof typeof icons]}
    </div>
  )
}

export default Icon;