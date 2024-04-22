import { Resolvr, BoltFun, Alby, Grove } from "../icons";

const partnerMap = [
  {
    img: Resolvr,
    name: "Resolvr",
    url: "https://www.resolvr.io/",
  },
  {
    img: Alby,
    name: "Alby",
    url: "https://getalby.com/",
  },
  {
    img: BoltFun,
    name: "Bolt.Fun",
    url: "https://bolt.fun/",
  },
  {
    img: Grove,
    name: "BTC Grove",
    url: "https://btcgrove.com",
  },
];

export default function Partners() {
  return (
    <div className="p-2.5">
      <h2 className="font-hubot font-medium text-2xl">Our Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-2 gap-6 md:gap-12 lg:gap-12 flex-1 h-full">
        {partnerMap.map((partner, i) => (
          <div className="h-full flex items-center" key={i}>
            <a href={partner.url} target="_blank">
              <partner.img />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
