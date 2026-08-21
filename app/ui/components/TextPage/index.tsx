"use client";

import React from "react";
import { Button, Link } from "react-aria-components";
import Block from "../Block";
import localFont from "next/font/local";
import { ReactNode } from "react";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type BlockProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  textColor: string;
  bgColor: string;
};

const TextPage = ({ title, subtitle, children, textColor, bgColor }: BlockProps) => {
  return (
    <Block>
      <Block className={`p-8 bg-${bgColor} text-center`}>
        <h1
          className={`text-4xl md:text-6xl ${myFont.className} text-${textColor}`}
        >
          {title}
        </h1>
        { subtitle && <h2
          className={`text-2xl mt-4 font-bold text-${textColor}`}
        >{subtitle}</h2>}
      </Block>
      <Block className="p-4">{children}</Block>
    </Block>
  );
};

TextPage.displayName = "TextPage";

export default TextPage;
