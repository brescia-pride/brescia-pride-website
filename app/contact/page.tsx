"use client";

import React from "react";
import { motion } from "framer-motion";
import Block from "../ui/components/Block";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import SocialsBlock from "../ui/components/SocialsBlock";
import { Link, Button } from "react-aria-components";
import localFont from "next/font/local";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function ContactsPage() {
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
                <Header size={6} />
                <Block className={`col-span-3 bg-pink`}>
                    <Button
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
                    </Button>
                </Block>
                <SocialsBlock />
                <CustomFooter />
            </motion.div>
        </div>
    );
};