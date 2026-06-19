"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../../ui/components/Header";
import CustomFooter from "../../ui/components/CustomFooter";
import ImageBlock from "../../ui/components/ImageBlock";
import InfoCard from "../../ui/components/InfoCard";
import DonationSection from "../../ui/components/DonationSection";
import ApplicationCard from "../../ui/components/ApplicationCard";
import ResourceCard from "../../ui/components/ResourceCard";
import { Button } from "react-aria-components";
import Link from "next/link";

export default function PridePage() {
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
        <InfoCard
          title=""
          backgroundColor="pink"
          hoverColor="pink"
          textColor="red"
          hoverTextColor="red"
          colSpan={2}
        >
          <p className="text-xl font-bold">
            Questa pagina è in continuo aggiornamento! Vi aspettiamo il 5
            settembre! 🫶
          </p>
          <p className="text-xl mt-2">
            Non trovi le info che cerchi?{" "}
            <Link href="/contact" className="underline">
              Contattaci!
            </Link>
          </p>
        </InfoCard>
        <CustomFooter />
      </motion.div>
    </div>
  );
}
