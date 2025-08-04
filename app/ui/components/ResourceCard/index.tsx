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
    hoverColor: "red" | "blue" | "green";
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
        red: "hover:bg-red text-red hover:text-pink",
        blue: "hover:bg-blue text-blue hover:text-pink", 
        green: "hover:bg-green text-green hover:text-pink",
    };

    const handlePress = () => {
        if (isExternal) {
            window.open(href, '_blank');
        } else {
            router.push(href);
        }
    };

    return (
        <Block className={`col-span-${colSpan} bg-pink ${className}`}>
            <Button
                className={`cursor-pointer transition-all duration-300 flex h-full w-full p-6 rounded-lg relative overflow-hidden ${hoverColorClasses[hoverColor]}`}
                onPress={handlePress}
            >
                <div className="text-left relative z-10 text-shadow-lg select-text">
                    <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
                        {title}
                    </h1>
                    <p className="text-xl font-bold mt-2">
                        {description}
                    </p>
                    <p className="text-lg font-bold underline mt-2 flex items-center">
                        {actionText} <FiArrowRight />
                    </p>
                </div>
            </Button>
        </Block>
    );
};

ResourceCard.displayName = "ResourceCard";

export default ResourceCard;