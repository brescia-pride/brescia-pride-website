"use client";

import React from "react";
import Block from "../Block";
import { Link } from "react-aria-components";
type SocialCardProps = {
  href: string;
  icon: React.ReactNode;
  backgroundColor: "pink" | "lime" | "lilac" | "green" | "lightblue" | "cream";
  iconColor: "red" | "blue" | "green" | "black" | "purple";
  className?: string;
  title: string;
  desc: string;
};

const SocialCard = ({
  href,
  icon,
  backgroundColor,
  iconColor,
  className = "",
  title,
  desc,
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
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColorClasses[backgroundColor]} p-6 ${className} flex flex-col ${iconColorClasses[iconColor]}`}
    >
      <div className="grid h-full place-content-center">
        <p className="text-4xl">{icon}</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        {/* <p className="mt-2 text-center">{desc}</p> */}
      </div>
    </Link>
  );
};

SocialCard.displayName = "SocialCard";

export default SocialCard;
