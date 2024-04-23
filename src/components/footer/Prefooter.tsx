import Image from "next/image";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";
import { Mail, Discord, Github } from "../icons";

export default function Prefooter() {
  return (
    <div className="mt-20 relative z-auto mt-25 p-2.5">
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
      <h2 className="text-4xl lg:text-[80px] lg:leading-[96px] font-hubot font-semibold text-heading uppercase">
        Join the Open Source Justice Movement
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 mt-32">
        <a
          className="self-start"
          href="https://pay.zaprite.com/pl_kyPRcNC9V5"
          target="_blank"
        >
          <ButtonPrimary>Donate Now</ButtonPrimary>
        </a>
        <a
          className="self-start"
          href="https://docs.google.com/forms/d/e/1FAIpQLScGxlbCkIchvHZP1Tmo7rd9DAhtXdJEcZoCaHSh2FPo64pjSg/viewform"
          target="_blank"
        >
          <ButtonSecondary>Apply for a Grant</ButtonSecondary>
        </a>
        <div className="flex flex-col lg:flex-row lg:ml-auto lg:justify-center lg:items-center gap-4 lg:gap-6">
          <a
            className="self-start my-auto hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
            href="https://discord.gg/7BcZxFvjg7"
            target="_blank"
          >
            <div>
              <Discord />
            </div>
            <span>Discord</span>
          </a>
          <a
            className="self-start my-auto hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
            href="https://github.com/Open-Source-Justice-Foundation"
            target="_blank"
          >
            <Github height="25" width="24" />
            <span>Github</span>
          </a>
          <a
            className="self-start my-auto hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
            href="mailto:info@opensourcejustice.org"
          >
            <Mail />
            <span>info@opensourcejustice.org</span>
          </a>
        </div>
      </div>
    </div>
  );
}
