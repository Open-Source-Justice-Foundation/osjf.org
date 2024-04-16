import { HorizontalRule } from "../icons";
import { JSX } from "react";

interface Props {
  children: JSX.Element | string;
}

export default function SectionTitle({ children }: Props) {
  return (
    <div className="mb-5 flex flex-row gap-x-2.5">
      <h2 className="md:whitespace-nowrap text-3xl md:text-5xl text-heading font-hubot font-semibold uppercase">
        {children}
      </h2>
      <div className="w-full max-w-full overflow-hidden">
        <HorizontalRule />
      </div>
    </div>
  );
}
