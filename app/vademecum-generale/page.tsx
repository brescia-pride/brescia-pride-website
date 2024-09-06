"use client";

import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Block from "../ui/components/Block";
import InstagramPost from "../ui/components/InstagramPost";
import Link from "next/link";
import Text from "../ui/components/Text";
import localFont from "next/font/local";
import { FiArrowRight } from "react-icons/fi";
const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function Page() {
    return (
        <div className="min-h-screen px-4 py-12 text-zinc-50">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-3 gap-4"
            >
                <Block className="bg-[#f9c437] text-[#5f370d] p-6 col-span-3">
                    <h1 className={"text-4xl md:text-4xl font-medium leading-tight mb-4"}><b>Tutte le informazioni utili sulla giornata del 7 settembre</b></h1>
                    <div>
                        <a
                            href="https://docs.google.com/document/d/1-zBvZirNLXp5Hry1GIhE3EfW2d7OrPscyskrXpCIdto/edit?usp=sharing"
                            target="_blank"
                            className="mb-2 text-xl flex items-center hover:underline"
                        >
                            Leggi il Vademecum su Google Docs<FiArrowRight />
                        </a>
                        <a
                            href="https://docs.google.com/document/d/1-zBvZirNLXp5Hry1GIhE3EfW2d7OrPscyskrXpCIdto/export?format=pdf"
                            target="_blank"
                            className="mb-2 text-xl flex items-center hover:underline"
                        >
                            Scarica il Vademecum in PDF<FiArrowRight />
                        </a>

                    </div>
                </Block>
                <Block className="bg-[#5f370d] text-[#f9c437] p-6 col-span-3">
                    <h1 className={"text-4xl md:text-4xl font-medium leading-tight mb-4"}><b>📌Come arrivare</b></h1>
                    <div><ul>
                        <li>🏃‍♀️ <b>A piedi dalla stazione</b>: 1 km per 15 minuti di percorrenza</li>
                        <li>🚇 <b>In metro</b>: scendere alla fermata “Vittoria”.  Su ogni metro ci sono due posti per chi usa la sedia a ruote. La metro ha ascensori e percorsi per persone non vedenti. </li>
                        <li>🚌 <b>In bus</b>: fermano in piazza gli autobus 15 e 9 </li>
                        <li>🚗 <b>In auto</b>: puoi parcheggiare in Parcheggio Vittoria / Parcheggio S. Domenico / Parcheggio Benedetto Croce</li>
                    </ul>
                    <div className="mt-5">♿ Per le persone con disabilità che espongono l’apposito contrassegno il parcheggio è gratuito ed è possibile accedere in zona a traffico limitato.</div>
                    <div>Per info aggiornate su parcheggi e mezzi pubblici visita il sito di Brescia Mobilità</div>
                    </div>
                </Block>
                <Block className="bg-[#f9c437] text-[#5f370d] p-6 col-span-3">
                    <h1 className={"text-4xl md:text-4xl font-medium leading-tight mb-4"}><b>📌Come riconoscerci</b></h1>
                    <div><ul>
                        <li><b>Sicurezza & Corteo</b>: maglietta azzurra logata + badge</li>
                        <li><b>Volontary & Cura</b>: maglietta fucsia logata</li>
                        <li><b>Comitato (Staff)</b>: badge identificativo</li>
                        <li><b>Foto</b>: badge identificativo</li>
                        <li><b>Ospiti & Presentator3</b>: badge identificativo</li>
                    </ul>
                    </div>
                </Block>
                <Block className="text-[#5f370d] p-6 col-span-3">
                    <span>Seguiteci sul nostro profilo Instagram <b><a href="https://www.instagram.com/bresciapride/" className="hover:underline">@bresciapride</a></b> o sulla nostra pagina <b><a href="https://www.facebook.com/BresciaPride">Facebook</a></b> per tutti i dettagli!
                    </span>
                </Block>
            </motion.div>
        </div>
    );
}

