import Image from "next/image";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";
export default function Hero() {
  return (
    <div className="flex flex-col gap-y-4 mt-5 z-auto relative p-2.5">
      <Image
        alt="Background Pattern"
        src="/BackgroundPattern.svg"
        quality={100}
        fill
        sizes="100vw"
        style={{
          zIndex: "-1",
          objectFit: "cover",
        }}
      />
      <h1 className="text-4xl md:text-6xl font-hubot font-semibold text-heading uppercase">
        Open Source
        <br />
        Justice Foundation
      </h1>
      <p className="font-hubot text-heading text-2xl max-w-[660px]">
        We build and fund open-source tools to empower sovereign communities and
        individuals to peacefully and voluntarily resolve their own disputes.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <a href="https://pay.zaprite.com/pl_kyPRcNC9V5" target="_blank">
          <ButtonPrimary>Donate Now</ButtonPrimary>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScGxlbCkIchvHZP1Tmo7rd9DAhtXdJEcZoCaHSh2FPo64pjSg/viewform"
          target="_blank"
        >
          <ButtonSecondary>Apply for a Grant</ButtonSecondary>
        </a>
      </div>
    </div>
  );
}
