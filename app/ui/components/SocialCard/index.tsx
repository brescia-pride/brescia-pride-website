"use client";

import React from "react";
import Block from "../Block";

type SocialCardProps = {
  href: string;
  icon: React.ReactNode;
  backgroundColor: "pink" | "lime" | "lilac" | "green" | "lightblue" | "cream";
  iconColor: "red" | "blue" | "green" | "black" | "purple";
  className?: string;
};

const SocialCard = ({
  href,
  icon,
  backgroundColor,
  iconColor,
  className = "",
}: SocialCardProps) => {
  const bgColorClasses = {
    pink: "bg-pink hover:bg-pink/75",
    lime: "bg-lime hover:bg-lime/75",
    lilac: "bg-lilac hover:bg-lilac/75",
    green: "bg-green hover:bg-green/75",
    lightblue: "bg-lightblue hover:bg-lightblue/75",
    cream: "bg-cream hover:bg-cream/75",
  };

  const iconColorClasses = {
    red: "text-red",
    blue: "text-blue",
    green: "text-green",
    black: "text-black",
    purple: "text-purple",
  };

  return (
    <Block
      className={`w-100 ${bgColorClasses[backgroundColor]} p-6 ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`grid h-full place-content-center text-4xl ${iconColorClasses[iconColor]}`}
      >
        {icon}
      </a>
    </Block>
  );
};

SocialCard.displayName = "SocialCard";

export default SocialCard;
