import { HTMLAttributes, ReactNode } from "react";

export type btnStyleType = "contained" | "outline" | "text";
export type colorType = "black" | "white" | "grey";

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  type: btnStyleType,
  children: ReactNode,
  color: colorType,
}

const typesStyle = {
  contained: ([colorSpectrum, color]: string[]) => `border-2 border-transparent bg-${colorSpectrum} text-${color} hover:bg-primary`,
  outline: ([colorSpectrum]: string[]) => `border-2 text-${colorSpectrum} border-${colorSpectrum} hover:bg-primary`,
  text: ([colorSpectrum]: string[]) => `border-2 border-transparent text-${colorSpectrum} hover:text-primary`,
}

const colors = {
  black: ["black", "white"],
  white: ["white", "black"],
  grey: ["grey", "white"],
}

const Button: React.FC<IButton> = ({ children, type, color, className, ...atr }) => {
  const style = `px-4 p-1 rounded transition ${typesStyle[type](colors[color])} ${className}`;

  return <button {...atr} className={style} >{children}</button>
}

export default Button;