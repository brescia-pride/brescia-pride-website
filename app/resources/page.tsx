"use client";

import React from "react";
import {motion} from "framer-motion";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import YearSection from "../ui/components/YearSection";
import ResourceCard from "../ui/components/ResourceCard";

export default function ResourcesPage() {

    return (
        <div className="min-h-screen px-4 py-6 text-zinc-50">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-6 gap-4"
            >
                <Header size={6}/>
                <YearSection year="2025" backgroundColor="green">
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
                        hoverColor="red"
                        colSpan={3}
                    />
                </YearSection>
                <YearSection year="2024" backgroundColor="purple">
                    <ResourceCard
                        title="Manifesto 2024"
                        description="Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita."
                        actionText="Leggi il manifesto"
                        href="docs/manifesto-2024.pdf"
                        hoverColor="red"
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
                </YearSection>
                <CustomFooter/>
            </motion.div>
        </div>
    );
};