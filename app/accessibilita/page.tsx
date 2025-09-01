"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import ImageBlock from "../ui/components/ImageBlock";
import InfoCard from "../ui/components/InfoCard";
import DonationSection from "../ui/components/DonationSection";
import ApplicationCard from "../ui/components/ApplicationCard";
import ResourceCard from "../ui/components/ResourceCard";
import { Button } from "react-aria-components";
import Link from "next/link";
import localFont from "next/font/local";
import Block from "../ui/components/Block";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function AccessibilitaPage() {

    return (
        <div className="min-h-screen px-4 py-6 text-zinc-50">
            {/* Skip Link for keyboard navigation */}
            <a 
                href="#indice" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue text-pink px-4 py-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
            >
                Salta al contenuto principale
            </a>
            
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-6 gap-4"
            >
                <Header size={6} />
                    <InfoCard
                        title="Accessibilità"
                        backgroundColor="pink"
                        hoverColor="pink"
                        textColor="blue"
                        hoverTextColor="blue"
                        colSpan={2}
                    >

                        {/* Indice accessibile */}
                        <nav 
                            id="indice"
                            role="navigation" 
                            aria-labelledby="toc-heading"
                            className="sm:p-6 rounded-lg"
                        >
                            <div className="text-base text-lg font-bold sm:text-xl text-blue mt-2">
                                <ul role="list">
                                    <li>
                                        <a 
                                            href="#vademecum" 
                                            className="text-blue hover:text-blue underline focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-transparent rounded px-1 py-1 block hover:bg-blue/10 transition-colors"
                                            aria-describedby="vademecum-desc"
                                        >
                                            Vademecum accessibilità
                                        </a>
                                        <span id="vademecum-desc" className="sr-only">
                                            Guida completa all&apos;accessibilità dell&apos;evento con informazioni su Campo Marte, zone speciali e servizi
                                        </span>
                                    </li>
                                    <li>
                                        <a 
                                            href="#mappa" 
                                            className="text-blue hover:text-blue underline focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-transparent rounded px-1 py-1 block hover:bg-blue/10 transition-colors"
                                            aria-describedby="mappa-desc"
                                        >
                                            Mappa interattiva
                                        </a>
                                        <span id="mappa-desc" className="sr-only">
                                            Mappa di Google con informazioni sui percorsi e servizi accessibili
                                        </span>
                                    </li>
                                    <li>
                                        <a 
                                            href="#telegram" 
                                            className="text-blue hover:text-blue underline focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-transparent rounded px-1 py-1 block hover:bg-blue/10 transition-colors"
                                            aria-describedby="telegram-desc"
                                        >
                                            Canale Telegram
                                        </a>
                                        <span id="telegram-desc" className="sr-only">
                                            Accesso al canale Telegram per ricevere aggiornamenti e informazioni
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </InfoCard>
                    <InfoCard
                        title="Vademecum accessibilità"
                        backgroundColor="blue"
                        hoverColor="blue"
                        textColor="pink"
                        hoverTextColor="pink"
                        colSpan={4}
                        id="vademecum"
                    >
                        {/* Vademecum */}
                        <section className="mt-4 scroll-mt-8" aria-labelledby="vademecum-title">
                            <h3 className="text-lg sm:text-xl font-bold text-center">Nel vademecum troverete informazioni su:</h3>
                                <ul className="text-base sm:text-lg md:text-xl mt-2 leading-relaxed max-w-4xl mx-auto list-disc list-inside space-y-1" role="list">
                                    <li>Accessibilità e cura nel Parco Pride e durante il corteo</li>
                                    <li>Percorso, locali e servizi accessibili</li>
                                    <li>Zona bianca, zona di decompressione e zona ad alta visibilità</li>
                                    <li>Stim toys, tappi e badge</li>
                                    <li>Come prepararsi, come arrivare e cosa fare in caso di bisogno</li>
                                </ul>
                            <div className="mt-4 text-center grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                                <Button
                                    onPress={() => {
                                        const link = document.createElement('a');
                                        link.href = 'https://docs.google.com/document/d/1E3ca0TeJyxbq1PNPytZIA5U-RnvwsFPk/edit?usp=sharing&ouid=105357298467072128512&rtpof=true&sd=true';
                                        link.target = '_blank';
                                        link.rel = 'noopener noreferrer';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="flex items-center justify-center w-full px-4 py-3 bg-pink text-blue hover:bg-blue hover:text-pink text-base sm:text-lg font-bold rounded-lg transition-colors duration-200 border-2 border-pink focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-transparent"
                                    aria-label="Consulta il vademecum accessibilità su Google Docs - si apre in una nuova finestra"
                                >
                                    🌐 Consulta su Google Docs
                                </Button>
                            </div>
                        </section>
                    </InfoCard>
                    <InfoCard
                        title="Mappa interattiva"
                        backgroundColor="green"
                        hoverColor="green"
                        textColor="pink"
                        hoverTextColor="pink"
                        colSpan={4}
                        id="mappa"
                    >
                        {/* Mappa */}
                        <section id="mappa" className="mt-4 scroll-mt-8" aria-labelledby="mappa-title">
                            <p className="text-center text-base sm:text-lg md:text-xl font-bold leading-relaxed max-w-4xl mx-auto">
                                La mappa contiene informazioni su Campo Marte, il percorso del corteo e i servizi accessibili.
                            </p>
                            <div className="mt-4 text-center w-full max-w-5xl mx-auto">
                                <iframe 
                                    src="https://www.google.com/maps/d/u/0/embed?mid=1TlU5uyFT7IKSayHC6hfm80i8dWsF1sc&ehbc=2E312F" 
                                    className="rounded-lg w-full h-[400px] sm:h-[500px] border-2 border-blue/30"
                                    title="Mappa accessibilità Brescia Pride con informazioni su Campo Marte, percorso corteo e servizi accessibili"
                                    aria-label="Mappa interattiva di Google che mostra i percorsi accessibili e i servizi disponibili durante il Brescia Pride"
                                    tabIndex={0}
                                ></iframe>
                            </div>
                        </section>
                    </InfoCard>
                    <InfoCard
                        title="Canale Telegram"
                        backgroundColor="purple"
                        hoverColor="purple"
                        textColor="pink"
                        hoverTextColor="pink"
                        colSpan={2}
                        id="telegram"
                    >
                        {/* Telegram */}
                        <section className="mt-4 scroll-mt-8" aria-labelledby="telegram-title">
                            <p className="text-center text-base sm:text-lg md:text-xl font-bold leading-relaxed max-w-4xl mx-auto">
                                Il canale Telegram dedicato all&apos;accessibilità sarà attivo dal 1 settembre.
                            </p>
                            <div className="mt-4 text-center grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                                <Button
                                    onPress={() => {
                                        const link = document.createElement('a');
                                        link.href = 'https://telegram.org/';
                                        link.target = '_blank';
                                        link.rel = 'noopener noreferrer';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="flex items-center justify-center w-full px-4 py-3 bg-pink text-purple hover:bg-purple hover:text-pink text-base sm:text-lg font-bold rounded-lg transition-colors duration-200 border-2 border-pink focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-transparent"
                                    aria-label="Entra nel canale Telegram di Brescia Pride - si apre in una nuova finestra"
                                >
                                    ⬇️ Scarica l&apos;app
                                </Button>
                                <Button
                                    onPress={() => {
                                        const link = document.createElement('a');
                                        link.href = 'https://t.me/+ZohuOkSfvJo0Zjg0';
                                        link.target = '_blank';
                                        link.rel = 'noopener noreferrer';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}                                    className="flex items-center justify-center w-full px-4 py-3 bg-pink text-purple hover:bg-purple hover:text-pink text-base sm:text-lg font-bold rounded-lg transition-colors duration-200 border-2 border-pink focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-transparent"
                                    aria-label="Entra nel canale Telegram di Brescia Pride - si apre in una nuova finestra"
                                >
                                    📱 Entra nel canale
                                </Button>
                            </div>
                        </section>
                    </InfoCard>
                <CustomFooter />
            </motion.div>
        </div>
    );
};