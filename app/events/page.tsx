"use client";

import React, {useState} from "react";
import {motion} from "framer-motion";
import Header from "@/app/ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import ImageBlock from "@/app/ui/components/ImageBlock";
import Block from "../ui/components/Block";
import { Link, Button } from "react-aria-components";
import localFont from "next/font/local";

const myFont = localFont({src: "../ui/fonts/ST.ttf"});

interface Event {
    id: number;
    heading: string;
    text: string;
    href: string;
    deadline: Date;
    bgColor: string;
    textColor: string;
}

export default function EventsPage() {
    // Array of events with links and deadlines
    const events: Event[] = [
        {
            id: 1,
            heading: "🏳️‍🌈",
            text: "ABCQueer",
            href: "https://linktr.ee/bresciapride",
            deadline: new Date("2025-07-15"), // Example deadline
            bgColor: "bg-purple",
            textColor: "text-lime"
        },
    ];

    const placeholderEventInstagram: Event = {
        id: 0,
        heading: "📅",
        text: "Prossimi eventi!",
        href: "https://www.instagram.com/bresciapride",
        deadline: new Date("2030-12-31"), // Placeholder date
        bgColor: "bg-purple",
        textColor: "text-lime"
    };

    const placeholderEvent: Event = {
        id: 0,
        heading: "🔗",
        text: "Linktree",
        href: "https://linktr.ee/bresciapride",
        deadline: new Date("2030-12-31"), // Placeholder date
        bgColor: "bg-purple",
        textColor: "text-lime"
    };

    // Sort events by deadline (closest first)
    const sortedEvents: Event[] = events.sort((a: Event, b: Event) => a.deadline.getTime() - b.deadline.getTime());

    // Filter out past events - hide events with passed deadlines
    const currentDate: Date = new Date();
    const upcomingEvents: Event[] = sortedEvents.filter((event: Event) => event.deadline >= currentDate);

    // If the number of upcoming events is not even, append placeholder event
    if (upcomingEvents.length % 2 !== 0) {
        upcomingEvents.push(placeholderEvent);
    }

    // If there are no upcoming events, show two placeholder events
    if (upcomingEvents.length === 0) {
        upcomingEvents.push(placeholderEvent, placeholderEventInstagram);
    }

    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className="min-h-screen px-4 py-6 text-zinc-50">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-6 gap-4"
            >
                <Header size={6}/>

                {/* Render sorted events
        {upcomingEvents.map((event: Event, index: number) => (
          <Link 
            key={event.id} 
            href={event.href} 
            className="col-span-2"
          >
            <Text 
              heading={event.heading}
              text={event.text}
              blockClass={`${event.bgColor} ${event.textColor}`}
            />
          </Link>
        ))} */}
                <Block className={`col-span-2 bg-blue`}>
                    <Link href={"/giugno-brescia-pride.pdf"}>
                        <Button
                            className="cursor-pointer transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden"
                            onPress={() => setIsRevealed(!isRevealed)}
                        >
                            {/* Background emoji pattern */}
                            <div
                                className={`absolute inset-0 text-6xl pointer-events-none transition-opacity duration-300 ${isRevealed ? 'opacity-30' : 'opacity-20'}`}>
                                <div className="grid grid-cols-6 gap-4 h-full w-full items-center justify-items-center">
                                    <span>📅</span>
                                    <span>🏳️‍🌈</span>
                                    <span>📅</span>
                                    <span>🏳️‍🌈</span>
                                    <span>📅</span>
                                    <span>🏳️‍🌈</span>
                                </div>
                            </div>

                            {/* Main content */}
                            <div className="text-center relative z-10 text-shadow-lg">
                                <h1 className={`text-2xl font-medium leading-tight font-bold ${myFont.className} text-pink transition-all duration-300`}>
                                    Scarica il volantino degli eventi di Giugno!
                                </h1>
                            </div>
                        </Button>
                    </Link>
                </Block>
                <Block className={`col-span-2 bg-pink`}>
                    <Link href={"https://linktr.ee/bresciapride"}>
                        <Button
                            className="cursor-pointer transition-all duration-300 hover:bg-green flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-green hover:text-pink"
                        >
                            <div className="text-center relative z-10 text-shadow-xl">
                                <h1 className={`text-2xl font-medium leading-tight font-bold ${myFont.className}`}>
                                    Iscriviti ai nostri eventi!
                                </h1>
                                <p className="text-lg md:text-xl mt-1 font-semibold">
                                    Compila i form su LinkTree
                                </p>
                            </div>
                        </Button>
                    </Link>
                </Block>
                <Block className={`col-span-2 bg-lime`}>
                    <Button
                        className="cursor-pointer transition-all duration-300 hover:bg-blue flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-blue hover:text-lime"
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <h1 className={`text-3xl font-medium leading-tight font-bold ${myFont.className}`}>
                                Queercetto
                            </h1>
                            <p className="text-lg md:text-xl mt-1 font-semibold">
                                Tutti i mercoledì alle 19!
                            </p>
                            <p className="text-md md:text-lg font-semibold">
                                Scorri in basso per la locandina e scrivici un DM su Instagram o una mail per
                                partecipare 🫶
                            </p>
                        </div>
                    </Button>
                </Block>
                <ImageBlock
                    src="/images/giugno-eventi-0.jpg"
                    altText="Locandina degli eventi organizzati a Giugno da Brescia Pride"
                    showOnMobile={true}
                    colSpan="col-span-2"
                />
                <ImageBlock
                    src="/images/giugno-eventi-1.jpg"
                    altText="Volantino degli eventi organizzati a Giugno da Brescia Pride. Il PDF è scaricabile cliccando il link 'Scarica il volantino degli eventi di Giugno!'."
                    showOnMobile={true}
                    colSpan="col-span-2"
                />
                <ImageBlock
                    src="/images/queercetto.jpeg"
                    altText="Queercetto. Uno spazio per persone FLINTA per giocare a calcio insieme. Tutti i mercoledì dalle 19 alle 20. Campetto a Brescia in Zona via Veneto."
                    showOnMobile={true}
                    colSpan="col-span-2"
                />
                <CustomFooter/>
            </motion.div>
        </div>
    );
};

