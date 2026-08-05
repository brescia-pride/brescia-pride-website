"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import SocialsBlock from "../ui/components/SocialsBlock";
import InfoCard from "../ui/components/InfoCard";
import DonationSection from "../ui/components/DonationSection";
import { Link } from "react-aria-components";

export default function ContactsPage() {
  return (
    <div>

        <InfoCard
          title="Scrivici!"
          backgroundColor="pink"
          hoverColor="blue"
          textColor="blue"
          hoverTextColor="pink"
          colSpan={3}
          isClickable={false}
          >
          <p className="text-xl font-bold">
            Per qualsiasi informazione, domanda o richiesta di collaborazione,
            puoi contattarci via mail a{" "}
            <Link className={`underline`} href="mailto:info@bresciapride.it">
              info@bresciapride.it
            </Link>{" "}
            o tramite i nostri canali social!
          </p>
        </InfoCard>
        <SocialsBlock />
    </div>
  );
}
