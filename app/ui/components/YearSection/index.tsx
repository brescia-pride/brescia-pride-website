"use client";

import React from "react";
import Block from "../Block";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type YearSectionProps = {
    year: string;
    backgroundColor: "green" | "purple";
    children: React.ReactNode;
    className?: string;
};

const YearSection = ({
    year,
    backgroundColor,
    children,
    className = "",
}: YearSectionProps) => {
    const bgColorClasses = {
        green: "bg-green",
        purple: "bg-purple",
    };

    return (
        <Block className={`col-span-6 ${bgColorClasses[backgroundColor]} p-4 items-center justify-center ${className}`}>
            <h1 className={`text-2xl md:text-4xl lg:col-span-4 font-bold text-center ${myFont.className} text-pink tracking-wider leading-tight`}>
                {year}
            </h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {children}
            </div>
        </Block>
    );
};

YearSection.displayName = "YearSection";

export default YearSection;