"use client";

import React, {useState} from "react";
import {motion} from "framer-motion";
import Header from "@/app/ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import ImageBlock from "@/app/ui/components/ImageBlock";
import Block from "../ui/components/Block";
import {Link, Button} from "react-aria-components";
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
                <Block className={`col-span-4 bg-pink`}>
                    <Link href={"https://linktr.ee/bresciapride"}>
                        <Button
                            className="cursor-pointer transition-all duration-300 hover:bg-purple flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-purple hover:text-pink"
                        >
                            <div className="text-center relative z-10 text-shadow-xl">
                                <h1 className={`text-2xl font-medium leading-tight ${myFont.className}`}>
                                    Iscriviti ai nostri eventi!
                                </h1>
                                <p className="text-lg md:text-xl mt-1 font-semibold">
                                    Compila i form su LinkTree
                                </p>
                            </div>
                        </Button>
                    </Link>
                </Block>
                <Block className={`col-span-2 bg-green`}>
                    <Button
                        className="cursor-default transition-all duration-300 hover:bg-pink flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-pink hover:text-green"
                    >
                        <div className="text-center relative z-10 text-shadow-lg">
                            <h1 className={`text-3xl leading-tight font-medium ${myFont.className}`}>
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
                <CustomFooter/>
            </motion.div>
        </div>
    );
};

