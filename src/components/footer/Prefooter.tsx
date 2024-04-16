import Image from "next/image";
import { Button } from "../ui/button";
import { Mail } from "../icons";

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
      <h1 className="text-4xl md:text-[80px] md:leading-[96px] font-hubot font-light text-heading uppercase">
        Join the Open Source Justice Movement
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mt-32">
        <a href="https://pay.zaprite.com/pl_kyPRcNC9V5" target="_blank">
          <Button className="box-border border border-buttonBorder py-3 px-8 h-auto bg-bitcoin text-black font-medium self-start hover:bg-bitcoin hover:text-white font-hubot text-md">
            Donate Now
          </Button>
        </a>
        <a href="https://discord.gg/7BcZxFvjg7" target="_blank">
          <Button className="box-border py-3 px-8 h-auto bg-white text-title hover:text-white border-buttonBorder border font-medium self-start font-hubot text-md">
            Join Us On Discord
          </Button>
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
  );
}
