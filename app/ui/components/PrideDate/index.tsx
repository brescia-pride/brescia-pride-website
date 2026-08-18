import Block from "../Block";
import { Link } from "react-aria-components";
import localFont from "next/font/local";
import { Button } from "react-aria-components";
import { useRouter } from "next/navigation";
import ColoredButton from "../ColoredButton";

const stFont = localFont({ src: "../../fonts/ST.ttf" });
const wrFont = localFont({ src: "../../fonts/WR.ttf" });

type PrideDateProps = {
  showButton: boolean;
};

const PrideDate = ({ showButton = false }: PrideDateProps) => {
  const router = useRouter();
  return (
    <div className="col-span-6 bg-[url(/images/Z62_4733.jpg)] bg-auto bg-center bg-cover bg-no-repeat">
      <Block
        className={`text-white p-6 cursor-pointer transition-all duration-300 relative w-full flex flex-col justify-center items-center text-shadow-lg bg-black/35`}
      >
        <Link href="/2026/pride">
          <div>
            <div className="mb-4">
              <h1
                className={`text-2xl md:text-2xl leading-tight font-medium mr-2 text-center text-shadow-lg`}
              >
                <p>Manifestazione e corteo</p>
                <p>
                  per i diritti <strong className="underline">LGBTQIA+</strong>{" "}
                  e per i diritti di tuttɜ
                </p>
              </h1>
            </div>
            <div className="place-items-end">
              <div className="flex">
                <div className="text-4xl font-bold rotate-[320rad]">⤺</div>
                <div className={`text-right text-4xl ${wrFont.className}`}>
                  quando?
                </div>
              </div>
            </div>
            <div
              className={`text-4xl md:text-6xl leading-tight font-medium mr-2 transition-transform transition-colors duration-300 hover:scale-110 ${stFont.className} text-center`}
            >
              <h1 className="text-shadow-xl">5 settembre</h1>
              <h1>Campo Marte</h1>
            </div>
            <div className="place-items-start">
              <div className="flex">
                <div
                  className={`text-left text-4xl ${wrFont.className} align-bottom`}
                >
                  dove?
                </div>
                <div className="text-4xl font-bold rotate-[320rad]">⤻</div>
              </div>
            </div>
          </div>
        </Link>
        {showButton && (
          <Block
            className={`col-span-6 text-blue p-4 cursor-pointer transition-all duration-300 relative w-full flex flex-row justify-center items-center`}
          >
            <ColoredButton
              text="Clicca qui per tutte le info!"
              bgColor="lime"
              textColor="blue"
              id="link-a-pride-info"
              href="/2026/pride"
            />
          </Block>
        )}
      </Block>
    </div>
  );
};

PrideDate.displayName = "PrideDate";

export default PrideDate;
