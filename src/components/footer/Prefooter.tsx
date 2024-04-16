import Image from "next/image";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";
import { Mail, Discord } from "../icons";

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
      <h2 className="text-4xl md:text-[80px] md:leading-[96px] font-hubot font-semibold text-heading uppercase">
        Join the Open Source Justice Movement
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mt-32">
        <a href="https://pay.zaprite.com/pl_kyPRcNC9V5" target="_blank">
          <ButtonPrimary>Donate Now</ButtonPrimary>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScGxlbCkIchvHZP1Tmo7rd9DAhtXdJEcZoCaHSh2FPo64pjSg/viewform"
          target="_blank"
        >
          <ButtonSecondary>Apply for a Grant</ButtonSecondary>
        </a>
        <div className="flex flex-col md:flex-row md:ml-auto md:justify-center md:items-center gap-4 md:gap-6">
          <a
            className="hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
            href="https://discord.gg/7BcZxFvjg7"
            target="_blank"
          >
            <div>
              <Discord />
            </div>
            <span>Discord</span>
          </a>
          <a
            className="hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
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
