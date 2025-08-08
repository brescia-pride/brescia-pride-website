"use client";

import React from "react";
import { Button } from "react-aria-components";
import { useRouter } from "next/navigation";
import Block from "../Block";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type ApplicationCardProps = {
    title: string;
    description: string;
    actionText?: string;
    href: string;
    emoji: string;
    hoverColor: "purple" | "blue" | "red" | "green" | "pink";
    textColor: "purple" | "blue" | "red" | "green" | "pink";
    hoverTextColor: "purple" | "blue" | "red" | "green" | "pink";
    isExternal?: boolean;
    colSpan?: number;
    className?: string;
};

const ApplicationCard = ({
    title,
    description,
    actionText = undefined,
    href,
    emoji,
    hoverColor,
    textColor,
    hoverTextColor,
    isExternal = false,
    colSpan = 1,
    className = "",
}: ApplicationCardProps) => {
    const router = useRouter();

    const hoverColorClasses = {
        purple: "hover:bg-purple",
        blue: "hover:bg-blue",
        red: "hover:bg-red",
        green: "hover:bg-green",
        pink: "hover:bg-pink",
    };

    const textColorClasses = {
        purple: "text-purple",
        blue: "text-blue",
        red: "text-red",
        green: "text-green",
        pink: "text-pink",
    };

    const hoverTextColorClasses = {
        purple: "hover:text-purple",
        blue: "hover:text-blue",
        red: "hover:text-red",
        green: "hover:text-green",
        pink: "hover:text-pink",
    };

    const handlePress = () => {
        if (isExternal) {
            window.open(href, '_blank');
        } else {
            router.push(href);
        }
    };

    return (
        <Block className={`lg:col-span-${colSpan} bg-pink ${className}`}>
            <Button
                className={`cursor-pointer transition-all duration-300 ${hoverColorClasses[hoverColor]} flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden ${textColorClasses[textColor]} ${hoverTextColorClasses[hoverTextColor]}`}
                onPress={handlePress}
            >
                <div
                    className={`absolute top-1/2 -translate-y-1/2 -left-8 text-6xl pointer-events-none opacity-25`}
                    aria-hidden="true">
                    <span className="align-middle">{emoji}</span>
                </div>
                <div
                    className={`absolute top-1/2 -translate-y-1/2 -right-8 text-6xl pointer-events-none opacity-25`}
                    aria-hidden="true">
                    <span className="align-middle">{emoji}</span>
                </div>
                <div className="text-center relative z-10 text-shadow-lg">
                    <h1 className={`text-2xl leading-tight font-medium ${myFont.className}`}>
                        {title}
                    </h1>
                    <p className="text-xl font-bold mt-2">
                        {description}
                    </p>
                    {actionText && (
                        <p className="text-xl mt-2">
                            {actionText}
                        </p>
                    )}
                </div>
            </Button>
        </Block>
    );
};

ApplicationCard.displayName = "ApplicationCard";

export default ApplicationCard;