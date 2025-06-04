// import Block from "../Block";
// import localFont from "next/font/local";
// import { useState } from "react";

// const myFont = localFont({ src: "../../fonts/ST.ttf" });

// const PrideDate = () => {
//   const [isRevealed, setIsRevealed] = useState(false);

//   return (
//     <Block className={`col-span-2 bg-pink`}>
//       <div 
//         className="cursor-pointer transition-all duration-300 hover:bg-pink flex items-center justify-center h-full w-full p-6 rounded-lg"
//         onClick={() => setIsRevealed(!isRevealed)}
//         onMouseEnter={() => setIsRevealed(true)}
//         onMouseLeave={() => setIsRevealed(false)}
//       >
//         <div className="text-center">
//           <h1 className={`text-2xl md:text-4xl font-medium leading-tight font-bold ${myFont.className} text-blue transition-all duration-300`}>
//             {isRevealed ? "6 Settembre 2025!" : "Quando è il pride?"}
//           </h1>
//         </div>
//       </div>
//     </Block>
//   );
// };

// PrideDate.displayName = "PrideDate";

// export default PrideDate;

import Block from "../Block";
import localFont from "next/font/local";
import {useState} from "react";

const myFont = localFont({src: "../../fonts/ST.ttf"});

const PrideDate = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <Block className={`col-span-6 bg-blue`}>
            <div
                className="cursor-pointer transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden"
                onClick={() => setIsRevealed(!isRevealed)}
                onMouseEnter={() => setIsRevealed(true)}
                onMouseLeave={() => setIsRevealed(false)}
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
                    <h1 className={`text-2xl md:text-4xl font-medium leading-tight font-bold ${myFont.className} text-pink transition-all duration-300`}>
                        {isRevealed ? "6 Settembre 2025!" : "Quando è il pride?"}
                    </h1>
                </div>
            </div>
        </Block>
    );
};

PrideDate.displayName = "PrideDate";

export default PrideDate;