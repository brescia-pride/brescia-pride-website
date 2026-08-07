"use client";

import localFont from "next/font/local";
import { Link } from "react-aria-components";
import Block from "../Block";
import { Button } from "react-aria-components";
import { useRouter } from "next/navigation";

type BlockProps = {
  className?: string | "";
};

const CustomFooter = ({ className }: BlockProps) => {
  const router = useRouter();

  return (
    <Block
      className={`bg-white text-black p-4 ${className} grid md:grid-cols-3 border-t-4 gap-2`}
    >
      <Block className="md:col-span-1 md:p-4">
        <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <span className="font-bold">Non hai trovato quello che cercavi?</span>
        </div>
        <div className="flex flex-col">
          <Button
            className="text-lg rounded bg-red text-white hover:bg-red/75 p-2 mt-2"
            onPress={() => router.push("/contatti")}
          >
            Scrivici!
          </Button>
        </div>
      </Block>
      <Block className="md:col-span-1 md:p-4">
        <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <span className="font-bold">Sostienici con una donazione!</span>
        </div>
        <div className="flex flex-col">
          <Button
            className="text-lg rounded bg-red text-white hover:bg-red/75 p-2 mt-2"
            onPress={() => router.push("/sostienici")}
          >
            Sostienici
          </Button>
        </div>
      </Block>
      <Block className="md:col-span-1 md:p-4">
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
                  <b>PEC</b>:{" "}
                  <Link
                    className="underline text-red"
                    href="mailto:comitatobresciapride@pec-legal.it"
                  >
                    comitatobresciapride@pec-legal.it
                  </Link>
                </li>
                <li>
                  <b>INFO</b>:{" "}
                  <Link
                    className="underline text-red"
                    href="mailto:info@bresciapride.it"
                  >
                    info@bresciapride.it
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </Block>
    </Block>
  );
};

CustomFooter.displayName = "CustomFooter";

export default CustomFooter;
