"use client";

import React from "react";
import {motion} from "framer-motion";
import Header from "./ui/components/Header";
import PrideDate from "./ui/components/PrideDate";
import ImageBlock from "./ui/components/ImageBlock";
import Footer from "./ui/components/Footer";
import Link from "next/link";

export default function Homepage() {
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
                <PrideDate/>
                <Link href={"/events"} className="col-span-2"><ImageBlock
                    src="/images/giugno-eventi-0.jpg"
                    altText="Locandina degli eventi organizzati a Giugno da Brescia Pride"
                    showOnMobile={true}
                    linkText="Scopri gli eventi di Giugno!"
                    link="/events"
                    colSpan="col-span-2"
                />
                </Link>
                <Link href={"/contact"} className="col-span-2"><ImageBlock
                    src="/images/5x1000.jpg"
                    altText="Dona il 5x1000 a COMITATO BRESCIA PRIDE, Codice Fiscale: 98201800178"
                    showOnMobile={true}
                    colSpan="col-span-2"
                /></Link>
                <Footer/>
            </motion.div>
        </div>
    );
};