import Link from "next/link";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
export default function Footer() {
  return (
    <footer
      className={`font-hubot gap-x-2 flex flex-row mt-8 text-[#757575] text-md p-2.5`}
    >
      <div className="hidden md:block max-w-[50%]">
        Open Source Justice Foundation, Inc. is a Florida non-profit and
        501(c)(3) tax-exempt public charity. Donations to the Foundation may be
        tax-deductible. Consult your tax advisor on how to claim any deductions.
        <div className="mt-8">
          <span>Established Blockheight 825506</span>
        </div>
      </div>

      <div className="grid grid-cols-2 leading-[20px]">
        <div className="flex flex-col gap-y-2">
          <div className="font-semibold text-[13px]">Organization</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-heading">
            <div className="flex flex-col gap-y-2">
              <a href="https://pay.zaprite.com/pl_kyPRcNC9V5" target="_blank">
                Donate
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScGxlbCkIchvHZP1Tmo7rd9DAhtXdJEcZoCaHSh2FPo64pjSg/viewform"
                target="_blank"
              >
                Apply for a Grant
              </a>
              <Link href="/manifesto">Manifesto</Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <a href="https://discord.gg/7BcZxFvjg7" target="_blank">
                Discord
              </a>
              <a
                href="https://github.com/Open-Source-Justice-Foundation"
                target="_blank"
              >
                Github
              </a>
              <a href="mailto:info@opensourcejustice.org">Contact</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-semibold text-[13px]">Transparency</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-heading">
            <div className="flex flex-col gap-y-2">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <a
                href="/Exempt_Status_Determination_Letter_1023_App.pdf"
                target="_blank"
              >
                Determination Letter
              </a>
            </div>
            <div className="flex flex-col gap-y-2">
              <Link href="/terms-of-service">Terms of Use</Link>
              <a href="/Articles-Bylaws.pdf" target="_blank">
                Incorporation & Bylaws
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
