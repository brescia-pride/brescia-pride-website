"use client";

import React from "react";
import { Button, Link } from "react-aria-components";
import Block from "../Block";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type InfoCardProps = {
    title: string;
    backgroundColor: "pink" | "green" | "blue" | "purple" | "lilac";
    hoverColor: "blue" | "red" | "green" | "pink" | "purple";
    textColor: "blue" | "red" | "green" | "pink" | "purple";
    hoverTextColor: "pink" | "green" | "blue" | "red" | "purple";
    colSpan?: number;
    isClickable?: boolean;
    href?: string;
    isExternal?: boolean;
    children: React.ReactNode;
    className?: string;
};

const InfoCard = ({
    title,
    backgroundColor,
    hoverColor,
    textColor,
    hoverTextColor,
    colSpan = 3,
    isClickable = false,
    href,
    isExternal = false,
    children,
    className = "",
}: InfoCardProps) => {
    const bgColorClasses = {
        pink: "bg-pink",
        green: "bg-green",
        blue: "bg-blue",
        purple: "bg-purple",
        lilac: "bg-lilac",
    };

    const hoverColorClasses = {
        blue: "hover:bg-blue",
        red: "hover:bg-red",
        green: "hover:bg-green",
        pink: "hover:bg-pink",
        purple: "hover:bg-purple",
    };

    const textColorClasses = {
        blue: "text-blue",
        red: "text-red",
        green: "text-green",
        pink: "text-pink",
        purple: "text-purple",
    };

    const hoverTextColorClasses = {
        pink: "hover:text-pink",
        green: "hover:text-green",
        blue: "hover:text-blue",
        red: "hover:text-red",
        purple: "hover:text-purple",
    };

    const buttonContent = (
        <Button
            className={`cursor-${(href || isClickable) ? 'pointer' : 'default'} transition-all duration-300 ${hoverColorClasses[hoverColor]} flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden ${textColorClasses[textColor]} ${hoverTextColorClasses[hoverTextColor]}`}
        >
            <div className="text-center relative z-10 text-shadow-lg select-text">
                <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                    {title}
                </h1>
                {children}
            </div>
        </Button>
    );

    return (
        <Block className={`${bgColorClasses[backgroundColor]} col-span-${colSpan} ${className}`}>
            {href ? (
                <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                    {buttonContent}
                </Link>
            ) : (
                buttonContent
            )}
        </Block>
    );
};

InfoCard.displayName = "InfoCard";

export default InfoCard;