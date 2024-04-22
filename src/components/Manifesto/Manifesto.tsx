import SectionTitle from "../shared/SectionTitle";
import ButtonSecondary from "../shared/ButtonSecondary";
import Link from "next/link";
export default function Manifesto() {
  return (
    <div className="lg:mt-40 p-2.5 flex flex-col lg:flex-row items-start gap-x-12 lg:mb-[120px] mt-20 mb-20">
      <h2 className="mb-8 font-hubot text-heading text-[3rem] leading-[56px] md:text-[5rem] md:leading-[88px] tracking-[-3px] font-semibold lg:max-w-[465px]">
        The Open Source Justice Manifesto
      </h2>

      <div className="lg:max-w-[687px]">
        <p className="font-hubot text-lg text-heading mb-3.5">
          Private, Alternative Dispute Resolution (ADR) systems and Online
          Dispute Resolution (ODR) technologies have the potential to
          drastically increase global access to justice. But the transformative
          power of conventional ADR and ODR tools are{" "}
          <span className="font-semibold">
            hindered by proprietary software licenses
          </span>{" "}
          that shield source code from view
        </p>
        <p className="font-hubot font-medium text-right text-3xl text-heading mt-2.5 my-4">
          But the transformative power of conventional ADR and ODR tools are
          hindered by proprietary software licenses that shield source code from
          view
        </p>
        <p className="font-hubot text-lg text-heading mb-3.5">
          Without a way for users to verify the operation of these black-box
          solutions, they suffer from perceptions of{" "}
          <span className="font-semibold">unfairness or bias</span>, which
          disincentivize use. And such closed-source licenses prevent
          communities from modifying the ODR tools to fit their specific needs.
        </p>
        <p className="font-hubot text-lg text-heading mb-3.5">
          By taking conventional ADR and ODR designs, however, and{" "}
          <span className="font-semibold">
            deploying them through free open-source software and protocols
          </span>
          , communities and individuals can harness the full potential of these
          private dispute resolution systems. The result is{" "}
          <span className="font-semibold text-bitcoin">
            Open Source Justice
          </span>
          .
        </p>
        <Link href="/manifesto" className="mt-8 block">
          <ButtonSecondary>Read the Full OSJF Manifesto</ButtonSecondary>
        </Link>
      </div>
    </div>
  );
}
