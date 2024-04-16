import Image from "next/image";
import { Duck, Github, HorizontalRule } from "../icons";
const granteeMap = [
  {
    name: "Utibe Essien",
    bio: "A product designer, passionate about crafting systems that spread prosperity. Uty is working on OSJF vision for open source development with Fundsolvr and nostr sovereign desktop companion, Keystache.",
    img: "",
    nostr: "#",
    github: "#",
  },
  {
    name: "Utibe Essien",
    bio: "A product designer, passionate about crafting systems that spread prosperity. Uty is working on OSJF vision for open source development with Fundsolvr and nostr sovereign desktop companion, Keystache.",
    img: "",
    nostr: "#",
    github: "#",
  },
  {
    name: "Utibe Essien",
    bio: "A product designer, passionate about crafting systems that spread prosperity. Uty is working on OSJF vision for open source development with Fundsolvr and nostr sovereign desktop companion, Keystache.",
    img: "",
    nostr: "#",
    github: "#",
  },
];

export default function Grantees() {
  return (
    <div className="mt-20 p-2.5">
      <div className="mb-5 flex flex-row gap-x-2.5">
        <h2 className="md:whitespace-nowrap text-3xl md:text-5xl text-heading font-hubot font-light uppercase">
          Recent Grantees
        </h2>
        <div className="w-full max-w-full overflow-hidden">
          <HorizontalRule />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {granteeMap.map((grantee, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center gap-4"
            >
              <Image
                src=""
                placeholder="empty"
                width={200}
                height={200}
                style={{ borderRadius: "50%", border: "1px solid black" }}
                alt={`Picture of ${grantee.name}`}
              />
              <h3 className="font-hubot text-xl font-medium text-title">
                {grantee.name}
              </h3>
              <p className="font-hubot font-light text-center text-heading">
                {grantee.bio}
              </p>
              <div className="flex flex-row gap-2">
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
