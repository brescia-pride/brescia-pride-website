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
          Stampa
        </h1>
        <p className={`lg:col-span-6 text-2xl text-red mt-2`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          consequat mi quis pretium semper. Proin luctus orci ac neque
          venenatis, quis commodo dolor posuere.
        </p>
      </Block>
      <Block className="p-4">
        <h1 className={`${myFont.className} text-3xl text-red`}>
          Comunicato Stampa Brescia Pride 2026
        </h1>
      </Block>
      <Block className="p-4">
        <h1 className={`${myFont.className} text-3xl text-red`}>
          Punto stampa in Campo Marte
        </h1>
      </Block>
      <Block className="p-4">
        <h1 className={`${myFont.className} text-3xl text-red`}>
          Contatti stampa
        </h1>
      </Block>
      <Block className="p-4">
        <h1 className={`${myFont.className} text-3xl text-red`}>
          Vademecum Fotografico
        </h1>
      </Block>
      <Block className="p-4">
        <h1 className={`${myFont.className} text-3xl text-red`}>
          Mappa Corteo
        </h1>
      </Block>
      <Block className="p-4">
        <h1 className={`${myFont.className} text-3xl text-red`}>
          Mappa Campo Marte
        </h1>
      </Block>
      <Block className="p-4">
        <h1 className={`${myFont.className} text-3xl text-red`}>
          Archivio Comunicati Stampa 
        </h1>
      </Block>
    </div>
  );
}
