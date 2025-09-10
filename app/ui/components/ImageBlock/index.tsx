import { useEffect, useState } from "react";
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
  imageHeight?: string;
  withHoverOverlay?: boolean;
  stretchHeight?: boolean;
  textHover?: string;
}

const ImageBlock: React.FC<BlockProps> = ({
  src,
  altText,
  showOnMobile = false,
  colSpan,
  link,
  linkText,
  imageHeight = "h-[300px]",
  withHoverOverlay = false,
  stretchHeight = false,
  textHover = "Eventi",
}) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const hide: string = showOnMobile ? "" : "hidden md:block";

  return (
    <Block
      className={`${colSpan} relative ${hide} ${
        withHoverOverlay ? "group" : ""
      } ${stretchHeight ? "h-full flex flex-col" : ""}`}
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.005,
      }}
    >
      <Image
        src={src}
        alt={altText}
        className={`rounded-lg w-full ${imageHeight} object-cover  ${
          stretchHeight ? "flex-1" : ""
        }`}
        width={200}
        height={100}
        tabIndex={0}
        quality={100}
      />
      {withHoverOverlay && (
        <>
          <div className="absolute inset-0 bg-black/60 rounded-lg opacity-0 group-hover:opacity-45 transition-opacity duration-300" />
          <p className="absolute bottom-4 text-center w-full text-pink text-[8vw] md:text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 leading-none __className_bd8993 whitespace-pre-line">
            {textHover}
          </p>
        </>
      )}

      {/* Codice esistente per il linkText (se presente) */}
      {isClient && link && linkText && (
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-90 text-white px-2 py-1 rounded z-10">
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
