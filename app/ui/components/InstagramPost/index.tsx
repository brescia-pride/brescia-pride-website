import Block from "../Block";
import Image from "next/image";
import { FC, ReactElement } from "react";
import { motion } from "framer-motion";

export type InstragramSlide = {
    src: string;
    altText: string;
};

export type InstragramSlides = {
    title: string;
    description: string | ReactElement;
    slides: InstragramSlide[]
    bgColor: string
    textColor: string
}

const InstagramPost: FC<InstragramSlides> = ({
    title,
    description,
    slides,
    bgColor,
    textColor
}) => {
    const text = (
        <div className="col-span-3 flex">
        <Block className={`bg-[${bgColor}] text-[${textColor}] p-6 grow`}>
            <h1 className={"text-2xl md:text-4xl font-medium leading-tight mb-4"}><b>{title}</b></h1>
            {description}
        </Block>
        </div>
    )

    const slideElements = slides.map((slide) => (
        <div className="col-span-1">
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
                {text}
                {slideElements}
            </motion.div>
        </div>
    );
}

InstagramPost.displayName = "InstagramPost";

export default InstagramPost;