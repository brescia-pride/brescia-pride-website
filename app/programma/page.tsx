"use client";

import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Block from "../ui/components/Block";
import InstagramPost from "../ui/components/InstagramPost";

import Text from "../ui/components/Text";
import localFont from "next/font/local";

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
                <Block className="bg-[#a71729] text-[#f9bfd2] p-6 col-span-3">
                <h1 className={"text-4xl md:text-4xl font-medium leading-tight mb-4"}><b>Programma del corteo 2024</b></h1>
                    <div className="text-2xl"><ul>
                        <li><b>15:00</b> - Concentramento in Piazza Vittoria</li>
                        <li><b>16:00</b> - Si parte!</li>
                        <li><b>18:00</b> - Arrivo in Piazza Vittoria e interventi dal palco</li>
                        <li><b>19:30</b> - Concerto Appel</li>
                        <li><b>20:30</b> - Festa Pride in Carmine</li>
                    </ul>
                    </div>
                </Block>
                <Block className="bg-[#2596be] text-[#5f370d] p-6 col-span-3">
                <h1 className={"text-4xl md:text-4xl font-medium leading-tight mb-4"}><b>Ospiti Post Corteo (18:00)</b></h1>
                    <div className="text-2xl"><ul>
                        <li>- Flash Mob di Circle Singing</li>
                        <li>- Comitato Brescia Pride</li>
                        <li>- Roberta Partigiani</li>
                        <li>- DiPazza (Riccardo+Luca)</li>
                        <li>- Francesca laz3cca</li>
                        <li>- Sindaca del Comune di Brescia</li>
                        <li>- Flash Mob T*</li>
                        <li>- Concerto di strada Appel</li>
                    </ul>
                    </div>
                </Block>
                <Block className="bg-[#f9bfd2] text-[#a71729] p-6 col-span-3">
                <h1 className={"text-4xl md:text-4xl font-medium leading-tight mb-4"}><b>Carri</b></h1>
                    <div className="text-2xl"><ul>
                    <li><b>🌈</b> Comitato Brescia Pride</li>
                    <li><b>🛻</b> Figli delle Stelle + Opificio Clandestino + Industrial Barbershop</li>
                    <li><b>🛻</b> ÈliveBrescia TV + Famiglie Arcobaleno</li>
                    <li><b>🎈</b> zona bianca + zona dedicata alle famiglie</li>
                    <li><b>🛻</b> Sonida</li>
                    <li><b>🛻</b> Diluvio + Granita</li>
                    <li><b>🍉</b> spazio dedicato alla Palestina</li>
                    <li><b>🛻</b> RedMoon + Illogic Radio + Ass. Spazio Zero + Cave Sound System</li>
                    <li><b>🛻</b> LoveIsLove by AntoBed + Dj Simo&Mary</li>
                    </ul>
                    </div>
                </Block>
                <Block className="text-[#a71729] p-6 col-span-3">
                    <span>Seguiteci sul nostro profilo Instagram <b><a href="https://www.instagram.com/bresciapride/" className="hover:underline">@bresciapride</a></b> per tutti i dettagli!
                    </span>
                </Block>
            </motion.div>
        </div>
    );
}