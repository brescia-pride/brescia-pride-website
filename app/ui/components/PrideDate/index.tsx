import Block from "../Block";
import localFont from "next/font/local";
import { useState } from "react";
import { Button } from "react-aria-components";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

const PrideDate = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <Block className={`col-span-4 bg-blue`}>
            <Button
                className="cursor-pointer transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden"
                onPress={() => setIsRevealed((v) => !v)}
            >
                {/* Background emoji pattern */}
                <div
                    className={`absolute inset-0 text-6xl pointer-events-none transition-opacity duration-300 ${isRevealed ? 'opacity-10' : 'opacity-0'}`}>
                    <div className="grid grid-cols-6 gap-4 h-full w-full items-center justify-items-center">
                        <span>🎉</span>
                        <span>🤫</span>
                        <span>🎉</span>
                        <span>🤫</span>
                        <span>🎉</span>
                        <span>🤫</span>
                    </div>
                </div>

                {/* Main content */}
                <div className="text-center relative z-10 text-shadow-lg">
                    <h1 className={`text-2xl md:text-4xl leading-tight ${myFont.className} text-pink transition-all duration-300`}>
                        {isRevealed ? "6 Settembre 2025!" : "Quando è il pride?"}
                    </h1>
                </div>
            </Button>
        </Block>
    );
};

PrideDate.displayName = "PrideDate";

export default PrideDate;