"use client";

import React from "react";
import TextPage from "@/app/ui/components/TextPage";

export default function Comunicato() {
    const mainColor = "blue";
    const secondaryColor = "lightblue"

    const title = "Vademecum fotografico"
    const subtitle = ""

    const titleClassName = `font-bold text-2xl mt-2 text-${mainColor}`;
    const subtitleClassName = `font-bold text-2xl mt-2 text-${mainColor}`;
    const textClassName = "text-xl mt-2";

    const content = (
        <div>
            <p className={textClassName}>
                <b>Il Pride è uno spazio pubblico, ma non tutte le persone che vi
                partecipano hanno fatto coming out, e per alcune essere riconoscibili
                in una fotografia può avere conseguenze concrete sul lavoro, in
                famiglia o nel proprio contesto d&apos;origine.</b> Ti chiediamo di tenerne
                conto: raccontare la manifestazione e proteggere chi la attraversa non
                sono obiettivi in conflitto.
            </p>
            <h2 className={subtitleClassName}>
                Aree in cui non è consentito riprendere persone riconoscibili
            </h2>
            <p className={textClassName}>
                La <b>Zona Bianca di decompressione</b> e l&apos;<b>Area Salute & Prevenzione</b> sono
                spazi in cui le persone si trovano in condizioni di particolare
                vulnerabilità: chi si vaccina, chi chiede informazioni sulla salute
                sessuale o chi ha bisogno di allontanarsi dalla folla non può
                ritrovarsi in un servizio giornalistico. In queste aree sono possibili
                riprese di contesto solo se nessuna persona è identificabile.
            </p>
            <h2 className={subtitleClassName}>
                Consenso</h2>
            <p className={textClassName}>
                <b>Chiediamo di raccogliere il consenso prima di realizzare primi piani o
                ritratti riconoscibili, e di rispettare sempre un rifiuto, anche se
                espresso a scatto già avvenuto.</b> Le persone che indossano un adesivo di colore rosso, rappresentante una macchina fotografica barrata con la scritta &quot;NO PHOTO&quot;; &quot;NO VIDEO&quot; recuperabile all&apos;Infopoint, al Media Corner o nella Zona Bianca, hanno scelto di non essere fotografate: ove possibile, ti chiediamo di non riprenderle e di escluderle dalle inquadrature.
            </p>
            <h2 className={subtitleClassName}>
                Persone minorenni</h2>
            <p className={textClassName}>
                <b>Non è consentito realizzare fotografie o riprese di persone minorenni
                riconoscibili senza il consenso di chi ne ha la responsabilità
                genitoriale</b>.
            </p>
            <h2 className={subtitleClassName}>
                Nel dubbio</h2>
            <p className={textClassName}>
                Lɜ volontariɜ e le persone presenti all&apos;Info
                Point sono a disposizione per chiarimenti durante tutta la giornata.
            </p>
        </div>
    );

    return (
        <TextPage title={title} subtitle={subtitle} textColor={mainColor} bgColor={secondaryColor}>
            {content}
        </TextPage>
    );
}
