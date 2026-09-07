"use client";

import React from "react";
import localFont from "next/font/local";
import Block from "../ui/components/Block";
import { Button, Link } from "react-aria-components";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

type StampaBlockProps = {
  title: string;
  children: ReactNode;
  id: string;
  className?: string;
};

type comunicatoBlockProps = {
  date: string;
  title: ReactNode;
  link?: string;
  pdfPath?: string;
  router: AppRouterInstance;
  linkAction?: string;
};

type indexLiProps = {
  title: string;
  desc: string;
  id: string;
};

const StampaBlock = ({ title, children, id, className = "" }: StampaBlockProps) => {
  return (
    <Block className={`${className} col-span-6`} id={id}>
      <div className="text-xl p-4">
        <h1 className={`${myFont.className} text-4xl text-purple`}>{title}</h1>
        <div className="mt-2">{children}</div>
      </div>
    </Block>
  );
};

const downloadButtonClassName =
  "p-4 font-bold transition-all duration-300 cursor-pointer rounded-sm text-purple bg-purple/10 col-span-1 w-full hover:bg-lime";

const ComunicatoBlock = ({ date, title, link, pdfPath, router, linkAction = "Leggi online" }: comunicatoBlockProps) => {
  const colSpan = link && pdfPath ? 1 : 2
  return (
    <div className="flex flex-col md:grid md:grid-cols-6 gap-4 justify-between bg-lilac/30 rounded-xl p-4">
      <p
        className="col-span-4"
      >
        <b>{date}</b> - {title}
      </p>
      {link && <Button className={`col-span-${colSpan} ${downloadButtonClassName}`} onPress={() => router.push(link)}>{linkAction}</Button>}
      {pdfPath && <Button className={`col-span-${colSpan} ${downloadButtonClassName}`} onPress={() => {
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = pdfPath.substring(6)
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}>Scarica PDF</Button>}
    </div>
  )
};

const IndexLiBlock = ({ title, id, desc }: indexLiProps) => {
  const navLiClassName =
    "mt-2 p-1 pl-2 pr-2 transition-all duration-300 hover:bg-purple hover:text-white focus:bg-purple focus:text-white rounded-sm focus:outline-hidden bg-purple/10 md:text-2xl flex flex-col justify-center md:items-center w-full text-purple";

  return (
    <Link
      className={navLiClassName}
      href={`#${id}`}
      aria-describedby={`${id}-desc`}
    >
      {title}
      <span id={`${id}-desc`} className="sr-only">
        {desc}
      </span>
    </Link>
  );
};

export default function StampaPage() {
  const router = useRouter()

  const linkClassName = "underline font-bold text-purple cursor-pointer"

  const headingTwoClassName = "mt-2 mb-2 text-2xl font-bold text-purple"

  const numeriBlockClassName = "p-4 rounded bg-lilac text-center content-center transition-all duration-300 hover:bg-lime text-purple focus:bg-lime"

  return (
    <div>
      <Block className="p-8 bg-lilac text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-purple`}>
          Sala Stampa
        </h1>
        <p className={`lg:col-span-6 text-2xl text-purple mt-2`}>
          Questa pagina raccoglie i{" "}
          <b>
            materiali per giornalistə, fotografə e operatorə che seguono il
            Brescia Pride 2026
          </b>
          .
        </p>
      </Block>
      <StampaBlock title="Indice" id="indice" className="bg-lilac/30 border-b-2">
        <nav id="indice" role="navigation" aria-labelledby="toc-heading">
          <div className="font-bold">
            <h1 className="text-2xl">Prima del 5 settembre</h1>
            <ul
              role="list"
              className="md:flex justify-between gap-2 md:text-center"
            >
              <IndexLiBlock
                title="Comunicati"
                id="comunicati-stampa"
                desc="Lista dei comunicati stampa"
              />
              <IndexLiBlock
                title="Materiali e Press Kit"
                id="materiali"
                desc="Lista dei materiali utili"
              />
            </ul>
          </div>
          <div className="font-bold mt-4">
            <h1 className="text-2xl">Il giorno del corteo</h1>
            <ul
              role="list"
              className="md:flex justify-between gap-2 md:text-center"
            >
              <IndexLiBlock
                title="Programma"
                id="programma"
                desc="Link alla pagina principale di Brescia Pride, con informazioni del parco e del corteo"
              />
              <IndexLiBlock
                title="Punto stampa e interviste"
                id="punto-stampa"
                desc="Informazioni sul punto stampa in Campo Marte"
              />
              <IndexLiBlock
                title="Contatti"
                id="contatti-stampa"
                desc="Contatti stampa"
              />
            </ul>
          </div>
          <div className="font-bold mt-4">
            <h1 className="text-2xl">Per approfondire</h1>
            <ul
              role="list"
              className="md:flex justify-between gap-2 md:text-center"
            >
              <IndexLiBlock
                title="Brescia Pride in numeri"
                id="numeri"
                desc="Brescia Pride in numeri"
              />
              <IndexLiBlock
                title="Guida al linguaggio"
                id="linguaggio"
                desc="Guida al linguaggio"
              />
            </ul>
          </div>
        </nav>
      </StampaBlock>
      <StampaBlock title="Comunicati stampa" id="comunicati-stampa">
        <div className="grid grid-cols-1 gap-4">
          <ComunicatoBlock
            date="1 settembre 2026"
            title="Il 5 settembre Brescia Pride torna in piazza
              e porta al Comune tre proposte di politiche pubbliche per la città"
            link="/2026/documenti/01-09-2026"
            pdfPath="/docs/comunicato-stampa-01-09-2026.pdf"
            router={router}
          />
          <ComunicatoBlock
            date="27 agosto 2026"
            title="Dall&apos;1 al 3 settembre BLABLAQUEER: tre giorni di talk, incontri e mostre al MO.CA verso il Brescia Pride"
            link="/2026/documenti/27-08-2026"
            pdfPath="/docs/comunicato-stampa-27-08-2026.pdf"
            router={router}
          />
          <ComunicatoBlock
            date="Archivio"
            title="Comunicati stampa e altre risorse degli anni precedenti"
            link="/archivio"
            router={router}
            linkAction="Vai all&apos;archivio"
          />
        </div>
      </StampaBlock>
      <StampaBlock title="Materiali e press kit" id="materiali">
        <p>
          In questa sezione è possibile trovare alcuni materiali utilizzabili
          per la copertura giornalistica del Brescia Pride 2026.
        </p>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <ComunicatoBlock
            date="Fotografie"
            title="Immagini ad alta risoluzione delle edizioni precedenti e della manifestazione 2026. Il credito al fotografə è indicato nel nome di ciascun file e chiediamo agli utilizzatori di riportarlo in didascalia."
            link="https://drive.google.com/drive/folders/1Ht8f7fw6Rg_vgjRVAMTHDN6t4rJ9BRJ4"
            router={router}
            linkAction="Scarica da Google Drive"
          />
          <ComunicatoBlock
            date="Logo e manifesto"
            title="Logo del Comitato Brescia Pride ETS e manifesto ufficiale della settima edizione, in formato vettoriale e ad alta risoluzione."
            link="https://drive.google.com/drive/folders/1TcuhCPoMLZQ1OJvVJXmv96VWTydEJsgp"
            router={router}
            linkAction="Scarica da Google Drive"
          />
        </div>
        <p className="mt-4">
          I materiali possono essere utilizzati liberamente per la copertura
          giornalistica del Brescia Pride, mantenendo il credito al fotografə.
          Non è consentito modificarli o utilizzarli in contesti diversi. Per usi differenti scrivici a{" "}
          <Link
            href="mailto:ufficiostampa@bresciapride.it"
            className={linkClassName}
          >
            ufficiostampa@bresciapride.it
          </Link>{" "}
          mantenendo in copia{" "}
          <Link
            href="mailto:info@bresciapride.it"
            className={linkClassName}
          >
            info@bresciapride.it
          </Link>
        </p>
        <p className="mt-2">
          Dopo il 5 settembre pubblicheremo in questa sezione una selezione di
          fotografie della giornata: se ti serve materiale in tempi rapidi per
          la chiusura, contattaci direttamente.
        </p>
      </StampaBlock>
      <StampaBlock title="Programma della giornata" id="programma">
        <Button className={`${downloadButtonClassName} col-span-2`} onPress={() => router.push("/2026/pride")}>Tutte le informazioni sulla giornata del 5 settembre (programma e orari, mappa del parco e del corteo, ecc...) sono qui!</Button>
      </StampaBlock>
      <StampaBlock title="Punto stampa in Campo Marte" id="punto-stampa">
        <p>
          <b>Durante la giornata del 5 settembre il Media Corner, situato sul lato destro del palco in Campo Marte, è il riferimento per la stampa</b>. Al Media Corner sarà possibile ottenere informazioni sul programma e sulle aree del Parco Pride.
        </p>
        <h2 className={headingTwoClassName}>
          Interviste e dichiarazioni
        </h2>
        <p>
          <b>Dalle ore 13.30 alle 15.00 sarà possibile rivolgersi al Media Corner
            per interviste e riprese</b>, prima della partenza del corteo. Fuori da
          questa fascia oraria è possibile concordare un momento rivolgendosi a{" "}
          <Link href="#contatti-stampa" className="text-purple underline">
            Elisa
          </Link>
          , responsabile delle relazioni con i media, compatibilmente con le
          esigenze organizzative della giornata.
        </p>
        <h2 className={headingTwoClassName}>
          Vademecum Fotografico
        </h2>
        <p className="mt-2">
          <b>Il Pride è uno spazio pubblico, ma non tutte le persone che vi
            partecipano hanno fatto coming out, e per alcune essere riconoscibili
            in una fotografia può avere conseguenze concrete sul lavoro, in
            famiglia o nel proprio contesto d&apos;origine.</b> Ti chiediamo di tenerne
          conto: raccontare la manifestazione e proteggere chi la attraversa non
          sono obiettivi in conflitto.
        </p>
        <Button className={`${downloadButtonClassName} col-span-2 mt-2`} onPress={() => router.push("/2026/documenti/vademecum-fotografico")}>Leggi il Vademecum Fotografico</Button>
      </StampaBlock>
      <StampaBlock title="Contatti stampa" id="contatti-stampa">
        <p>
          <b>Elisa (she/they) – Referente ufficio stampa </b>
        </p>
        <p className="mt-2">
          <Link
            href="mailto:ufficiostampa@bresciapride.it"
            className="text-purple underline"
          >
            ufficiostampa@bresciapride.it
          </Link>
        </p>
      </StampaBlock>
      <StampaBlock title="Brescia Pride in numeri" id="numeri">
        <p>
          Dati utili per chi racconta la manifestazione.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 wrap-break-word">
          <div className={numeriBlockClassName}>
            <p><b>7 edizioni</b></p>
            <p>dal 2017</p>
          </div>
          <div className={numeriBlockClassName}>
            <p><b>15000 persone</b></p>
            <p>hanno partecipato al corteo nel 2025</p>
          </div>
          <div className={numeriBlockClassName}>
            <p><b>60+ associazioni e realtà</b></p>
            <p>del territorio presenti nel Parco Pride</p>
          </div>
          <div className={numeriBlockClassName}>
            <p><b>5 carri</b></p>
            <p>nel corteo</p>
          </div>
          <div className={numeriBlockClassName}>
            <p><b>200 persone volontarie</b></p>
            <p>coinvolte nell&apos;organizzazione della giornata</p>
          </div>
          <div className={`${numeriBlockClassName}`}>
            <p><b>7 comuni</b></p>
            <p>della provincia di Brescia patrocinano l&apos;edizione 2026</p>
            <p>(in aggiornamento)</p>
          </div>
          <div className={`${numeriBlockClassName} col-span-2 md:col-span-3`}>
            <p><b>Nessuno sponsor</b></p>
            <p className="">
              Brescia Pride è completamente autofinanziato: non riceve sponsorizzazioni e si sostiene con donazioni, autofinanziamento e il lavoro volontario di chi lo organizza.
            </p>
          </div>
        </div>
        <p className="mt-4">
          Per riferimenti aggiornati o approfondimenti contattaci!
        </p>
      </StampaBlock>
      <StampaBlock title="Guida al linguaggio" id="linguaggio">
        <h2 className={headingTwoClassName}>
          Come raccontarci
        </h2>
        <p>
          <b>Le parole che usiamo per raccontare una comunità non sono neutre.</b> Possono contribuire a riconoscere le persone oppure rafforzare stereotipi e discriminazioni.
          Per questo consigliamo di consultare la <Link className={linkClassName} href="https://www.odgpiemonte.it/wp-content/uploads/2025/12/Carta-deontologica-arcobaleno-2.pdf">Carta Arcobaleno, la prima carta deontologica italiana dedicata all&apos;informazione sulle persone LGBTQIA+</Link>, promossa dall&apos;Ordine dei Giornalisti del Piemonte insieme al Coordinamento Torino Pride e presentata nel maggio 2026.
        </p>
        <p className="mt-2">
          <b>Qui abbiamo raccolto alcune delle indicazioni che ci capita più spesso di condividere con giornalistə e redazioni.</b> Se qualcosa non è chiaro, scrivici: meglio una domanda prima della pubblicazione che una rettifica dopo.
        </p>
        <h2 className={headingTwoClassName}>
          Parla di persone, non di categorie
        </h2>
        <p>
          Nel linguaggio giornalistico sarebbe meglio evitare espressioni che rischiano di ridurre una persona a una sola caratteristica.
        </p>
        <p className="mt-2">
          Usa le parole che descrivono l&apos;orientamento sessuale e l&apos;identità di genere come aggettivi e non come sostantivi: <b>persona gay, donna lesbica, uomo trans, persona transgender, persona non binaria</b>.
        </p>
        <h2 className={headingTwoClassName}>
          Usa il nome e i pronomi corretti
        </h2>
        <p>
          Per parlare di una persona trans* o non binaria si utilizzano il <b>nome e i pronomi che la persona usa per sé, indipendentemente da ciò che compare sui documenti</b>.
        </p>
        <p className="mt-2">
          Usare il precedente nome anagrafico di una persona trans* si chiama <b>deadnaming</b>, mentre utilizzare pronomi, genere o appellativi che non le corrispondono viene definito <b>misgendering</b>.
        </p>
        <p className="mt-2">
          Sono pratiche da evitare anche quando si utilizzano fotografie, articoli o materiali d&apos;archivio.
          Se non sai quali pronomi usare, chiedere è sempre la soluzione più semplice.
        </p>
        <h2 className={headingTwoClassName}>
          Coming out e outing non sono la stessa cosa
        </h2>
        <p>
          Il <b>coming out è la scelta di una persona di raccontare il proprio orientamento sessuale o la propria identità di genere</b>.
          Per descriverlo si possono usare formule come:

          ha fatto coming out, ha dichiarato, ha raccontato.
        </p>
        <p className="mt-2">
          Meglio evitare termini come &quot;confessa&quot; o &quot;ammette&quot;, perché suggeriscono che ci sia qualcosa di sbagliato o di cui vergognarsi.
        </p>
        <p className="mt-2">
          <b>L&apos;outing, invece, avviene quando queste informazioni vengono rese pubbliche da altre persone senza consenso</b>.
        </p>
        <p className="mt-2">
          Orientamento sessuale e identità di genere sono dati personali: non vanno resi pubblici senza consenso, salvo che siano già pubblicamente noti e realmente rilevanti per la notizia.
        </p>
        <p className="mt-2">
          Chiediti sempre: è rilevante per la notizia?
          L&apos;orientamento sessuale o l&apos;identità di genere di una persona vanno citati solo quando sono pertinenti al fatto raccontato.
          Se non aggiungono informazioni utili alla comprensione della notizia, è meglio non specificarli.
        </p>
        <h2 className={headingTwoClassName}>
          Orientamento sessuale e identità di genere sono cose diverse
        </h2>
        <p>
          L&apos;<b>orientamento sessuale</b> riguarda l&apos;attrazione affettiva e/o sessuale verso altre persone.
          L&apos;<b>identità di genere</b> riguarda invece il modo in cui una persona percepisce e definisce il proprio genere.
        </p>
        <h2 className={headingTwoClassName}>
          Quando parli di famiglie
        </h2>
        <p>
          Una famiglia con due madri o due padri può essere definita <b>famiglia omogenitoriale</b> oppure, quando non è necessario specificarne la composizione, semplicemente famiglia.
        </p>
        <p className="mt-2">
          Per indicare la pratica attraverso cui una persona porta avanti una gravidanza per conto di altre persone, il termine descrittivo è gestazione per altri (GPA).
          L&apos;espressione &quot;utero in affitto&quot; è invece fortemente connotata e non neutra.
        </p>
        <h2 className={headingTwoClassName}>
          Si dice Pride, non &quot;gay pride&quot;
        </h2>
        <p>
          Il Pride non riguarda soltanto le persone gay, ma l&apos;intera comunità LGBTQIA+.
          Per questo oggi è preferibile parlare di: <b>Pride, corteo del Pride, manifestazione del Pride, Brescia Pride</b> (nel nostro caso specifico).

          L&apos;espressione &quot;gay pride&quot; è ormai poco utilizzata e restituisce solo una parte della comunità rappresentata.
        </p>
        <h2 className={headingTwoClassName}>
          E lo schwa?
        </h2>
        <p>
          Nei materiali di Brescia Pride utilizziamo anche lo schwa (ə) quando vogliamo rivolgerci a persone di ogni genere.
          È una nostra scelta editoriale: non chiediamo alle testate di adottarla.
        </p>
        <p className="mt-2">
          Chi preferisce evitarlo può utilizzare tranquillamente formule inclusive già presenti nell&apos;italiano, per esempio:

          le persone partecipanti, chi partecipa, il pubblico, le persone presenti.
        </p>
        <p className="mt-2f font-bold">
          Ciò che chiediamo è soprattutto di rispettare il nome, il genere e i pronomi delle persone citate.
        </p>
        <h2 className={headingTwoClassName}>
          Per approfondire
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <ComunicatoBlock
            date="Carta Arcobaleno: La carta deontologica dedicata a un&apos;informazione rispettosa e consapevole sulle persone LGBTQIA+"
            title="promossa dall&apos;Ordine dei Giornalisti del Piemonte insieme al Coordinamento Torino Pride.
            Contiene dieci principi operativi e un glossario essenziale pensati per il lavoro quotidiano nelle redazioni."
            link="https://www.odgpiemonte.it/wp-content/uploads/2025/12/Carta-deontologica-arcobaleno-2.pdf"
            router={router}
            linkAction="Apri il PDF"
          />
          <ComunicatoBlock
            date="Glossario LGBTQIA+"
            title="Il glossario del Coordinamento Torino Pride raccoglie e spiega i termini legati a orientamento sessuale, identità di genere, espressione di genere e comunità LGBTQIA+.
            Può essere consultato rapidamente quando serve verificare un termine prima della pubblicazione."
            link="https://www.torinopride.it/glossario-lgbtqia/"
            router={router}
            linkAction="Consulta il glossario"
          />
        </div>
        <h2 className={headingTwoClassName}>
          Hai un dubbio?
        </h2>
        <p>
          Scrivici.
          Se non sai quale termine usare, come presentare una persona o se un&apos;informazione sia rilevante per l&apos;articolo, siamo a disposizione per un confronto.
        </p>
      </StampaBlock>
    </div>
  );
}
