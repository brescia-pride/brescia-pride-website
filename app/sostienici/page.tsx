"use client";

import React from "react";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import ImageBlock from "../ui/components/ImageBlock";
import DonationSection from "../ui/components/DonationSection";
import DonationCard from "../ui/components/DonationCard";
import {motion} from "framer-motion";
import {Link} from "react-aria-components";

export default function SostieniciPage() {

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
                <Header size={6}/>
                <DonationSection
                    title="Sostienici"
                    description="Aiutaci a restare un pride autofinanziato e indipendente con una donazione."
                    backgroundColor="blue"
                >
                    <DonationCard
                        title="5x1000"
                        backgroundColor="lilac"
                        hoverColor="purple"
                        textColor="purple"
                        hoverTextColor="lilac"
                        colSpan={2}
                    >
                        <p className="text-xl font-bold">
                            Codice Fiscale 98201800178
                        </p>
                        <p className="text-xl">
                            Compila la sezione a &quot;Sostegno degli enti del terzo settore iscritti nel
                            RUNTS...&quot; come nell&apos;immagine.
                        </p>
                    </DonationCard>
                    <ImageBlock
                        src="/images/5-1000.png"
                        altText="Esempio compilazione del 5x1000 per COMITATO BRESCIA PRIDE, Codice Fiscale: 98201800178. La sezione a sostegno degli enti del terzo settore iscritti nel RUNTS è compilata con il codice fiscale."
                        showOnMobile={true}
                        colSpan="col-span-2"
                    />
                    <DonationCard
                        title="PayPal"
                        backgroundColor="pink"
                        hoverColor="red"
                        textColor="red"
                        hoverTextColor="pink"
                        colSpan={2}
                    >
                        <p className="text-xl font-bold">
                            <Link className={`col-span-3 underline`}
                                  href="https://www.paypal.com/paypalme/bresciapride">Clicca qui</Link> o
                            cerca &quot;info@bresciapride.it&quot; direttamente da PayPal
                        </p>
                        <p className="text-xl">
                            Scegli l&apos;opzione &quot;famigliari e amici&quot;.
                        </p>
                    </DonationCard>
                    <DonationCard
                        title="Bonifico"
                        backgroundColor="green"
                        hoverColor="pink"
                        textColor="pink"
                        hoverTextColor="green"
                        colSpan={2}
                    >
                        <p className="text-xl">
                            Destinatario: <b>Comitato Brescia Pride ETS</b>
                        </p>
                        <p className="text-xl">
                            Causale: <b>Libera donazione</b>
                        </p>
                        <p className="text-lg mt-2 break-all">
                            IT49I0501811200000016783060
                        </p>
                    </DonationCard>
                </DonationSection>
                <CustomFooter/>
            </motion.div>
        </div>
    );
};