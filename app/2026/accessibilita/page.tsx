"use client";

import React from "react";
import Block from "@/app/ui/components/Block";
import { ReactNode } from "react";
import { Button } from "react-aria-components";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../ui/fonts/ST.ttf" });

type AccessibilitaBlockProps = {
  title: string;
  children: ReactNode;
  id: string;
};

const AccessibilitaBlock = ({
  title,
  children,
  id,
}: AccessibilitaBlockProps) => {
  return (
    <Block className="col-span-6" id={id}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-green`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function AccessibilitaPage() {
  return (
    <Block>
      <Block className="p-8 bg-lime text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-green`}>
          Accessibilità
        </h1>
        <p className={`lg:col-span-6 text-2xl text-green mt-2`}>
          Tutte le informazioni sull&apos;Accessibilità di Brescia Pride 2026
        </p>
      </Block>{" "}
      <AccessibilitaBlock title="Indice" id="indice">
        <nav id="indice" role="navigation" aria-labelledby="toc-heading">
          <div className="text-green underline">
            <ul role="list gap-2">
              <li className="mt-2">
                <a href="#vademecum" aria-describedby="vademecum-desc">
                  Vademecum accessibilità
                </a>
                <span id="vademecum-desc" className="sr-only">
                  Guida completa all&apos;accessibilità dell&apos;evento con
                  informazioni su Campo Marte, zone speciali e servizi
                </span>
              </li>
              <li className="mt-2">
                <a href="#mappa" aria-describedby="mappa-desc">
                  Mappa interattiva
                </a>
                <span id="mappa-desc" className="sr-only">
                  Mappa di Google con informazioni sui percorsi e servizi
                  accessibili
                </span>
              </li>
              <li className="mt-2">
                <a href="#trascrizioni" aria-describedby="trascrizioni-desc">
                  Trascrizioni interventi
                </a>
                <span id="trascrizioni-desc" className="sr-only">
                  Trascrizioni interventi del Brescia Pride 2025
                </span>
              </li>
              <li className="mt-2">
                <a href="#telegram" aria-describedby="telegram-desc">
                  Canale Telegram
                </a>
                <span id="telegram-desc" className="sr-only">
                  Accesso al canale Telegram per ricevere aggiornamenti e
                  informazioni
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </AccessibilitaBlock>
      <AccessibilitaBlock title="Vademecum" id="vademecum">
        <section className="mt-4 scroll-mt-8" aria-labelledby="vademecum-title">
          <p>
            Il <b>Vademecum Accessibilità</b> contiene tutte le informazioni di
            accessibilità di tutta la giornata del 5 settembre. È disponibile in
            formato Google Docs. Contiene informazioni su:
          </p>
          <ul className="list-disc list-inside mt-2" role="list">
            <li>Accessibilità e cura nel Parco Pride e durante il corteo</li>
            <li>Percorso, locali e servizi accessibili</li>
            <li>
              Zona bianca, zona di decompressione e zona ad alta visibilità
            </li>
            <li>Gruppo telegram dedicato</li>
            <li>Parcheggi riservati</li>
            <li>
              Come prepararsi, come arrivare e cosa fare in caso di bisogno
            </li>
          </ul>
          <div className="mt-4 text-center">
            <Button
              onPress={() => {
                const link = document.createElement("a");
                link.href = "";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="flex items-center justify-center w-full px-4 py-3 bg-lime text-green hover:bg-green hover:text-lime font-bold rounded-lg transition-colors duration-200 focus:outline-hidden"
              aria-label="Consulta il vademecum accessibilità su Google Docs - si apre in una nuova finestra"
            >
              👉 Leggi il vademecum su Google Docs
            </Button>
          </div>
        </section>
      </AccessibilitaBlock>
      <AccessibilitaBlock title="Mappa" id="mappa">
        <section
          id="mappa"
          className="mt-4 scroll-mt-8"
          aria-labelledby="mappa-title"
        >
          <p>
            La mappa contiene informazioni su Campo Marte, il percorso del
            corteo, i servizi e bagni accessibili e i parcheggi vicini.
          </p>
          <div className="mt-4 text-center w-full max-w-5xl mx-auto">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1TlU5uyFT7IKSayHC6hfm80i8dWsF1sc&ehbc=2E312F"
              className="rounded-lg w-full h-[400px] sm:h-[500px] border-2 border-blue/30"
              title="Mappa accessibilità Brescia Pride con informazioni su Campo Marte, percorso corteo e servizi accessibili"
              aria-label="Mappa interattiva di Google che mostra i percorsi accessibili e i servizi disponibili durante il Brescia Pride"
              tabIndex={0}
            ></iframe>
          </div>
        </section>
      </AccessibilitaBlock>
      <AccessibilitaBlock title="Interventi" id="trascrizioni">
        <p>
          Pochi giorni prima del 5 settembre saranno disponibili le trascrizioni
          dei discorsi e delle performance dal palco.
        </p>
      </AccessibilitaBlock>
      <AccessibilitaBlock title="Gruppo Telegram" id="telegram">
        <p>
          Pochi giorni prima del 5 settembre sarà disponibile il gruppo telegram
          dedicato all&apos;accessibilità.
        </p>
      </AccessibilitaBlock>
    </Block>
  );
}
