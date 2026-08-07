"use client";

import React from "react";
import InfoCard from "@/app/ui/components/InfoCard";
import { Link } from "react-aria-components";
import ImageBlock from "@/app/ui/components/ImageBlock";
import PrideDate from "@/app/ui/components/PrideDate";
import Block from "@/app/ui/components/Block";
import { ReactNode } from "react";

import localFont from "next/font/local";
const myFont = localFont({ src: "../../ui/fonts/ST.ttf" });

type InfoBlockProps = {
  title: string;
  children: ReactNode;
};

const InfoBlock = ({ title, children }: InfoBlockProps) => {
  return (
    <Block className="col-span-6">
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-blue`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function PridePage() {
  return (
    <Block aria-label="pride" className="flex grid md:grid-cols-6 grid-cols-1">
      <PrideDate />
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
          <b>Parco Pride a Campo Marte.</b>
        </p>
        <p>Sarà attivo dalle 12 alle 21. Anche durante il corteo.</p>
      </InfoBlock>
      <InfoBlock title="Mappa">
        <p>
          mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa
          mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa
          mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa
          mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa
          mappa mappa mappa mappa mappa mappa mappa mappa mappa mappa
        </p>
      </InfoBlock>
      <InfoBlock title="Corteo">
        <p>
          info corteo info corteo info corteo info corteo info corteo info
          corteo info corteo info corteo info corteo info corteo info corteo
          info corteo info corteo info corteo info corteo info corteo info
          corteo info corteo info corteo info corteo info corteo info corteo
          info corteo info corteo info corteo info corteo info corteo info
          corteo
        </p>
      </InfoBlock>
      <InfoBlock title="Accessibilità">
        <p>
          info accessibilità info accessibilità info accessibilità info
          accessibilità info accessibilità info accessibilità info accessibilità
          info accessibilità info accessibilità info accessibilità info
          accessibilità info accessibilità info accessibilità info accessibilità
          info accessibilità info accessibilità info accessibilità info
          accessibilità info accessibilità info accessibilità info accessibilità
          info accessibilità info accessibilità info accessibilità info
          accessibilità info accessibilità info accessibilità info accessibilità
        </p>
      </InfoBlock>
      <InfoBlock title="Zone Parco">
        <p>
          zona associazioni, zona market, zona bimbu, zona salute, zona cibo
        </p>
      </InfoBlock>
      <InfoBlock title="Carri">
        <p>
          carri carri carri carri carri carri carri carri carri carri carri
          carri carri carri carri carri carri carri carri carri carri carri
          carri carri carri carri carri carri carri carri carri carri carri
          carri carri carri carri carri carri carri carri carri carri carri
          carri
        </p>
      </InfoBlock>
    </Block>
  );
}
