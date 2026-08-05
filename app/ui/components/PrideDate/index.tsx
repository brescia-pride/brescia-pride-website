import Block from "../Block";
import { Link } from "react-aria-components";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

const PrideDate = () => {
  return (
    <Block
      className={`col-span-6 bg-lightblue text-blue p-6 cursor-pointer transition-all duration-300 relative w-full flex flex-row justify-center items-center`}
    >
      <Link href="/2026/pride">
        <div className="w-50">
          <div className="mb-4">
            <h1
              className={`text-2xl md:text-2xl leading-tight font-medium mr-2 text-center`}
            >
              <p className="text-shadow-xl">Manifestazione e corteo</p>
              <p>
                per i diritti <strong>LGBTQIA+</strong> e per i diritti di tuttɜ
              </p>
            </h1>
          </div>

          <div className="text-right">quando????</div>
          <div
            className={`text-4xl md:text-6xl leading-tight font-medium mr-2 transition-transform transition-colors duration-300 hover:scale-110 ${myFont.className} text-center`}
          >
            <h1 className="text-shadow-xl">5 settembre</h1>
            <h1>Campo Marte</h1>
          </div>
          <div className="text-left">dove?</div>
        </div>
      </Link>
    </Block>
  );
};

PrideDate.displayName = "PrideDate";

export default PrideDate;
