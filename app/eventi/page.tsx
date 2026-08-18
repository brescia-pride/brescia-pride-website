"use client";

import React from "react";
import Calendar from "../ui/components/Calendar";
import Block from "../ui/components/Block";
import localFont from "next/font/local";
import { Link } from "react-aria-components";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function EventsPage() {
  return (
    <div>
      <Block className="p-8 bg-lilac text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-purple`}>
          Eventi
        </h1>
        <p className={`lg:col-span-6 text-2xl text-purple mt-2`}>
          <b>Organizziamo eventi tutto l&apos;anno!</b>
        </p>
        <p className={`lg:col-span-6 text-2xl text-purple mt-2`}>
          Tieni d&apos;occhio questa pagina e le nostre pagine{" "}
          <Link
            className="underline"
            href="https://www.instagram.com/bresciapride"
          >
            Instagram
          </Link>{" "}
          e{" "}
          <Link
            className="underline"
            href="https://www.facebook.com/BresciaPride"
          >
            Facebook
          </Link>{" "}
          per restare aggiornatə.
        </p>
      </Block>
      <Calendar />
    </div>
  );
}
