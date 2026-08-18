"use client";

import React from "react";
import ImageBlock from "@/app/ui/components/ImageBlock";
import PrideDate from "@/app/ui/components/PrideDate";
import Block from "@/app/ui/components/Block";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../ui/fonts/ST.ttf" });

type InfoBlockProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const InfoBlock = ({
  title,
  children,
  className = "col-span-6",
}: InfoBlockProps) => {
  return (
    <Block className={className}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-blue`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function PridePage() {
  const router = useRouter();

  return (
    <Block aria-label="pride" className="flex grid md:grid-cols-6 grid-cols-1">
      <PrideDate showButton={false} />
      <Block className="col-span-6">
        <div className="p-4">
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
      <InfoBlock title="Parco Pride">
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
      <InfoBlock title="Corteo">
        <p>
          Il corteo{" "}
          <b>
            partirà da Campo Marte alle 15.30 e tornerà a Campo Marte alle 17.30
          </b>
          . Il percorso è in piano ed è lungo circa <b>3 chilometri</b>.
        </p>
        <p className="mt-2">
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
        </p>
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
      {/* <InfoBlock title="Accessibilità">
        <p>
          Clicca <Link href="/2026/accessibilita" className="underline text-blue">qui</Link> per tutte le informazioni di accessibilità.
        </p>
      </InfoBlock> */}
      <InfoBlock title="Come arrivare">
        <ul>
          <li>
            <b>Bici</b>: postazione bicimia Da Vinci
          </li>
          <li>
            <b>Metro</b>: fermata San Faustino (7 minuti a piedi)
          </li>
          <li>
            <b>Bus</b>: linee 13 e 15 (3 minuti a piedi)
          </li>
          <li>
            <b>Parcheggi</b>: intorno a Campo Marte e grande parcheggio gratuito
            IVECO a 15 mminuti a piedi
          </li>
          <li>
            <b>Parcheggi riservati</b>: a disposizione di persone con
            disabilità, compila il modulo
          </li>
        </ul>
      </InfoBlock>
    </Block>
  );
}
