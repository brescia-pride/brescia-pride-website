"use client";

import React from "react";
import { motion } from "framer-motion";
import Block from "./ui/components/Block";
import Text from "./ui/components/Text";
import SocialsBlock from "./ui/components/SocialsBlock";
import ImageBlock from "./ui/components/ImageBlock";
import Footer from "./ui/components/Footer";

export default function Homepage() {
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-5 gap-4"
      >
        <Text
          blockClass="bg-green text-pink col-span-5"
          heading="Brescia Pride"
          text="Più unite e compatte che mai, ci vogliamo far sentire, per progettare insieme una società a misura di ogni persona. Ci vediamo in piazza il 7 settembre."
        />
        <Text
          blockClass="bg-[#f9c224] text-[#033150] col-span-4"
          text="Alla luce dei recenti avvenimenti, ci uniamo alla voce delle associazioni LGBTQIA+ e T* che da mesi denunciano il costante e preoccupante attacco alla libertà di scelta e autodeterminazione."
          link={{
            href: "https://bresciapride.it/comunicato.pdf",
            text: "Leggi il comunicato",
          }}
        />
        <Text
          blockClass="bg-orange text-cream col-span-5"
          text="Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita."
          link={{
            href: "https://bresciapride.it/manifesto.pdf",
            text: "Leggi il manifesto",
          }}
        />
        <ImageBlock
          src="/images/8.jpg"
          altText="Il Corteo"
        />
        <SocialsBlock />
        <Text
          blockClass="bg-dark-blue text-light-green col-span-5"
          text="Lottiamo per l'equità, l'inclusività, la sostenibilità ambientale, e la promozione e il rispetto dei diritti umani."
        />
         <ImageBlock
          src="/images/16.jpg"
          altText="Disegnando le nostre mascotte"
        />
         <ImageBlock
          src="/images/10.jpg"
          altText="Panel in un evento"
        />
        <Text
          blockClass="bg-red text-pink col-span-3"
          text="Puoi aiutarci con una donazione, anche piccola, per sostenere le nostre attività."
          link={{
            href: "https://www.paypal.com/paypalme/bresciapride",
            text: "Offrici un caffè",
          }}
        />
        <Footer />
      </motion.div>
    </div>
  );
};