import {useEffect, useState} from "react";
import Block from "../Block";
import Image from "next/image";
import { Link } from "react-aria-components";

interface BlockProps {
    src: string;
    altText: string;
    showOnMobile?: boolean;
    colSpan: string;
    link?: string;
    linkText?: string;
}

const ImageBlock: React.FC<BlockProps> = ({
                                              src,
                                              altText,
                                              showOnMobile = false,
                                              colSpan,
                                              link,
                                              linkText,
                                          }) => {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const hide: string = showOnMobile ? "" : "hidden md:block";

    return (
        <Block
            className={`${colSpan} relative ${hide}`}
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.005,
            }}
        >
            <Image
                src={src}
                alt={altText}
                className="rounded-lg w-full h-full object-cover"
                width={200}
                height={100}
                tabIndex={0}
                quality={100}
            />
            {isClient && link && linkText && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-90 text-white px-2 py-1 rounded">
                    <Link href={link} className="text-2xl font-semibold">
                        {linkText}
                    </Link>
                </div>
            )}
        </Block>
    );
};

ImageBlock.displayName = "ImageBlock";

export default ImageBlock;