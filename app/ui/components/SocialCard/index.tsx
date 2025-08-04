"use client";

import React from "react";
import Block from "../Block";

type SocialCardProps = {
    href: string;
    icon: React.ReactNode;
    backgroundColor: "pink" | "lime" | "lilac" | "green" | "blue" | "cream";
    iconColor: "red" | "blue" | "green" | "black";
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
        pink: "bg-pink",
        lime: "bg-lime",
        lilac: "bg-lilac",
        green: "bg-green",
        blue: "bg-blue",
        cream: "bg-cream",
    };

    const iconColorClasses = {
        red: "text-red",
        blue: "text-blue",
        green: "text-green",
        black: "text-black",
    };

    return (
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className={`w-100 ${bgColorClasses[backgroundColor]} p-6 ${className}`}
        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid h-full place-content-center text-4xl ${iconColorClasses[iconColor]} hover:text-6xl transition-all duration-300`}
            >
                {icon}
            </a>
        </Block>
    );
};

SocialCard.displayName = "SocialCard";

export default SocialCard;