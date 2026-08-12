"use client";

import React from "react";
import InfoCard from "@/app/ui/components/InfoCard";
import { Link } from "react-aria-components";
import ImageBlock from "@/app/ui/components/ImageBlock";
import PrideDate from "@/app/ui/components/PrideDate";
import Block from "@/app/ui/components/Block";
import { ReactNode } from "react";

import localFont from "next/font/local";
const myFont = localFont({ src: "../../ui/fonts/ST.ttf" });

type AccessibilitaBlockProps = {
  title: string;
  children: ReactNode;
};

const AccessibilitaBlock = ({ title, children }: AccessibilitaBlockProps) => {
  return (
    <Block className="col-span-6">
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-green`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

export default function AccessibilitaPage() {
  return (
    <Block>
      <Block className="p-8 bg-lime text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-green`}>
          Accessibilità
        </h1>
        <p className={`lg:col-span-6 text-2xl text-green mt-2`}>
          Tutte le informazioni sull&apos;Accessibilità di Brescia Pride 2026
        </p>
      </Block>{" "}
      <AccessibilitaBlock title="Vademecum">
        <p>
          vademecum vademecum vademecum vademecum vademecum vademecum vademecum
          vademecum vademecum vademecum vademecum vademecum vademecum vademecum
          vademecum vademecum vademecum vademecum vademecum vademecum vademecum
          vademecum vademecum vademecum vademecum vademecum vademecum vademecum
          vademecum vademecum vademecum vademecum vademecum vademecum vademecum
          vademecum vademecum vademecum vademecum vademecum vademecum vademecum
          vademecum vademecum vademecum vademecum vademecum vademecum vademecum
          vademecum vademecum vademecum vademecum vademecum
        </p>
      </AccessibilitaBlock>
      <AccessibilitaBlock title="Info">
        <p>
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
          altre info altre info altre info altre info altre info altre info
        </p>
      </AccessibilitaBlock>
    </Block>
  );
}
