"use client";

import React from "react";
import {motion} from "framer-motion";
import Block from "../ui/components/Block";
import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";
import SocialsBlock from "../ui/components/SocialsBlock";
import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({src: "../ui/fonts/ST.ttf"});

export default function ContactsPage() {
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
                <Block className={`col-span-6 bg-yellow`}>
                    <div
                        className="cursor-pointer transition-all duration-300 hover:bg-brown flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-brown hover:text-yellow"
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <h1 className={`text-3xl font-medium leading-tight font-bold ${myFont.className}`}>
                                T* porto a votare - Referendum 8-9 giugno
                            </h1>
                            <p className="text-xl font-bold">
                                Sei una persona T* o non binaria e la divisione binaria dei seggi o la paura di
                                microaggressioni e discriminazioni ti rende votare inaccessibile o non sicuro? Andiamo
                                insieme! Scrivici in DM o via mail la tua zona di voto e ci concorderemo con
                                l&apos;orario.
                            </p>
                        </div>
                    </div>
                </Block>
                <Block className={`col-span-3 bg-pink`}>
                    <div
                        className="cursor-pointer transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-blue hover:text-pink"
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <h1 className={`text-3xl font-medium leading-tight font-bold ${myFont.className}`}>
                                Scrivici!
                            </h1>
                            <p className="text-xl font-bold">
                                Per qualsiasi informazione, domanda o richiesta di collaborazione, puoi contattarci via
                                mail a <Link className={`underline`}
                                             href="mailto:info@bresciapride.it">info@bresciapride.it</Link> o tramite i
                                nostri canali social!
                            </p>
                        </div>
                    </div>
                </Block>
                <SocialsBlock/>
                <Footer/>
            </motion.div>
        </div>
    );
};