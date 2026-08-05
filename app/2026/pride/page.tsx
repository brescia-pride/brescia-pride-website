"use client";

import React from "react";
import PrideDate from "@/app/ui/components/PrideDate";
import InfoCard from "@/app/ui/components/InfoCard";
import { Link } from "react-aria-components";
import ImageBlock from "@/app/ui/components/ImageBlock";
export default function PridePage() {
  return (
    <div aria-label="pride" className="flex grid md:grid-cols-12 grid-cols-1">
      <InfoCard
        title="Programma"
        backgroundColor="lime"
        hoverColor="lime"
        textColor="purple"
        hoverTextColor="purple"
        colSpan={6}
      >
        <div className="p-4">
          <table className="w-full align-middle text-center border-spacing-5">
            <tbody>
              <tr className="text-xl font-bold border-b-2 border-purple">
                <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                  <p>12:00</p>
                  <p>21:00</p>
                </td>
                <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-purple">
                  Parco Pride a Campo Marte 🌳
                </td>
              </tr>
              <tr className="text-xl font-bold border-b-2 border-purple">
                <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                  <p>14:30</p>
                  <p>15:30</p>
                </td>
                <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-purple">
                  Concentramento in Campo Marte con interventi e performance 📢
                </td>
              </tr>
              <tr className="text-xl font-bold border-b-2 border-purple">
                <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                  <p>15:30</p>
                  <p>18:00</p>
                </td>
                <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-purple">
                  Corteo per la città 🏳️‍🌈🏳️‍⚧️
                </td>
              </tr>
              <tr>
                <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                  <p>18:00</p>
                  <p>21:00</p>
                </td>
                <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-purple">
                  Interventi e performance a Campo Marte 🎤
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </InfoCard>
      <InfoCard
        title="Parco Pride"
        backgroundColor="lightblue"
        hoverColor="lightblue"
        textColor="red"
        hoverTextColor="red"
        colSpan={6}
      >
        <div className="text-xl md:w-96">
          <p className="mt-2">
            Il 5 settembre non sarà solo un corteo ma un&apos;intera giornata di
            orgoglio, comunità e lotta queer, che avrà come cuore pulsante il{" "}
            <b>Parco Pride a Campo Marte</b>
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
        colSpan={6}
      >
        <p className="text-xl font-bold w-96">
          Questa pagina è in continuo aggiornamento! 
        </p>
        <p>

          Vi aspettiamo il 5 settembre! 🫶
        </p>
        <p className="text-xl mt-2">
          Non trovi le info che cerchi?{" "}
          <Link href="/contact" className="underline">
            Contattaci!
          </Link>
        </p>
      </InfoCard>

    </div>
  );
}
