"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import ImageBlock from "../ui/components/ImageBlock";
import InfoCard from "../ui/components/InfoCard";
import DonationSection from "../ui/components/DonationSection";
import ApplicationCard from "../ui/components/ApplicationCard";
import ResourceCard from "../ui/components/ResourceCard";
import { Button } from "react-aria-components";
import Link from "next/link";

export default function CorteoPage() {

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
                    colSpan={2}
                >
                    <div className="p-4">
                        <h1 className="text-xl font-bold mt-2 mb-2">📍 Campo Marte</h1>
                        <table className="w-full align-middle text-center border-spacing-5">
                            <tbody>
                                <tr className="text-xl font-bold border-b-2 border-red">
                                    <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                                        <p>12:00</p>
                                        <p>21:00</p>
                                    </td>
                                    <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                                        Parco Pride 🌳
                                    </td>
                                </tr>
                                <tr className="text-xl font-bold border-b-2 border-red">
                                    <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                                        14:00
                                    </td>
                                    <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                                        Inizio interventi 📢
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                                        <p>15:30</p>
                                        <p>17:30</p>
                                    </td>
                                    <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                                        Corteo per la città 🏳️‍🌈🏳️‍⚧️
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="mt-4 text-center">
                            <Button
                                onPress={() => {
                                    const link = document.createElement('a');
                                    link.href = '/images/locandina.png';
                                    link.download = 'locandina.png';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                className="flex items-center justify-center w-full px-4 py-2 bg-pink text-red hover:bg-red hover:text-pink text-lg font-bold rounded-lg transition-colors duration-200 border-2 border-red"
                            >
                                📥 Scarica la locandina da condividere!
                            </Button>
                        </div>
                    </div>
                </InfoCard>
                <DonationSection
                    title="Partecipa al Pride"
                    description="Aiutaci a realizzare il Brescia Pride! Puoi partecipare in diversi modi:"
                    backgroundColor="green"
                    colSpan={4}
                    innerGridCols={1}
                >
                    <ApplicationCard
                        title="VOLONTARI3"
                        description="Compila il form per partecipare come volontariə!"
                        href="https://forms.gle/NT7ZvwKmc24Lv21n8"
                        emoji="🫂"
                        hoverColor="purple"
                        textColor="purple"
                        hoverTextColor="pink"
                        isExternal={true}
                        colSpan={1}
                    />
                    <ApplicationCard
                        title="Collettivi e associazioni"
                        description="Compila il form per aderire a Brescia Pride!"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd0ovmwseUl8aUlGKPYdkP7iHwZ0GKN7uja_mQ1yx_KD45cVw/viewform?pli=1"
                        emoji="🎉"
                        hoverColor="blue"
                        textColor="blue"
                        hoverTextColor="pink"
                        isExternal={true}
                        colSpan={1}
                    />
                    <ApplicationCard
                        title="Donazioni"
                        description="Vuoi sostenerci con una donazione?"
                        href="/sostienici"
                        emoji="🫶"
                        hoverColor="red"
                        textColor="red"
                        hoverTextColor="pink"
                        isExternal={true}
                        colSpan={1}
                    />
                </DonationSection>
                <InfoCard
                    title="Parco Pride"
                    backgroundColor="blue"
                    hoverColor="blue"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={2}
                >
                    <div className="text-xl">
                        <p className="mt-2">Il 6 settembre non sarà solo un corteo ma un&apos;intera giornata di orgoglio, comunità e lotta queer, che avrà come cuore pulsante il Parco Pride a Campo Marte</p>

                        <p className="font-bold mt-2">Sarà attivo dalle 12 alle 21. Anche durante il corteo.</p>

                        <div className="w-full my-4">
                            <div className="h-1 w-full bg-pink-500"></div>
                            <div className="flex w-full">
                                <div className="flex-1 border-t border-dashed border-pink"></div>
                            </div>
                        </div>

                        <ul className="mt-2">
                            <li>🫂 <Link href="https://www.instagram.com/p/DMuodh_I30Y/?utm_source=ig_web_copy_link&igsh=MTQyeGs2OHlvY2JyZg==" className="underline">Spazio associazioni</Link></li>
                            <li>🩺 Area salute e prevenzione</li>
                            <li>🤍 Zona bianca</li>
                            <li>🎪 Market</li>
                            <li>🏠 OH!FicoMaEco</li>
                            <li>🧁 Foodtruck</li>
                            <li>🍹 Stonewall Bar</li>
                            <li>🐥 Zona per piccole creature</li>
                        </ul>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Diretta"
                    backgroundColor="green"
                    hoverColor="green"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={2}
                >
                    <div className="text-xl">
                        <p className="mt-2 font-bold">
                            Dalle 15 alle 18:50 segui il corteo e gli interventi dal palco in diretta:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li>sul sito <Link href="https://www.elivebrescia.tv" className="underline">www.elivebrescia.tv</Link></li>
                            <li>in diretta <Link href="https://www.facebook.com/elivebrescia" className="underline">Facebook</Link> e <Link href="https://www.youtube.com/@elivebresciatv365" className="underline">YouTube</Link> di Èlive (con sottotitoli)</li>
                            <li>sul canale TV 181 (per chi è in provincia di Brescia)</li>
                        </ul>
                        <p className="mt-2 font-bold">🧏‍♀️ La diretta includerà l&apos;interprete LIS, visibile su tutte le piattaforme.</p>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Carri"
                    backgroundColor="purple"
                    hoverColor="purple"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={2}
                >
                    <div className="text-xl">
                        <ul className="mt-2">
                            <li>Centro Aritofane & Colazione da Tiffany</li>
                            <li className="flex items-center my-2 justify-center" aria-hidden="true">
                                <span className="text-pink-500">★</span>
                            </li>
                            <li>Werk! Collective</li>
                            <li className="flex items-center my-2 justify-center" aria-hidden="true">
                                <span className="text-pink-500">★</span>
                            </li>
                            <li>Èlive + Famiglie Arcobaleno</li>
                            <li className="flex items-center my-2 justify-center" aria-hidden="true">
                                <span className="text-pink-500">★</span>
                            </li>
                            <li>Figli delle stelle + Industrial Barber Shop</li>
                            <li className="flex items-center my-2 justify-center" aria-hidden="true">
                                <span className="text-pink-500">★</span>
                            </li>
                            <li>Collettivo Pirati dell&apos;Oglio + Red Moon + Non una di meno Lago di Garda - Powered By Karonte Cultural club</li>
                            <li className="flex items-center my-2 justify-center" aria-hidden="true">
                                <span className="text-pink-500">★</span>
                            </li>
                            <li>Illogic Radio</li>
                        </ul>
                    </div>
                </InfoCard>
                <DonationSection
                    title="Info utili"
                    description=""
                    backgroundColor="purple"
                    colSpan={4}
                    innerGridCols={1}
                >
                    <ResourceCard
                        title="Comunicato stampa"
                        description="27/06 - Brescia Pride 2025: il 6 settembre torna la manifestazione per i diritti LGBTQIA+"
                        actionText="Leggi il comunicato"
                        href="docs/comunicato-stampa-27-06.pdf"
                        hoverColor="red"
                        colSpan={1}
                    />
                </DonationSection>
                <InfoCard
                    title=""
                    backgroundColor="pink"
                    hoverColor="pink"
                    textColor="red"
                    hoverTextColor="red"
                    colSpan={2}
                >
                    <p className="text-xl font-bold">
                        Tutte le info sul corteo saranno pubblicate a breve! Tieni d&apos;occhio questa pagina
                        🫶
                    </p>
                </InfoCard>
                <CustomFooter />
            </motion.div>
        </div>
    );
};