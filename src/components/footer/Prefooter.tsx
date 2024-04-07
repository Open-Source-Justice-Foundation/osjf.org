import Image from "next/image";
import { Button } from "../ui/button";
import { Mail } from "../icons";

export default function Prefooter() {
  return (
    <div className="mt-20 relative z-auto pt-25 pb-2.5">
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
      <h2 className="mb-5 text-3xl text-titleGrey font-mona lg:text-6xl md:text-5xl">
        Join the Open Source Justice Movement
      </h2>
      <div className="flex flex-col md:flex-row gap-2 mt-32">
        <Button className="bg-bitcoin hover:text-white hover:bg-bitcoin text-black font-semibold self-start">
          Donate Now
        </Button>
        <Button className="bg-white hover:text-white text-headingBlack border-headingBlack border font-semibold self-start">
          Join Us On Discord
        </Button>
        <a
          className="flex flex-row gap-x-2 items-center font-hubot font-semibold"
          href="mailto:info@opensourcejustice.org"
        >
          <Mail />
          <span>info@opensourcejustice.org</span>
        </a>
      </div>
    </div>
  );
}
