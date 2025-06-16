"use client";

import React from "react";
import { motion } from "framer-motion";
import Block from "../ui/components/Block";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import { Link, Button } from "react-aria-components";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import PrideDate from "../ui/components/PrideDate";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

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
                <Header size={6} />
                <PrideDate />
                <Block className={`col-span-2 bg-pink`}>
                    <Button
                        className="cursor-pointer transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-blue hover:text-pink"
                        onPress={() => router.push('https://forms.gle/n6kHL3WCj8C59qC18')}
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                                CARRI 🛻🚚
                            </h1>
                            <p className="text-xl font-bold">
                                Vuoi partecipare con un carro? Compila il form <u>entro il 16 luglio</u>!
                            </p>
                        </div>
                    </Button>
                </Block>
                <Block className={`col-span-2 bg-pink`}>
                    <Button
                        className="cursor-default transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-blue hover:text-pink"
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <p className="text-xl font-bold">
                                Tutte le info sul corteo saranno pubblicate a breve! Tieni d'occhio questa pagina 🫶
                            </p>
                        </div>
                    </Button>
                </Block>
                <CustomFooter />
            </motion.div>
        </div>
    );
};