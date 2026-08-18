import SocialCard from "../SocialCard";
import { SiFacebook, SiTiktok, SiInstagram } from "react-icons/si";
import Block from "../Block";

const SocialsBlock = () => (
  <Block className="flex grid grid-cols-3">
    <SocialCard
      title="Instagram"
      desc="@bresciapride"
      href="https://www.instagram.com/bresciapride"
      icon={<SiInstagram />}
      backgroundColor="pink"
      iconColor="red"
    />
    <SocialCard
      title="Tiktok"
      desc="@bresciapride"
      href="https://www.tiktok.com/@bresciapride"
      icon={<SiTiktok />}
      backgroundColor="lilac"
      iconColor="purple"
    />
    <SocialCard
      title="Facebook"
      desc="Brescia Pride"
      href="https://www.facebook.com/BresciaPride"
      icon={<SiFacebook />}
      backgroundColor="lime"
      iconColor="green"
    />
  </Block>
);

SocialsBlock.displayName = "SocialsBlock";

export default SocialsBlock;
