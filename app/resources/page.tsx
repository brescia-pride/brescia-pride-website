"use client";

import React from "react";
import ResourceCard from "../ui/components/ResourceCard";
import localFont from "next/font/local";
import Block from "../ui/components/Block";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function ResourcesPage() {
  return (
    <div>
      <Block className="p-8 bg-pink text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-red`}>
          Risorse e Comunicati Stampa
        </h1>
        <p className={`lg:col-span-6 text-2xl text-red mt-2`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          consequat mi quis pretium semper. Proin luctus orci ac neque
          venenatis, quis commodo dolor posuere.
        </p>
      </Block>
      <Block className={`bg-white items-center justify-center`}>
        <h1
          className={`text-4xl ${myFont.className} text-red tracking-wider leading-tight p-4`}
        >
          2025
        </h1>
        <div className="grid grid-cols-3 divide-y-4">
          <ResourceCard
            title="Manifesto 2025"
            description="Esistiamo ovunque, resistiamo unitɜ."
            actionText="Leggi il manifesto"
            href="docs/manifesto-2025.pdf"
            hoverColor="blue"
            colSpan={3}
          />
          <ResourceCard
            title="Comunicato Stampa 27/06/2025"
            description="Brescia Pride 2025: il 6 settembre torna la manifestazione per i diritti LGBTQIA+"
            actionText="Leggi il comunicato"
            href="docs/comunicato-stampa-27-06.pdf"
            hoverColor="purple"
            colSpan={3}
          />
        </div>
      </Block>
      <Block className={`col-span-6 bg-white items-center justify-center`}>
        <h1
          className={`text-4xl ${myFont.className} text-red tracking-wider leading-tight p-4`}
        >
          2024
        </h1>
        <div className="grid grid-cols-3 divide-y-4">
          <ResourceCard
            title="Manifesto 2024"
            description="Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita."
            actionText="Leggi il manifesto"
            href="docs/manifesto-2024.pdf"
            hoverColor="purple"
            colSpan={3}
          />
          <ResourceCard
            title="Vademecum per l&apos;accessibilità degli eventi e dei cortei"
            description="Rendere un evento realmente accessibile e a misura di chiunque è un processo di ascolto e cura, necessario, comunitario e collettivo."
            actionText="Consulta il Vademecum"
            href="https://1drv.ms/p/c/3154c23af9523fae/Ea4_Uvk6wlQggDFqAQAAAAABswCASnHi1Vg3TZNPRM4M5Q?e=OjEMoL"
            hoverColor="blue"
            isExternal={true}
            colSpan={3}
          />
          <ResourceCard
            title="Comunicato a sostegno della comunità T* (06/07/2024)"
            description="Alla luce dei recenti avvenimenti, ci uniamo alla voce delle associazioni LGBTQIA+ e T* che da mesi denunciano il costante e preoccupante attacco alla libertà di scelta e autodeterminazione."
            actionText="Leggi il comunicato"
            href="docs/comunicato-t.pdf"
            hoverColor="green"
            colSpan={3}
          />
        </div>
      </Block>
    </div>
  );
}
