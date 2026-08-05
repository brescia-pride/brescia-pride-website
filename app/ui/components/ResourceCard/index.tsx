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
  hoverColor,
  isExternal = false,
  colSpan = 3,
  className = "",
}: ResourceCardProps) => {
  const router = useRouter();

  const hoverColorClasses = {
    purple: "hover:bg-lilac text-purple hover:text-purple",
    blue: "hover:bg-lightblue text-blue hover:text-blue",
    green: "hover:bg-lime text-green hover:text-green",
  };

  const handlePress = () => {
    if (isExternal) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  return (
    <Block className={`col-span-${colSpan} bg-white ${className}`}>
      <Button
        className={`cursor-pointer transition-all duration-300 flex h-full w-full p-4 relative overflow-hidden ${hoverColorClasses[hoverColor]}`}
        onPress={handlePress}
      >
        <div className="text-left relative z-10 text-shadow-lg select-text">
          <h1 className={`text-2xl md:text-3xl leading-tight font-bold`}>
            {title}
          </h1>
          <p className="text-xl text-black font-semi-bold mt-2">
            {description}
          </p>
          <p className="text-lg text-black underline mt-2 flex items-center">
            {actionText} <FiArrowRight />
          </p>
        </div>
      </Button>
    </Block>
  );
};

ResourceCard.displayName = "ResourceCard";

export default ResourceCard;
