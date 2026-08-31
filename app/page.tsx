"use client";

import React from "react";
import { ReactNode } from "react";
import { Link } from "react-aria-components";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import PrideDate from "./ui/components/PrideDate";
import Block from "./ui/components/Block";
import ImageBlock from "./ui/components/ImageBlock";
import ColoredButton from "./ui/components/ColoredButton";
import UpcomingEventsBlock from "./ui/components/UpcomingEventsBlock";
import GoFundMeWidget from "./ui/components/GoFundMeCard";

const myFont = localFont({ src: "./ui/fonts/ST.ttf" });

type HomePageBlockProps = {
  title: string;
  color: string;
  className: string;
  children: ReactNode;
};

const HomePageBlock = ({
  title,
  className,
  color,
  children,
}: HomePageBlockProps) => {
  return (
    <Block className={className}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-${color}`}>
          {title}
        </h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function Homepage() {
  const router = useRouter();
  return (
    <div className="flex-col md:grid md:grid-cols-6">
      <PrideDate showButton={true} />
      <ImageBlock src="/images/Locandina MO.CA blu_27 ago.png" colSpan="col-span-3 p-4" altText="locandina blablaqueer" showOnMobile={true}></ImageBlock>
      <HomePageBlock className="col-span-3" title="Blablaqueer: Aspettando Brescia Pride" color="blue">
        <p className="font-bold md:text-3xl">
          Dall&apos;1 al 3 settembre, riempiamo <Link href="https://morettocavour.com/" className="underline text-blue">MO.CA - Centro per le Nuove Culture</Link> di talk, incontri e momenti di comunità per prepararci al Brescia Pride 2026 con ancora più consapevolezza e prospettive condivise.
        </p>
        <p className="mt-2">
          Tre giorni per parlare di cosa significa vivere fuori norma e di come le nostre esperienze si intrecciano: dalla cultura ballroom alle esperienze neuroqueer, dall&apos;essere queer e arabə al valore politico dell&apos;educazione sessuale. Ma anche per costruire insieme i cartelloni del Pride, incontrarci, conoscerci e dare spazio alle persone queer che abitano il nostro territorio.
        </p>
        <div className="flex flex-row justify-center items-center p-2 gap-4">
          <ColoredButton text="Clicca qui per partecipare!" bgColor="lightblue" textColor="blue" href="https://forms.gle/Vp7uQqJPnScsSKwe9" className="w-full"></ColoredButton>
        </div>
        <p className="mt-2 font-bold">
          Tutti gli appuntamenti sono gratuiti e accessibili per persone con mobilità ridotta.
        </p>
      </HomePageBlock>
      <div className="col-span-6 grid grid-cols-1 md:grid-cols-2">
        <HomePageBlock title="RACCOLTA FONDI" color="blue" className="col-span-1">
          <h1 className="font-bold text-3xl text-blue">IL PRIDE È DI TUTT3. DONA E AIUTACI A RENDERLO ACCESSIBILE</h1>
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
        </HomePageBlock>
        <div className="col-span-1 bg-white rounded-lg p-2">
          <GoFundMeWidget />
        </div>
      </div>
      <HomePageBlock
        className="col-span-6"
        title="Prossimi eventi"
        color="fuchsia"
      >
        <UpcomingEventsBlock />
      </HomePageBlock>
    </div>
  );
}
