"use client";

import React from "react";
import InfoCard from "@/app/ui/components/InfoCard";
import { Link } from "react-aria-components";
import ImageBlock from "@/app/ui/components/ImageBlock";
import PrideDate from "@/app/ui/components/PrideDate";
import Block from "@/app/ui/components/Block";

import localFont from "next/font/local";
const myFont = localFont({ src: "../../ui/fonts/ST.ttf" });

export default function PridePage() {
  return (
    <Block>
      <Block className="p-8 bg-lime text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-green`}>
          Accessibilità
        </h1>
        <p className={`lg:col-span-6 text-2xl text-green mt-2`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          consequat mi quis pretium semper. Proin luctus orci ac neque
          venenatis, quis commodo dolor posuere.
        </p>
      </Block>{" "}
    </Block>
  );
}
