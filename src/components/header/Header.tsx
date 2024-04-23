import { Logo, Mail, Title, Discord, Github } from "../icons";
import Link from "next/link";
import ButtonSecondary from "../shared/ButtonSecondary";
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
          <span className="hidden lg:block">Discord</span>
        </a>
        <a
          className="hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
          href="https://github.com/Open-Source-Justice-Foundation"
          target="_blank"
        >
          <Github height="25" width="24" />

          <span className="hidden lg:block">Github</span>
        </a>
        <a
          className="hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
          href="mailto:info@opensourcejustice.org"
        >
          <Mail />
          <span className="hidden lg:block">info@opensourcejustice.org</span>
        </a>
        <a href="https://pay.zaprite.com/pl_kyPRcNC9V5" target="_blank">
          <ButtonSecondary className="hidden md:block">Donate</ButtonSecondary>
        </a>
      </div>
    </header>
  );
}
