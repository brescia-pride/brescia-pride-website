"use client";

import React from "react";
import TextPage from "@/app/ui/components/TextPage";

export default function Comunicato() {
  const mainColor = "blue";
  const secondaryColor = "lightblue"

  const title = "Comunicato stampa"
  const subtitle = "Dall&apos;1 al 3 settembre BLABLAQUEER: tre giorni di talk, incontri e mostre al MO.CA verso il Brescia Pride"

  const subtitleClassName = `font-bold text-2xl mt-2 text-${mainColor}`;
  const textClassName = "mt-2 text-lg";

  const content = (
    <div>
      <p className={textClassName}><em>Sei appuntamenti gratuiti su cultura ballroom, neurodivergenza, educazione sessuale,storie queer dal mondo arabo e l&apos;esperienza LGBTQIA+ a Brescia.</em> <em>In Sala Talk anche la mostra fotografica «Mettiamoci la faccia».</em></p>
      <p className={textClassName}><b>BRESCIA, 27 agosto 2026</b> – In preparazione alla settima edizione di Brescia Pride, in programma sabato 5 settembre a Campo Marte, il Comitato Brescia Pride ETS presenta <b>BLABLAQUEER – Aspettando Brescia Pride</b>: una rassegna di talk e incontri ospitata dall&#39;<b>1 al 3 settembre al MO.CA – Centro per le Nuove Culture</b>, con due appuntamenti al giorno, alle 16:30 in Sala Talk e alle 18:00 nella Corte del Palazzo Martinengo Colleoni di Malpaga.</p>
      <p className={textClassName}>Tre giorni, patrocinati dal Comune di Brescia, costruiti insieme alle realtà del territorio che lavorano tutto l&#39;anno per fare cultura queer e affrontare collettivamente domande che raramente trovano spazio nel dibattito pubblico.</p>
      <p className={textClassName}><em>“BLABLAQUEER nasce come un percorso a più voci, costruito con le associazioni locali che ogni giorno fanno divulgazione per dare spazio alle identità che vivono il territorio bresciano. Tre giorni per prepararci al corteo con più consapevolezza, in uno spazio della città aperto a chiunque voglia attraversarlo”</em> dichiara <b>Tima Musin</b>, responsabile coordinamento evento BLABLAQUEER per Brescia Pride.</p>
      <p className={subtitleClassName}>Il programma</p>
      <p className={textClassName}><b>Martedì 1 settembre</b> 16:30 – <em>Do you vogue in the language?</em> Talk sulla cultura ballroom con Bres-HA!, Lou Pinelli, Medusa 007, Giancarlo Covella. 18:00 – <em>Neuroqueer.</em> Incontro sulle esperienze che uniscono neurodivergenza e comunità LGBTQIA+, a cura dell&#39;Associazione NeuroDivergenti Adult*.</p>
      <p className={textClassName}><b>Mercoledì 2 settembre</b> 16:30 – <em>Insieme Queer.</em> Momento di aggregazione e preparazione collettiva dei cartelloni per il corteo. 18:00 – <em>Perché l&#39;educazione sessuale è diventata una questione politica?</em> Tavola rotonda transfemminista su educazione, diritti e autodeterminazione con Brescia Checkpoint, Non Una Di Meno Brescia e Assenze Ingiustificate.</p>
      <p className={textClassName}><b>Giovedì 3 settembre</b> 16:30 – <em>Queer: tra essere e fare, parliamone!</em> Incontro orizzontale facilitato dal Comitato, per orientarsi nella comunità, nell&#39;attivismo e nella scoperta di sé. 18:00 – <em>Arabə e Queer.</em> Presentazione del libro con Zeyn Joukhadar, tra le voci che hanno contribuito al testo, in collaborazione con il Centro Antidiscriminazioni LGBTQIA+ Aristofane.</p>
      <p className={subtitleClassName}>La mostra</p>
      <p className={textClassName}>Dall&#39;1 al 3 settembre 2026 la Sala Talk ospita <b>«Mettiamoci la faccia»</b>, il progetto fotografico con cui il Comitato Brescia Pride ha raccolto ritratti e parole di persone LGBTQIA+ del territorio bresciano. </p>
      <p className={textClassName}>A chiusura della rassegna, giovedì 3 settembre alle ore 21:30 la Corte ospita la proiezione de <em>La Più Piccola</em> per la rassegna <em>Cinema Sotto le Stelle</em> a cura di Cinema Moretto (biglietti disponibili al prezzo di 3,50 euro).</p>
      <p className={subtitleClassName}>Informazioni pratiche</p>
      <p className={textClassName}>Tutti gli appuntamenti di BLABLAQUEER sono <b>gratuiti</b> e <b>accessibili a persone con mobilità ridotta</b>. È possibile iscriversi tramite il <a href="https://docs.google.com/forms/d/e/1FAIpQLScI0TmVwzUyZViRDVQJBDK4iRbXodCavQB64O0W_ugFFL-aBg/viewform">form dedicato</a>.</p>
      <p className={subtitleClassName}>A proposito di Brescia Pride</p>
      <p className={textClassName}>Il Comitato Brescia Pride ETS è una realtà autogestita e indipendente, composta da persone che si impegnano per il riconoscimento e la tutela dei diritti delle persone LGBTQIA+ nel territorio bresciano. Transfemminista, queer, intersezionale, laico, antifascista, antirazzista, autofinanziato e attento alla sostenibilità sociale e ambientale, il Comitato organizza l&apos;omonima manifestazione pubblica annuale e numerose iniziative culturali, educative e sociali durante tutto l&apos;anno, valorizzando la rete di realtà, collettivi ed enti alleati e contribuendo alla costruzione di una società più giusta, laica e plurale. Il progetto si fonda su valori di autodeterminazione, antidiscriminazione e giustizia sociale, ed è aperto alla partecipazione di chiunque condivida questi principi.</p>
      <p className={subtitleClassName}>Per ulteriori informazioni e contatti stampa</p>
      <p className={textClassName}><b>Elisa Belussi, she/they</b></p>
      <p className={textClassName}><a href="mailto:ufficiostampa@bresciapride.it" className="underline text-blue">ufficiostampa@bresciapride.it</a> - <a href="mailto:info@bresciapride.it" className="underline text-blue">info@bresciapride.it</a>
      </p>
      <p className={textClassName}>      <em>Materiali fotografici, logo e mappa dei servizi disponibili su richiesta.</em>
      </p>
    </div>
  );

  return (
    <TextPage title={title} subtitle={subtitle} textColor={mainColor} bgColor={secondaryColor}>
      {content}
    </TextPage>
  );
}
