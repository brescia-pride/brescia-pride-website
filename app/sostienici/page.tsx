"use client";

import React from "react";
import {motion} from "framer-motion";
import Block from "../ui/components/Block";
import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";
import Link from "next/link";
import ImageBlock from "../ui/components/ImageBlock";
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
                <Block className={`col-span-6 bg-blue`}>
                    <div
                        className="cursor-pointer transition-all duration-300 hover:bg-lime flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-lime hover:text-blue"
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <h1 className={`text-3xl font-medium leading-tight font-bold ${myFont.className}`}>
                                Sostienici!
                            </h1>
                            <p className="text-xl font-bold">
                                Aiutaci a restare un pride autofinanziato e indipendente con una donazione.
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
                                5x1000
                            </h1>
                            <p className="text-xl font-bold">
                                Codice Fiscale 98201800178
                            </p>
                            <p className="text-xl">
                                Compila la sezione a &quot;Sostegno degli enti del terzo settore iscritti nel RUNTS...&quot; come
                                nell&apos;immagine.
                            </p>
                        </div>
                    </div>
                </Block>
                <ImageBlock
                    src="/images/5-1000.png"
                    altText="Esempio compilazione del 5x1000 per COMITATO BRESCIA PRIDE, Codice Fiscale: 98201800178. La sezione a sostegno degli enti del terzo settore iscritti nel RUNTS è compilata con il codice fiscale."
                    showOnMobile={true}
                    colSpan="col-span-3"
                />
                <Link className={`col-span-3`} href="https://www.paypal.com/paypalme/bresciapride">
                    <Block className={`bg-lime`}>
                        <div
                            className="cursor-pointer transition-all duration-300 hover:bg-purple flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-purple hover:text-lime"
                        >
                            <div className="text-center relative z-10 text-shadow-lg">
                                <h1 className={`text-3xl font-medium leading-tight font-bold ${myFont.className}`}>
                                    PayPal
                                </h1>
                                <p className="text-xl font-bold">
                                    Clicca qui o cerca &quot;info@bresciapride.it&quot; direttamente da PayPal
                                </p>
                                <p className="text-xl">
                                    Scegli l&apos;opzione &quot;famigliari e amici&quot;.
                                </p>
                            </div>
                        </div>
                    </Block>
                </Link>
                <Block className={`col-span-3 bg-yellow`}>
                    <div
                        className="cursor-pointer transition-all duration-300 hover:bg-brown flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-brown hover:text-yellow"
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <h1 className={`text-3xl font-medium leading-tight font-bold ${myFont.className}`}>
                                Bonifico
                            </h1>
                            <p className="text-xl font-bold">
                                Destinatario: Comitato Brescia Pride ETS
                            </p>
                            <p className="text-xl font-bold">
                                IBAN: IT4910501811200000016783060
                            </p>
                            <p className="text-xl font-bold">
                                Causale: Libera donazione
                            </p>
                        </div>
                    </div>
                </Block>
                <Footer/>
            </motion.div>
        </div>
    );
};