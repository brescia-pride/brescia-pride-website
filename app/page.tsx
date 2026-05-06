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
        <ImageBlock
          src="/images/date-2026.png"
          altText="Ci vediamo al Pride il 5 settembre 2026"
          showOnMobile={true}
          colSpan="col-span-2"
        />
        <UpcomingEventsBlock
          colSpan="col-span-2"
          verbosity="short"
          pageSize={2}
        />
        <Link
          href={"https://forms.gle/K6iKJBiz28uDQPjt6"}
          className="col-span-2"
        >
          <ImageBlock
            src="/images/food-truck-2026.png"
            altText="Open Call Area Food per il Brescia Pride 2026"
            showOnMobile={true}
            linkText="👉 Vai al modulo"
            link="https://forms.gle/K6iKJBiz28uDQPjt6"
            colSpan="col-span-2"
          />
        </Link>
        <Link
          href={"https://forms.gle/fe1SE5YSDpXCgNrY7"}
          className="col-span-2"
        >
          <ImageBlock
            src="/images/market-2026.png"
            altText="Open Call Area Market e spazio espositivo per il Brescia Pride 2026"
            showOnMobile={true}
            linkText="👉 Vai al modulo"
            link="https://forms.gle/fe1SE5YSDpXCgNrY7"
            colSpan="col-span-2"
          />
        </Link>
        <Link href={"/docs/manifesto-2025.pdf"} className="col-span-2">
          <ImageBlock
            src="/images/manifesto-post.png"
            altText="Il Manifesto 2025 è uscito! Leggilo qui!"
            showOnMobile={true}
            linkText=""
            link="/docs/manifesto-2025.pdf"
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
