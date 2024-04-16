import { Resolvr, BoltFun, Alby } from "../icons";

const partnerMap = [
  {
    img: Resolvr,
    name: "Resolvr",
    url: "https://www.resolvr.io/",
  },
  {
    img: BoltFun,
    name: "Bolt.Fun",
    url: "https://bolt.fun/",
  },
  {
    img: Alby,
    name: "Alby",
    url: "https://getalby.com/",
  },
];

export default function Partners() {
  return (
    <div className="p-2.5">
      <div className="grid grid-cols-1 md:grid-cols-3 my-12 gap-6 md:gap-12 lg:gap-28 flex-1 h-full">
        {partnerMap.map((partner, i) => (
          <div className="h-full flex justify-center items-center" key={i}>
            <a href={partner.url} target="_blank">
              <partner.img />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
