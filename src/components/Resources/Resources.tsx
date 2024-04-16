import Image from "next/image";
import { Button } from "../ui/button";
import {
  Manifesto,
  ArticleOfIncorporation,
  ArticlesOfDetermination,
} from "../icons";
import Link from "next/link";
import { HorizontalRule } from "../icons";
const resourcesMap = [
  {
    title: "The Open Source Justice Manifesto",
    link: "/manifesto",
    icon: Manifesto,
  },
  {
    title: "IRS 501(c)(3) Determination Letter",
    link: "/Exempt_Status_Determination_Letter_1023_App.pdf",
    icon: ArticlesOfDetermination,
  },
  {
    title: "Articles of Incorporation & Bylaws",
    link: "/Articles_of_Incorporation_Redacted.pdf",
    icon: ArticleOfIncorporation,
  },
];

export default function Resources() {
  return (
    <div className="mt-20 p-2.5">
      <div className="mb-5 flex flex-row gap-x-2.5">
        <h2 className="text-3xl md:text-5xl text-heading font-hubot font-semibold uppercase">
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
              className="relative z-auto flex flex-col justify-end gap-4"
            >
              <resource.icon />
              <div className="z-10 flex flex-col gap-4">
                <h4 className="font-semibold font-mona text-2xl text-title">
                  {resource.title}
                </h4>
                <Link href={resource.link}>
                  <Button className="text-md font-hubot hover:text-white bg-white text-title border-buttonBorder border font-medium self-start py-3 px-8">
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
