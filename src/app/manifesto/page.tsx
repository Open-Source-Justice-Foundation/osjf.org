import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import ButtonSecondary from "@/components/shared/ButtonSecondary";

export default function Manifesto() {
  return (
    <div className="container p-2.5 md:p-[30px] md:pt-2.5">
      <Header />

      <main className="mt-5 p-2.5">
        <h2 className="mb-5 font-hubot text-3xl md:text-5xl text-heading">
          Open Source Justice Manifesto
        </h2>
        <div className="flex flex-col gap-y-2.5 text-bodyGrey text-lg font-hubot">
          <p className="italic">Jan. 19, 2024</p>
          <p>
            Most people in the world are denied access to justice. An estimated
            four billion people live outside the protection of the law.
            Fifty-four percent of the world{"'"}s population lives under some
            form of authoritarian rule. And even in relatively stable
            democracies, the justice gap between low- and high-income earners is
            well documented.
          </p>
          <p>
            The state has failed to provide courts that offer equal justice to
            all.
          </p>
          <p>
            This is not a secret. For decades, politicians, lawyers, and
            charities have publicly decried the lack of affordable and
            accessible legal services. But politicians{"'"} solution has been to
            simply funnel more taxpayer money into the failing court system.
            Lawyers continue to lobby for restrictive licensing requirements on
            the practice of law, jealously guarding their monopoly over justice.
            Legal aid charities do not exist to change this system, but to work
            within it. For these groups, {'"'}access to justice{'"'} means a
            wider door on the courthouse. They have no incentive to
            fundamentally alter the state-based justice system, a system that
            directly benefits them.
          </p>
          <p>
            Those with the incentive to enact meaningful alternatives to this
            broken system are those that are excluded from it. These individuals
            and communities must take justice into their own hands. They should
            be empowered to resolve their own disputes{" "}
            <span className="italic">peacefully</span> and
            <span className="italic">voluntarily</span> without resort to the
            state, and guided by their own norms and standards of acceptable
            social conduct. Only once justice ceases to be the exclusive domain
            of the state can it spread freely to all.
          </p>
          <p>
            Private, Alternative Dispute Resolution (ADR) systems and Online
            Dispute Resolution (ODR) technologies have the potential to
            drastically increase global access to justice. But the
            transformative power of conventional ADR and ODR tools are hindered
            by proprietary software licenses that shield source code from view.
            Without a way for users to verify the operation of these black-box
            solutions, they suffer from perceptions of unfairness or bias, which
            disincentivize use. And such closed-source licenses prevent
            communities from modifying the ODR tools to fit their specific
            needs.
          </p>
          <p>
            By taking conventional ADR and ODR designs, however, and{" "}
            <span className="font-bold">
              deploying them through free open-source software and protocols,
            </span>{" "}
            communities and individuals can harness the full potential of these
            private dispute resolution systems. The result is{" "}
            <span className="font-bold">Open Source Justice.</span>
          </p>
          <p>
            The tenets of the free and open-source software (FOSS) movement are
            aligned with the goal of advancing equal access to justice.{" "}
            <span className="italic">
              permissionless, inclusive, transparent, and anti-discriminatory.
            </span>
          </p>
          <p>
            Consider Richard Stallman{"'"}s four essential freedoms for open
            source software:
          </p>
          <ol className="list-decimal list-inside pl-8 my-4 flex gap-y-2.5 flex-col" start="0">
            <li>
              The freedom to run the program as you wish, for any purpose.
              (Freedom 0)
            </li>
            <li>
              The freedom to study how the program works, and change it so it
              does your computing as you wish. Access to the source code is a
              precondition for this. (Freedom 1)
            </li>
            <li>
              The freedom to redistribute copies so you can help others.
              (Freedom 2)
            </li>
            <li>
              The freedom to distribute copies of your modified versions to
              others. By doing this you can give the whole community a chance to
              benefit from your changes. Access to the source code is a
              precondition for this. (Freedom 3)
            </li>
          </ol>

          <p>
            Freedom 0, the freedom to run a program for any purpose, embodies
            respect for the choices and sovereignty of others. Sovereign
            communities should be free to set their own norms and values, and
            decide for themselves how disputes should be resolved consistent
            with those norms and values.
          </p>
          <p>
            Freedom 1, the freedom to access, study, and change source code, is
            essential to empowering sovereign individuals and communities to
            make those choices for themselves. This freedom further embodies the
            value of transparency, which is necessary for any dispute resolution
            system to gain legitimacy, trust, and perceptions of fairness.
          </p>
          <p>
            Freedom 2, the freedom to redistribute copies to help others, will
            accelerate the spread of ODR and ADR tools to those jurisdictions
            where justice is lacking or diminished.
          </p>
          <p>
            Freedom 3, allowing modification and redistribution of modified
            software, allows communities to adapt dispute resolution tools to
            fit their circumstances and values. It also allows communities that
            have created their own open-source dispute resolution systems to
            share their tools with other similarly situated or sympathetic
            communities -- again accelerating access to justice.
          </p>
          <p>
            The FOSS movement places user freedom above all else. The user
            should be in control of the software, the software should not
            control the user.
          </p>
          <p>
            Likewise, the Open Source Justice movement places the disputant{"'"}
            s freedom above all else. While communities should be empowered to
            define their own concepts of justice and design their own procedures
            for provisioning that justice, individuals must be given the choice
            to opt in to their chosen justice system. Voluntaryness and
            non-coercion are hallmarks of Open Source Justice.
          </p>
          <p>
            This is a call to all developers, lawyers, entrepreneurs and other
            stakeholders interested in real access to justice to devise, build,
            and support new ODR and ADR systems consistent with the values of
            the FOSS movement.
          </p>

          <p>Join the Open Source Justice movement today.</p>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <a href="https://pay.zaprite.com/pl_kyPRcNC9V5" target="_blank">
              <ButtonPrimary>Donate Now</ButtonPrimary>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScGxlbCkIchvHZP1Tmo7rd9DAhtXdJEcZoCaHSh2FPo64pjSg/viewform"
              target="_blank"
            >
              <ButtonSecondary>Apply for a Grant</ButtonSecondary>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
