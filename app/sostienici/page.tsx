"use client";

import React from "react";
import ImageBlock from "../ui/components/ImageBlock";
import { Link } from "react-aria-components";
import localFont from "next/font/local";
import Block from "../ui/components/Block";
import { Button } from "react-aria-components";
import { useRouter } from "next/navigation";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function SostieniciPage() {
  const iban = "IT49I0501811200000016783060";
  const codiceFiscale = "98201800178";

  async function writeIBANToClipboard() {
    await navigator.clipboard.writeText(iban);
  }

  async function writeCodiceFiscaleToClipboard() {
    await navigator.clipboard.writeText(codiceFiscale);
  }

  const router = useRouter();

  return (
    <Block>
      <Block className="p-8 bg-lime text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-green`}>
          Sostienici
        </h1>
        <p className={`lg:col-span-6 text-2xl text-green mt-2`}>
          Brescia Pride è un pride <b>autofinanziato</b> e <b>indipendente</b>.
        </p>
      </Block>
      <Block className="p-4 col-span-1">
        <h3 className={`lg:col-span-6 text-xl mt-2 font-bold`}>
          Ci sono tanti modi per sostenerci:
        </h3>
        <ul className="list-inside text-xl list-disc">
          <li>
            Donazione con <b>Bonifico</b> o <b>Paypal</b>
          </li>
          <li>
            Devolvendo il <b>5X1000</b>
          </li>
          <li>
            Partecipando ai nostri eventi! Ci trovate sempre con un{" "}
            <b>banchetto di autofinanziamento</b>!
          </li>
        </ul>
      </Block>
      <Block className="flex-col md:grid md:grid-cols-3 divide-x-4">
        <Block className="p-4 col-span-1">
          <h2 className={`text-3xl md:text-4xl ${myFont.className} text-blue`}>
            Bonifico
          </h2>
          <p className="text-xl mt-2">
            Destinatario: <b>Comitato Brescia Pride ETS</b>
          </p>
          <p className="text-xl">
            Causale: <b>Libera donazione</b>
          </p>
          <p className="text-lg mt-2 break-all">{iban}</p>
          <Button
            className="text-lg rounded bg-blue text-white hover:bg-blue/75 p-4 mt-2"
            onPress={() => writeIBANToClipboard()}
          >
            Copia l&apos;IBAN
          </Button>
        </Block>
        <Block className="p-4 col-span-1">
          <h2 className={`text-3xl md:text-4xl ${myFont.className} text-red`}>
            Paypal
          </h2>
          <p className="text-xl">
            Cerca <b>info@bresciapride.it</b> direttamente da PayPal. Ricordati
            di scegliere l&apos;opzione &quot;famigliari e amici&quot;!
          </p>
          <Button
            className="text-lg rounded bg-red text-white hover:bg-red/75 p-4 mt-2"
            onPress={() =>
              router.push("https://www.paypal.com/paypalme/bresciapride")
            }
          >
            Apri Paypal
          </Button>
        </Block>
        <Block className="p-4 col-span-1">
          <h2
            className={`text-3xl md:text-4xl ${myFont.className} text-purple`}
          >
            5X1000
          </h2>
          <p className="text-xl font-bold">Codice Fiscale 98201800178</p>
          <p className="text-xl">
            Compila la sezione a &quot;Sostegno degli enti del terzo settore
            iscritti nel RUNTS...&quot;.
          </p>
          <Button
            className="text-lg rounded bg-purple text-white hover:bg-purple/75 p-4 mt-2"
            onPress={() => writeCodiceFiscaleToClipboard()}
          >
            Copia il Codice Fiscale
          </Button>
        </Block>
      </Block>
      <Block className="p-4 col-span-1">
        <h3 className={`lg:col-span-6 text-xl mt-2`}>
          Non trovi quello che cerchi?{" "}
          <Link href="/contact" className="font-bold underline">
            Scrivici!
          </Link>
        </h3>
      </Block>
    </Block>
  );
}
