"use client";

import React from "react";
import localFont from "next/font/local";
import Block from "../ui/components/Block";
import { Link } from "react-aria-components";
import { ReactNode } from "react";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

type StampaBlockProps = {
  title: string;
  children: ReactNode;
  id: string;
};

const StampaBlock = ({ title, children, id }: StampaBlockProps) => {
  return (
    <Block className="col-span-6" id={id}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-purple`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function StampaPage() {
  const navLiClassName =
    "mt-2 p-1 pl-2 pr-2 transition-all duration-300 hover:bg-purple hover:text-white focus:bg-purple focus:text-white rounded-sm focus:outline-hidden bg-purple/10 md:text-2xl flex flex-col justify-center md:items-center";

  const mapLink =
    "https://www.google.com/maps/d/embed?mid=1O2B1Lx5s24EurtaQwao7pj_fskY9SkI&hl=it&ehbc=2E312F&ll=45.5473838155007%2C10.21575269747692&z=18";

  return (
    <div>
      <Block className="p-8 bg-lilac text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-purple`}>
          Sala Stampa
        </h1>
      </Block>
      <StampaBlock title="Indice" id="indice">
        <nav id="indice" role="navigation" aria-labelledby="toc-heading">
          <div className="text-purple font-bold">
            <ul
              role="list"
              className="md:flex justify-between gap-2 md:text-center"
            >
              <li className={navLiClassName}>
                <a
                  href="#comunicati-stampa"
                  aria-describedby="comunicati-stampa-desc"
                >
                  Comunicati
                </a>
                <span id="comunicati-stampa-desc" className="sr-only">
                  Lista dei comunicati stampa
                </span>
              </li>
              <li className={navLiClassName}>
                <a href="#punto-stampa" aria-describedby="punto-stampa-desc">
                  Punto stampa
                </a>
                <span id="punto-stampa-desc" className="sr-only">
                  Dove si trova il punto stampa in Campo Marte
                </span>
              </li>
              <li className={navLiClassName}>
                <a
                  href="#contatti-stampa"
                  aria-describedby="contatti-stampa-desc"
                >
                  Contatti stampa
                </a>
                <span id="contatti-stampa-desc" className="sr-only">
                  Contatti stampa di Brescia Pride
                </span>
              </li>
              <li className={navLiClassName}>
                <a
                  href="#vademecum-fotografico"
                  aria-describedby="vademecum-fotografico-desc"
                >
                  Vademecum fotografico
                </a>
                <span id="vademecum-fotografico-desc" className="sr-only">
                  Vademecum fotografico per stampa
                </span>
              </li>
              <li className={navLiClassName}>
                <a href="#mappa" aria-describedby="mappa-desc">
                  Mappa corteo
                </a>
                <span id="mappa-desc" className="sr-only">
                  Mappa di Brescia Pride e del corteo
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </StampaBlock>
      <StampaBlock title="Comunicati stampa" id="comunicati-stampa">
        <Link
          href="2026/documenti/comunicato-stampa-pride"
          className="underline text-purple"
        >
          Esempio Comunicato
        </Link>
      </StampaBlock>
      <StampaBlock title="Punto stampa in Campo Marte" id="punto-stampa">
        <p>
          Presso l&apos;<b>Info Point</b> all'ingresso principale di Campo Marte
          (via Ugo Foscolo)
        </p>
        <p className="mt-2">
          Per interviste recarsi presso XXXX dalle ore XX alle ore YY
        </p>
      </StampaBlock>
      <StampaBlock title="Contatti stampa" id="contatti-stampa">
        <ul className="list-disc list-inside">
          <li>
            XXX YYY,{" "}
            <Link
              className="text-purple underline"
              href="mailto:ufficiostampa@bresciapride.it"
            >
              ufficiostampa@bresciapride.it
            </Link>
          </li>
          <li>
            XXX YYY,{" "}
            <Link
              className="text-purple underline"
              href="mailto:ufficiostampa@bresciapride.it"
            >
              ufficiostampa@bresciapride.it
            </Link>
          </li>
          <li>
            XXX YYY,{" "}
            <Link
              className="text-purple underline"
              href="mailto:ufficiostampa@bresciapride.it"
            >
              ufficiostampa@bresciapride.it
            </Link>
          </li>
        </ul>
      </StampaBlock>
      <StampaBlock title="Vademecum Fotografico" id="vademecum-fotografico">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </StampaBlock>
      <StampaBlock title="Mappa Corteo" id="mappa">
        <iframe src={mapLink} className="w-full h-150 mt-4"></iframe>
      </StampaBlock>
    </div>
  );
}
