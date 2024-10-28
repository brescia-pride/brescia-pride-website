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
        <ImageBlock
          src="/images/bandiera.jpg"
          altText="Bandiera del comitato Brescia Pride 2024."
          link="https://drive.google.com/drive/folders/15cSWar644NARwmVX-GOSGIXCvtRCNsTl?usp=sharing"
          linkText="Foto del corteo (07/09/2024)"
          showOnMobile={true}
          colSpan="col-span-2"
        />
        <Text
          blockClass="bg-[#523376] text-[#d4f3b8] col-span-4"
          heading="Manifesto"
          text="Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita."
          link={{
            href: "/manifesto.pdf",
            text: "Leggi il manifesto",
          }}
        />
        <Text
          blockClass="bg-[#ffc2d2] text-[#0e5bc0] col-span-6"
          heading="Vademecum per l’accessibilità degli eventi e dei cortei"
          text="Rendere un evento realmente accessibile e a misura di chiunque è un processo di ascolto e cura, necessario, comunitario e collettivo."
          link={{
            href: "https://1drv.ms/p/c/3154c23af9523fae/Ea4_Uvk6wlQggDFqAQAAAAABswCASnHi1Vg3TZNPRM4M5Q?e=OjEMoL",
            text: "Leggi il vademecum",
          }}
        />
        <Text
          blockClass="bg-[#a71729] text-[#f9bfd2] col-span-4"
          heading="Comunicato"
          text="Alla luce dei recenti avvenimenti, ci uniamo alla voce delle associazioni LGBTQIA+ e T* che da mesi denunciano il costante e preoccupante attacco alla libertà di scelta e autodeterminazione."
          link={{
            href: "/comunicato.pdf",
            text: "Leggi il comunicato",
          }}
        />
        <ImageBlock
          src="/images/riv-t.jpg"
          altText="Cartello con scritto 'La rabbia di Cloe brucia ancora, rivoluzione trans in ogni scuola'."
          colSpan="col-span-2"
          showOnMobile={true}
        />
        <SocialsBlock />
        <Text
          blockClass="bg-[#11634d] text-[#d2c2df] col-span-6"
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