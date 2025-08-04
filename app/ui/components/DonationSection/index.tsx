"use client";

import React from "react";
import Block from "../Block";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type DonationSectionProps = {
    title: string;
    description: string;
    backgroundColor: "blue" | "green" | "purple" | "pink";
    children: React.ReactNode;
    colSpan?: number;
    innerGridCols?: number;
    className?: string;
};

const DonationSection = ({
    title,
    description,
    backgroundColor,
    children,
    colSpan = 6,
    innerGridCols = 4,
    className = "",
}: DonationSectionProps) => {
    const bgColorClasses = {
        blue: "bg-blue",
        green: "bg-green",
        purple: "bg-purple",
        pink: "bg-pink",
    };

    return (
        <Block className={`col-span-${colSpan} ${bgColorClasses[backgroundColor]} p-4 items-center justify-center ${className}`}>
            <h1 className={`text-2xl md:text-4xl font-bold text-center ${myFont.className} text-pink tracking-wider leading-tight mt-2`}>
                {title}
            </h1>
            {description && (
                <p className={`lg:col-span-${innerGridCols} text-xl font-bold mt-2 text-center text-pink`}>
                    {description}
                </p>
            )}
            <div className={`grid lg:grid-cols-${innerGridCols} gap-4 mt-4`}>
                {children}
            </div>            
        </Block>
    );
};

DonationSection.displayName = "DonationSection";

export default DonationSection;