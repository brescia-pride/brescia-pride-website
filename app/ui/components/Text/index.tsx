import Block from "../Block";
import localFont from "next/font/local";
import { FiArrowRight } from "react-icons/fi";

const myFont = localFont({src: "../../fonts/ST.ttf"});

type BlockProps = {
  size?: number
  blockClass: string;
  heading?: string;
  text: string;
  link?: {
    href: string;
    text: string;
  }
};

const Text = ({
  size,
  blockClass,
  heading,
  text,
  link
}: BlockProps) => {
    return (
      <Block className={`col-span-${size} ${blockClass} p-6`}>
      <h1 className={"text-2xl md:text-4xl font-medium leading-tight"}>
        {
          heading ? <span className={`font-bold mr-2 ${myFont.className}`}> {heading}</span> : null
        }
        {
          text ? <span>{text}</span> : null
        }
        {
          link ? <a
          href={link.href}
          target="_blank"
          className="mt-8 text-sm flex items-center gap-1 hover:underline"
        >
          {link.text}<FiArrowRight />
        </a> : null
        }
      </h1>
  </Block>
    );
};

Text.displayName = "Text";

export default Text;