import { Client, isFullPage, isFullDatabase } from "@notionhq/client";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";
export const revalidate = 300;

const DEFAULT_PAGE_SIZE = 5;
// Notion API allows page_size between 1 and 100
const MIN_PAGE_SIZE = 1;
const MAX_PAGE_SIZE = 100;

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

function parsePageSize(value: string | null): number {
  if (!value) return DEFAULT_PAGE_SIZE;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return DEFAULT_PAGE_SIZE;
  return Math.min(MAX_PAGE_SIZE, Math.max(MIN_PAGE_SIZE, parsed));
}

export async function GET(request: NextRequest) {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_EVENTS_DATABASE_ID;

  const pageSize = parsePageSize(request.nextUrl.searchParams.get("page_size"));

  if (!token || !databaseId) {
    console.error("[events] Missing NOTION_TOKEN or NOTION_EVENTS_DATABASE_ID");
    return NextResponse.json({ events: [] });
  }

  try {
    const notion = new Client({ auth: token });

    // Retrieve the database to get the underlying data source ID
    const db = await notion.databases.retrieve({ database_id: databaseId });

    if (!isFullDatabase(db)) {
      console.error("[events] Received partial database object");
      return NextResponse.json({ events: [] });
    }

    const dataSources = db.data_sources;
    if (!dataSources || dataSources.length === 0) {
      console.error("[events] Database has no data sources");
      return NextResponse.json({ events: [] });
    }

    const dataSourceId = dataSources[0].id;

    const today = new Date().toISOString().slice(0, 10);

    const res = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        and: [
          {
            property: "Mostra sul sito",
            checkbox: { equals: true },
          },
          {
            property: "Data inizio",
            date: { on_or_after: today },
          },
        ],
      },
      sorts: [{ property: "Data inizio", direction: "ascending" }],
      page_size: pageSize,
    });

    // Log property names from the first result to verify schema
    const firstFull = res.results.find(isFullPage);
    if (!firstFull) {
      console.log("[events] No results found (0 upcoming events)");
    }

    const events: NotionEvent[] = res.results
      .filter(isFullPage)
      .map((page) => {
        const titleProp = page.properties["Nome"];
        const dateProp = page.properties["Data inizio"];
        const locationProp = page.properties["Location"];
        const descriptionProp = page.properties["Descrizione sito"];
        const instagramLinkProp = page.properties["Link a Instagram"];
        const facebookLinkProp = page.properties["Link a Facebook"];
        const websiteLinkProp = page.properties["Link a modulo"];

        const title =
          titleProp?.type === "title"
            ? titleProp.title.map((t) => t.plain_text).join("")
            : "Evento";

        const startDate =
          dateProp?.type === "date" ? (dateProp.date?.start ?? "") : "";
        const endDate =
          dateProp?.type === "date"
            ? (dateProp.date?.end ?? undefined)
            : undefined;

        const location =
          locationProp?.type === "rich_text"
            ? locationProp.rich_text.map((t) => t.plain_text).join("")
            : "";

        const description =
          descriptionProp?.type === "rich_text"
            ? descriptionProp.rich_text.map((t) => t.plain_text).join("")
            : "";
        const instagramLink =
          instagramLinkProp?.type === "url"
            ? (instagramLinkProp.url ?? undefined)
            : undefined;
        const facebookLink =
          facebookLinkProp?.type === "url"
            ? (facebookLinkProp.url ?? undefined)
            : undefined;
        const websiteLink =
          websiteLinkProp?.type === "url"
            ? (websiteLinkProp.url ?? undefined)
            : undefined;

        return {
          id: page.id,
          title,
          startDate,
          endDate,
          location: location,
          description,
          instagramLink,
          facebookLink,
          websiteLink,
        };
      })
      .filter((e) => e.startDate !== "");

    console.log("[events] Returning", events.length, "events");

    return NextResponse.json(
      { events },
      {
        headers: {
          "Cache-Control": "s-maxage=300, stale-while-revalidate=3600",
        },
      },
    );
  } catch (err) {
    console.error("[events] Notion API error:", err);
    return NextResponse.json({ events: [], error: String(err) });
  }
}
