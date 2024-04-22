import { Button } from "../ui/button";
import { JSX } from "react";

interface Props {
  children: JSX.Element | string;
  className?: string;
}

export default function ButtonBase({ children, className }: Props) {
  return (
    <Button
      className={`tracking-[0.6px] box-border py-3 px-8 border-l-2 border-t-2 border-r-4 border-b-4 border-buttonBorder h-auto font-semibold self-start font-hubot text-md ${className}`}
    >
      {children}
    </Button>
  );
}
