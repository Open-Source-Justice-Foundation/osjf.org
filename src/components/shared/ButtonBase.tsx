import { Button } from "../ui/button";
import { JSX } from "react";

interface Props {
  children: JSX.Element | string;
  className?: string;
}

export default function ButtonBase({ children, className }: Props) {
  return (
    <Button
      className={`tracking-[0.6px] box-border py-3 px-8 border border-black h-auto font-medium self-start font-hubot text-md ${className}`}
    >
      {children}
    </Button>
  );
}
