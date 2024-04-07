import Image from "next/image";
import { Button } from "../ui/button";
import articlesBg from "./ArticlesBackground.svg";
import irsBg from "./IRSBackground.svg";
import manifestoBg from "./ManifestoBackground.svg";

const resourcesMap = [
  {
    title: "The Open Source Justice Manifesto",
    link: "#",
    background: manifestoBg,
  },
  {
    title: "IRS 501(c)(3) Determination Letter",
    link: "#",
    background: irsBg,
  },
  {
    title: "Articles of Incorporation & Bylaws",
    link: "#",
    background: articlesBg,
  },
];

export default function Resources() {
  return (
    <div className="mt-20">
      <h2 className="mb-5 text-3xl text-titleGrey font-mona">Resources</h2>
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
                <h4 className="font-semibold font-mona text-2xl text-headingBlack">
                  {resource.title}
                </h4>
                <Button className="hover:text-white bg-white text-headingBlack border-headingBlack border font-semibold self-start">
                  Read Now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
