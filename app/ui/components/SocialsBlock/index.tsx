import SocialCard from "../SocialCard";
import {SiFacebook, SiTiktok, SiInstagram} from "react-icons/si";

const SocialsBlock = () => (
    <>
        <SocialCard
            href="https://www.instagram.com/bresciapride"
            icon={<SiInstagram />}
            backgroundColor="pink"
            iconColor="red"
        />
        <SocialCard
            href="https://www.tiktok.com/@bresciapride"
            icon={<SiTiktok />}
            backgroundColor="lime"
            iconColor="blue"
        />
        <SocialCard
            href="https://www.facebook.com/BresciaPride"
            icon={<SiFacebook />}
            backgroundColor="lilac"
            iconColor="green"
        />
        {/* <Block
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
                <SiGmail/>
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