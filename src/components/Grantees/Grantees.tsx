import Image from "next/image";
import { Duck, Github } from "../icons";
import SectionTitle from "../shared/SectionTitle";
const granteeMap = [
  {
    name: "Utibe Essien",
    bio: "A product designer, passionate about crafting systems that spread prosperity. Uty is working on OSJF vision for open source development with Fundsolvr and nostr sovereign desktop companion, Keystache.",
    img: "https://pbs.twimg.com/profile_images/1764766785671204864/xrFFwm64_400x400.png",
    nostr: "#",
    github: "https://github.com/utidon",
  },
  {
    name: "Christian Chiarulli",
    bio: "Nostr developer. Creator of Keystache, Blogstack.io (a longform nostr platform), and nostrings.news (hacker.news on nostr). Streaming nostr programming workshops on Zap.Stream and Youtube. Chris was awarded a grant for his work on Fundsolvr and Keystache.",
    img: "https://avatars.githubusercontent.com/u/29136904?v=4",
    nostr: "#",
    github: "https://github.com/ChristianChiarulli",
  },
  {
    name: "Brian Carroll",
    bio: "A front end web developer and Bitcoin enthusiast, Brian loves working on intuitive UIs and implementing applications that make use of cryptocurrency",
    img: "https://avatars.githubusercontent.com/u/6819987?v=4",
    nostr: "#",
    github: "https://github.com/brianjcarroll",
  },
];

export default function Grantees() {
  return (
    <div className="mt-20 p-2.5">
      <SectionTitle>Recent Grantees</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {granteeMap.map((grantee, i) => {
          return (
            <div key={i} className="flex flex-col items-center gap-4">
              <Image
                className="grayscale"
                src={grantee.img}
                placeholder="empty"
                width={200}
                height={200}
                style={{ borderRadius: "50%" }}
                alt={`Picture of ${grantee.name}`}
              />
              <h3 className="font-hubot text-xl font-medium text-title">
                {grantee.name}
              </h3>
              <p className="font-hubot text-lg text-center text-heading">
                {grantee.bio}
              </p>
              <div className="flex flex-row gap-2 mt-auto">
                <a href={grantee.nostr} target="_blank">
                  <Duck />
                </a>
                <a href={grantee.github} target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
