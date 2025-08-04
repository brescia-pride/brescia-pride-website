"use client";

import React from "react";
import { Button, Link } from "react-aria-components";
import Block from "../Block";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type DonationCardProps = {
    title: string;
    backgroundColor: "lilac" | "pink" | "green";
    hoverColor: "purple" | "red" | "pink";
    textColor: "purple" | "red" | "pink";
    hoverTextColor: "lilac" | "pink" | "green";
    colSpan?: number;
    children: React.ReactNode;
    className?: string;
};

const DonationCard = ({
    title,
    backgroundColor,
    hoverColor,
    textColor,
    hoverTextColor,
    colSpan = 2,
    children,
    className = "",
}: DonationCardProps) => {
    const bgColorClasses = {
        lilac: "bg-lilac",
        pink: "bg-pink", 
        green: "bg-green",
    };

    const hoverColorClasses = {
        purple: "hover:bg-purple",
        red: "hover:bg-red",
        pink: "hover:bg-pink",
    };

    const textColorClasses = {
        purple: "text-purple",
        red: "text-red",
        pink: "text-pink",
    };

    const hoverTextColorClasses = {
        lilac: "hover:text-lilac",
        pink: "hover:text-pink",
        green: "hover:text-green",
    };

    return (
        <Block className={`${bgColorClasses[backgroundColor]} col-span-${colSpan} ${className}`}>
            <Button
                className={`cursor-default transition-all duration-300 ${hoverColorClasses[hoverColor]} flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden ${textColorClasses[textColor]} ${hoverTextColorClasses[hoverTextColor]}`}
            >
                <div className="text-center relative z-10 text-shadow-lg select-text">
                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                        {title}
                    </h1>
                    {children}
                </div>
            </Button>
        </Block>
    );
};

DonationCard.displayName = "DonationCard";

export default DonationCard;