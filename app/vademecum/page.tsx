"use client";

import React, { ReactElement } from "react";
import InstagramPost from "../ui/components/InstagramPost";
import { FiArrowRight } from "react-icons/fi";

export default function Page() {
    const copy: ReactElement = <div>
        <a
            href="https://docs.google.com/document/d/1SkDCVYLZMCDMn6iEdkS6qZnDS-TDDAMhW_sISIoLxSQ/edit?usp=sharing"
            target="_blank"
            className="mb-2 text-sm flex items-center hover:underline"
        >
            Leggi il Vademecum su Google Docs<FiArrowRight />
        </a>
        <a
            href="https://docs.google.com/document/d/1SkDCVYLZMCDMn6iEdkS6qZnDS-TDDAMhW_sISIoLxSQ/export?format=pdf"
            target="_blank"
            className="text-sm flex items-center hover:underline"
        >
            Scarica il vademecum in PDF<FiArrowRight />
        </a>
    </div>

    const slide1 = { src: "/vademecum/Vademecum-1.png", altText: "VADEMECUM" };
    const slide3 = { src: "/vademecum/Vademecum-3.png", altText: "TEAM CURA: Il 7 settembre ci sarà una squadra di persone volontarie dedicate all'accessibilità e alla cura, le riconoscerai perché avranno la maglietta fucsia. Se sei vittima di una molestia oppure assisti a una situazione simile, non esitare a interfacciarti con le persone volontarie." };
    const slide4 = { src: "/vademecum/Vademecum-4.png", altText: "TAPPI E STIM TOYS: A destra del palco vicino all'ambulanza ci sarà un gazebo Brescia Pride in cui potrai ritirare tappi e stim toys quando vorrai. Le persone del team cura avranno sempre a disposizione dei tappi, chiedi a loro per averli!" };
    const slide5 = { src: "/vademecum/Vademecum-5.png", altText: "ZONA BIANCA CORTEO: La zona bianca nel corteo sarà nella prima parte del corteo tra il secondo carro che non emetterà musica e la zona dedicata alle famiglie. La zona bianca nel corteo sarà segnalata da palloncini bianchi e da un lenzuolo in testa; qui non si possono utilizzare fischietti e fotografare le persone." };
    const slide6 = { src: "/vademecum/Vademecum-6.png", altText: "ZONA BIANCA DECOMPRESSIONE: La zona di decompressione durante il corteo è uno spazio sicuro, utile per riposare e decomprimere dove troverai le persone volontarie pronte ad accoglierti. La zona di decompressione durante il corteo si troverà in parco Zanardelli lungo via Vittorio Emanuele II e sarà contrassegnata con dei palloncini bianchi." };
    const slide7 = { src: "/vademecum/Vademecum-7.png", altText: "ZONA BIANCA PIAZZA: La zona bianca in piazza sarà attiva prima, durante e dopo il corteo e sarà posizionata a destra del palco sotto i portici. Sarà segnalata con dei palloncini bianchi e presidiata dalle persone del comitato e volontarie." };
    const slide8 = { src: "/vademecum/Vademecum-8.png", altText: "COSA FARE IN ZONA BIANCA: Aiutaci a mantenere le zone bianche e di decompressione tranquille e silenziose. Evitare rumori, urla, suoni, fischi; evitare musica forte; non filmare e non fotografare le persone; non toccare le persone; non sparare con le pistole ad acqua." };
    const slide9 = { src: "/vademecum/Vademecum-9.png", altText: "ZONA AD ALTA VISIBILITÀ: Davanti al palco sarà delimitata con lenzuola bianche un'area riservata a persone con disabilità che necessitano di buona visibilità per godersi gli interventi, vedere l'interprete LIS, stare più vicine alle casse per sentire meglio o utilizzare app di trascrizione automatica, hanno bisogno di sedersi." };

    const instagramData = { title: "Vademecum Accessibilità", description: copy, slides: [slide1, slide3, slide4, slide5, slide6, slide7, slide8, slide9], bgColor: "#d4f3b8", textColor: "#523376" };

    return (
        <InstagramPost {...instagramData} />
    )
}