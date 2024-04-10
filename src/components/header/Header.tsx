import { Logo, Mail, Title } from "../icons";
import { Button } from "../ui/button";
export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between py-2.5">
      <div className="flex flex-row gap-x-2">
        <Logo />
        <div className="hidden md:block">
          <Title />
        </div>
      </div>
      <div className="flex flex-row md:gap-x-8">
        <a
          className="hover:underline flex flex-row gap-x-2 items-center font-hubot font-medium text-md"
          href="mailto:info@opensourcejustice.org"
        >
          <Mail />
          <span>info@opensourcejustice.org</span>
        </a>
        <a href="https://pay.zaprite.com/pl_kyPRcNC9V5" target="_blank">
          <Button className="tracking-[0.6px] box-border py-3 px-8 h-auto text-md hidden md:block bg-white text-headingBlack border-headingBlack border font-semibold self-start hover:text-white font-hubot w-fit">
            Donate
          </Button>
        </a>
      </div>
    </header>
  );
}
