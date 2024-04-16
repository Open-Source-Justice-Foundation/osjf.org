import ButtonSecondary from "../shared/ButtonSecondary";
import {
  Manifesto,
  ArticleOfIncorporation,
  ArticlesOfDetermination,
} from "../icons";
import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
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
      <SectionTitle>Resources</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {resourcesMap.map((resource, i) => {
          return (
            <div
              key={i}
              className="relative z-auto flex flex-col justify-end gap-4"
            >
              <resource.icon />
              <div className="z-10 flex flex-col gap-4">
                <h4 className="font-hubot font-medium text-2xl text-title">
                  {resource.title}
                </h4>
                <Link href={resource.link}>
                  <ButtonSecondary>Read Now</ButtonSecondary>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
