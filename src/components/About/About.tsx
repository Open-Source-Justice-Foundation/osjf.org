import SectionTitle from "../shared/SectionTitle";
export default function About() {
  return (
    <div className="p-2.5">
      <SectionTitle heading="Bending the Arc of History Towards Justice" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2.5 md:gap-x-10 gap-y-2.5">
        <div className="flex-auto">
          <p className="font-hubot text-lg text-heading">
            The Open Source Justice Foundation was formed in 2024 to spread
            access to justice globally through open-source software and
            technology.
          </p>
          <p className="font-hubot text-lg text-heading mt-2.5">
            The Foundation supports the research and development of open-source
            tools that empower individuals and communities to peacefully and
            voluntarily resolve their own disputes.
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
          The arc of history does not bend towards justice on its own —
          it requires conscious action.
        </p>
      </div>
    </div>
  );
}
