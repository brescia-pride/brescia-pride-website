"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/app/ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import InfoCard from "../ui/components/InfoCard";
import UpcomingEventsBlock from "../ui/components/UpcomingEventsBlock";

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
        <UpcomingEventsBlock colSpan="col-span-4" verbosity="long" />
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
