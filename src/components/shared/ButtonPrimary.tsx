import ButtonBase from "./ButtonBase";
import { JSX } from "react";

interface Props {
  children: JSX.Element | string;
  className?: string;
}
export default function ButtonPrimary({ children, className }: Props) {
  return (
    <ButtonBase
      className={`bg-bitcoin text-black hover:bg-bitcoin hover:text-white ${className}`}
    >
      {children}
    </ButtonBase>
  );
}
