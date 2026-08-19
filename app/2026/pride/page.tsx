"use client";

import React from "react";
import ImageBlock from "@/app/ui/components/ImageBlock";
import PrideDate from "@/app/ui/components/PrideDate";
import Block from "@/app/ui/components/Block";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import { Link } from "react-aria-components";
const myFont = localFont({ src: "../../ui/fonts/ST.ttf" });

type InfoBlockProps = {
  title: string;
  children: ReactNode;
  className?: string;
  id: string;
};

const InfoBlock = ({
  title,
  children,
  id,
  className = "col-span-6",
}: InfoBlockProps) => {
  return (
    <Block className={className} id={id}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-blue`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function PridePage() {
  const navLiClassName =
    "mt-2 p-1 pl-2 pr-2 transition-all duration-300 hover:bg-blue hover:text-white focus:bg-blue focus:text-white rounded-sm focus:outline-hidden bg-blue/10 md:text-2xl flex flex-col justify-center md:items-center";

  const mapLink =
    "https://www.google.com/maps/d/embed?mid=1O2B1Lx5s24EurtaQwao7pj_fskY9SkI&hl=it&ehbc=2E312F&ll=45.5473838155007%2C10.21575269747692&z=18";

  return (
    <Block aria-label="pride" className="grid md:grid-cols-6 grid-cols-1">
      <PrideDate showButton={false} />
      <Block className="col-span-6">
        <InfoBlock title="Indice" className="text-blue" id="indice">
          <nav id="indice" role="navigation" aria-labelledby="toc-heading">
            <div className="text-blue font-bold">
              <ul
                role="list"
                className="md:flex justify-between gap-2 md:text-center"
              >
                <li className={navLiClassName}>
                  <a href="#programma" aria-describedby="programma-desc">
                    Programma
                  </a>
                  <span id="programma-desc" className="sr-only">
                    Programma della giornata del pride
                  </span>
                </li>
                <li className={navLiClassName}>
                  <a href="#parco-pride" aria-describedby="parco-pride-desc">
                    Parco Pride
                  </a>
                  <span id="parco-pride-desc" className="sr-only">
                    Informazioni sul Parco Pride in Campo Marte
                  </span>
                </li>
                <li className={navLiClassName}>
                  <a href="#corteo" aria-describedby="corteo-desc">
                    Corteo
                  </a>
                  <span id="corteo-desc" className="sr-only">
                    Informazioni sul Corteo
                  </span>
                </li>
                <li className={navLiClassName}>
                  <a href="#mappa" aria-describedby="mappa-desc">
                    Mappa
                  </a>
                  <span id="mappa-desc" className="sr-only">
                    Mappa del Parco Pride e del Corteo
                  </span>
                </li>
                <li className={navLiClassName}>
                  <a
                    href="#accessibilità"
                    aria-describedby="accessibilità-desc"
                  >
                    Accessibilità
                  </a>
                  <span id="accessibilità-desc" className="sr-only">
                    Informazioni sll'accessibilità
                  </span>
                </li>                <li className={navLiClassName}>
                  <a
                    href="#come-arrivare"
                    aria-describedby="come-arrivare-desc"
                  >
                    Come arrivare
                  </a>
                  <span id="come-arrivare-desc" className="sr-only">
                    Informazioni su come arrivare a Campo Marte
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
              </ul>
            </div>
          </nav>
        </InfoBlock>
        <div className="p-4" id="programma">
          <h1 className={`${myFont.className} text-3xl text-blue`}>
            Programma
          </h1>
          <table className="w-full align-middle text-center border-spacing-5 mt-4">
            <tbody>
              <tr className="text-xl font-bold border-b-2 border-blue">
                <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                  <p>12:00</p>
                  <p>21:00</p>
                </td>
                <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-blue">
                  Parco Pride a Campo Marte 🌳
                </td>
              </tr>
              <tr className="text-xl font-bold border-b-2 border-blue">
                <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                  <p>14:30</p>
                  <p>15:30</p>
                </td>
                <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-blue">
                  Concentramento in Campo Marte con interventi e performance 📢
                </td>
              </tr>
              <tr className="text-xl font-bold border-b-2 border-blue">
                <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                  <p>15:30</p>
                  <p>18:00</p>
                </td>
                <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-blue">
                  Corteo per la città 🏳️‍🌈🏳️‍⚧️
                </td>
              </tr>
              <tr>
                <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                  <p>18:00</p>
                  <p>21:00</p>
                </td>
                <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-blue">
                  Interventi e performance a Campo Marte 🎤
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Block>
      <InfoBlock title="Parco Pride" id="parco-pride">
        <p>
          Il 5 settembre non sarà solo un corteo ma un&apos;intera giornata di
          orgoglio, comunità e lotta queer, che avrà come cuore pulsante il{" "}
          <b>Parco Pride a Campo Marte.</b> Sarà attivo <b>dalle 12 alle 21</b>,
          anche durante il corteo.
        </p>
      </InfoBlock>
      <div className="col-span-6 md:grid md:grid-cols-2 gap-2 p-4 -mt-2">
        <ImageBlock
          src="/images/parco-3.png"
          altText="Mappa del Parco Pride"
          showOnMobile={true}
          link="/images/parco-3.png"
          colSpan=""
        />
        <ImageBlock
          src="/images/parco-4.png"
          altText="Mappa del Corteo Pride"
          showOnMobile={true}
          link="/images/parco-4.png"
          colSpan=""
        />
      </div>
      <InfoBlock title="Corteo" id="corteo">
        <p>
          Il corteo{" "}
          <b>
            partirà da Campo Marte alle 15.30 e tornerà a Campo Marte alle 17.30
          </b>
          . Il percorso è in piano ed è lungo circa <b>3 chilometri</b>.
        </p>
        <div className="mt-2">
          <b>Lungo il corteo ci saranno</b>:
          <ul className="list-disc list-inside mt-2">
            <li>
              <b>Acqua</b> a disposizione di tuttə su ogni carro
            </li>
            <li>
              <b>Zona bianca mobile</b> presidiata
            </li>
            <li>
              <b>Zona decompressione</b> in Piazza Vittoria a metà percorso
            </li>
            <li>
              <b>Bagni e servizi accessibili</b> segnati sulla mappa interattiva
            </li>
            <li>
              <b>Gruppo accessibilità e cura</b> nella zona bianca mobile e di
              decompressione
            </li>
            <li>
              <b>Carro raccolta differenziata</b> in fondo al corteo
            </li>
          </ul>
        </div>
      </InfoBlock>
      <div className="col-span-6 md:grid md:grid-cols-2 gap-2 p-4 -mt-2">
        <ImageBlock
          src="/images/corteo-3.png"
          altText="Mappa del Parco Pride"
          showOnMobile={true}
          link="/images/corteo-3.png"
          colSpan=""
        />
        <ImageBlock
          src="/images/corteo-4.png"
          altText="Mappa del Corteo Pride"
          showOnMobile={true}
          link="/images/corteo-4.png"
          colSpan=""
        />
      </div>
      <InfoBlock title="Mappa" id="mappa">
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
          <Link className="underline text-blue font-bold" href={mapLink}>
            qui
          </Link>{" "}
          o sul simbolo <b>⛶</b> in alto a destra per aprire la mappa su Google
          Maps!
        </p>
        <iframe src={mapLink} className="w-full h-150 mt-4"></iframe>
      </InfoBlock>
      <InfoBlock title="Accessibilità" id="accessibilità">
        <p>Tutte le informazioni sull'<b>accessibilità</b> di Brescia Pride 2026 sono nella <Link
          href="/2026/accessibilita"
          className="underline text-blue font-bold"
        >
          pagina dedicata
        </Link>
        </p>
      </InfoBlock>
      <InfoBlock title="Come arrivare" id="come-arrivare">
        <ul>
          <li>
            <b>A piedi dalla stazione</b>: circa 30 minuti (2km)
          </li>
          <li>
            <b>Bici</b>: postazione bicimia Da Vinci
          </li>
          <li>
            <b>Metro</b>: fermata San Faustino (7 minuti a piedi)
          </li>
          <li>
            <b>Bus</b>: linee 2, 11, 13 e 15
          </li>
          <li>
            <b>Parcheggi</b>: gratuiti e a pagamento intorno a Campo Marte e grande parcheggio gratuito IVECO a 15 minuti a piedi
          </li>
          <li id="parcheggi-riservati">
            <b>Parcheggi riservati</b>: a disposizione di persone con
            disabilità in via Ugo Foscolo,{" "}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd_-vos8-GszHIRm7sEj8ETz6PZXmEuGAUpQcNxLsjyK2ks7g/viewform"
              className="underline text-blue font-bold"
            >
              compila il modulo a questo link per prenotare un parcheggio
            </Link>
          </li>
        </ul>
      </InfoBlock>
    </Block>
  );
}
