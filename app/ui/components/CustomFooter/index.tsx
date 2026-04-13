import localFont from "next/font/local";
import { Link } from "react-aria-components";
import Block from "../Block";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

const CustomFooter = () => {
  return (
    <Block className={`col-span-6 p-6 bg-lilac text-green`}>
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className={"list-none"} tabIndex={0}>
          <span>
            <b>Comitato Brescia Pride ETS</b>
          </span>
          <span>
            <ul>
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
        </div>
        <Link
          href="/archive"
          className={`shrink-0 self-end font-medium no-underline md:self-auto ${myFont.className}`}
        >
          Archivio
        </Link>
      </div>
    </Block>
  );
};

CustomFooter.displayName = "CustomFooter";

export default CustomFooter;
