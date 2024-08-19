import Block from "../Block";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

type BlockProps = {
  size?: number | 1
  src: string;
  altText: string;
  link?: {
    href: string;
    text: string;
  }
  hideOnMobile?: boolean
};

const ImageBlock = ({
  size,
  src,
  altText,
  link,
  hideOnMobile,
}: BlockProps) => {
    const blockClass = hideOnMobile ? `relative hidden md:block col-span-${size}` : `relative col-span-${size}`
    return (
      <Block className={blockClass}>
        <Image 
          src={src}
          alt={altText} 
          className="rounded-lg w-full h-full object-cover"
          width={200}
          height={100}
        />
        {
          link ? <a
          href={link.href}
          target="_blank"
          className="absolute mt-8 text-sm flex items-center gap-1 hover:underline bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded"
        >
          {link.text}<FiArrowRight />
        </a> : null
        }
      </Block>
    );
};

ImageBlock.displayName = "ImageBlock";

export default ImageBlock;