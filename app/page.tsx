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
          size={6}
          blockClass="bg-green text-pink"
          heading="Brescia Pride"
          text="Più unite e compatte che mai, ci vogliamo far sentire, per progettare insieme una società a misura di ogni persona."
        />
        <Text
          size={6}
          blockClass="bg-pink text-green"
          text="Ci vediamo in Piazza Vittoria il 7 settembre 2024 alle 15:00!"
          link={{
            href: "https://www.instagram.com/p/C-YFBBoNfoQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            text: "Leggi il programma completo"
          }}
        />
        <Text
          size={5}
          blockClass="bg-dark-blue text-light-green"
          text="Vademecum Accessibilità Corteo Brescia Pride 2024"
          link={{
            href: "https://docs.google.com/document/d/1SkDCVYLZMCDMn6iEdkS6qZnDS-TDDAMhW_sISIoLxSQ/edit#heading=h.ivu3u5ulwcqw",
            text: "Consulta il vademecum",
          }}
        />
        <Text
          size={5}
          blockClass="bg-light-green text-dark-blue"
          text="Percorso Corteo Brescia Pride 2024"
          link={{
            href: "https://www.google.com/maps/d/u/0/viewer?mid=1zDgkFCuTgocYO202hmJGve8kp2Jblnw&ll=45.53847900000001%2C10.218770999999997&z=16",
            text: "Vai alla mappa interattiva del corteo 2024",
          }}
        />
        <Text
          size={6}
          blockClass="bg-[#f9c224] text-[#033150]"
          text="Alla luce dei recenti avvenimenti, ci uniamo alla voce delle associazioni LGBTQIA+ e T* che da mesi denunciano il costante e preoccupante attacco alla libertà di scelta e autodeterminazione."
          link={{
            href: "https://bresciapride.it/comunicato.pdf",
            text: "Leggi il comunicato",
          }}
        />
        <Text
          size={2}
          blockClass="bg-orange text-cream col-span-2"
          text="Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita."
          link={{
            href: "https://bresciapride.it/manifesto.pdf",
            text: "Leggi il manifesto",
          }}
        />
        <ImageBlock
          src="/images/prom.jpg"
          altText="THE QUEER PROM - BALLO DI FINE ESTATE"
          link={{
            href: "https://www.eventbrite.com/e/biglietti-the-queer-prom-ballo-di-fine-estate-964871926907?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
            text: "THE QUEER PROM - BALLO DI FINE ESTATE",
          }}
          hideOnMobile={false}
          size={2}
        />
        <ImageBlock
          src="/images/donazioni.jpg"
          altText="Mappa del corteo 2024"
          link={{
            href: "https://www.instagram.com/p/C94xQZyN_Bo/?utm_source=ig_web_copy_link",
            text: "Sostienici con una donazione",
          }}
          hideOnMobile={false}
          size={2}
        />
        <SocialsBlock />
        <Footer />
      </motion.div>
    </div>
  );
};