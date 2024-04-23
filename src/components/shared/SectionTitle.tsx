import { HorizontalRule } from "../icons";
import { JSX } from "react";

interface Props {
  subheading?: string;
  heading: string;
}

export default function SectionTitle({ subheading, heading }: Props) {
  return (
    <div className="mb-5 flex flex-row gap-x-2.5">
      <div className="max-w-[500px] lg:whitespace-nowrap">
        <h2 className="text-3xl md:text-5xl text-heading font-hubot font-semibold">
          {heading}
        </h2>
        {subheading && (
          <h3 className="font-medium font-hubot text-lg md:text-2xl">
            {subheading}
          </h3>
        )}
      </div>
      <div className="w-full max-w-full overflow-hidden">
        <HorizontalRule />
      </div>
    </div>
  );
}
