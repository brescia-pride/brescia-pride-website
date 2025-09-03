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
                    colSpan={6}
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
                                        <p>14:00</p>
                                        <p>15:30</p>
                                    </td>
                                    <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                                        Inizio concentramento in Campo Marte con interventi e performance 📢
                                    </td>
                                </tr>
                                <tr className="text-xl font-bold border-b-2 border-red">
                                    <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                                        <p>15:30</p>
                                        <p>17:30</p>
                                    </td>
                                    <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                                        Corteo per la città 🏳️‍🌈🏳️‍⚧️
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-xl font-bold p-4 py-3 md:pr-8 md:py-4">
                                        <p>17:30</p>
                                        <p>21:00</p>
                                    </td>
                                    <td className="text-xl font-bold p-4 py-3 md:pl-8 md:py-4 border-l-2 border-red">
                                        Interventi e performance a Campo Marte 🎤
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

                        <nav
                            id="indice"
                            role="navigation"
                            aria-labelledby="toc-heading"
                            className="rounded-lg mt-2"
                        >
                            <div className="text-base text-lg font-bold sm:text-xl text-pink">
                                <ul className="mt-2 space-y-0.5">
                                    <li>🫂 <Link href="#spazio-associazioni" className="underline">Spazio associazioni</Link></li>
                                    <li>🎪 <Link href="#market" className="underline">Market</Link></li>
                                    <li>🐥 <Link href="#zona-piccole-creature" className="underline">Zona per piccole creature</Link></li>
                                    <li>🤍 <Link href="/accessibilita" className="underline">Zona bianca e zona ad alta visibilità</Link></li>
                                    <li>🏠 <Link href="https://www.ficomaeco.com/" className="underline">OH!FicoMaEco</Link></li>
                                    <li>🧁 <Link href="#foodtruck-bar" className="underline">Foodtruck</Link></li>
                                    <li>🍹 <Link href="#foodtruck-bar" className="underline">Stonewall Bar</Link></li>
                                    <li>🩺 <Link href="#area-salute" className="underline">Area salute e prevenzione</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </InfoCard>
                <ImageBlock
                    src="/images/mappa-parco.png"
                    altText="Mappa del Parco Pride"
                    showOnMobile={true}
                    link="/images/mappa-parco.png"
                    colSpan="col-span-3"
                />
                <InfoCard
                    title="Corteo"
                    backgroundColor="green"
                    hoverColor="green"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={3}
                >
                    <div className="text-xl">
                        <p className="mt-2">Alle 15:30 partirà il corteo da Campo Marte e arriverà sempre in Campo Marte alle 17:30</p>
                        <div className="w-full my-4">
                            <div className="h-1 w-full bg-pink-500"></div>
                            <div className="flex w-full">
                                <div className="flex-1 border-t border-dashed border-pink"></div>
                            </div>
                        </div>
                        <nav
                            id="indice"
                            role="navigation"
                            aria-labelledby="toc-heading"
                            className="rounded-lg mt-2"
                        >
                            <div className="text-base text-lg font-bold sm:text-xl text-pink">

                                <ul className="mt-2 space-y-0.5">
                                    <li>🗺️ <Link href="#mappa" className="underline">Mappa interattiva del corteo</Link></li>
                                    <li>🛻 <Link href="#carri" className="underline">Carri</Link></li>
                                    <li>🎪 <Link href="https://www.instagram.com/p/DNK0TE5oRYk/?utm_source=ig_web_copy_link&igsh=MWs3bjZwdXdjdWp4dA==" className="underline">Testa del corteo</Link></li>
                                    <li>🤍 <Link href="/accessibilita" className="underline">Zona di decompressione</Link></li>
                                    <li>💗 <Link href="https://www.instagram.com/p/DNSgTkhMtu4/?utm_source=ig_web_copy_link&igsh=MTQ1ZmR0YTJrZWdwYw==" className="underline">Madrine</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </InfoCard>
                <ImageBlock
                    src="/images/mappa-corteo.png"
                    altText="Mappa del corteo"
                    showOnMobile={true}
                    colSpan="col-span-3"
                />
                <InfoCard
                    title="Accessibilità"
                    backgroundColor="red"
                    hoverColor="red"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={6}
                >
                    <div className="text-xl">
                        <p className="mt-2">
                            Per tutte le informazioni sull&apos;accessibilità, visita la <Link href="/accessibilita" className="underline">pagina dedicata</Link>!
                        </p>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Mappa interattiva"
                    backgroundColor="pink"
                    hoverColor="pink"
                    textColor="red"
                    hoverTextColor="red"
                    colSpan={6}
                    id="mappa"
                >
                    {/* Mappa */}
                    <section id="mappa" className="mt-4 scroll-mt-8" aria-labelledby="mappa-title">
                        <p className="text-center text-base sm:text-lg md:text-xl font-bold leading-relaxed max-w-4xl mx-auto">
                            La mappa contiene informazioni su Campo Marte, il percorso del corteo e i servizi accessibili.
                        </p>
                        <div className="mt-4 text-center w-full max-w-5xl mx-auto">
                            <iframe
                                src="https://www.google.com/maps/d/u/0/embed?mid=1TlU5uyFT7IKSayHC6hfm80i8dWsF1sc&ehbc=2E312F"
                                className="rounded-lg w-full h-[400px] sm:h-[500px] border-2 border-blue/30"
                                title="Mappa accessibilità Brescia Pride con informazioni su Campo Marte, percorso corteo e servizi accessibili"
                                aria-label="Mappa interattiva di Google che mostra i percorsi accessibili e i servizi disponibili durante il Brescia Pride"
                                tabIndex={0}
                            ></iframe>
                        </div>
                        <div className="mt-4 text-center">
                            <Button className="flex items-center justify-center w-full px-4 py-2 bg-red text-pink hover:bg-pink hover:text-red text-lg font-bold rounded-lg transition-colors duration-200 border-2 border-red">
                                <Link href="https://www.google.com/maps/d/u/0/embed?mid=1TlU5uyFT7IKSayHC6hfm80i8dWsF1sc&ehbc=2E312F">🗺️ Apri su Google Maps</Link>
                            </Button>
                        </div>
                    </section>
                </InfoCard>
                <InfoCard
                    title="Spazio associazioni"
                    backgroundColor="pink"
                    hoverColor="pink"
                    textColor="red"
                    hoverTextColor="red"
                    colSpan={3}
                    id="spazio-associazioni"
                >
                    <div className="text-xl">
                        <p className="mt-2">
                            Nel Parco Pride ci sarà un&apos;area dedicata ai banchetti informativi e di autofinanziamento di realtà, associazioni e collettivi locali.</p>
                        <p className="mt-2 font-bold">Saranno con noi:</p>
                        <ul className="mt-2">
                            <li>Oasi Fortuna</li>
                            <li>Gazebo Viola</li>
                            <li>Comitato 8 marzo</li>
                            <li>Casa delle Donne</li>
                            <li>Watermelon Friends</li>
                            <li>Centro Aristofane</li>
                            <li>Brescia +Gentile</li>
                            <li>Famiglie Arcobaleno</li>
                            <li>Colazione da Tiffany</li>
                            <li>Progetto GAPP</li>
                            <li>Pianeta Viola</li>
                            <li>Equanime</li>
                            <li>Mask.You</li>
                            <li>Anda</li>
                            <li>CFST</li>
                            <li>Assenze Ingiustificate</li>
                            <li>Brescia Checkpoint</li>
                            <li>Arcigay Orlando</li>
                            <li>Medici senza Frontiere</li>
                            <li>Extinction Rebellion Brescia</li>
                        </ul>
                        <p className="mt-2 font-bold"><Link href="https://www.instagram.com/p/DMuodh_I30Y/?utm_source=ig_web_copy_link" className="underline">Più info al post di Instagram</Link>!
                        </p>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Market"
                    backgroundColor="blue"
                    hoverColor="blue"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={3}
                    id="market"
                >
                    <div className="text-xl">
                        <p className="mt-2">
                            Nel Parco Pride prenderà vita l&apos;<strong>Area Queer Market e Autoproduzioni</strong>: uno spazio pensato per dare visibilità ad artigianə, artistə e creativə indipendenti e locali, che con la loro passione e creatività raccontano storie di resistenza, queerness e celebrazione delle unicità</p>
                        <p className="mt-2 font-bold">Saranno con noi:</p>
                        <ul className="mt-2">
                            <li>Figli delle stelle</li>
                            <li>Gentee</li>
                            <li>Tralelune</li>
                            <li>Bohème Studio</li>
                            <li>Stræss</li>
                            <li>Ti regalo un cuore</li>
                            <li>Animalessandra</li>
                            <li>Crazy Pigeon</li>
                            <li>Iotelodico</li>
                            <li>Loving Landscapes</li>
                            <li>La Vulvottega</li>
                        </ul>
                        <p className="mt-2 font-bold"><Link href="https://www.instagram.com/p/DNiExLKI7S6/?utm_source=ig_web_copy_link&igsh=bmV0YjZlbDNwZ3ln" className="underline">Più info al post di Instagram</Link>!
                        </p>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Zona Piccole Creature"
                    backgroundColor="green"
                    hoverColor="green"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={3}
                    id="zona-piccole-creature"
                >
                    <div className="text-xl">
                        <p className="mt-2">
                            Durante la giornata ci sarà una zona dedicata a bimbə e famiglie a cura di <Link href="https://www.instagram.com/siamogatti/" className="underline">Siamo Gatti</Link> in cui giocare, disegnare e partecipare a laboratori creativi pensati per loro!</p>
                        <p className="mt-2 font-bold"><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfTDO6wUrZepWmLC9HeQoXy3q0MoGNu_9PnRojQY5lsRaJhLQ/viewform?pli=1" className="underline">Per partecipare ai laboratori è necessario registrarsi! Clicca qui</Link>!
                        </p>
                        <p className="mt-2 font-bold"><Link href="https://www.instagram.com/p/DNV8A39ohNF/?utm_source=ig_web_copy_link&igsh=MXhwbTZ5Z3hkNjBvOA==" className="underline">Più info al post di Instagram</Link>!
                        </p>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Carri"
                    backgroundColor="red"
                    hoverColor="red"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={3}
                    id="carri"
                >
                    <div className="text-xl">
                        <p className="mt-2">Ecco nell&apos;ordine i carri e le zone speciali del corteo:</p>
                        <ul className="mt-2">
                            <li>🚚</li>
                            <li>Centro Aritofane & Colazione da Tiffany</li>
                            <li>🚚</li>
                            <li>Werk! Collective</li>
                            <li>⭐</li>
                            <li>Spezzone palestina</li>
                            <li>🚚</li>
                            <li>Èlive + Famiglie Arcobaleno</li>
                            <li>⭐</li>
                            <li>ZONA BIANCA</li>
                            <li>🚚</li>
                            <li>Figli delle stelle + Industrial Barber Shop</li>
                            <li>⭐</li>
                            <li>Spezzone studentesco</li>
                            <li>🚚</li>                            <li>Powered by Karonte Cultural Club, con Red Moon, Collettivo Pirati dell&apos;Oglio & Non una di meno Lago di Garda</li>
                            <li>🚚</li>
                            <li>Illogic Radio</li>
                        </ul>
                        <p className="mt-2 font-bold"><Link href="https://www.instagram.com/p/DNJJoEPoRTN/?utm_source=ig_web_copy_link&igsh=MXI2bTBsZ2Y2a3Vtcg==" className="underline">Più info al post di Instagram</Link>!
                        </p>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Foodtruck e Drink"
                    backgroundColor="pink"
                    hoverColor="pink"
                    textColor="red"
                    hoverTextColor="red"
                    colSpan={3}
                    id="foodtruck-bar"
                >
                    <div className="text-xl">
                        <p className="mt-2">
                            <b>L&apos;Area Food</b> e lo <b>Stonewall Bar</b> saranno aperti tutta la giornata. Vi aspettiamo a pranzo e a cena con proposte vegane, piatti inclusivi e attenti alle intolleranze. Allo <b>Stonewall Bar</b>, realizzato insieme a Diluvio Festival, troverete drink (anche analcolici), Gaza Cola, cocktail e birra.
                        </p>
                        <p className="mt-2 font-bold">Saranno con noi:</p>
                        <ul className="mt-2">
                            <li>Drop Gelateria</li>
                            <li>Pedalabile</li>
                            <li>Schiaccinoteca</li>
                            <li>Mezamì</li>
                            <li>Agrodolci</li>
                            <li>Labi</li>
                        </ul>
                        <p className="mt-2 font-bold"><Link href="https://www.instagram.com/p/DN8GINiiDEu/?utm_source=ig_web_copy_link&igsh=MTI5amd2d3g5dW9ldA==" className="underline">Più info al post di Instagram</Link>!
                        </p>
                    </div>
                </InfoCard>
                <InfoCard
                    title="Area salute e prevenzione"
                    backgroundColor="blue"
                    hoverColor="blue"
                    textColor="pink"
                    hoverTextColor="pink"
                    colSpan={3}
                    id="area-salute"
                >
                    <div className="text-xl">
                        <p className="mt-2">
                        Nel Parco Pride ci saranno <b>ASST Spedali Civili</b> e <b>Centro IST</b> con un'area vaccini e di promozione della salute sessuale. 
                        </p>
                        <p className="mt-2 font-bold">All'area vaccini ASST Spedali Civili dalle 14 alle 20 offrirà gratuitamente il vaccino HPV (Papilloma virus) e le altre vaccinazioni previste dal piano regionale.</p>
                        <ul className="mt-2">
                            <li>👉 Non è necessario prenotarsi</li>
                            <li>👉 È consigliato (ma non obbligatorio) portare la tessera sanitaria per chi ne è in possesso</li>
                            <li>👉 Le altre vaccinazioni incluse nel piano regionale saranno proposte direttamente dal personale ASST</li>
                        </ul>
                        <p className="mt-2">
                        Nell'area associazioni troverete il <b>banchetto informativo sulla salute sessuale a cura di Brescia Checkpoint</b>, uno spazio di ascolto e accoglienza dove parlare insieme di prevenzione e benessere sessuale per tuttɜ, PrEP per proteggersi dall’HIV, Educazione all’affettività e Vaccini e Test IST (Infezioni Sessualmente Trasmissibili).
                        </p>

                        <p className="mt-2 font-bold"><Link href="https://www.instagram.com/p/DN3Rn-G0Bo0/?utm_source=ig_web_copy_link&igsh=azVlaDNmY2JlaHJh" className="underline">Più info al post di Instagram</Link>!
                        </p>
                        <p className="mt-2 font-bold"><Link href="https://www.bresciacheckpoint.it/" className="underline">Più info anche sul sito di Brescia Checkpoint</Link>!
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
                        Questa pagina è in continuo aggiornamento! Vi aspettiamo il 6 settembre! 🫶
                    </p>
                    <p className="text-xl mt-2">Non trovi le info che cerchi? <Link href="/contact" className="underline">Contattaci!</Link></p>
                </InfoCard>
                <CustomFooter />
            </motion.div>
        </div>
    );
};