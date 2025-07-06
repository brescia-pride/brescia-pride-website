"use client";

import React from "react";
import {motion} from "framer-motion";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import ImageBlock from "../ui/components/ImageBlock";
import Block from "../ui/components/Block";
import {Button} from "react-aria-components";
import localFont from "next/font/local";
import {useRouter} from "next/navigation";
import {FiArrowRight} from "react-icons/fi";

const myFont = localFont({src: "../ui/fonts/ST.ttf"});

export default function ResourcesPage() {
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
                <Block className={`col-span-6 bg-green p-4 items-center justify-center`}>
                    <h1 className={`text-2xl md:text-4xl lg:col-span-4 font-bold text-center ${myFont.className} text-pink tracking-wider leading-tight`}>
                        2025
                    </h1>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <Block className={`col-span-3 bg-pink`}>
                            <Button
                                className="cursor-pointer transition-all duration-300 hover:bg-red flex h-full w-full p-6 rounded-lg relative overflow-hidden text-red hover:text-pink"
                                onPress={() => router.push('/comunicato-stampa-27-06.pdf')}
                            >
                                <div className="text-left relative z-10 text-shadow-lg select-text">
                                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                                        Comunicato Stampa 27/06/2025
                                    </h1>
                                    <p className="text-xl font-bold mt-2">
                                        Brescia Pride 2025: il 6 settembre torna la manifestazione per i diritti
                                        LGBTQIA+
                                    </p>
                                    <p className="text-lg font-bold underline mt-2 flex items-center">
                                        Leggi il comunicato <FiArrowRight/>
                                    </p>
                                </div>
                            </Button>
                        </Block>
                    </div>
                </Block>
                <Block className={`col-span-6 bg-purple p-4 items-center justify-center`}>
                    <h1 className={`text-2xl md:text-4xl lg:col-span-4 font-bold text-center ${myFont.className} text-pink tracking-wider leading-tight`}>
                        2024
                    </h1>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <Block className={`col-span-3 bg-pink`}>
                            <Button
                                className="cursor-pointer transition-all duration-300 hover:bg-red flex h-full w-full p-6 rounded-lg relative overflow-hidden text-red hover:text-pink"
                                onPress={() => router.push('/manifesto.pdf')}
                            >
                                <div className="text-left relative z-10 text-shadow-lg select-text">
                                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                                        Manifesto 2024
                                    </h1>
                                    <p className="text-xl font-bold mt-2">
                                        Siamo una realtà intersezionale, transfemminista, antifascista, gentile e
                                        autogestita.
                                    </p>
                                    <p className="text-lg font-bold underline mt-2 flex items-center">
                                        Leggi il manifesto <FiArrowRight/>
                                    </p>
                                </div>
                            </Button>
                        </Block>
                        <Block className={`col-span-3 bg-pink`}>
                            <Button
                                className="cursor-pointer transition-all duration-300 hover:bg-blue flex h-full w-full p-6 rounded-lg relative overflow-hidden text-blue hover:text-pink"
                                onPress={() => router.push('https://1drv.ms/p/c/3154c23af9523fae/Ea4_Uvk6wlQggDFqAQAAAAABswCASnHi1Vg3TZNPRM4M5Q?e=OjEMoL')}
                            >
                                <div className="text-left relative z-10 text-shadow-lg select-text">
                                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                                        Vademecum per l&apos;accessibilità degli eventi e dei cortei
                                    </h1>
                                    <p className="text-xl font-bold mt-2">
                                        Rendere un evento realmente accessibile e a misura di chiunque è un processo di
                                        ascolto e cura, necessario, comunitario e collettivo.
                                    </p>
                                    <p className="text-lg font-bold underline mt-2 flex items-center">
                                        Consulta il Vademecum <FiArrowRight/>
                                    </p>
                                </div>
                            </Button>
                        </Block>
                        <Block className={`col-span-3 bg-pink`}>
                            <Button
                                className="cursor-pointer transition-all duration-300 hover:bg-green flex h-full w-full p-6 rounded-lg relative overflow-hidden text-green hover:text-pink"
                                onPress={() => router.push('/comunicato.pdf')}
                            >
                                <div className="text-left relative z-10 text-shadow-lg select-text">
                                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                                        Comunicato a sostegno della comunità T* (06/07/2024)
                                    </h1>
                                    <p className="text-xl font-bold mt-2">
                                        Alla luce dei recenti avvenimenti, ci uniamo alla voce delle associazioni
                                        LGBTQIA+ e T* che da mesi denunciano il costante e preoccupante attacco alla
                                        libertà di scelta e autodeterminazione.
                                    </p>
                                    <p className="text-lg font-bold underline mt-2 flex items-center">
                                        Leggi il comunicato <FiArrowRight/>
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