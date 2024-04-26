import { Keystache, Fundsolvr, Duck, Github } from "../icons";
import SectionTitle from "../shared/SectionTitle";
export default function Projects() {
  return (
    <div className="mt-20 p-2.5">
      <SectionTitle
        heading="Projects We Support"
        subheading="Empowering Individuals And Communities"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <Fundsolvr />
          <h4 className="font-medium font-hubot text-xl text-title mt-2 md:mt-0">
            Fundsolvr
          </h4>
          <p className="font-hubot text-md text-heading">
            Fundsolvr is a peer-to-peer crowdfunding marketplace for open-source
            projects that turns issues into bounties paid directly to builders
            and project maintainers, enabling open-source contributors to
            benefit from a value-for-value economy. Integrated dispute
            resolution tools provide assurances that further increase market
            efficiencies.
          </p>
          <div className="flex flex-row gap-4">
            {/* <Duck /> */}
            <a href="https://github.com/Resolvr-io/resolvr.io" target="_blank">
              <Github width="32" height="33" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Keystache />
          <h4 className="font-medium font-hubot text-xl text-title">
            Keystache
          </h4>
          <p className="font-hubot text-md text-heading">
            Keystache is core infrastructure for the censorship-resistant,
            distributed communication protocol NOSTR that enables users to store
            their cryptographic keys in a single desktop app, allowing a
            seamless OAUTH-style login experience across NOSTR-applications.
          </p>
          <div className="flex flex-row gap-4 mt-auto">
            {/* <Duck /> */}
            <a href="https://github.com/Resolvr-io/Keystache" target="_blank">
              <Github width="32" height="33" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
