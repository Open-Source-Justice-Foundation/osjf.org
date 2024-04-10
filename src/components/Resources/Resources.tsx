import Image from "next/image";
import { Button } from "../ui/button";
import articlesBg from "./ArticlesBackground.svg";
import irsBg from "./IRSBackground.svg";
import manifestoBg from "./ManifestoBackground.svg";

const resourcesMap = [
  {
    title: "The Open Source Justice Manifesto",
    link: "https://docs.google.com/document/d/1xE0DoYSF-TqPFj5pzVC94cfSlUnqtv9IGKY5jk_-kJo/edit?usp=sharing",
    background: manifestoBg,
  },
  {
    title: "IRS 501(c)(3) Determination Letter",
    link: "https://drive.google.com/file/d/12Syl_qhSGGnaOBqnHE5a8z5qUdxROGzA/view?usp=drive_link",
    background: irsBg,
  },
  {
    title: "Articles of Incorporation & Bylaws",
    link: "https://drive.google.com/file/d/11XQ-MTGjTQpcbdn7QGNpfNqaIMJuwFKE/view?usp=sharing",
    background: articlesBg,
  },
];

export default function Resources() {
  return (
    <div className="mt-20 p-2.5">
      <h2 className="mb-5 text-3xl md:text-5xl text-titleGrey font-mona">
        Resources
      </h2>
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
                <a href={resource.link} target="_blank">
                  <Button className="hover:text-white bg-white text-headingBlack border-headingBlack border font-semibold self-start">
                    Read Now
                  </Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
