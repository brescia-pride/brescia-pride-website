import Block from "../Block";
import Image from "next/image";

type BlockProps = {
  src: string;
  altText: string;
  colSpan?: number;
  showOnMobile?: boolean
};

const ImageBlock = ({
  src,
  altText,
  colSpan,
  showOnMobile,
}: BlockProps) => {
    let size = colSpan ? colSpan : 1
    let hide = showOnMobile? "" : "hidden md:block"
    return (
      <Block className={`col-span-${size} ${hide}`}>
        <Image 
          src={src}
          alt={altText} 
          className="rounded-lg w-full h-full object-cover"
          width={200}
          height={100}
        />
      </Block>
    );
};

ImageBlock.displayName = "ImageBlock";

export default ImageBlock;