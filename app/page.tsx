"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./ui/components/Header";
import ImageBlock from "./ui/components/ImageBlock";
import CustomFooter from "./ui/components/CustomFooter";
import { Link } from "react-aria-components";
import { Button } from "react-aria-components";
import Block from "./ui/components/Block";
import UpcomingEventsBlock from "./ui/components/UpcomingEventsBlock";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

const myFont = localFont({ src: "./ui/fonts/ST.ttf" });

export default function Homepage() {
  const router = useRouter();
  return (
    <div className="min-h-screen px-4 py-6 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-6 gap-4"
      >
        <Header size={6} />
        <Link
          href="/2026/pride"
          className="col-span-2"
        >
        <ImageBlock
          src="/images/date-2026.png"
          altText="Ci vediamo al Pride il 5 settembre 2026"
          showOnMobile={true}
          colSpan="col-span-2"
          linkText="👉 Tutte le info"
          link="/2026/pride"
        />
        </Link>
        <UpcomingEventsBlock
          colSpan="col-span-4"
          verbosity="short"
          pageSize={2}
        />
        <Link
          href={"https://docs.google.com/forms/d/e/1FAIpQLScS3Z6WrGUcrYiqg5NGD2AA70S-eyLBnm9w7_t8rm9jumqymQ/viewform?usp=header"}
          className="col-span-2"
        >
          <ImageBlock
            src="/images/call-volontari.png"
            altText="Open Call Volontary per il Brescia Pride 2026"
            showOnMobile={true}
            linkText="👉 Vai al modulo"
            link="https://docs.google.com/forms/d/e/1FAIpQLScS3Z6WrGUcrYiqg5NGD2AA70S-eyLBnm9w7_t8rm9jumqymQ/viewform?usp=header"
            colSpan="col-span-2"
          />
        </Link>
        <Link
          href={"https://forms.gle/GAbKGVX7uBzJo4du8"}
          className="col-span-2"
        >
          <ImageBlock
            src="/images/carri-2026.png"
            altText="Open Call Carri per il Brescia Pride 2026"
            showOnMobile={true}
            linkText="👉 Vai al modulo"
            link="https://forms.gle/GAbKGVX7uBzJo4du8"
            colSpan="col-span-2"
          />
        </Link>
        <Link href={"/sostienici"} className="col-span-2">
          <ImageBlock
            src="/images/5x1000.jpg"
            altText="Dona il 5x1000 a COMITATO BRESCIA PRIDE, Codice Fiscale: 98201800178"
            showOnMobile={true}
            colSpan="col-span-2"
          />
        </Link>
        <CustomFooter />
      </motion.div>
    </div>
  );
}
