"use client";

import React from "react";
import { motion } from "framer-motion";
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
        className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-6 gap-4"
      >
        <Text
          blockClass="bg-[#d2c2df] text-[#11634d] col-span-6"
          heading="Brescia Pride"
          text="Più unite e compatte che mai, ci vogliamo far sentire, per progettare insieme una società a misura di ogni persona."
        />
        <Text
          blockClass="bg-[#523376] text-[#d4f3b8] col-span-6"
          text={<b>Ci vediamo in Piazza Vittoria il 7 settembre 2024 alle 15:00!</b>}
        />
        <Text
          blockClass="bg-[#d4f3b8] text-[#523376] col-span-2"
          text={<span><b>Vademecum Accessibilità</b></span>}
          link={{
            href: "/vademecum",
            text: "Vai al Vademecum",
          }}
        />
        <Text
          blockClass="bg-[#f9bfd2] text-[#a71729] col-span-2"
          text={<span><b>Programma</b> del corteo 2024</span>}
          link={{
            href: "/programma",
            text: "Vai al programma",
          }}
        />
        <Text
          blockClass="bg-[#2596be] text-[#5f370d] col-span-2"
          text={<span><b>Percorso</b> del corteo 2024</span>}
          link={{
            href: "https://www.google.com/maps/d/u/0/viewer?mid=1zDgkFCuTgocYO202hmJGve8kp2Jblnw&ll=45.53847900000001%2C10.218770999999997&z=16",
            text: "Vai alla mappa interattiva",
          }}
        />
        <Text
          blockClass="bg-[#a71729] text-[#f9bfd2] col-span-5"
          text="Alla luce dei recenti avvenimenti, ci uniamo alla voce delle associazioni LGBTQIA+ e T* che da mesi denunciano il costante e preoccupante attacco alla libertà di scelta e autodeterminazione."
          link={{
            href: "https://bresciapride.it/comunicato.pdf",
            text: "Leggi il comunicato",
          }}
        />
        <Text
          blockClass="bg-[#5f370d] text-[#2596be] col-span-6"
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
         <ImageBlock
          src="/images/16.jpg"
          altText="Disegnando le nostre mascotte"
        />
         <ImageBlock
          src="/images/10.jpg"
          altText="Panel in un evento"
        />
        <Text
          blockClass="bg-[#11634d] text-[#d2c2df] col-span-4"
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