import { Placeholder } from "../icons";

export default function About() {
  return (
    <div className="mt-20">
      <h2 className="mb-5 text-3xl text-titleGrey font-mona">About</h2>
      <div className="flex flex-col lg:flex-row gap-x-20">
        <p className="flex-1 font-hubot text-lg lg:max-w-[540px]">
          The Open Source Justice Foundation was formed in 2024 to spread access
          to justice globally through open-source software and technology. To
          that end, the Foundation supports the research and development of
          open-source tools that empower individuals and communities to
          peacefully and voluntarily resolve their own disputes. Through
          developer grants and freelance bounty programs, the Foundation works
          to advance the Open Source Justice Movement, which believes that
          access to justice doesn&apos;t just mean a wider door on the
          courthouse, but meaningful alternatives to conventional state-based
          justice systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 md:mt-0 flex-1 h-full">
          {[...Array(4)].map((el, i) => (
            <div className="h-full" key={i}>
              <Placeholder />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
