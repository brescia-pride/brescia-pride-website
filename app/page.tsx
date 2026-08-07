"use client";

import React from "react";
import { ReactNode } from "react";
import { Link } from "react-aria-components";
import UpcomingEventsBlock from "./ui/components/UpcomingEventsBlock";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import PrideDate from "./ui/components/PrideDate";
import Block from "./ui/components/Block";
import ImageBlock from "./ui/components/ImageBlock";
import InfoCard from "./ui/components/InfoCard";
const myFont = localFont({ src: "./ui/fonts/ST.ttf" });

type HomePageBlockProps = {
  title: string;
  color: string;
  className: string;
  children: ReactNode;
};

const HomePageBlock = ({
  title,
  className,
  color,
  children,
}: HomePageBlockProps) => {
  return (
    <Block className={className}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-${color}`}>
          {title}
        </h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function Homepage() {
  const router = useRouter();
  return (
    <div className="flex-col md:grid md:grid-cols-6">
      <PrideDate />
      <HomePageBlock className="col-span-6" title="Manifesto" color="purple">
        <p>
          abstract manifesto abstract manifesto abstract manifesto abstract
          manifesto abstract manifesto abstract manifesto abstract manifesto
          abstract manifesto abstract manifesto abstract manifesto abstract
          manifesto abstract manifesto abstract manifesto abstract manifesto
          abstract manifesto abstract manifesto abstract manifesto abstract
          manifesto abstract manifesto abstract manifesto abstract manifesto
          abstract manifesto abstract manifesto abstract manifesto
        </p>
      </HomePageBlock>
      <Block className="col-span-2 p-4">
        <ImageBlock
          src="/images/bandiera.jpg"
          altText="Mappa del Parco Pride"
          showOnMobile={true}
          link="/images/mappa-parco.png"
          colSpan="col-span-3"
        />
      </Block>
      <HomePageBlock className="col-span-4" title="Eventi" color="green">
        <p>
          eventi eventi eventi eventi eventi eventi eventi eventi eventi eventi
          eventi eventi eventi eventi eventi eventi eventi eventi eventi eventi
          eventi eventi eventi eventi eventi eventi eventi eventi eventi eventi
          eventi eventi eventi eventi eventi eventi eventi eventi eventi eventi
          eventi eventi eventi eventi eventi eventi eventi eventi eventi eventi
          eventi eventi eventi eventi eventi eventi eventi eventi eventi eventi
          eventi eventi eventi eventi eventi eventi eventi eventi eventi eventi
          eventi eventi eventi eventi eventi eventi eventi eventi eventi eventi
          eventi eventi
        </p>
      </HomePageBlock>
      {/* <UpcomingEventsBlock
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
      <Block className="col-span-3 p-4"></Block> */}
    </div>
  );
}
