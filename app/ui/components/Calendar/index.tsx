import { useState, useEffect, useMemo } from "react";
import localFont from "next/font/local";
import Block from "../Block";
import EventBlock from "../EventBlock";

export type NotionEvent = {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
  description?: string;
  instagramLink?: string;
  facebookLink?: string;
  websiteLink?: string;
};

const myFont = localFont({ src: "../../fonts/ST.ttf" });

const daysOfWeek = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

function toDateObj(dateStr: string): Date {
  const datePart = dateStr.slice(0, 10);
  const [y, m, d] = datePart.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function toDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<NotionEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/events?page_size=100");
        const data = await response.json();
        setEvents(data.events || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const eventsByDate = useMemo(() => {
    const map: Record<string, NotionEvent[]> = {};
    events.forEach((event) => {
      const start = toDateObj(event.startDate);
      const end = event.endDate ? toDateObj(event.endDate) : start;
      const cursor = new Date(start);
      while (cursor <= end) {
        const key = toDateKey(cursor);
        if (!map[key]) map[key] = [];
        if (!map[key].find((e) => e.id === event.id)) {
          map[key].push(event);
        }
        cursor.setDate(cursor.getDate() + 1);
      }
    });
    return map;
  }, [events]);

  const dayIndex = new Date(year, month, 1).getDay();
  const firstDayOfMonth = dayIndex === 0 ? 6 : dayIndex - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setSelectedDate(null);
    setCurrentDate(new Date(year, month - 1, 1));
  };
  const nextMonth = () => {
    setSelectedDate(null);
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthName = currentDate.toLocaleString("it-IT", { month: "long" });
  const todayKey = toDateKey(new Date());
  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] ?? []) : [];

  const formatDate = (dateStr: string) =>
    toDateObj(dateStr).toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <Block className="col-span-3 bg-lime p-5">
      <div className="col-span-2">
        <h2
          className={`text-3xl text-center font-medium text-blue leading-tight ${myFont.className}`}
        >
          CALENDARIO
        </h2>
      </div>
      <div className="mx-auto p-4 font-inherit">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prevMonth}
            aria-label="Mese precedente"
            className="px-3 py-1 bg-blue text-white border-none rounded-md cursor-pointer text-base leading-none"
          >
            ‹
          </button>
          <h2 className="text-lg font-bold capitalize text-blue m-0">
            {monthName} {year}
          </h2>
          <button
            onClick={nextMonth}
            aria-label="Mese successivo"
            className="px-3 py-1 bg-blue text-white border-none rounded-md cursor-pointer text-base leading-none"
          >
            ›
          </button>
        </div>

        {/* Day-of-week headers */}
        <div className="grid grid-cols-7 gap-1 text-center text-sm font-semibold text-blue mb-2">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const dayEvents = eventsByDate[dateKey] ?? [];
            const isToday = dateKey === todayKey;
            const isSelected = dateKey === selectedDate;
            const hasEvents = dayEvents.length > 0;

            return (
              <div
                key={day}
                onClick={() => setSelectedDate(isSelected ? null : dateKey)}
                className={`aspect-square flex flex-col items-center justify-center rounded-full cursor-pointer text-sm relative transition-colors duration-150
                ${isSelected ? "bg-blue text-white font-bold" : isToday ? "bg-[#378ADD] text-white font-bold" : "text-gray-700 font-normal"}
                ${!isSelected && !isToday && "hover:bg-blue/[0.12]"}
              `}
                style={{ cursor: hasEvents ? "pointer" : "default" }}
              >
                {day}
                {hasEvents && (
                  <div
                    className={`absolute bottom-[10%] w-[6px] h-[6px] rounded-full ${isSelected || isToday ? "bg-white" : "bg-blue"}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {!selectedDate && (
          <div className="mt-4">
            <span className="text-blue font-bold text-xl lg:text-2xl text-center">
              Seleziona i giorni con il puntino blu per vedere gli eventi!
            </span>
          </div>
        )}

        {/* Loading indicator */}
        {isLoading && (
          <p className="text-center text-blue/50 text-sm mt-4">
            Caricamento eventi…
          </p>
        )}

        {/* Selected day event list */}
        {selectedDate && (
          <div className="mt-5">
            <p className="text-md text-blue font-bold mb-2 capitalize">
              {toDateObj(selectedDate).toLocaleDateString("it-IT", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
            {selectedEvents.length === 0 ? (
              <p className="text-sm text-blue">Nessun evento.</p>
            ) : (
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {selectedEvents.map((ev) => (
                  <EventBlock
                    key={ev.id}
                    event={ev}
                    verbosity={"long"}
                    className="bg-blue text-lime p-4"
                  />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </Block>
  );
}
