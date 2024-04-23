import Image from "next/image";
import { Duck, Github } from "../icons";
import SectionTitle from "../shared/SectionTitle";
import justinMoeller from "./justin_moeller.webp";
const granteeMap = [
  {
    name: "Utibe Essien",
    bio: "A product designer, passionate about crafting systems that spread prosperity. Uty is working on OSJF's vision for open-source development with Fundsolvr and Keystache, a Nostr sovereign desktop companion.",
    img: "https://pbs.twimg.com/profile_images/1764766785671204864/xrFFwm64_400x400.png",
    nostr:
      "https://primal.net/p/npub1ux6aa69nyc3u69wgvwpu4ydcf7q20xj84lfm06thfp90meev8tyquep37x",
    github: "https://github.com/utidon",
  },
  {
    name: "Christian Chiarulli",
    bio: "Nostr developer. Creator of Keystache, Blogstack.io (a longform nostr platform), and nostrings.news (hacker.news on nostr). Streaming nostr programming workshops on Zap.Stream and Youtube. Chris was awarded a grant for his work on Fundsolvr and Keystache.",
    img: "https://avatars.githubusercontent.com/u/29136904?v=4",
    nostr:
      "https://primal.net/p/npub1ygzj9skr9val9yqxkf67yf9jshtyhvvl0x76jp5er09nsc0p3j6qr260k2",
    github: "https://github.com/ChristianChiarulli",
  },
  {
    name: "Justin Moeller",
    bio: "Justin is a software engineer passionate about Bitcoin, distributed systems, and databases. He is currently working on Fedimint focusing on the Lightning Gateway and is supported by Spiral and OpenSats. The Foundation awarded Justin a grant for his proposal to create an escrow and arbitration module for the Fedimint protocol.",
    img: justinMoeller,
    nostr:
      "https://primal.net/p/npub1zswjq57t99f444z6485xtn0vfyjjfu8vqpnyj6uckuyem2446evqnxgc6x",
    github: "https://github.com/m1sterc001guy",
  },
];

export default function Grantees() {
  return (
    <div className="mt-20 p-2.5">
      <SectionTitle
        heading="OSJF Grantees"
        subheading="Building Open, Accessible Justice"
      />
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
                {grantee.nostr && (
                  <a href={grantee.nostr} target="_blank">
                    <Duck />
                  </a>
                )}

                {grantee.github && (
                  <a href={grantee.github} target="_blank">
                    <Github width="32" height="33" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
