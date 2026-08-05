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
    <Block className={`${colSpan} bg-white overflow-hidden text-fuchsia p-4`}>
      <Link href="/events">
        <h1
          className={`text-3xl font-medium leading-tight ${myFont.className}`}
        >
          Prossimi eventi
        </h1>
      </Link>
      <Link href="/events">
        <p className="text-fuchsia text-left">Vai a tutti gli eventi</p>
      </Link>
      <div className="flex flex-col justify-between m-4">
        <div className="flex-1 flex flex-col">
          {events === null ? (
            <div className="flex flex-col gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse flex flex-col gap-1">
                  <div className="h-4 bg-fuchsia/20 rounded w-3/4" />
                  <div className="h-3 bg-fuchsia/10 rounded w-1/3" />
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <p className="text-fuchsia/70 text-sm mt-4">
              Nessun evento in programma
            </p>
          ) : (
            <ul className="flex flex-col gap-4 mt-1">
              {events.map((event) => (
                <EventBlock
                  key={event.id}
                  event={event}
                  verbosity={verbosity}
                  className="text-fuchsia border-2 rounded p-4 border-fuchsia bg-fuchsia/5 hover:bg-fuchsia/20"
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </Block>
  );
};

UpcomingEventsBlock.displayName = "UpcomingEventsBlock";

export default UpcomingEventsBlock;
