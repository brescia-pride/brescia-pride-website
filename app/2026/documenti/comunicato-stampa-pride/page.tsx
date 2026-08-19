"use client";

import React from "react";
import TextPage from "@/app/ui/components/TextPage";

export default function Comunicato() {
  const mainColor = "purple";
  const titleClassName = `font-bold text-2xl mt-2 text-${mainColor}`;
  const subtitleClassName = `font-bold text-xl mt-2 text-${mainColor}`;
  const textClassName = "mt-2";
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const content = (
    <div>
      <h1 className={titleClassName}>Titolo</h1>
      <div className={textClassName}>
        <span>{loremIpsum}</span>
      </div>
      <h2 className={subtitleClassName}>Sottotitolo</h2>
      <div className={textClassName}>
        <span>{loremIpsum}</span>
      </div>
    </div>
  );

  return (
    <TextPage title="Comunicato" textColor={mainColor}>
      {content}
    </TextPage>
  );
}
