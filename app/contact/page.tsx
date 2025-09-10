"use client";

import React from "react";
import {motion} from "framer-motion";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import SocialsBlock from "../ui/components/SocialsBlock";
import InfoCard from "../ui/components/InfoCard";
import DonationSection from "../ui/components/DonationSection";
import {Link} from "react-aria-components";

export default function ContactsPage() {
    return (
      <div className="min-h-screen px-4 py-6 text-zinc-50 ">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto flex flex-col md:grid md:max-w-6xl md:grid-flow-dense md:grid-cols-6 gap-4 "
        >
          <Header size={6} />
          <InfoCard
            title="Scrivici!"
            backgroundColor="pink"
            hoverColor="blue"
            textColor="blue"
            hoverTextColor="pink"
            colSpan={3}
            isClickable={false}
            className="h-[250px]"
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
          <DonationSection
            title="Social"
            description=""
            backgroundColor="green"
            colSpan={3}
            innerGridCols={3}
          >
            <SocialsBlock />
          </DonationSection>
          <CustomFooter />
        </motion.div>
      </div>
    );
};