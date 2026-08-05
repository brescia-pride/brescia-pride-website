"use client";

import React from "react";
import ImageBlock from "../ui/components/ImageBlock";
import { Link } from "react-aria-components";
import localFont from "next/font/local";
import Block from "../ui/components/Block";
import { Button } from "react-aria-components";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function SostieniciPage() {
  const iban = "IT49I0501811200000016783060"

  async function writeClipboard() {
    await navigator.clipboard.writeText(iban)
  }
  return (
    <Block>
      <div className="p-4">
        <h1
          className={`text-2xl md:text-4xl ${myFont.className} text-blue`}
        >
          Sostienici
        </h1>
        <p
          className={`lg:col-span-6 text-xl mt-2 text-blue`}
        >
          Aiutaci a restare un pride autofinanziato e indipendente con una donazione.
        </p>
        <h2 className={`text-2xl md:text-4xl ${myFont.className} text-blue mt-4`}>
          Bonifico
        </h2>
        <p className="text-xl">
          Destinatario: <b>Comitato Brescia Pride ETS</b>
        </p>
        <p className="text-xl">
          Causale: <b>Libera donazione</b>
        </p>
        <p className="text-lg mt-2 break-all">{iban}</p>
        <Button className="rounded bg-blue text-white hover:bg-pink p-2 mt-2" onPress={() => writeClipboard()}
        >Copia l'IBAN</Button>
        <h2 className={`text-2xl md:text-4xl ${myFont.className} text-blue mt-4`}>
          Paypal
        </h2>
        <p className="text-xl font-bold">
          <Link
            className={`col-span-3 underline`}
            href="https://www.paypal.com/paypalme/bresciapride"
          >
            Clicca qui
          </Link>{" "}
          o cerca &quot;info@bresciapride.it&quot; direttamente da PayPal
        </p>
        <p className="text-xl">
          Scegli l&apos;opzione &quot;famigliari e amici&quot;.
        </p>
        <h2 className={`text-2xl md:text-4xl ${myFont.className} text-blue mt-4`}>
          5X1000
        </h2>
        <p className="text-xl font-bold">Codice Fiscale 98201800178</p>
        <p className="text-xl mb-4">
          Compila la sezione a &quot;Sostegno degli enti del terzo settore
          iscritti nel RUNTS...&quot; come nell&apos;immagine.
        </p>
        <ImageBlock
          src="/images/5-1000.png"
          altText="Esempio compilazione del 5x1000 per COMITATO BRESCIA PRIDE, Codice Fiscale: 98201800178. La sezione a sostegno degli enti del terzo settore iscritti nel RUNTS è compilata con il codice fiscale."
          showOnMobile={true}
          colSpan=""
        />

      </div>
    </Block>
  );
}
