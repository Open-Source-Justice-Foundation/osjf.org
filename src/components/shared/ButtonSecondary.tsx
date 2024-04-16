import ButtonBase from "./ButtonBase";
import { JSX } from "react";

interface Props {
  children: JSX.Element | string;
  className?: string;
}
export default function ButtonSecondary({ children, className }: Props) {
  return (
    <ButtonBase
      className={`bg-white text-title border-buttonBorder hover:text-white w-fit ${className}`}
    >
      {children}
    </ButtonBase>
  );
}
