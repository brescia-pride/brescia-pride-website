import Block from "../Block";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link for routing

type BlockProps = {
  src: string;
  altText: string;
  showOnMobile?: boolean;
  colSpan: string;
  link?: string;    // Add optional link prop
  linkText?: string; // Add optional link text prop
};

const ImageBlock = ({
  src,
  altText,
  showOnMobile,
  colSpan,
  link,
  linkText,
}: BlockProps) => {
  let hide = showOnMobile ? "" : "hidden md:block";
  return (
    <Block className={`${colSpan} relative ${hide}`}>
      <Image
        src={src}
        alt={altText}
        className="rounded-lg w-full h-full object-cover"
        width={200}
        height={100}
      />
      {link && linkText && (
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">
          <Link href={link} className="text-m font-semibold">{linkText}</Link>
        </div>
      )}
    </Block>
  );
};

ImageBlock.displayName = "ImageBlock";

export default ImageBlock;
