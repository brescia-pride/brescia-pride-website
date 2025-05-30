"use client";

import React from "react";
import {motion} from "framer-motion";
import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";
import Text from "../ui/components/Text";
import ImageBlock from "../ui/components/ImageBlock";

export default function ResourcesPage() {
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
                <Header size={6}/>
                <Text
                    blockClass="bg-lime text-purple"
                    heading="Manifesto 2024"
                    text="Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita."
                    link={{
                        href: "/manifesto.pdf",
                        text: "Leggi il manifesto",
                    }}
                    size={3}
                />
                <Text
                    blockClass="bg-pink text-blue"
                    heading="Vademecum per l’accessibilità degli eventi e dei cortei"
                    text="Rendere un evento realmente accessibile e a misura di chiunque è un processo di ascolto e cura, necessario, comunitario e collettivo."
                    link={{
                        href: "https://1drv.ms/p/c/3154c23af9523fae/Ea4_Uvk6wlQggDFqAQAAAAABswCASnHi1Vg3TZNPRM4M5Q?e=OjEMoL",
                        text: "Leggi il vademecum",
                    }}
                    size={3}
                />
                <Text
                    blockClass="bg-lilac text-green"
                    heading="Comunicato a sostegno della comunità T* (06/07/2024)"
                    text="Alla luce dei recenti avvenimenti, ci uniamo alla voce delle associazioni LGBTQIA+ e T* che da mesi denunciano il costante e preoccupante attacco alla libertà di scelta e autodeterminazione."
                    link={{
                        href: "/comunicato.pdf",
                        text: "Leggi il comunicato",
                    }}
                    size={3}
                />
                <ImageBlock
                    src="/images/bandiera.jpg"
                    altText="Bandiera del Brescia Pride 2024"
                    showOnMobile={true}
                    colSpan="col-span-3"
                />
                <Footer/>
            </motion.div>
        </div>
    );
};