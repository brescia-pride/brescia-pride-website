import {ReactElement, useEffect, useState} from "react";
import Block from "../Block";
import localFont from "next/font/local";
import {FiArrowRight} from "react-icons/fi";
import Link from "next/link";

const myFont = localFont({src: "../../fonts/ST.ttf"});

interface LinkProps {
    href: string;
    text: string;
}

interface BlockProps {
    size?: number;
    blockClass: string;
    heading?: string;
    text: string | ReactElement;
    link?: LinkProps;
}

const Text: React.FC<BlockProps> = ({
                                        size = 4,
                                        blockClass,
                                        heading,
                                        text,
                                        link
                                    }) => {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Block className={`col-span-${size} ${blockClass} p-6`}>
            <h1 className="text-xl md:text-2xl font-medium leading-tight">
                {heading && (
                    <span className={`font-bold mr-2 ${myFont.className}`}>
            {heading}
          </span>
                )}
                {text && <p>{text}</p>}
                {isClient && link && (
                    <Link
                        href={link.href}
                        className="mt-8 text-sm flex items-center gap-1 hover:underline"
                    >
                        {link.text}
                        <FiArrowRight/>
                    </Link>
                )}
            </h1>
        </Block>
    );
};

Text.displayName = "Text";

export default Text;