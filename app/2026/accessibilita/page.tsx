"use client";

import React from "react";
import Block from "@/app/ui/components/Block";
import { ReactNode } from "react";
import { Button } from "react-aria-components";
import localFont from "next/font/local";
import { Link } from "react-aria-components";
const myFont = localFont({ src: "../../ui/fonts/ST.ttf" });

type AccessibilitaBlockProps = {
  title: string;
  children: ReactNode;
  id: string;
  className?: string;
};

const AccessibilitaBlock = ({
  title,
  children,
  id,
  className = ""
}: AccessibilitaBlockProps) => {
  return (
    <Block className={`col-span-6 ${className}`} id={id}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-green`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function AccessibilitaPage() {
  const navLiClassName = "mt-2 p-1 pl-2 pr-2 transition-all duration-300 hover:bg-green hover:text-white focus:bg-green focus:text-white rounded-sm focus:outline-hidden bg-green/10 md:text-2xl flex flex-col justify-center md:items-center w-full"

  const mapLink = "https://www.google.com/maps/d/embed?mid=1O2B1Lx5s24EurtaQwao7pj_fskY9SkI&hl=it&ehbc=2E312F&ll=45.5473838155007%2C10.21575269747692&z=18"

  return (
    <Block>
      <Block className="p-8 bg-lime text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-green`}>
          Accessibilità
        </h1>
        <p className={`lg:col-span-6 text-2xl text-green mt-2`}>
          Tutte le informazioni sull&apos;accessibilità di Brescia Pride 2026
        </p>
      </Block>{" "}
      <AccessibilitaBlock title="Indice" id="indice" className="bg-lime/30 border-b-2">
        <nav id="indice" role="navigation" aria-labelledby="toc-heading">
          <div className="text-green font-bold">
            <ul 
            role="list gap-2"
            className="md:flex justify-between gap-2 md:text-center"
          >
                <li className={navLiClassName}>
                <a href="#vademecum" aria-describedby="vademecum-desc">
                  Vademecum accessibilità
                </a>
                <span id="vademecum-desc" className="sr-only">
                  Guida completa all&apos;accessibilità dell&apos;evento con
                  informazioni su Campo Marte, zone speciali e servizi
                </span>
              </li>
                <li className={navLiClassName}>
                <a href="#mappa" aria-describedby="mappa-desc">
                  Mappa interattiva
                </a>
                <span id="mappa-desc" className="sr-only">
                  Mappa di Google con informazioni sui percorsi e servizi
                  accessibili
                </span>
              </li>
              <li className={navLiClassName}>
                <a
                  href="#parcheggi-riservati"
                  aria-describedby="parcheggi-riservati-desc"
                >
                  Modulo parcheggi riservati
                </a>
                <span id="parcheggi-riservati-desc" className="sr-only">
                  Link al modulo da compilare per prenotare un parcheggio per
                  persone con disabilità
                </span>
              </li>
                {/* <li className={navLiClassName}>
                <a href="#trascrizioni" aria-describedby="trascrizioni-desc">
                  Trascrizioni interventi
                </a>
                <span id="trascrizioni-desc" className="sr-only">
                  Trascrizioni interventi del Brescia Pride 2025
                </span>
              </li>
                <li className={navLiClassName}>
                <a href="#telegram" aria-describedby="telegram-desc">
                  Canale Telegram
                </a>
                <span id="telegram-desc" className="sr-only">
                  Accesso al canale Telegram per ricevere aggiornamenti e
                  informazioni
                </span>
              </li> */}
            </ul>
          </div>
        </nav>
      </AccessibilitaBlock>
      <AccessibilitaBlock title="Vademecum" id="vademecum">
        <section className="mt-4 scroll-mt-8" aria-labelledby="vademecum-title">
          <p>
            Il <b>Vademecum Accessibilità</b> contiene tutte le informazioni di
            accessibilità di tutta la giornata del 5 settembre. È disponibile online in
            formato Google Docs e in formato PDF. Contiene informazioni su:
          </p>
          <ul className="list-disc list-inside mt-2" role="list">
            <li>Accessibilità e cura nel Parco Pride e durante il corteo</li>
            <li>Com&apos;è organizzato il Parco Pride</li>
            <li>Percorso, locali e servizi accessibili</li>
            <li>
              Zona bianca, zona di decompressione e zona ad alta visibilità
            </li>
            <li>Gruppo telegram dedicato</li>
            <li>Parcheggi riservati</li>
            <li>Informazioni su diretta e interventi dal palco</li>
            <li>
              Come prepararsi, come arrivare e cosa fare in caso di bisogno
            </li>
          </ul>
          <nav className="mt-4 text-center flex justify-between gap-4" aria-label="bottoni per accedere al vademecum" role="navigation">
            <Link    
              onPress={() => {
                const link = document.createElement("a");
                link.href = "https://docs.google.com/document/d/1mDRZo6kGYhdzhj0hv35yCDTD5Hf44FeP/edit?usp=sharing&ouid=105357298467072128512&rtpof=true&sd=true";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="p-2 pr-4 pl-4 mt-2 font-bold transition-all duration-300 cursor-pointer rounded-sm bg-green/10 text-green hover:bg-green hover:text-white text-lg w-full flex flex-col justify-center md:items-center"
              aria-label="Consulta il vademecum accessibilità su Google Docs - si apre in una nuova finestra"
            >
              Leggi il vademecum su Google Docs
            </Link>
            <Link
              onPress={() => {
                const link = document.createElement("a");
                link.href = "/docs/vademecum-accessibilità-2026.pdf";
                link.download = "vademecum-accessibilità-2026.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="p-2 pr-4 pl-4 mt-2 font-bold transition-all duration-300 cursor-pointer rounded-sm bg-green/10 text-green hover:bg-green hover:text-white text-lg w-full flex flex-col justify-center md:items-center"
              aria-label="Scarica il Vademecum in PDF"
            >
              Scarica il Vademecum in PDF
            </Link>
          </nav>
        </section>
      </AccessibilitaBlock>
      <AccessibilitaBlock title="Mappa" id="mappa">
        <section
          id="mappa"
          className="mt-4 scroll-mt-8"
          aria-labelledby="mappa-title"
        >
        <p>Sulla mappa interattiva sono segnalati:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Campo Marte</li>
          <li>Percorso del corteo</li>
          <li>Zona di decompressione in Piazza Vittoria</li>
          <li>Servizi igienici accessibili, con foto e descrizione</li>
          <li>Fontanelle e punti acqua</li>
        </ul>
        <p className="mt-2">
          Clicca{" "}
          <Link className="underline text-green font-bold" href={mapLink}>
            qui
          </Link>{" "}
          o sul simbolo <b>⛶</b> in alto a destra per aprire la mappa su Google
          Maps!
        </p>
        <iframe src={mapLink} className="w-full h-150 mt-4"></iframe>
        </section>
      </AccessibilitaBlock>
      <AccessibilitaBlock title="Parcheggi riservati" id="parcheggi-riservati">
        <div>
        <p>Ci sono 15 parcheggi riservati a disposizione di persone con
        disabilità in via Ugo Foscolo.
        </p>
        <nav className="mt-4 text-center flex justify-between gap-4" aria-label="bottoni per accedere al vademecum" role="navigation">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd_-vos8-GszHIRm7sEj8ETz6PZXmEuGAUpQcNxLsjyK2ks7g/viewform"
              className="p-2 pr-4 pl-4 mt-2 font-bold transition-all duration-300 cursor-pointer rounded-sm bg-green/10 text-green hover:bg-green hover:text-white text-lg w-full"
        >
          Compila il modulo per prenotare un parcheggio
        </Link>
        </nav>
        </div>
      </AccessibilitaBlock>
      {/* <AccessibilitaBlock title="Gruppo Telegram" id="telegram">
        <p>
          Pochi giorni prima del 5 settembre sarà disponibile il gruppo telegram
          dedicato all&apos;accessibilità.
        </p>
      </AccessibilitaBlock> */}
    </Block>
  );
}
