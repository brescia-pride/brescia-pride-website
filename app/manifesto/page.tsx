"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../ui/components/Header";
import CustomFooter from "../ui/components/CustomFooter";
import Block from "../ui/components/Block";

export default function MainifestoPage() {
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

        <Block className="col-span-6 bg-white border-10 rounded-lg text-black p-6">
          <h2 className="text-center text-4xl font-bold __className_bd8993">
            Manifesto Politico 2025
          </h2>
          <h3 className="text-center text-4xl md:text-[3.5vw] font-extrabold pt-2 pb-4">
            Esistiamo Ovunque, Resistiamo Unitɜ
          </h3>

          <h4 className="text-xl font-bold mt-8">
            PERCHÉ UN MANIFESTO POLITICO?
          </h4>
          <p className="mt-2">
            Da sempre, il Pride è una <strong>manifestazione</strong> che ha
            l’obiettivo di portare alla società e alle istituzioni
            <strong>le istanze della comunità LGBTQIAPK+</strong>, denunciare le
            <strong>
              diverse forme di discriminazione e marginalizzazione
            </strong>
            contro le quali continuiamo a lottare, e
            <strong>celebrare al contempo la nostra esistenza</strong>. Il Pride
            non è una festa neutra, non è folklore da vetrina, non è una parata
            da addomesticare.
            <strong className="underline decoration-2">
              È rabbia, è memoria, è lotta, è rivendicazione.
            </strong>
          </p>
          <p className="mt-2">
            Nasce dalla <strong>rivolta</strong> di chi è statə
            <strong>spintə ai margini</strong>, di chi ha dovuto difendere la
            propria identità per sopravvivere. Oggi come allora, il Pride scende
            in piazza per denunciare le <strong>violenze</strong>, l’
            <strong>omo-lesbo-bi-trans-a-fobia</strong> strutturale che ancora
            ci colpisce. Scendiamo in piazza contro l’
            <strong>indifferenza</strong> delle istituzioni, contro leggi che
            <strong>non ci tutelano</strong> e contro chi vorrebbe rispedirci
            nel <strong>silenzio</strong>. Non chiediamo permessi per esistere:
            <strong>prendiamo lo spazio che ci spetta.</strong>
          </p>
          <p className="mt-2">
            Questo manifesto raccoglie i valori che ci guidano e le battaglie
            che portiamo avanti ogni giorno, nel nostro territorio e ovunque ce
            ne sia bisogno.
          </p>

          <h4 className="text-xl font-bold mt-6">La scelta del linguaggio</h4>
          <p className="mt-2">
            La scelta del linguaggio utilizzato deriva dalla necessità di
            <strong>
              veicolare la nostra realtà e le nostre istanze con un'attenzione
              che difficilmente riscontriamo nella società civile
            </strong>
            , istituzioni, enti o media. Il linguaggio permette di plasmare la
            realtà, di decidere cosa rendere visibile e da quale prospettiva.
            <strong>
              Scegliere le parole per autorappresentarsi è un atto politico
            </strong>
            : la resistenza passa anche dal nominare ciò che troppo spesso viene
            lasciato in ombra nei discorsi di media e istituzioni.
          </p>
          <p className="mt-2">
            È un atto di <strong>cura e di giustizia</strong> che permetta a
            tuttɜ di <strong>riconoscersi ed essere riconosciutɜ</strong> in uno
            spazio condiviso dove le parole non feriscono, ma{" "}
            <strong>includono</strong>; dove il linguaggio non impone, ma{" "}
            <strong>accoglie</strong>; dove la realtà che vogliamo non è solo
            sognata, ma <strong>nominata, costruita e vissuta insieme.</strong>
          </p>

          <h4 className="text-xl font-bold mt-6">INTRODUZIONE</h4>
          <p className="mt-2">
            Viviamo in un momento di continua retrocessione ed erosione dei
            diritti delle persone LGBTQIAPK+. In mancanza di solide e reali
            tutele da parte di governi e istituzioni, è ancora più necessario
            stringere alleanze e sostenerci dall’interno della nostra comunità e
            con persone e realtà alleate. Come dimostra l’esperienza del Pride
            di Budapest, che ha invaso inarrestabile le strade della città
            nonostante i divieti e le minacce del Primo ministro Viktor Orbán,
            da sempre spalleggiato dall’attuale Premier Giorgia Meloni, non
            bastano divieti e intimidazioni a fermare la lotta per i diritti di
            tuttɜ. Da qui il motto che accompagna da mesi il Comitato Brescia
            Pride: <strong>esistiamo ovunque, resistiamo unitɜ.</strong> Il
            manifesto 2025 intende quindi racchiudere, in un testo fruibile e
            accessibile, i valori che ci guidano e le istanze che portiamo
            avanti ogni giorno, nel nostro territorio e ovunque ce ne sia
            bisogno.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>I nostri valori</strong> sono riassunti nella prima parte
              di questo manifesto, in cui Brescia Pride viene presentata come
              una realtà: intersezionale, antifascista, transfemminista, gentile
              e arrabbiata, autogestita e interconnessa e attenta alla
              sostenibilità ambientale.
            </li>
            <li>
              La seconda parte, nata dall’ascolto delle esperienze della
              comunità e dal fare rete, è dedicata alle <strong>istanze</strong>
              , mai esaustive, sulle quali vogliamo portare l’attenzione con la
              manifestazione cittadina del 6 settembre e con il nostro lavoro di
              tutto l’anno.
            </li>
          </ul>

          {/* Sezione: I Nostri Valori */}
          <h4 className="text-center text-6xl font-bold mt-12 mb-4 pb-2  __className_bd8993">
            I NOSTRI VALORI
          </h4>
          <p className="mt-2">Brescia Pride è una realtà:</p>

          <h4 className="text-xl font-semibold mt-6">Intersezionale</h4>
          <p className="mt-2">
            Sosteniamo, negli spazi sociali e cittadini che attraversiamo, le
            istanze, identità e lotte di ogni soggettività marginalizzata.
            Crediamo in un <strong>movimento interconnesso</strong> in cui le
            differenze creano occasioni, in cui gli spazi si moltiplicano e le
            voci si amplificano. Riconosciamo che le nostre esperienze, così
            come le discriminazioni che subiamo, sono frutto dell’
            <strong>intreccio di fattori differenti</strong>: la nostra
            identità, le nostre preferenze sessuali, il processo di
            razzializzazione che subiamo dalla società; ma anche la nostra
            classe sociale, le disabilità visibili ed invisibili dei nostri
            corpi e molti altri. Allo stesso modo, riconosciamo il nostro stesso
            privilegio e le diverse modalità in cui poterlo mettere a servizio
            della lotta all’equità e al riconoscimento di ogni persona. Crediamo
            nella necessità di un approccio trasversale, che abbracci questa
            complessità e che riconosca la matrice comune delle disparità
            sistemiche che viviamo.
          </p>

          <h4 className="text-xl font-semibold mt-6">Antifascista</h4>
          <p className="mt-2">
            Contribuiamo a mantenere viva la memoria della
            <strong>Resistenza</strong>, in particolare nella nostra città. A
            ottant’anni dalla Liberazione, ricordiamo le vittime del regime
            fascista, così come le vittime del terrorismo nero durante gli anni
            di piombo che si è concretizzato contro la nostra comunità 50 anni
            fa, il 28 maggio 1974, con la
            <strong>strage di Piazza Loggia</strong>. Non possiamo ignorare le
            complicità politiche che, come accaduto anche per Piazza Fontana,
            hanno impedito per anni che venisse riconosciuta la matrice
            neofascista dell’attentato. Siamo consapevoli che affinché non si
            ripropongano totalitarismi e derive autoritarie, è necessario
            praticare attivamente, nella nostra vita sociale e politica,
            pratiche antifasciste. Come sancito nell’Articolo 21 della
            costituzione italiana, figlia della resistenza antifascista,
            crediamo nel <strong>diritto di manifestare</strong> pacificamente
            il dissenso, nella libertà di riempire le nostre piazze di istanze.
            Ci opponiamo con fermezza alle forme di repressione violenta e alla
            criminalizzazione del dissenso legittimate dal decreto “sicurezza”,
            chiedendo immediate misure che tutelino la libertà di sciopero,
            manifestazione ed esistenza.
          </p>

          <h4 className="text-xl font-semibold mt-6">Transfemminista</h4>
          <p className="mt-2">
            Lottiamo per i nostri diritti riproduttivi e sessuali, per il
            diritto all’autodeterminazione dei corpi e delle identità, fuori
            dalla norma imposta dalla società patriarcale, binaria e
            omolesbobitransafobica. Registriamo la mancanza di tutele essenziali
            per le identità trans*, per i corpi non conformi, per le fasce
            vulnerabili, e ci attiviamo per ottenerle. Monitoriamo l’erosione
            dei diritti e dell’accesso alla salute per le persone trans* e ci
            attiviamo per contrastarle. Combattiamo ogni forma di violenza di
            genere, riconoscendola come problema strutturale e culturale.
            Rivendichiamo un femminismo antirazzista, antiabilista, decoloniale,
            queer e trans* includente.
          </p>

          <h4 className="text-xl font-semibold mt-6">Gentile e arrabbiata</h4>
          <p className="mt-2">
            Quest’espressione, che potrebbe sembrare un paradosso, significa per
            noi l’equilibrio che cerchiamo quotidianamente di raggiungere tra la
            rabbia e la frustrazione creati da un mondo che non accoglie le
            differenze, e la voglia, il desiderio e l’intenzione di agire con
            cura, gentilezza ed empatia. Siamo arrabbiatɜ perché viviamo in una
            società non equa, ingiusta e oppressiva. Una rabbia che insieme
            stiamo imparando a canalizzare nella costruzione e trasformazione di
            un mondo migliore, e che scegliamo di unire ad un approccio gentile
            che promuova e metta in atto la cura collettiva. Vogliamo in questo
            modo aprirci al confronto costruttivo e tessere reti di alleanze che
            ci connettano e ci permettano, grazie al dialogo e al lavoro di
            decostruzione, di spezzare insieme la storica catena di odio e
            violenza sistemica.
          </p>

          <h4 className="text-xl font-semibold mt-6">
            Autogestita e interconnessa
          </h4>
          <p className="mt-2">
            Siamo un’associazione indipendente, autonoma, apartitica e
            orizzontale, composta da persone che volontariamente decidono di
            partecipare alla progettazione e realizzazione delle iniziative
            annuali per diffondere i valori e le istanze politiche di Brescia
            Pride e della comunità LGBTQIAPK+, affinché siano il più possibile
            utili, funzionali, desiderate e partecipate. Tutte le decisioni
            vengono prese coralmente dal Comitato e dalle persone che lo
            compongono, seguendo principi democratici di orizzontalità e cura
            collettiva. Rifiutiamo collaborazioni e sponsorizzazioni con realtà
            che strumentalizzano i nostri corpi e le nostre identità per trarne
            profitto e vantaggio economico, perpetrando dinamiche capitaliste
            che poggiano inevitabilmente sulla competizione, sulla performance,
            sull’esaltazione del merito e sul guadagno sempre a favore delle
            classi economicamente, socialmente e politicamente dominanti. Non
            vogliamo che le nostre diversità siano inglobate da un sistema che
            le normalizza appiattendole e rendendole merce da vendere. Siamo
            un’associazione che pratica la solidarietà, antidoto ad una società
            che ci vuole sempre più spesso solə, isolatə e colpevoli per la
            nostra marginalizzazione e supportiamo le altre realtà del
            territorio che lottano e che condividono con noi ideali e principi,
            contribuendo così insieme a creare spazi sicuri e virtuosi.
          </p>

          <h4 className="text-xl font-semibold mt-6">
            Attenta alla sostenibilità ambientale
          </h4>
          <p className="mt-2">
            Siamo quotidianamente espostɜ agli effetti disastrosi del
            cambiamento climatico, tanto a livello locale quanto globale.
            Eppure, nonostante l’ampio consenso scientifico sulla responsabilità
            umana nella crisi ambientale, assistiamo a un preoccupante
            disinteresse politico: governi e rappresentanti stentano a mettere
            la sostenibilità ambientale al centro della propria agenda, quando
            non la relegano apertamente a questione di secondaria importanza.
            Riteniamo, invece, che la giustizia sociale non possa prescindere
            dalla giustizia climatica. Questo significa assumere una visione
            politica lungimirante, capace di riconoscere e contrastare
            attivamente le disuguaglianze esacerbate dalla crisi ecologica,
            mettendo i diritti umani e la giustizia sociale al centro delle
            politiche sul clima, a beneficio delle generazioni presenti e
            future. Come associazione, ci impegniamo collettivamente a fare
            pressione per una transizione ecologica, e individualmente ad agire
            con responsabilità. Riconosciamo il peso delle nostre scelte sul
            benessere collettivo e l’equilibrio del pianeta e ci impegniamo a
            trovare vie alternative al consumismo sfrenato. Promuoviamo
            all’interno dei nostri eventi uno stile di alimentazione vegano,
            sostenibile e libero dalla crudeltà e dallo sfruttamento degli
            animali non umani, consapevoli dell’impatto ambientale
            dell’industria alimentare, strettamente correlato all’allevamento
            intensivo e al consumo di prodotti di origine animale.
          </p>


          <h4 className="text-center text-6xl font-bold mt-12 mb-4 __className_bd8993 pb-2">
            LE NOSTRE ISTANZE
          </h4>

          <h4 className="text-xl font-semibold mt-6">
            Diritti per le persone trans* e non binarie
          </h4>
          <p className="mt-2">
            Le esperienze di marginalizzazione e violenza vissute dalle persone
            trans* e non binarie non sono episodi isolati: sono il risultato di
            un deliberato tentativo di negare loro la possibilità di vivere
            un’esistenza dignitosa e autodeterminata, minando i pochi diritti
            faticosamente conquistati. Lo conferma l’indice e Mappa dei Diritti
            Trans pubblicato dall’organizzazione non governativa Transgender
            Europe (TGEU), che si occupa di diritti e benessere delle persone
            trans* in Europa e Asia centrale: per la prima volta in 13 anni, nel
            2025 sono stati sottratti più diritti alla comunità trans* di quanti
            ne siano stati acquisiti. In Italia, dopo l’ispezione e le pressioni
            politiche esercitate sul Careggi nel 2024 al fine di ostacolare
            l’accesso ai bloccanti per la pubertà a persone trans* adolescenti,
            un nuovo tavolo tecnico istituito dal ministero per le pari
            opportunità, la natalità e la famiglia e dal ministero della salute
            si propone di rivedere le linee guida ai percorsi di affermazione di
            genere, già fortemente patologizzanti e non di facile accesso, senza
            confrontarsi con nessuna associazione o rappresentanza di persone
            trans*. Anche per quanto riguarda il diritto alla famiglia, le
            persone trans* continuano a doversi scontrare con una burocrazia
            disforica, che non ammette altre categorie al di fuori di quelle
            rigidamente imposte di padre o madre, e con un sistema sanitario che
            sistematicamente non fornisce informazioni adeguate sui propri
            diritti riproduttivi. Nel Regno Unito, alle persone trans* viene
            vietato di utilizzare i bagni del proprio genere di elezione,
            tentando di fatto di escluderle dalla vita pubblica, e viene
            stabilito che la definizione legale di “donna” è basata sul sesso
            biologico, escludendo dunque le donne trans* dalle tutele previste
            per le donne cisgender. Negli stati uniti, l’amministrazione Trump
            sancisce l’esistenza di soli due generi basati sul sesso biologico,
            e cancella dalla memoria le esperienze e l’inestimabile contributo
            della comunità trans* alla lotta per i diritti di tutta la comunità
            LGBTQIAPK+, ordinandone la rimozione persino dal sito del memoriale
            di Stonewall. In questo clima di crescente ostilità, riteniamo
            imprescindibile che le istanze della comunità trans* ricevano
            supporto da tutta la comunità LGBTQIAPK+ e dalle persone alleate.
            Chiediamo che il diritto delle persone trans* e non binare
            all’istruzione e a luoghi di lavoro sicuri sia tutelato con
            l’introduzione capillare della carriera alias, che vi sia una reale
            inclusione anche nello sport, e che si vada finalmente oltre la
            legge 164, vecchia ormai di oltre quarant'anni, a favore di un
            modello basato sull’autodeterminazione, come avviene già in paesi
            europei come Malta, Spagna e Germania. Ogni persona trans* e non
            binaria, di qualsiasi età, merita di essere, tutelata, vedere
            riconosciuta la propria identità autodeterminata e di potersi
            realizzare secondo i propri desideri, non nonostante le violenze
            perpetrate nel silenzio complice della società e le modalità
            soffocanti stabilite dall’alto dal governo di turno.
          </p>

          <h4 className="text-xl font-semibold mt-6">
            Autodeterminazione: liberi corpi, libere soggettività
          </h4>
          <p className="mt-2">
            La Rainbow Map 2025 redatta da ILGA (International lesbian, gay,
            bisexual, trans, intersex association) Europe colloca l’Italia al
            35* posto su 49° paesi in materia di uguaglianza e diritti della
            comunità LGBTQIAPK+. A gravare sul bilancio, oltre agli aumenti dei
            casi di violenza omolesbobitransfobica e i discorsi d’odio sempre
            più diffusi, anche grazie all'avvallamento di rappresentanti
            politici e alle vergognose e disumanizzanti campagne dei movimenti
            Pro-Vita/Antiscelta, sono la mancanza di una legge contro
            l’omolesbobitransafobia e la mancanza del divieto ai tentativi di
            conversione. Si tratta di pratiche prive di fondamento scientifico e
            riconosciute come torture dalle Nazioni Unite, volte a modificare o
            reprimere l’orientamento sessuale o l'identità di genere di una
            persona, che spaziano dalla pressione psicologica alla vera e
            propria violenza fisica e sessuale – in Italia, non ancora
            legalmente perseguibili. Le persone intersex continuano a subire
            interventi chirurgici e medici non necessari, spesso prima che siano
            in grado di esprimere il proprio consenso libero e informato. Tali
            pratiche costituiscono una grave violazione del diritto
            all’integrità fisica e del diritto all’autodeterminazione. Seppur
            consapevoli che, nella situazione politica attuale, non è possibile
            sperare in cambiamenti positivi, ribadiamo la necessità di una legge
            antidiscriminazione che tuteli realmente tutte le soggettività della
            comunità, che i tentativi di conversione vengano riconosciuti come
            crimine dalle conseguenze distruttive e che le pratiche violente
            sulle persone intersex vengano vietate. Questo è davvero essere a
            favore della vita: permettere loro di essere sé stesse, senza
            costrizioni, violenze e ricatti emotivi. Essere liberi di esistere
            davvero significa anche poter vivere dignitosamente. Non c’è
            autodeterminazione senza casa, senza lavoro stabile, senza accesso
            alla sanità, all’istruzione, a spazi sicuri. Le persone LGBTQIAPK+
            sono troppo spesso costrette a nascondersi nei luoghi di lavoro,
            escluse dalle famiglie, discriminate nel sistema scolastico,
            sanitario e abitativo. La nostra lotta è una lotta anche contro la
            precarietà, contro l’emarginazione economica, contro le
            disuguaglianze. Il Pride è anche questo: rivendicare un futuro in
            cui nessunǝ sia costrettǝ a scegliere tra essere sé stessǝ e
            sopravvivere.
          </p>

          <h4 className="text-xl font-semibold mt-6">
            Diritti per tutte le forme di famiglia
          </h4>
          <p className="mt-2">
            L’Italia è tra gli ultimi Paesi europei nella tutela dei diritti
            LGBTQIAPK+. In questo contesto rivendichiamo il pieno riconoscimento
            giuridico e sociale di tutte le famiglie LGBTQIAPK+: quelle queer,
            di scelta, non monogame, aromantiche o senza figliə. Famiglie
            fondate sulla cura, sulla sicurezza e sull’autodeterminazione, che
            vanno oltre il modello patriarcale, binario ed eteronormato. La
            famiglia non è solo quella che ci ha generato o cresciutə: è anche
            quella che scegliamo. La chosen family nasce dalla libera scelta,
            non da un destino assegnato. Come Pride, riconosciamo il valore
            politico e affettivo di queste relazioni e ne rivendichiamo la piena
            legittimità. Chiediamo un matrimonio egualitario per tuttə,
            superando le unioni civili che non garantiscono piena uguaglianza.
            Serve un cambiamento strutturale che riconosca anche le comunità di
            responsabilità, al di fuori del matrimonio. Rivendichiamo il diritto
            alla genitorialità e ai diritti riproduttivi, con accesso paritario
            all’adozione, alla PMA e alla stepchild adoption. Condanniamo la
            criminalizzazione della GPA introdotta dal DDL Varchi: una legge
            incostituzionale, discriminatoria e violenta, che colpisce
            direttamente le famiglie queer e ostacola il riconoscimento dei
            figliə. Ci opponiamo al “reato universale di GPA” e chiediamo
            l’abolizione di ogni norma che neghi diritti fondamentali.
            Accogliamo con favore i segnali della Corte Costituzionale, ma non
            ci basta: servono leggi chiare, inclusive e coraggiose. Vogliamo un
            welfare realmente universale, che riconosca e sostenga tutte le
            forme di famiglia e comunità: queer, solidali, monogenitoriali,
            poliamorose. Continuiamo a lottare per l’eguaglianza reale e per la
            dignità di tutte le relazioni.
          </p>

          <h4 className="text-xl font-semibold mt-6">Accessibilità</h4>
          <p className="mt-2">
            Il diritto delle persone con disabilità e neurodivergenti ad
            autodeterminarsi non è garantito a causa del poco impegno dello
            Stato e dei continui ritardi nell'attuazione del diritto alla vita
            indipendente e all’assistenza personale. La concretizzazione di
            questi diritti evita la reclusione in istituti e l’isolamento in
            casa e agevola l’accesso alla vita sociale, allo studio e al lavoro,
            alla cultura e tanti altri ambiti. Chiediamo per questo che lo
            Stato, a tutti i livelli, metta a disposizione strumenti concreti e
            finanziamenti che garantiscano l’assistenza personale e la vita
            indipendente, perché indipendenza significa libertà di scelta,
            significa avere e darsi la possibilità di scoprirsi, sperimentarsi,
            capire meglio sé stessɜ in termini anche di orientamento sessuale e
            identità di genere, significa essere liberɜ di vivere relazioni
            (amorose, sessuali, e/o altro) e di costruire reti sociali. A
            livello territoriale capita costantemente che gli spazi e le
            iniziative non siano pensate a misura di tutte le persone, ma
            secondo un’idea di corpo-mente “normale” e quindi previsto, a
            discapito di corpimenti che non rientrano in questa idea e
            definizione. Come Brescia Pride ci impegniamo a costruire iniziative
            e spazi che prevedono il più possibile l’esistenza di tutte le
            persone, decidendo talvolta di rinunciare ad alcune iniziative
            perché poco accessibili e prevedendo che una quota di
            autofinanziamento sia dedicata al miglioramento dell’accessibilità
            dei nostri eventi e presidi. Nel fare questo ci continuiamo a
            formare grazie al contributo di associazioni come
            <strong>Anda, Disabili Pirata e Disability Pride Milano</strong> con
            cui abbiamo costruito collaborazioni. Da qualche anno ci stiamo
            impegnando a <strong>mappare alcuni luoghi della città</strong>
            mettendo a disposizione di tuttɜ le informazioni sull’accessibilità
            di questi luoghi attraverso ad esempio l’app WeGlad. Facendo questo,
            cerchiamo anche di sensibilizzare realtà amiche sulla necessità di
            riflettere e agire per l’eliminazione delle barriere, promuovendo
            così la <strong>cultura dell’accessibilità.</strong> Chiediamo che
            ci sia maggiore attenzione alle questioni legate all’accessibilità e
            che si lavori concretamente e in un continuo percorso di
            decostruzione nella direzione di
            <strong>spazi sempre più aperti alla convivenza di tuttɜ</strong>
            nei luoghi che attraversiamo dalle scuole, ai luoghi di lavoro, di
            cura e di cultura, fino alle amministrazioni pubbliche.
          </p>

          <h4 className="text-xl font-semibold mt-6">
            Ora e sempre resistenza: contro tutte le guerre, dalla parte di chi
            lotta per la libertà
          </h4>
          <p className="mt-2">
            Brescia Pride è un grido per la <strong>Pace</strong> e prende
            posizione <strong>contro ogni guerra</strong> che, armata dal
            capitalismo coloniale, calpesta l’autodeterminazione dei popoli e
            delle persone. In Sudan, Etiopia, Myanmar, Yemen, Kashmir, Ucraina e
            Palestina si consumano conflitti brutali che mietono vittime civili,
            annientano intere comunità e riducono milioni di persone alla fame e
            allo sfollamento forzato. Di fronte a queste violenze, non possiamo
            restare in silenzio. Il nostro è un grido di resistenza e
            solidarietà, un’eco che attraversa i confini e si schiera
            <strong>
              al fianco di chi lotta per la libertà, la giustizia e la dignità.
            </strong>
            Non accettiamo che la guerra venga usata come strumento di potere e
            dominio, né che venga giustificata in nome della nostra comunità.
            Rifiutiamo con forza il pinkwashing sionista, che strumentalizza i
            diritti delle persone queer per legittimare l’oppressione coloniale
            del popolo palestinese. Nessuna bandiera rainbow può coprire le
            macerie di un genocidio. <strong>Siamo con la Palestina</strong>,
            con tutte le vittime dei conflitti, con chi resiste all’occupazione,
            alla violenza e alla cancellazione. Le nostre strade saranno
            attraversate da bandiere palestinesi, simboli di una solidarietà che
            non fa distinzioni, che abbraccia rifugiatə, attivistə, bambinə,
            donne e civili di ogni parte del mondo. Contro chi vuole dividerci
            in nome della guerra, noi scegliamo la Pace, l’autodeterminazione e
            la lotta collettiva contro ogni forma di oppressione
          </p>

          <h4 className="text-xl font-semibold mt-6">
            Educazione sessuale onnicomprensiva
          </h4>
          <p className="mt-2">
            Viviamo in un mondo in cui la scuola, l’informazione e l’educazione
            sono elementi imprescindibili alla formazione dell’identità e delle
            scelte di ogni persona. Riteniamo la scuola un cardine fondante
            della crescita di ciascun individuo, insieme alla famiglia, ed è per
            questo che è necessario che sia un luogo di libera espressione
            basata sul <strong>rispetto delle unicità</strong> e uno spazio in
            cui si possa esplorare a fondo e con supporto senza giudizio la
            complessità di ciò che ci circonda. Nello specifico, crediamo che
            sia fondamentale, al fine di crescere persone libere, in salute e
            rispettose delle libertà altrui, l’
            <strong>
              introduzione obbligatoria dell’educazione sessuale e affettiva
            </strong>
            all’interno delle scuole di ogni ordine e grado e che questa sia
            gestita da persone competenti e formate con un approccio
            onnicomprensivo, scientifico, accogliente e in continuo
            aggiornamento. Lottiamo inoltre affinché le informazioni, risorse e
            stimoli che riguardano questo vasto ambito siano accessibili e
            disponibili a persone di ogni età, con approcci specifici per ogni
            fase di vita, come indicato dall’Organizzazione Mondiale della
            Sanità. Crediamo che tutto ciò che riguarda la salute sessuale, il
            consenso e la comunicazione, la gestione emotiva e relazionale sana,
            un buon rapporto con i corpi e le identità, e il prendersi cura di
            piacere, desideri e limiti, siano questioni che riguardano ogni
            persona, e permettono di vivere una vita personale e collettiva più
            benefica e autentica. L’educazione sessuale onnicomprensiva è
            inoltre lo
            <strong>
              strumento più trasformativo ed efficace che abbiamo contro la
              violenza e le discriminazioni, di genere e non solo.
            </strong>
            Per tutto questo, ci impegniamo a promuoverla e diffonderla in
            maniera formale e informale in ogni occasione e modalità possibile.
          </p>
        </Block>

        <CustomFooter />
      </motion.div>
    </div>
  );
}
