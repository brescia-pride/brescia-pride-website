"use client";

import React from "react";
import { Link } from "react-aria-components";
import UpcomingEventsBlock from "./ui/components/UpcomingEventsBlock";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import PrideDate from "./ui/components/PrideDate";
import Block from "./ui/components/Block";
import ImageBlock from "./ui/components/ImageBlock";
import InfoCard from "./ui/components/InfoCard";
const myFont = localFont({ src: "./ui/fonts/ST.ttf" });

export default function Homepage() {
  const router = useRouter();
  return (
    <div className="flex-col md:grid md:grid-cols-6 ">
      <PrideDate />
      <UpcomingEventsBlock
        colSpan="col-span-3"
        verbosity="short"
        pageSize={2}
      />
      <Block className="col-span-3 p-4">
        <ImageBlock
          src="/images/bandiera.jpg"
          altText="Mappa del Parco Pride"
          showOnMobile={true}
          link="/images/mappa-parco.png"
          colSpan="col-span-3"
        />
      </Block>
      <Block className="col-span-3 p-4">
        <ImageBlock
          src="/images/bandiera.jpg"
          altText="Mappa del Parco Pride"
          showOnMobile={true}
          link="/images/mappa-parco.png"
          colSpan="col-span-3"
        />
      </Block>
      <Block className="col-span-3 p-4">
      </Block>
    </div>
  );
}
