"use client";

import React from "react";
import {motion} from "framer-motion";
import Block from "../ui/components/Block";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import {Link, Button} from "react-aria-components";
import localFont from "next/font/local";
import {useRouter} from "next/navigation";
import PrideDate from "../ui/components/PrideDate";

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
                <PrideDate/>
                <Block className={`col-span-2 bg-pink`}>
                    <Button
                        className="cursor-default flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-red"
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <p className="text-xl font-bold">
                                Tutte le info sul corteo saranno pubblicate a breve! Tieni d&apos;occhio questa pagina
                                🫶
                            </p>
                        </div>
                    </Button>
                </Block>
                <Block className={`col-span-4 bg-green p-4 items-center justify-center`} id="participa">
                    <h1 className={`text-2xl md:text-4xl font-bold text-center ${myFont.className} text-pink tracking-wider`}>
                        Candidature
                    </h1>
                    <p className="text-xl font-bold mt-2 text-center">
                        Aiutaci a realizzare il Brescia Pride!
                    </p>
                    <p className="text-xl font-bold text-center">
                       Puoi partecipare in diversi modi:
                    </p>
                    <div className="grid lg:grid-cols-2 gap-4 mt-4">
                        <Block className={`lg:col-span-1 bg-pink`}>
                            <Button
                                className="cursor-pointer transition-all duration-300 hover:bg-purple flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-purple hover:text-pink"
                                onPress={() => router.push('https://forms.gle/NT7ZvwKmc24Lv21n8')}
                            >
                                <div
                                    className={`absolute top-1/2 -translate-y-1/2 -left-8 text-6xl pointer-events-none opacity-25`}
                                    aria-hidden="true">
                                    <span className="align-middle">🫂</span>
                                </div>
                                <div
                                    className={`absolute top-1/2 -translate-y-1/2 -right-8 text-6xl pointer-events-none opacity-25`}
                                    aria-hidden="true">
                                    <span className="align-middle">🫂</span>
                                </div>
                                <div className="text-center relative z-10 text-shadow-lg">
                                    <h1 className={`text-2xl leading-tight font-medium ${myFont.className}`}>
                                        VOLONTARI3
                                    </h1>
                                    <p className="text-xl font-bold mt-2">
                                        Vuoi partecipare come volontariə?
                                    </p>
                                    <p className="text-xl mt-2">
                                        Compila il form per candidarti!
                                    </p>
                                </div>
                            </Button>
                        </Block>
                        <Block className={`col-span-1 bg-pink`}>
                            <Button
                                className="cursor-pointer transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-blue hover:text-pink"
                                onPress={() => router.push('https://forms.gle/1DTLA7RiTh1of5Ap6')}
                            >
                                <div
                                    className={`absolute top-1/2 -translate-y-1/2 -left-8 text-6xl pointer-events-none opacity-25`}
                                    aria-hidden="true">
                                    <span className="align-middle">🥪</span>
                                </div>
                                <div
                                    className={`absolute top-1/2 -translate-y-1/2 -right-8 text-6xl pointer-events-none opacity-25`}
                                    aria-hidden="true">
                                    <span className="align-middle">🥪</span>
                                </div>
                                <div className="text-center relative z-10 text-shadow-lg">
                                    <h1 className={`text-2xl leading-tight font-medium ${myFont.className}`}>
                                        FOOD TRUCK
                                    </h1>
                                    <p className="text-xl font-bold mt-2">
                                        Hai un food truck o uno stand gastronomico?
                                    </p>
                                    <p className="text-xl mt-2">
                                        Compila il form per candidarti <u>entro il 19 luglio</u>!
                                    </p>
                                </div>
                            </Button>
                        </Block>
                    </div>
                </Block>
                <Block className={`col-span-2 bg-purple p-4 items-center justify-center`} id="participa">
                    <h1 className={`text-2xl md:text-4xl font-bold text-center ${myFont.className} text-pink tracking-wider`}>
                        Info utili
                    </h1>
                    <div className="grid gap-4 mt-4">
                        <Block className={`col-span-2 bg-pink`}>
                            <Button
                                className="cursor-pointer transition-all duration-300 hover:bg-red flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-red hover:text-pink"
                                onClick={() => router.push('docs/comunicato-stampa-27-06.pdf')}
                            >
                                <div className="text-center relative z-10 text-shadow-lg">
                                    <h1 className={`text-xl leading-tight font-medium ${myFont.className}`}>
                                        Comunicato stampa
                                    </h1>
                                    <p className="text-lg mt-2">
                                        <b>27/06</b> - Brescia Pride 2025: il 6 settembre torna la manifestazione per i
                                        diritti LGBTQIA+
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