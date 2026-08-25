"use client";

import { useEffect, useState } from "react";
import Block from "../Block";
import localFont from "next/font/local";
import type { NotionEvent } from "@/app/api/events/route";
import EventBlock from "../EventBlock";
import { useRouter } from "next/navigation";
import ColoredButton from "../ColoredButton";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type Props = {
  colSpan?: string;
  verbosity?: "short" | "long";
  pageSize?: number;
};

const UpcomingEventsBlock = ({
  colSpan = "col-span-3",
  verbosity = "long",
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

  const eventsColSpan =
    events === null ? 2 : events.length > 2 ? 3 : events.length;
  const router = useRouter();

  return (
    <Block className={`${colSpan} bg-white overflow-hidden text-fuchsia`}>
      <div className="flex flex-col justify-between">
        <div className="flex-1 flex flex-col">
          {events === null ? (
            <div className="flex flex-col gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse flex flex-col gap-1">
                  <div className="h-4 bg-fuchsia/20 rounded-sm" />
                  <div className="h-3 bg-fuchsia/10 rounded-sm w-2/3" />
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <p className="text-fuchsia/70">Nessun evento in programma</p>
          ) : (
            <div>
              <ul className={`grid md:grid-cols-${eventsColSpan} gap-4`}>
                {events.map((event) => (
                  <EventBlock
                    key={event.id}
                    event={event}
                    verbosity={verbosity}
                    className="text-fuchsia rounded-sm p-4 bg-fuchsia/5 hover:bg-fuchsia/20"
                  />
                ))}
              </ul>
              <div className="flex flex-row justify-center items-center p-4">
                <ColoredButton
                  text="Vai a tutti gli eventi!"
                  textColor="blue"
                  bgColor="lime"
                  id="link-a-eventi"
                  href="/eventi"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Block>
  );
};

UpcomingEventsBlock.displayName = "UpcomingEventsBlock";

export default UpcomingEventsBlock;
