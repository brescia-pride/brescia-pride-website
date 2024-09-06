import Block from "../Block";
import Image from "next/image";
import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { SiAdobeacrobatreader, SiGoogledocs } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import BackHome from "../BackHome";
export type InstragramSlide = {
    src: string;
    altText: string;
};

export type InstragramSlides = {
    title: string;
    slides: InstragramSlide[]
    bgColor: string
    textColor: string
}

const InstagramPost: FC<InstragramSlides> = ({
    title,
    slides,
    bgColor,
    textColor
}) => {
    const slideElements = slides.map((slide, index) => (
        <div key={index} className="col-span-1">
            <Block>
                <Image
                    src={slide.src}
                    alt={slide.altText}
                    className="rounded-lg w-full h-full object-cover"
                    width={200}
                    height={100}
                />
            </Block>
        </div>
    ));

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
                <BackHome size={3}/>
                <Block className={`bg-[${bgColor}] text-[${textColor}] p-6 grow col-span-3`}>
                    <h1 className={"text-2xl md:text-4xl font-medium leading-tight"}><b>{title}</b></h1>
                </Block>
                <Block className={`text-[${textColor}] p-6 grow col-span-3`}>
                    <a
                        href="https://docs.google.com/document/d/1SkDCVYLZMCDMn6iEdkS6qZnDS-TDDAMhW_sISIoLxSQ/edit?usp=sharing"
                        target="_blank"
                        className="text-xl flex items-center hover:underline"
                    >
                        <SiGoogledocs /><span className="ml-2 mr-1"><b>Leggi il Vademecum Accessibilità su Google Docs</b></span> <FiArrowRight />
                    </a>
                </Block>
                <Block className={`text-[${textColor}] p-6 grow col-span-3`}>
                    <div>
                        <a
                            href="./vademecum-accessibilita.pdf"
                            target="_blank"
                            className="text-xl flex items-center hover:underline"
                        >
                            <SiAdobeacrobatreader /><span className="ml-2 mr-1"><b>Scarica il Vademecum Accessibilità in PDF</b></span> <FiArrowRight />
                        </a>
                    </div>
                </Block>
                {slideElements}
            </motion.div>
        </div>
    );
}

InstagramPost.displayName = "InstagramPost";

export default InstagramPost;