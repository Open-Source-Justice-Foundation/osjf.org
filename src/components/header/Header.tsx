import { Logo, Mail, Title, Discord } from "../icons";
import { Button } from "../ui/button";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between p-2.5">
      <Link className="flex flex-row gap-x-2 items-center h-full" href="/">
        <Logo />
        <div className="hidden md:flex justify-center items-end self-stretch">
          <Title />
        </div>
      </Link>

      <div className="flex flex-row gap-x-2.5 md:gap-x-6">
        <a
          className="hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
          href="https://discord.gg/7BcZxFvjg7"
          target="_blank"
        >
          <div className="flex-1">
            <Discord />
          </div>
          <span className="hidden md:block">Discord</span>
        </a>
        <a
          className="hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
          href="mailto:info@opensourcejustice.org"
        >
          <Mail />
          <span className="hidden md:block">info@opensourcejustice.org</span>
        </a>
        <a href="https://pay.zaprite.com/pl_kyPRcNC9V5" target="_blank">
          <Button className="tracking-[0.6px] box-border py-3 px-8 h-auto text-md hidden md:block bg-white text-title border-buttonBorder border font-medium self-start hover:text-white font-hubot w-fit">
            Donate
          </Button>
        </a>
      </div>
    </header>
  );
}
