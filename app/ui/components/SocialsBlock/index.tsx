import Block from "../Block";

import { SiFacebook, SiGmail, SiInstagram, SiTiktok } from "react-icons/si";

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="bg-cream hidden md:block p-6"
    >
      <a
        href="https://www.instagram.com/bresciapride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="bg-cream hidden md:block p-6"
    >
      <a
        href="https://www.tiktok.com/@bresciapride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-dark-blue"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="bg-cream hidden md:block p-6"
    >
      <a
        href="mailto:info@bresciapride.it"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-dark-blue"
      >
        <SiFacebook />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="w-100 bg-cream hidden md:block p-6"
    >
      <a
        href="https://www.facebook.com/BresciaPride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-dark-blue"
      >
        <SiGmail />
      </a>
    </Block>
  </>
);

SocialsBlock.displayName = "SocialsBlock";

export default SocialsBlock;