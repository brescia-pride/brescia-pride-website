"use client";

import React from "react";
import SocialsBlock from "../ui/components/SocialsBlock";
import { Link } from "react-aria-components";
import Block from "../ui/components/Block";
import localFont from "next/font/local";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function ContactsPage() {
  return (
    <Block>
      <Block className="p-8 bg-lightblue text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-blue`}>
          Contatti
        </h1>
        <p className="text-2xl text-blue mt-2">
          Per qualsiasi informazione, domanda o richiesta di collaborazione,
          puoi contattarci via mail a{" "}
          <Link
            className={`font-bold underline`}
            href="mailto:info@bresciapride.it"
          >
            info@bresciapride.it
          </Link>{" "}
          o tramite i nostri canali social!
        </p>
      </Block>
      <SocialsBlock />
    </Block>
  );
}
