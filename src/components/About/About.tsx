import { HorizontalRule } from "../icons";

export default function About() {
  return (
    <div className="p-2.5">
      <div className="mb-5 flex flex-row gap-x-2.5">
        <h2 className="text-3xl md:text-5xl text-heading font-hubot font-semibold uppercase">
          About
        </h2>
        <div className="w-full max-w-full overflow-hidden">
          <HorizontalRule />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2.5 md:gap-x-10 gap-y-2.5">
        <div className="flex-auto">
          <p className="font-hubot text-lg text-heading">
            The Open Source Justice Foundation was formed in 2024 to spread
            access to justice globally through open-source software and
            technology.
          </p>
          <p className="font-hubot text-lg text-heading mt-2.5">
            To that end, the Foundation supports the research and development of
            open-source tools that empower individuals and communities to
            peacefully and voluntarily resolve their own disputes.
          </p>
        </div>
        <p className="font-hubot text-lg text-heading flex-auto">
          Through developer grants and freelance bounty programs, the Foundation
          works to advance the Open Source Justice Movement, which believes that
          access to justice doesn&apos;t just mean a wider door on the
          courthouse, but meaningful alternatives to conventional state-based
          justice systems.
        </p>
        <p className="text-right flex-auto font-hubot text-heading leading-[40px] text-[40px] mt-10 md:mt-0">
          Making Justice a conscious effort as the arc of history does not bend
          towards justice on its own.
        </p>
      </div>
    </div>
  );
}
