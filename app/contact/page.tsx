"use client";

import React from "react";
import { motion } from "framer-motion";
import Block from "../ui/components/Block";
import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";
import SocialsBlock from "../ui/components/SocialsBlock";
import Link from "next/link";
import ImageBlock from "../ui/components/ImageBlock";
import localFont from "next/font/local";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function ContactsPage() {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-6 gap-4"
      >
        <Header size={6} />
        <Block className={`col-span-3 bg-pink`}>
          <div
            className="cursor-pointer transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-blue hover:text-pink"
          >
            <div className="text-center relative z-10 text-shadow-lg">
              <h1 className={`text-3xl font-medium leading-tight font-bold ${myFont.className}`}>
                Scrivici!
              </h1>
              <p className="text-xl font-bold">
                Per qualsiasi informazione, domanda o richiesta di collaborazione,
                puoi contattarci via mail a <Link className="underline" href="mailto:info@bresciapride.it">info@bresciapride.it</Link> o tramite i canali qui sotto!
              </p>
            </div>
          </div>
        </Block>
        <Block className={`col-span-3 bg-lime`}>
          <div
            className="cursor-pointer transition-all duration-300 hover:bg-purple flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-purple hover:text-lime"
          >
            <div className="text-center relative z-10 text-shadow-lg">
              <h1 className={`text-3xl font-medium leading-tight font-bold ${myFont.className}`}>
                Supportaci!
              </h1>
              <p className="text-xl font-bold">
                Siamo una realtà autofinanziata! Supportaci donando il 5x1000 a COMITATO BRESCIA PRIDE - Codice Fiscale 98201800178 o con una <Link className="underline" href="https://www.paypal.com/paypalme/bresciapride">donazione</Link>!
              </p>
            </div>
          </div>
        </Block>
        <ImageBlock
          src="/images/5-1000.png"
          altText="Esempio compilazione del 5x1000 per COMITATO BRESCIA PRIDE, Codice Fiscale: 98201800178"
          showOnMobile={true}
          colSpan="col-span-3"
        />
        <SocialsBlock />
        <Footer />
      </motion.div>
    </div>
  );
};