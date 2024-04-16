import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Footer() {
  return (
    <footer
      className={`flex flex-row mt-8 text-[#757575] text-md p-2.5 ${inter.className}`}
    >
      <div className="hidden md:block max-w-[60%]">
        Open Source Justice Foundation, Inc. is a Florida non-profit and
        501(c)(3) tax-exempt public charity. Donations to the Foundation may be
        tax-deductible. Consult your tax advisor on how to claim any deductions.
      </div>
      <div className="flex flex-col lg:flex-row gap-x-4 justify-end items-end ml-auto">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <span>© 2024 Open Source Justice</span>
      </div>
    </footer>
  );
}
