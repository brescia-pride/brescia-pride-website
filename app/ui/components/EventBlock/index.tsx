import Block from "../Block";
import { NotionEvent } from "@/app/api/events/route";
import { SiFacebook, SiGoogleforms, SiInstagram } from "react-icons/si";
import Link from "next/link";

type EventBlockProps = {
  event: NotionEvent;
  verbosity: string;
  className?: string;
};

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

const EventBlock = ({ event, verbosity, className }: EventBlockProps) => {
  return (
    <Block className={`${className}`}>
      <li key={event.id}>
        <div className="group flex flex-col">
          <span className="font-bold text-2xl lg:text-xl leading-snug">
            {event.title}
          </span>
          <span className="font-semibold text-lg lg:text-sm mt-2">
            📍 {event.location}
          </span>
          <span className="font-semibold lg:text-sm mt-2">
            📅 {formatDate(event.startDate)}
            {event.endDate && event.endDate !== event.startDate
              ? ` – ${formatDate(event.endDate)}`
              : ""}
          </span>
          {verbosity === "long" && event.description && (
            <span className="text-md mt-2">{event.description}</span>
          )}
          {verbosity === "long" &&
            (event.instagramLink ||
              event.facebookLink ||
              event.websiteLink) && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {event.instagramLink && (
                  <Link
                    href={event.instagramLink}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <SiInstagram className="w-8 h-8" />
                  </Link>
                )}
                {event.facebookLink && (
                  <Link
                    href={event.facebookLink}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <SiFacebook className="w-8 h-8" />
                  </Link>
                )}
                {event.websiteLink && (
                  <Link
                    href={event.websiteLink}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <SiGoogleforms className="w-8 h-8" />
                    <span className="text-xl font-bold">Iscriviti qui!</span>
                  </Link>
                )}
              </div>
            )}
        </div>
      </li>
    </Block>
  );
};

export default EventBlock;
