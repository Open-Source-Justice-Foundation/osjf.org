import { HorizontalRule } from "../icons";
import { JSX } from "react";

interface Props {
  subheading?: string;
  heading: string;
}

export default function SectionTitle({ subheading, heading }: Props) {
  return (
    <div className="mb-[30px] flex flex-row gap-x-2.5">
      <div className="max-w-[500px] lg:whitespace-nowrap">
        <h3 className="text-3xl md:text-5xl text-heading font-hubot font-semibold">
          {heading}
        </h3>
        {subheading && (
          <h4 className="font-medium font-hubot text-xl">{subheading}</h4>
        )}
      </div>
      <div className="w-full max-w-full overflow-hidden hidden md:block">
        <HorizontalRule />
      </div>
    </div>
  );
}
