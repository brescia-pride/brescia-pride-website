"use client";

import { useEffect, useState } from "react";
import Block from "../Block";
import localFont from "next/font/local";
import type { NotionEvent } from "@/app/api/events/route";
import EventBlock from "../EventBlock";
import Link from "next/link";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type Props = {
  colSpan?: string;
  verbosity?: "short" | "long";
  pageSize?: number;
};

const UpcomingEventsBlock = ({
  colSpan = "col-span-2",
  verbosity = "short",
  pageSize,
}: Props) => {
  const [events, setEvents] = useState<NotionEvent[] | null>(null);

  useEffect(() => {
    const url =
      pageSize !== undefined
        ? `/api/events?page_size=${encodeURIComponent(pageSize)}`
        : "/api/events";
    fetch(url)
      .then((r) => r.json())
      .then((data: { events: NotionEvent[] }) => setEvents(data.events))
      .catch(() => setEvents([]));
  }, [pageSize]);

  return (
    <Block className={`${colSpan} bg-purple overflow-hidden`}>
      <div className="flex flex-col h-full p-5 gap-3">
        <Link href="/events">
          <h2
            className={`text-3xl text-center font-medium text-pink leading-tight ${myFont.className}`}
          >
            Prossimi eventi
          </h2>
        </Link>

        {events === null ? (
          <div className="flex flex-col gap-2 mt-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex flex-col gap-1">
                <div className="h-4 bg-pink/20 rounded w-3/4" />
                <div className="h-3 bg-pink/10 rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : events.length === 0 ? (
          <p className="text-pink/70 text-sm mt-1">
            Nessun evento in programma
          </p>
        ) : (
          <ul className="flex flex-col gap-4 mt-1">
            {events.map((event) => (
              <EventBlock
                key={event.id}
                event={event}
                verbosity={verbosity}
                className="bg-pink text-purple p-4"
              />
            ))}
          </ul>
        )}
        {verbosity === "short" && (
          <Link href="/events" className="flex relative bottom-0 right-0 mt-2">
            <span className={`text-xl text-pink ${myFont.className}`}>
              👉 Vai a tutti gli eventi
            </span>
          </Link>
        )}
      </div>
    </Block>
  );
};

UpcomingEventsBlock.displayName = "UpcomingEventsBlock";

export default UpcomingEventsBlock;
