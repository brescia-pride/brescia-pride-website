import Block from "../Block";

import { SiFacebook, SiGmail, SiInstagram, SiTiktok, SiLinktree, SiPaypal } from "react-icons/si";

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="w-100 bg-pink p-6"
    >
      <a
        href="https://www.instagram.com/bresciapride"
        target="_blank"
        className="grid h-full place-content-center text-4xl text-red hover:text-6xl transition-all duration-300"
      >
        <SiInstagram />
      </a>
    </Block>
    {/* <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="w-100 bg-cream p-6"
    >
      <a
        href="https://www.tiktok.com/@bresciapride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block> */}
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="w-100 bg-lilac p-6"
    >
      <a
        href="https://www.facebook.com/BresciaPride"
        target="_blank"
        className="grid h-full place-content-center text-4xl text-green hover:text-6xl transition-all duration-300"
      >
        <SiFacebook />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="w-100 bg-lime p-6"
    >
      <a
        href="mailto:info@bresciapride.it"
        target="_blank"
        className="grid h-full place-content-center text-4xl text-blue hover:text-6xl transition-all duration-300"
      >
        <SiGmail />
      </a>
    </Block>
    {/* <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="w-100 bg-cream p-6"
    >
      <a
        href="https://linktr.ee/bresciapride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiLinktree />
      </a>
    </Block> */}
    {/* <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="w-100 bg-cream p-6"
    >
      <a
        href="https://www.paypal.com/paypalme/bresciapride"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiPaypal />
      </a>
    </Block> */}
  </>
);

SocialsBlock.displayName = "SocialsBlock";

export default SocialsBlock;