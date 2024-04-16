import Image from "next/image";
import { Button } from "../ui/button";
import articlesBg from "./ArticlesBackground.svg";
import irsBg from "./IRSBackground.svg";
import manifestoBg from "./ManifestoBackground.svg";
import Link from "next/link";
import { HorizontalRule } from "../icons";
const resourcesMap = [
  {
    title: "The Open Source Justice Manifesto",
    link: "/manifesto",
    background: manifestoBg,
  },
  {
    title: "IRS 501(c)(3) Determination Letter",
    link: "/Exempt_Status_Determination_Letter_1023_App.pdf",
    background: irsBg,
  },
  {
    title: "Articles of Incorporation & Bylaws",
    link: "/Articles_of_Incorporation_Redacted.pdf",
    background: articlesBg,
  },
];

export default function Resources() {
  return (
    <div className="mt-20 p-2.5">
      <div className="mb-5 flex flex-row gap-x-2.5">
        <h2 className="text-3xl md:text-5xl text-heading font-hubot font-light uppercase">
          Resources
        </h2>
        <div className="w-full max-w-full overflow-hidden">
          <HorizontalRule />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {resourcesMap.map((resource, i) => {
          return (
            <div
              key={i}
              className="bg-[#F9F9F9] relative z-auto min-h-96 flex flex-col justify-end"
            >
              <Image
                alt={`Resource background image ${i + 1}`}
                src={resource.background}
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: "none",
                  zIndex: "0",
                  margin: "auto",
                }}
              />
              <div className="z-10 flex flex-col gap-4 p-5">
                <h4 className="font-semibold font-mona text-2xl text-title">
                  {resource.title}
                </h4>
                <Link href={resource.link}>
                  <Button className="hover:text-white bg-white text-title border-buttonBorder border font-semibold self-start">
                    Read Now
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
