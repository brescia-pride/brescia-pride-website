"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/app/ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import InfoCard from "../ui/components/InfoCard";
import { Link } from "react-aria-components";
import ImageBlock from "../ui/components/ImageBlock";

export default function EventsPage() {
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

        <div className="col-span-6 flex flex-col md:flex-row gap-4">
          <Link href="/events" className="w-full md:w-1/3">
            <ImageBlock
              src="/images/grafica-evento.jpg"
              altText="Evento secondario"
              showOnMobile={true}
              imageHeight="h-full"
              colSpan="col-span-1"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/bresciapride?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="w-full flex-1"
          >
            <ImageBlock
              src="/images/bandiera.jpg"
              altText="Evento primario"
              showOnMobile={true}
              imageHeight=""
              stretchHeight={true}
              withHoverOverlay={true}
              colSpan="col-span-1"
              textHover={`Approfondisci 
                su instagram`}
            />
          </Link>
        </div>

        <InfoCard
          title="Iscriviti ai nostri eventi!"
          backgroundColor="pink"
          hoverColor="purple"
          textColor="purple"
          hoverTextColor="pink"
          colSpan={4}
          href="https://linktr.ee/bresciapride"
          isExternal={true}
        >
          <p className="text-lg md:text-xl mt-1 font-semibold">
            Compila i form su LinkTree
          </p>
        </InfoCard>
        <InfoCard
          title="Queercetto"
          backgroundColor="green"
          hoverColor="pink"
          textColor="pink"
          hoverTextColor="green"
          colSpan={2}
        >
          <p className="text-lg md:text-xl mt-1 font-semibold">
            Tutti i mercoledì alle 19!
          </p>
          <p className="text-md md:text-lg font-semibold">
            Scrivici un DM su Instagram o una mail per partecipare 🫶
          </p>
        </InfoCard>
        <CustomFooter />
      </motion.div>
    </div>
  );
}
