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
      <ImageBlock src="/images/Locandina MO.CA blu_upd 24 ago.png" colSpan="col-span-3 p-4" altText="locandina blablaqueer" showOnMobile={true}></ImageBlock>
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
