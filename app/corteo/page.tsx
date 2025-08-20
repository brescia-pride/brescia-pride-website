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
                    colSpan={3}
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
                                className="flex items-center justify-center w-full px-4 py-2 bg-red text-pink hover:bg-pink hover:text-red text-lg font-bold rounded-lg transition-colors duration-200 border-2 border-red"
                            >
                                📥 Scarica la locandina da condividere!
                            </Button>
                        </div>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Parco Pride"
                    backgroundColor="blue"
                    hoverColor="blue"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={3}
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
                            <li>🤍 <Link href="/accessibilita" className="underline">Zona bianca</Link></li>
                            <li>🎪 <Link href="https://www.instagram.com/p/DNiExLKI7S6/?utm_source=ig_web_copy_link&igsh=bmV0YjZlbDNwZ3ln" className="underline">Market</Link></li>
                            <li>🏠 OH!FicoMaEco</li>
                            <li>🧁 Foodtruck</li>
                            <li>🍹 Stonewall Bar</li>
                            <li>🐥 <Link href="https://www.instagram.com/p/DNV8A39ohNF/?utm_source=ig_web_copy_link&igsh=MXhwbTZ5Z3hkNjBvOA==" className="underline">Zona per piccole creature</Link></li>
                        </ul>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Corteo"
                    backgroundColor="green"
                    hoverColor="green"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={3}
                >
                    <div className="text-xl">
                        <p className="mt-2">Dalle 15:30 partirà il corteo da Campo Marte e arriverà sempre in Campo Marte alle 17:30</p>
                        <div className="w-full my-4">
                            <div className="h-1 w-full bg-pink-500"></div>
                            <div className="flex w-full">
                                <div className="flex-1 border-t border-dashed border-pink"></div>
                            </div>
                        </div>

                        <ul className="mt-2">
                            <li>🗺️ <Link href="https://www.google.com/maps/d/u/0/edit?mid=1TlU5uyFT7IKSayHC6hfm80i8dWsF1sc&usp=sharing" className="underline">Mappa del corteo</Link></li>
                            <li>🎪 <Link href="https://www.instagram.com/p/DNK0TE5oRYk/?utm_source=ig_web_copy_link&igsh=MWs3bjZwdXdjdWp4dA==" className="underline">Testa del corteo</Link></li>
                            <li>🛻 <Link href="https://www.instagram.com/p/DNJJoEPoRTN/?utm_source=ig_web_copy_link&igsh=MXI2bTBsZ2Y2a3Vtcg==" className="underline">Carri</Link></li>
                            <li>🤍 <Link href="/accessibilita" className="underline">Zona di decompressione</Link></li>
                            <li>💗 <Link href="https://www.instagram.com/p/DNSgTkhMtu4/?utm_source=ig_web_copy_link&igsh=MTQ1ZmR0YTJrZWdwYw==" className="underline">Madrine</Link></li>
                        </ul>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Accessibilità"
                    backgroundColor="red"
                    hoverColor="red"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={3}
                >
                    <div className="text-xl">
                        <p className="mt-2">
                        Per tutte le informazioni sull&apos;accessibilità, visita la <Link href="/accessibilita" className="underline">pagina dedicata</Link>!
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