"use client";

import React from "react";
import localFont from "next/font/local";
import Block from "../ui/components/Block";
import { Button } from "react-aria-components";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import GoFundMeWidget from "../ui/components/GoFundMeCard";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

type SostieniciBlockProps = {
  title: string;
  titleColor?: string;
  children: ReactNode;
  id: string;
  className?: string;
};

const SostieniciBlock = ({
  title,
  children,
  id,
  className = "col-span-6",
  titleColor = "green"
}: SostieniciBlockProps) => {
  return (
    <Block className={`${className}`} id={id}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-${titleColor}`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

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

  const navLiClassName = "mt-2 p-1 pl-2 pr-2 transition-all duration-300 hover:bg-green hover:text-white focus:bg-green focus:text-white rounded-sm focus:outline-hidden bg-green/10 md:text-2xl flex flex-col justify-center md:items-center w-full"

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
      <SostieniciBlock title="Come sostenerci" id="indice" className="bg-lime/30 border-b-2">
        <nav id="indice" role="navigation" aria-labelledby="toc-heading">
          <div className="text-green font-bold">
            <ul
              role="list gap-2"
              className="md:flex justify-between gap-2 md:text-center"
            >
              <li className={navLiClassName}>
                <a href="#bonifico" aria-describedby="bonifico-desc">
                  Bonifico
                </a>
                <span id="bonifico-desc" className="sr-only">
                  Istruzioni per donare con un bonifico
                </span>
              </li>
              <li className={navLiClassName}>
                <a href="#paypal" aria-describedby="paypal-desc">
                  Paypal
                </a>
                <span id="paypal-desc" className="sr-only">
                  Istruzioni per donare con un Paypal
                </span>
              </li>
              <li className={navLiClassName}>
                <a href="#cinquexmille" aria-describedby="cinquexmille-desc">
                  5X1000
                </a>
                <span id="cinquexmille-desc" className="sr-only">
                  Istruzioni per devolvere il 5X1000 a Brescia Pride
                </span>
              </li>
              <li className={navLiClassName}>
                <a href="#raccolta-fondi" aria-describedby="vademecum-desc">
                  Raccolta Fondi per Accessibilità
                </a>
                <span id="vademecum-desc" className="sr-only">
                  Link alla raccolta fondi per accessibilità su GoFundMe
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </SostieniciBlock>
      <SostieniciBlock title="Come sostenerci" id="come-sostenerci">
        <h3 className={`lg:col-span-6 text-xl mt-2 font-bold`}>
          Ci sono tanti modi per sostenerci:
        </h3>
        <ul className="list-inside text-xl list-disc mt-2">
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
        <div className="flex-col grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
          <SostieniciBlock className="col-span-1 rounded-lg bg-pink/50" title="Bonifico" id="bonifico" titleColor="red">
            <p className="text-xl mt-2">
              Destinatario: <b>Comitato Brescia Pride ETS</b>
            </p>
            <p className="text-xl">
              Causale: <b>Libera donazione</b>
            </p>
            <p className="text-lg mt-2 break-all">{iban}</p>
            <div className="flex flex-col">
              <Button
                className="p-2 pr-4 pl-4 mt-2 font-bold transition-all duration-300 cursor-pointer rounded-sm bg-pink text-red hover:bg-red hover:text-white"
                onPress={() => writeIBANToClipboard()}
              >
                Copia l&apos;IBAN
              </Button>
            </div>
          </SostieniciBlock>
          <SostieniciBlock className="col-span-1 rounded-lg bg-yellow/25" title="Paypal" id="paypal" titleColor="brown">
            <p className="text-xl">
              Cerca <b>info@bresciapride.it</b> direttamente da PayPal. Ricordati
              di scegliere l&apos;opzione &quot;famigliari e amici&quot;!
            </p>
            <div className="flex flex-col">
              <Button
                className="p-2 pr-4 pl-4 mt-2 font-bold transition-all duration-300 cursor-pointer rounded-sm bg-yellow text-brown hover:bg-brown hover:text-white"
                onPress={() =>
                  router.push("https://www.paypal.com/paypalme/bresciapride")
                }
              >
                Apri Paypal
              </Button>
            </div>
          </SostieniciBlock>
          <SostieniciBlock className="col-span-1 rounded-lg bg-lime/50" title="5x1000" id="cinquexmille">
            <p className="text-xl font-bold">Codice Fiscale 98201800178</p>
            <p className="text-xl">
              Compila la sezione a &quot;Sostegno degli enti del terzo settore
              iscritti nel RUNTS...&quot;.
            </p>
            <div className="flex flex-col">
              <Button
                className="p-2 pr-4 pl-4 mt-2 font-bold transition-all duration-300 cursor-pointer rounded-sm bg-lime text-green hover:bg-green hover:text-white"
                onPress={() => writeCodiceFiscaleToClipboard()}
              >
                Copia il Codice Fiscale
              </Button>
            </div>
          </SostieniciBlock>
        </div>
      </SostieniciBlock>
      <div id="raccolta-fondi">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <SostieniciBlock title="RACCOLTA FONDI" id="raccolta-fondi" className="col-span-1">
            <h1 className="font-bold text-2xl text-green">IL PRIDE È DI TUTT3. DONA E AIUTACI A RENDERLO ACCESSIBILE</h1>
            <p className="mt-2">
              Per noi è importante che <b>tutte le persone possano vivere pienamente la giornata del Brescia Pride</b> e per questo cerchiamo di rendere gli spazi e le attività accessibili a tuttɜ.
            </p>
            <p className="mt-2">
              Per rendere il Pride accessibile, <b>abbiamo investito risorse concrete all&apos;accessibilità</b> del corteo e del Parco Pride:
            </p>
            <ul className="mt-2">
              <li>
                <b>circa 3.900 €</b> per il palco, comprensivo della rampa di accesso
              </li>
              <li>
                <b>circa 500 €</b> per l&apos;interpretariato in Lingua dei Segni Italiana (LIS)
              </li>
              <li>
                <b>circa 350 €</b> per due WC chimici accessibili
              </li>
              <li>
                <b>circa 160 €</b> per materiali e strumenti per l&apos;accessibilità e l&apos;accoglienza.
              </li>
            </ul>
            <p className="mt-2">
              Abbiamo bisogno del vostro aiuto per sostenere queste spese e continuare a costruire un Pride davvero per tuttɜ.
            </p>
          </SostieniciBlock>
          <div className="col-span-1 bg-white rounded-lg p-2">
            <GoFundMeWidget />
          </div>
        </div>
      </div>
    </Block>
  );
}
