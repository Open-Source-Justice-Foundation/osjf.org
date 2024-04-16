import { Keystache, Fundsolvr, Duck, Github } from "../icons";
import SectionTitle from "../shared/SectionTitle";
export default function Projects() {
  return (
    <div className="mt-20 p-2.5">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <Fundsolvr />
          <h4 className="font-medium font-hubot text-xl text-title mt-2 md:mt-0">
            Fundsolvr
          </h4>
          <p className="font-hubot text-lg text-heading">
            Fundsolvr is a p2p crowdfunding marketplace that helps open source
            projects build a value for value economy by rallying funding for
            development issues that can be converted into bounties, to be paid
            directly to builders and project maintainers.
          </p>
          <div className="flex flex-row gap-4">
            <Duck />
            <Github />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Keystache />
          <h4 className="font-medium font-hubot text-xl text-title">
            Keystache
          </h4>
          <p className="font-hubot text-lg text-heading">
            Keystache is core infrastructure for the distributed communication
            protocol NOSTR that enables users to store their private keys in a
            single desktop app, allowing a seamless OAUTH-style login experience
            across NOSTR-applications.
          </p>
          <div className="flex flex-row gap-4">
            <Duck />
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
}
