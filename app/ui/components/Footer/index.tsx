import Block from "../Block";
import localFont from "next/font/local";

const myFont = localFont({src: "../../fonts/ST.ttf"});

const Footer = () => {
    return (
        <Block className={`col-span-6 p-6 bg-lilac text-green`}>
            <footer className={"list-none"}>
                <span><b>Comitato Brescia Pride ETS</b></span>
                <span><ul>
          <li>
            <b>Sede legale</b>: Via F.lli Folonari 7, Brescia 25100
          </li>
          <li>
            <b>Codice fiscale</b>: 98201800178
          </li>
          <li>
            <b>PEC</b>: comitatobresciapride@pec-legal.it
          </li>
        </ul>
        </span>
            </footer>
        </Block>
    );
};

Footer.displayName = "Footer";

export default Footer;