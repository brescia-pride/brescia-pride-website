"use client";

import React from "react";
import { motion } from "framer-motion";
import Block from "../ui/components/Block";
import BackHome from "../ui/components/BackHome";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { SiGoogledocs } from "react-icons/si";
import { SiAdobeacrobatreader } from "react-icons/si";

export default function Page() {
    return (
        <div className="min-h-screen px-4 py-12 text-zinc-50">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-4 gap-4"
            >
                <BackHome size={4} />
                <Block className="bg-[#f9c437] text-[#5f370d] p-6 col-span-4">
                    <h1 className={"text-2xl md:text-4xl font-medium leading-tight"}><b>Nel Vademecum troverai tutte le informazioni utili sulla giornata del 7 settembre!</b></h1>
                </Block>
                <Block className="text-[#5f370d] p-6 col-span-4">
                    <div>
                        <a
                            href="https://docs.google.com/document/d/1-zBvZirNLXp5Hry1GIhE3EfW2d7OrPscyskrXpCIdto/edit?usp=sharing"
                            target="_blank"
                            className="text-xl flex items-center hover:underline"
                        >
                            <SiGoogledocs /><span className="ml-2 mr-1"><b>Leggi il Vademecum su Google Docs</b></span> <FiArrowRight />
                        </a>
                    </div>
                </Block>
                <Block className="text-[#5f370d] p-6 col-span-4">
                    <div>
                        <a
                            href="./vademecum.pdf"
                            target="_blank"
                            className="text-xl flex items-center hover:underline"
                        >
                            <SiAdobeacrobatreader /><span className="ml-2 mr-1"><b>Scarica il Vademecum in PDF</b></span> <FiArrowRight />
                        </a>
                    </div>
                </Block>
                <Block className="bg-[#5f370d] text-[#f9c437] p-6 col-span-4">
                    <h1 className={"text-4xl md:text-4xl font-medium leading-tight mb-4"}>📌 Come arrivare</h1>
                    <div><ul className="space-y-1">
                        <li>🏃‍♀️ <b>A piedi dalla stazione</b>: 1 km per 15 minuti di percorrenza</li>
                        <li>🚇 <b>In metro</b>: scendere alla fermata “Vittoria”.  Su ogni metro ci sono due posti per chi usa la sedia a ruote. La metro ha ascensori e percorsi per persone non vedenti. </li>
                        <li>🚌 <b>In bus</b>: fermano in piazza gli autobus 15 e 9 </li>
                        <li>🚗 <b>In auto</b>: puoi parcheggiare in Parcheggio Vittoria / Parcheggio S. Domenico / Parcheggio Benedetto Croce</li>
                    </ul>
                        <div className="mt-5">♿ Per le persone con disabilità che espongono l’apposito contrassegno il parcheggio è gratuito ed è possibile accedere in zona a traffico limitato.</div>
                        <div className="mt-5">Per info aggiornate su parcheggi e mezzi pubblici visita il sito di <Link href="https://www.bresciamobilita.it/"><b>Brescia Mobilità</b></Link></div>
                    </div>
                </Block>
                <Block className="bg-[#f9c437] text-[#5f370d] p-6 col-span-4">
                    <h1 className={"text-4xl md:text-4xl font-medium leading-tight mb-4"}>📌 Come riconoscerci</h1>
                    <div><ul className="space-y-1">
                        <li><b>Sicurezza & Corteo</b>: maglietta azzurra logata + badge</li>
                        <li><b>Volontary & Cura</b>: maglietta fucsia logata</li>
                        <li><b>Comitato (Staff)</b>: badge identificativo</li>
                        <li><b>Foto</b>: badge identificativo</li>
                        <li><b>Ospiti & Presentator3</b>: badge identificativo</li>
                    </ul>
                    </div>
                </Block>
                <Block className="text-[#5f370d] p-6 col-span-4">
                    <span>Seguiteci sul nostro profilo Instagram <b><a href="https://www.instagram.com/bresciapride/" className="hover:underline">@bresciapride</a></b> o sulla nostra pagina <b><a href="https://www.facebook.com/BresciaPride">Facebook</a></b> per tutti i dettagli!
                    </span>
                </Block>
            </motion.div>
        </div>
    );
}

