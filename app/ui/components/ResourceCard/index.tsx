"use client";

import React from "react";
import { Button } from "react-aria-components";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import Block from "../Block";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type ResourceCardProps = {
  title: string;
  description: string;
  actionText: string;
  href: string;
  pdfPath?: string;
  hoverColor: "purple" | "blue" | "green";
  isExternal?: boolean;
  colSpan?: number;
  className?: string;
};

const ResourceCard = ({
  title,
  description,
  actionText,
  href,
  pdfPath,
  hoverColor,
  isExternal = false,
  colSpan = 3,
  className = "",
}: ResourceCardProps) => {
  const router = useRouter();
  const buttonColSpan = href && pdfPath ? 1 : 2

  const hoverColorClasses = {
    purple: "bg-lilac/50 text-purple hover:text-purple",
    blue: "bg-lightblue/50 text-blue hover:text-blue",
    green: "bg-lime/50 text-green hover:text-green",
  };

  const buttonHoverColorClasses = {
    purple: "bg-lilac hover:bg-purple text-purple hover:text-lilac",
    blue: "bg-lightblue hover:bg-blue text-blue hover:text-lightblue",
    green: "bg-lime hover:bg-green text-green hover:text-lime",
  };

  const buttonClassName = `p-4 font-bold transition-all duration-300 cursor-pointer rounded-xl ${buttonHoverColorClasses[hoverColor]} col-span-${buttonColSpan} w-full`

  const handlePress = () => {
    if (isExternal) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  return (
    <Block className={`col-span-${colSpan} flex flex-col md:grid md:grid-cols-6 gap-4 justify-betwee rounded-xl p-4 ${className} ${hoverColorClasses[hoverColor]}`}>
      <div
        className={`h-full w-full relative overflow-hidden col-span-4`}
      >
        <h1 className={`text-2xl leading-tight font-bold`}>
          {title}
        </h1>
        <p className="text-xl text-black font-semi-bold mt-2">
          {description}
        </p>
      </div>
      {href && <Button className={buttonClassName} onPress={handlePress}>{actionText}</Button>}
      {pdfPath && <Button className={buttonClassName} onPress={handlePress}>Apri in PDF</Button>}
    </Block>
  );
};

ResourceCard.displayName = "ResourceCard";

export default ResourceCard;
