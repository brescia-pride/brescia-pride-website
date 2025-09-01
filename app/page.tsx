"use client";

import React from "react";
import {motion} from "framer-motion";
import Header from "./ui/components/Header";
import ImageBlock from "./ui/components/ImageBlock";
import CustomFooter from "./ui/components/CustomFooter";
import {Link} from "react-aria-components";
import {Button} from "react-aria-components";
import Block from "./ui/components/Block";
import {useRouter} from "next/navigation";
import localFont from "next/font/local";

const myFont = localFont({src: "./ui/fonts/ST.ttf"});

export default function Homepage() {
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
                <Link href={"/corteo"} className="col-span-3"><ImageBlock
                    src="/images/locandina.jpg"
                    altText="Locandina del Brescia Pride 2025: 6 Settembre, Esistiamo ovunque, resistiamo unitɜ. Ore 12-21 Apertura parco pride in Campo Marte; Ore 14 Inizio interventi; H 15.30 Corteo per la città"
                    showOnMobile={true}
                    linkText=""
                    link="/corteo"
                    colSpan="col-span-3"
                />
                </Link>
                <Block className={`col-span-3 bg-green`}>
                    <Button
                        className="cursor-pointer transition-all duration-300 hover:bg-pink flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-pink hover:text-green"
                        onPress={() => router.push('/corteo')}
                    >
                        <div className="text-center relative">
                            <h1 className={`text-2xl lg:text-4xl leading-tight font-medium ${myFont.className}`}>
                                6 SETTEMBRE 2025
                            </h1>
                            <h2 className={`text-xl lg:text-2xl leading-tight font-medium ${myFont.className}`}>
                                Parco Pride + Corteo
                            </h2>
                            <p className="text-xl font-bold">
                                Clicca qui per tutte le info!
                            </p>
                        </div>
                    </Button>
                </Block>
                <Block className={`col-span-2 bg-blue`}>
                    <Button
                        className="cursor-pointer transition-all duration-300 hover:bg-pink flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-pink hover:text-blue"
                        onPress={() => router.push('/accessibilita')}
                    >
                        <div className="text-center relative">
                            <h1 className={`text-2xl lg:text-4xl leading-tight font-medium ${myFont.className}`}>
                                6 SETTEMBRE 2025
                            </h1>
                            <h2 className={`text-xl lg:text-2xl leading-tight font-medium ${myFont.className}`}>
                                Accessibilità
                            </h2>
                            <p className="text-xl font-bold">
                                Clicca qui per tutte le info!
                            </p>
                        </div>
                    </Button>
                </Block>
                <Link href={"/docs/manifesto-2025.pdf"} className="col-span-2"><ImageBlock
                    src="/images/manifesto-post.png"
                    altText="Il Manifesto 2025 è uscito! Leggilo qui!"
                    showOnMobile={true}
                    linkText=""
                    link="/docs/manifesto-2025.pdf"
                    colSpan="col-span-2"
                />
                </Link>
                <Link href={"/sostienici"} className="col-span-2"><ImageBlock
                    src="/images/5x1000.jpg"
                    altText="Dona il 5x1000 a COMITATO BRESCIA PRIDE, Codice Fiscale: 98201800178"
                    showOnMobile={true}
                    colSpan="col-span-2"
                /></Link>
                <CustomFooter/>
            </motion.div>
        </div>
    );
};