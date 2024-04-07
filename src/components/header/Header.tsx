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
      <div className="flex flex-row gap-x-2">
        <a
          className="flex flex-row gap-x-2 items-center font-hubot font-semibold"
          href="mailto:info@opensourcejustice.org"
        >
          <Mail />
          <span>info@opensourcejustice.org</span>
        </a>
        <Button className="hidden md:block bg-white text-headingBlack border-headingBlack border font-semibold self-start hover:text-white">
          Donate
        </Button>
      </div>
    </header>
  );
}
