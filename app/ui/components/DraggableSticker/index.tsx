"use client";

import { useRef, MouseEvent, useEffect } from "react";
import Image from "next/image";

interface DraggableStickerProps {
  id: number;
  src: string;
  initialPosition: { xPercent: number; y: number };
  onPositionChange: (
    id: number,
    position: { xPercent: number; y: number }
  ) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function DraggableSticker({
  id,
  src,
  initialPosition,
  onPositionChange,
  containerRef,
}: DraggableStickerProps) {
  // Usiamo un ref per il div dello sticker per manipolare direttamente lo stile
  const stickerRef = useRef<HTMLDivElement>(null);

  // Un ref per memorizzare la posizione corrente senza causare ri-render
  const positionRef = useRef(initialPosition);

  // Questo useEffect è ORA l'unica fonte di verità per la POSIZIONE VISIVA.
  // Aggiorna lo stile del div e il valore del ref quando la prop `initialPosition` cambia.
  useEffect(() => {
    if (stickerRef.current) {
      stickerRef.current.style.left = `${initialPosition.xPercent}%`;
      stickerRef.current.style.top = `${initialPosition.y}px`;
      // Aggiorniamo anche il nostro ref interno per i calcoli successivi
      positionRef.current = initialPosition;
    }
  }, [initialPosition]);

  const dragStartRef = useRef({
    startX: 0,
    startY: 0,
    startPercentX: 0,
    startYPx: 0,
  });

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !stickerRef.current) return;
    e.preventDefault();

    // Leggiamo la posizione corrente DAL NOSTRO REF, che è sempre aggiornato
    const currentPosition = positionRef.current;

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPercentX: currentPosition.xPercent,
      startYPx: currentPosition.y,
    };

    document.body.style.cursor = "grabbing";

    // Aggiungiamo gli event listener a 'window' per catturare il movimento ovunque
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (!containerRef.current || !stickerRef.current) return;

    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;

    const containerWidth = containerRef.current.offsetWidth;
    if (containerWidth === 0) return;

    const dPercentX = (dx / containerWidth) * 100;

    const newXPercent = dragStartRef.current.startPercentX + dPercentX;
    const newY = dragStartRef.current.startYPx + dy;

    // Aggiorniamo la posizione visiva manipolando direttamente lo stile
    stickerRef.current.style.left = `${newXPercent}%`;
    stickerRef.current.style.top = `${newY}px`;

    // E aggiorniamo il nostro ref con la nuova posizione per il prossimo evento
    positionRef.current = { xPercent: newXPercent, y: newY };
  };

  const handleMouseUp = () => {
    document.body.style.cursor = "default";

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    // Quando il drag finisce, comunichiamo al genitore la posizione finale
    // leggendola DAL REF, che contiene l'ultimo valore calcolato.
    onPositionChange(id, positionRef.current);
  };

  return (
    <div
      ref={stickerRef} // Assegniamo il ref al div
      onMouseDown={handleMouseDown}
      className="draggable-sticker"
      style={{
        position: "absolute",
        // La posizione iniziale viene impostata dall'useEffect
        left: `${initialPosition.xPercent}%`,
        top: `${initialPosition.y}px`,
        cursor: "grab",
        zIndex: 10,
        width: "200px",
        height: "200px",
        userSelect: "none",
      }}
    >
      <Image
        src={src}
        alt="Sticker"
        fill
        sizes="200px"
        style={{ objectFit: "contain", pointerEvents: "none" }}
      />
    </div>
  );
}
