import Image from "next/image";
import { Button } from "../ui/button";

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
      <h1 className="text-4xl md:text-6xl font-hubot font-light text-heading uppercase">
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
          <Button className="box-border py-3 px-8 border border-black h-auto bg-bitcoin text-black font-medium self-start hover:bg-bitcoin hover:text-white font-hubot text-md">
            Donate Now
          </Button>
        </a>
        <a href="https://discord.gg/7BcZxFvjg7" target="_blank">
          <Button className="box-border py-3 px-8 h-auto bg-white text-title hover:text-white border-buttonBorder border font-medium self-start font-hubot text-md">
            Join Us On Discord
          </Button>
        </a>
      </div>
    </div>
  );
}
