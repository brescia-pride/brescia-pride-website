"use client";

import React from "react";
import {motion} from "framer-motion";
import Block from "../ui/components/Block";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import {Link, Button} from "react-aria-components";
import ImageBlock from "../ui/components/ImageBlock";
import localFont from "next/font/local";
import {useRouter} from "next/navigation";

const myFont = localFont({src: "../ui/fonts/ST.ttf"});

export default function ContactsPage() {
    const router = useRouter();
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
                <Block className={`col-span-6 bg-blue p-4 items-center justify-center`}>
                    <h1 className={`text-2xl md:text-4xl lg:col-span-4 font-bold text-center ${myFont.className} text-pink tracking-wider leading-tight`}>
                        Sostienici
                    </h1>
                    <p className="lg:col-span-4 text-xl font-bold mt-2 text-center text-pink">
                        Aiutaci a restare un pride autofinanziato e indipendente con una donazione.
                    </p>
                    <div className="grid lg:grid-cols-4 gap-4 mt-4">
                        <Block className={`col-span-2 bg-lilac`}>
                            <Button
                                className="cursor-default transition-all duration-300 hover:bg-purple flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-purple hover:text-lilac"
                            >
                                <div className="text-center relative z-10 text-shadow-lg select-text">
                                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                                        5x1000
                                    </h1>
                                    <p className="text-xl font-bold">
                                        Codice Fiscale 98201800178
                                    </p>
                                    <p className="text-xl">
                                        Compila la sezione a &quot;Sostegno degli enti del terzo settore iscritti nel
                                        RUNTS...&quot; come
                                        nell&apos;immagine.
                                    </p>
                                </div>
                            </Button>
                        </Block>
                        <ImageBlock
                            src="/images/5-1000.png"
                            altText="Esempio compilazione del 5x1000 per COMITATO BRESCIA PRIDE, Codice Fiscale: 98201800178. La sezione a sostegno degli enti del terzo settore iscritti nel RUNTS è compilata con il codice fiscale."
                            showOnMobile={true}
                            colSpan="col-span-2"
                        />
                        <Block className={`bg-pink col-span-2`}>
                            <Button
                                className="cursor-default transition-all duration-300 hover:bg-red flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-red hover:text-pink"
                            >
                                <div className="text-center relative z-10 text-shadow-lg select-text">
                                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                                        PayPal
                                    </h1>
                                    <p className="text-xl font-bold">
                                        <Link className={`col-span-3 underline`}
                                              href="https://www.paypal.com/paypalme/bresciapride">Clicca qui</Link> o
                                        cerca &quot;info@bresciapride.it&quot; direttamente da PayPal
                                    </p>
                                    <p className="text-xl">
                                        Scegli l&apos;opzione &quot;famigliari e amici&quot;.
                                    </p>
                                </div>
                            </Button>
                        </Block>
                        <Block className={`col-span-2 bg-green`}>
                            <Button
                                className="cursor-default transition-all duration-300 hover:bg-pink flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-pink hover:text-green"
                            >
                                <div className="text-center relative z-10 text-shadow-lg select-text">
                                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                                        Bonifico
                                    </h1>
                                    <p className="text-xl font-bold">
                                        Destinatario: Comitato Brescia Pride ETS
                                    </p>
                                    <p className="text-xl font-bold text-wrap">
                                        IBAN: IT4910501811200000016783060
                                    </p>
                                    <p className="text-xl font-bold">
                                        Causale: Libera donazione
                                    </p>
                                </div>
                            </Button>
                        </Block>
                    </div>
                </Block>
                <CustomFooter/>
            </motion.div>
        </div>
    );
};