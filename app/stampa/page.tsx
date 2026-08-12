"use client";

import React from "react";
import ResourceCard from "../ui/components/ResourceCard";
import localFont from "next/font/local";
import Block from "../ui/components/Block";
import { Link } from "react-aria-components";
import { ReactNode } from "react";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

type StampaBlockProps = {
  title: string;
  children: ReactNode;
};

const StampaBlock = ({ title, children }: StampaBlockProps) => {
  return (
    <Block className="col-span-6">
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-red`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function ResourcesPage() {
  return (
    <div>
      <Block className="p-8 bg-pink text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-red`}>
          Sala Stampa
        </h1>
        <p className={`lg:col-span-6 text-2xl text-red mt-2`}>
          Informazioni per la stampa
        </p>
      </Block>
      <StampaBlock title="Comunicati stampa">
        <Link
          href="2026/documenti/comunicato-stampa-pride"
          className="underline text-red"
        >
          Esempio Comunicato
        </Link>
      </StampaBlock>
      <StampaBlock title="Punto stampa in Campo Marte">
        <p>
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info
        </p>
      </StampaBlock>
      <StampaBlock title="Contatti stampa">
        <p>
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info
        </p>
      </StampaBlock>
      <StampaBlock title="Vademecum Fotografico">
        <p>
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info
        </p>
      </StampaBlock>
      <StampaBlock title="Mappa Corteo">
        <p>
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info
          info info info info info info info info
        </p>
      </StampaBlock>
    </div>
  );
}
