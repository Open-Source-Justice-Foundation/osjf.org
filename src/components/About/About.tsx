// import { Placeholder } from "../icons";
import { HorizontalRule } from "../icons";
import Image from "next/image";
import alby from "./alby.png";

const partnerMap = [
  {
    img: alby,
    name: "Alby",
  },
  {
    img: alby,
    name: "Alby",
  },
  {
    img: alby,
    name: "Alby",
  },
  {
    img: alby,
    name: "Alby",
  },
];

export default function About() {
  return (
    <div className="mt-20 p-2.5">
      <div className="mb-5 flex flex-row gap-x-2.5">
        <h2 className="text-3xl md:text-5xl text-heading font-hubot font-light uppercase">
          About
        </h2>
        <div className="w-full max-w-full overflow-hidden">
          <HorizontalRule />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
        <div className="flex flex-col gap-y-2.5">
          <p className="flex-1 font-hubot text-lg lg:max-w-[540px] text-bodyGrey">
            The Open Source Justice Foundation was formed in 2024 to spread
            access to justice globally through open-source software and
            technology.
          </p>
          <p className="flex-1 font-hubot text-lg lg:max-w-[540px] text-bodyGrey">
            To that end, the Foundation supports the research and development of
            open-source tools that empower individuals and communities to
            peacefully and voluntarily resolve their own disputes.
          </p>
          <p className="flex-1 font-hubot text-lg lg:max-w-[540px] text-bodyGrey">
            Through developer grants and freelance bounty programs, the
            Foundation works to advance the Open Source Justice Movement, which
            believes that access to justice doesn&apos;t just mean a wider door
            on the courthouse, but meaningful alternatives to conventional
            state-based justice systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 lg:mt-0 flex-1 h-full">
          {partnerMap.map((partner, i) => (
            <div className="h-full flex justify-center items-center" key={i}>
              <Image src={partner.img} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
