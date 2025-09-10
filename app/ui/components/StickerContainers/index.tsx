"use client";

// Aggiungiamo useEffect per gestire gli effetti collaterali (come l'ascolto del resize della finestra)
import { useState, useRef, useEffect } from "react";
import DraggableSticker from "../DraggableSticker";
import Block from "../Block";

// Interfaccia (invariata)
interface Sticker {
  id: number;
  src: string;
  position: {
    xPercent: number;
    y: number;
  };
}

// DATI PER DESKTOP (> 1000px) - I tuoi dati originali
const desktopStickersData: Sticker[] = [
  {
    id: 1,
    src: "/stickers/arcobaleno1.webp",
    position: { xPercent: 12.5, y: 110 },
  },
  { id: 2, src: "/stickers/asterix.webp", position: { xPercent: 1.4, y: 150 } },
  { id: 3, src: "/stickers/cherry.webp", position: { xPercent: 80.9, y: 60 } },
  {
    id: 4,
    src: "/stickers/asterix.webp",
    position: { xPercent: 41.0, y: -20 },
  },
  { id: 5, src: "/stickers/bruco.webp", position: { xPercent: 2.8, y: 0 } },
  {
    id: 6,
    src: "/stickers/asterix.webp",
    position: { xPercent: 64.4, y: -50 },
  },
  { id: 7, src: "/stickers/fiore2.webp", position: { xPercent: 71.8, y: 10 } },
  { id: 8, src: "/stickers/cuor.webp", position: { xPercent: 17.4, y: -35 } },
  { id: 9, src: "/stickers/caos.webp", position: { xPercent: 31.25, y: 150 } },
  { id: 10, src: "/stickers/manoo.webp", position: { xPercent: 60.6, y: 100 } },
];

// NUOVI DATI PER MOBILE (< 1000px)

const mobileStickersData: Sticker[] = [
  { id: 5, src: "/stickers/bruco.webp", position: { xPercent: 10, y: 20 } },
  {
    id: 1,
    src: "/stickers/arcobaleno1.webp",
    position: { xPercent: 45, y: -10 },
  },
  { id: 10, src: "/stickers/manoo.webp", position: { xPercent: 35, y: 120 } },
];

interface StickersContainerProps {
  className?: string;
}

export default function StickersContainer({
  className,
}: StickersContainerProps) {
  // Lo stato `stickers` ora sarà inizializzato dinamicamente
  const [stickers, setStickers] = useState<Sticker[]>(desktopStickersData);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. STATO PER RILEVARE LA LARGHEZZA DELLO SCHERMO
  // Inizializziamo a `false`. L'useEffect lo correggerà subito dopo il primo render.
  const [isMobile, setIsMobile] = useState(false);

  // 2. useEffect PER CONTROLLARE LA LARGHEZZA E AGGIORNARE LO STATO
  useEffect(() => {
    // Funzione che controlla la larghezza e imposta lo stato
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Eseguiamo il controllo al primo mount del componente
    checkScreenSize();

    // Aggiungiamo un listener per l'evento 'resize' della finestra
    window.addEventListener("resize", checkScreenSize);

    // Funzione di pulizia: rimuove il listener quando il componente viene smontato
    // Questo è fondamentale per evitare memory leak
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []); // L'array vuoto [] assicura che questo effetto venga eseguito solo una volta (al mount)

  // 3. useEffect PER CAMBIARE I DATI DEGLI STICKER
  // Questo effetto si attiva ogni volta che il valore di `isMobile` cambia.
  useEffect(() => {
    if (isMobile) {
      setStickers(mobileStickersData);
    } else {
      setStickers(desktopStickersData);
    }
  }, [isMobile]);

  const handlePositionChange = (
    id: number,
    newPosition: { xPercent: number; y: number }
  ) => {
    const updatedStickers = stickers.map((sticker) =>
      sticker.id === id ? { ...sticker, position: newPosition } : sticker
    );
    setStickers(updatedStickers);
  };

  return (
    <Block ref={containerRef} className={`relative ${className}`}>
      {stickers.map((sticker) => (
        <DraggableSticker
          key={sticker.id}
          id={sticker.id}
          src={sticker.src}
          initialPosition={sticker.position}
          onPositionChange={handlePositionChange}
          containerRef={containerRef}
        />
      ))}
      <a
        href="https://www.youtube.com/watch?v=ooOELrGMn14"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red text-[20vw] md:text-9xl z-0 leading-tight font-medium transition-transform transition-colors duration-300 hover:scale-110 __className_bd8993"
      >
        DRAG
      </a>
    </Block>
  );
}
