"use client";

import React from "react";
import { Button, Link } from "react-aria-components";
import Block from "../Block";
import localFont from "next/font/local";
import { ReactNode } from "react";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type BlockProps = {
  title: string;
  children: ReactNode;
  textColor: string;
};

const TextPage = ({ title, children, textColor }: BlockProps) => {
  return (
    <Block>
      <Block className="p-8 bg-lilac text-center">
        <h1
          className={`text-4xl md:text-6xl ${myFont.className} text-${textColor}`}
        >
          {title}
        </h1>
      </Block>
      <Block className="p-4">{children}</Block>
    </Block>
  );
};

TextPage.displayName = "TextPage";

export default TextPage;
