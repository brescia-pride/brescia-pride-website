"use client";

import React from "react";
import {motion} from "framer-motion";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import PrideDate from "../ui/components/PrideDate";
import InfoCard from "../ui/components/InfoCard";
import DonationSection from "../ui/components/DonationSection";
import ApplicationCard from "../ui/components/ApplicationCard";
import ResourceCard from "../ui/components/ResourceCard";

export default function CorteoPage() {

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
                <PrideDate/>
                <InfoCard
                    title=""
                    backgroundColor="pink"
                    hoverColor="pink"
                    textColor="red"
                    hoverTextColor="red"
                    colSpan={2}
                >
                    <p className="text-xl font-bold">
                        Tutte le info sul corteo saranno pubblicate a breve! Tieni d&apos;occhio questa pagina
                        🫶
                    </p>
                </InfoCard>
                <DonationSection
                    title="Candidature"
                    description="Aiutaci a realizzare il Brescia Pride! Puoi partecipare in diversi modi:"
                    backgroundColor="green"
                    colSpan={4}
                    innerGridCols={1}
                >
                    <ApplicationCard
                        title="VOLONTARI3"
                        description="Vuoi partecipare come volontariə?"
                        actionText="Compila il form per candidarti!"
                        href="https://forms.gle/NT7ZvwKmc24Lv21n8"
                        emoji="🫂"
                        hoverColor="purple"
                        textColor="purple"
                        hoverTextColor="pink"
                        isExternal={true}
                        colSpan={1}
                    />
                    <ApplicationCard
                        title="Collettivi e associazioni"
                        description="Vuoi aderire a Brescia Pride come collettivo o associazione?"
                        actionText="Compila il form per aderire!"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd0ovmwseUl8aUlGKPYdkP7iHwZ0GKN7uja_mQ1yx_KD45cVw/viewform?pli=1"
                        emoji="🎉"
                        hoverColor="blue"
                        textColor="blue"
                        hoverTextColor="pink"
                        isExternal={true}
                        colSpan={1}
                    />
                </DonationSection>
                <DonationSection
                    title="Info utili"
                    description=""
                    backgroundColor="purple"
                    colSpan={2}
                    innerGridCols={1}
                >
                    <ResourceCard
                        title="Comunicato stampa"
                        description="27/06 - Brescia Pride 2025: il 6 settembre torna la manifestazione per i diritti LGBTQIA+"
                        actionText="Leggi il comunicato"
                        href="docs/comunicato-stampa-27-06.pdf"
                        hoverColor="red"
                        colSpan={1}
                    />
                </DonationSection>
                <CustomFooter/>
            </motion.div>
        </div>
    );
};