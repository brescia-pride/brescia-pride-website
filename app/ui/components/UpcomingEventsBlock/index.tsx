"use client";

import { useEffect, useState } from "react";
import Block from "../Block";
import localFont from "next/font/local";
import type { NotionEvent } from "@/app/api/events/route";
import Link from "next/link";
import { SiFacebook, SiLinktree, SiInstagram } from "react-icons/si";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

const itFormatter = new Intl.DateTimeFormat("it-IT", {
  day: "numeric",
  month: "long",
  timeZone: "Europe/Rome",
});

const itDateTimeFormatter = new Intl.DateTimeFormat("it-IT", {
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Rome",
});

export function formatDate(isoDate: string): string {
  // Notion may return either "YYYY-MM-DD" or a full ISO datetime
  // ("YYYY-MM-DDTHH:mm:ss.sss±HH:mm"). When a time component is present,
  // include it in the formatted output (rendered in Europe/Rome).
  if (isoDate.includes("T")) {
    const d = new Date(isoDate);
    if (Number.isNaN(d.getTime())) return "";
    return itDateTimeFormatter.format(d);
  }
  // Date-only: build the Date in local time to avoid UTC->Rome day shifts.
  const [year, month, day] = isoDate.slice(0, 10).split("-").map(Number);
  if (!year || !month || !day) return "";
  return itFormatter.format(new Date(year, month - 1, day));
}

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
          <ul className="flex flex-col gap-2 mt-1">
            {events.map((event) => (
              <li key={event.id}>
                <div className="group flex flex-col">
                  <span className="text-pink font-bold text-2xl lg:text-xl leading-snug">
                    {event.title}
                  </span>
                  <span className="text-pink text-lg lg:text-sm mt-2">
                    📍 {event.location}
                  </span>
                  <span className="text-pink text-lg lg:text-sm mt-2">
                    📅 {formatDate(event.startDate)}
                    {event.endDate && event.endDate !== event.startDate
                      ? ` – ${formatDate(event.endDate)}`
                      : ""}
                  </span>
                  {verbosity === "long" && event.description && (
                    <span className="text-pink/90 text-lg lg:text-md mt-2">
                      {event.description}
                    </span>
                  )}
                  {verbosity === "long" &&
                    (event.instagramLink ||
                      event.facebookLink ||
                      event.websiteLink) && (
                      <div className="lg:flex flex-wrap items-center gap-2 mt-2">
                        {event.instagramLink && (
                          <Block className="bg-pink/90 text-purple text-md flex items-center gap-2 p-2 rounded-lg mt-2">
                            <Link
                              href={event.instagramLink}
                              target="_blank"
                              className="flex items-center gap-2"
                            >
                              <SiInstagram className="w-4 h-4" />
                              <span className="mt-1">
                                Visualizza su Instagram
                              </span>
                            </Link>
                          </Block>
                        )}
                        {event.facebookLink && (
                          <Block className="bg-pink/90 text-purple text-md flex items-center gap-2 p-2 rounded-lg mt-2">
                            <Link
                              href={event.facebookLink}
                              target="_blank"
                              className="flex items-center gap-2"
                            >
                              <SiFacebook className="w-4 h-4" />
                              <span className="mt-1">
                                Visualizza su Facebook
                              </span>
                            </Link>
                          </Block>
                        )}
                        {event.websiteLink && (
                          <Block className="bg-pink/90 text-purple text-sm flex items-center gap-2 p-2 rounded-lg">
                            <Link
                              href={event.websiteLink}
                              target="_blank"
                              className="flex items-center gap-2"
                            >
                              <SiLinktree className="w-4 h-4" />
                              <span className="text-sm mt-1">
                                Compila il modulo
                              </span>
                            </Link>
                          </Block>
                        )}
                      </div>
                    )}
                </div>
                <hr className="border-pink/20 my-2 border-b-2 mt-2" />
              </li>
            ))}
          </ul>
        )}
        {verbosity === "short" && (
          <Link href="/events">
            <span
              className={`text-xl relative bottom-0 right-0 text-pink text-right ${myFont.className}`}
            >
              Vai a tutti gli eventi
            </span>
          </Link>
        )}
      </div>
    </Block>
  );
};

UpcomingEventsBlock.displayName = "UpcomingEventsBlock";

export default UpcomingEventsBlock;
