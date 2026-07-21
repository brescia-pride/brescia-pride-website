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
        <InfoCard
          title="Programma"
          backgroundColor="pink"
          hoverColor="pink"
          textColor="red"
          hoverTextColor="red"
          colSpan={4}
        >
          <div className="p-4">
            <table className="w-full align-middle text-center border-spacing-5">
              <tbody>
                <tr className="text-xl font-bold border-b-2 border-red">
                  <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                    <p>12:00</p>
                    <p>21:00</p>
                  </td>
                  <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                    Parco Pride a Campo Marte 🌳
                  </td>
                </tr>
                <tr className="text-xl font-bold border-b-2 border-red">
                  <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                    <p>14:30</p>
                    <p>15:30</p>
                  </td>
                  <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                    Concentramento in Campo Marte con interventi e performance
                    📢
                  </td>
                </tr>
                <tr className="text-xl font-bold border-b-2 border-red">
                  <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                    <p>15:30</p>
                    <p>18:00</p>
                  </td>
                  <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                    Corteo per la città 🏳️‍🌈🏳️‍⚧️
                  </td>
                </tr>
                <tr>
                  <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                    <p>18:00</p>
                    <p>21:00</p>
                  </td>
                  <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                    Interventi e performance a Campo Marte 🎤
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLScS3Z6WrGUcrYiqg5NGD2AA70S-eyLBnm9w7_t8rm9jumqymQ/viewform?usp=header"
          }
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
        <InfoCard
          title="Parco Pride"
          backgroundColor="blue"
          hoverColor="blue"
          textColor="pink"
          hoverTextColor="pink"
          colSpan={3}
        >
          <div className="text-xl">
            <p className="mt-2">
              Il 5 settembre non sarà solo un corteo ma un&apos;intera giornata
              di orgoglio, comunità e lotta queer, che avrà come cuore pulsante
              il <b>Parco Pride a Campo Marte</b>
            </p>

            <p className="font-bold mt-2">
              Sarà attivo dalle 12 alle 21. Anche durante il corteo.
            </p>

            <p className="font-bold mt-2">
              📍{" "}
              <Link
                href={"https://maps.app.goo.gl/ksS1JTRGJ4zJWr1s5"}
                className="underline"
              >
                Campo Marte (Google Maps)
              </Link>
            </p>
          </div>
        </InfoCard>
        <InfoCard
          title=""
          backgroundColor="pink"
          hoverColor="pink"
          textColor="red"
          hoverTextColor="red"
          colSpan={3}
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
