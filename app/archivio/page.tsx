"use client";

import React from "react";
import Block from "../ui/components/Block";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import ResourceCard from "../ui/components/ResourceCard";
const myFont = localFont({ src: "../ui/fonts/ST.ttf" });

export default function ArchivePage() {
  const router = useRouter();
  return (
    <div>
      <Block className="p-8 bg-pink text-center">
        <h1 className={`text-4xl md:text-6xl ${myFont.className} text-red`}>
          Archivio
        </h1>
      </Block>
      <Block className={`bg-white items-center justify-center`}>
        <h1
          className={`text-4xl ${myFont.className} text-red tracking-wider leading-tight p-4`}
        >
          2025
        </h1>
        <div className="grid grid-cols-3">
          <ResourceCard
            title="Manifesto 2025"
            description="Esistiamo ovunque, resistiamo unitɜ."
            actionText="Leggi il manifesto"
            href="docs/manifesto-2025.pdf"
            hoverColor="blue"
            colSpan={3}
          />
          <ResourceCard
            title="Comunicato Stampa 27/06/2025"
            description="Brescia Pride 2025: il 6 settembre torna la manifestazione per i diritti LGBTQIA+"
            actionText="Leggi il comunicato"
            href="docs/comunicato-stampa-27-06.pdf"
            hoverColor="purple"
            colSpan={3}
          />
        </div>
      </Block>
      <Block className={`col-span-6 bg-white items-center justify-center`}>
        <h1
          className={`text-4xl ${myFont.className} text-red tracking-wider leading-tight p-4`}
        >
          2024
        </h1>
        <div className="grid grid-cols-3">
          <ResourceCard
            title="Manifesto 2024"
            description="Siamo una realtà intersezionale, transfemminista, antifascista, gentile e autogestita."
            actionText="Leggi il manifesto"
            href="docs/manifesto-2024.pdf"
            hoverColor="purple"
            colSpan={3}
          />
          <ResourceCard
            title="Vademecum per l&apos;accessibilità degli eventi e dei cortei"
            description="Rendere un evento realmente accessibile e a misura di chiunque è un processo di ascolto e cura, necessario, comunitario e collettivo."
            actionText="Consulta il Vademecum"
            href="https://1drv.ms/p/c/3154c23af9523fae/Ea4_Uvk6wlQggDFqAQAAAAABswCASnHi1Vg3TZNPRM4M5Q?e=OjEMoL"
            hoverColor="blue"
            isExternal={true}
            colSpan={3}
          />
          <ResourceCard
            title="Comunicato a sostegno della comunità T* (06/07/2024)"
            description="Alla luce dei recenti avvenimenti, ci uniamo alla voce delle associazioni LGBTQIA+ e T* che da mesi denunciano il costante e preoccupante attacco alla libertà di scelta e autodeterminazione."
            actionText="Leggi il comunicato"
            href="docs/comunicato-t.pdf"
            hoverColor="green"
            colSpan={3}
          />
        </div>
      </Block>
    </div>
    // <div className="min-h-screen px-4 py-6 text-zinc-50">
    //   <Link href={"https://forms.gle/GAbKGVX7uBzJo4du8"} className="col-span-2">
    //     <ImageBlock
    //       src="/images/carri-2026.png"
    //       altText="Open Call Carri per il Brescia Pride 2026"
    //       showOnMobile={true}
    //       linkText="👉 Vai al modulo"
    //       link="https://forms.gle/GAbKGVX7uBzJo4du8"
    //       colSpan="col-span-2"
    //     />
    //   </Link>
    //   <Link href={"https://forms.gle/K6iKJBiz28uDQPjt6"} className="col-span-2">
    //     <ImageBlock
    //       src="/images/food-truck-2026.png"
    //       altText="Open Call Area Food per il Brescia Pride 2026"
    //       showOnMobile={true}
    //       linkText="👉 Vai al modulo"
    //       link="https://forms.gle/K6iKJBiz28uDQPjt6"
    //       colSpan="col-span-2"
    //     />
    //   </Link>
    //   <Link href={"https://forms.gle/fe1SE5YSDpXCgNrY7"} className="col-span-2">
    //     <ImageBlock
    //       src="/images/market-2026.png"
    //       altText="Open Call Area Market e spazio espositivo per il Brescia Pride 2026"
    //       showOnMobile={true}
    //       linkText="👉 Vai al modulo"
    //       link="https://forms.gle/fe1SE5YSDpXCgNrY7"
    //       colSpan="col-span-2"
    //     />
    //   </Link>
    //   <Link
    //     href={
    //       "https://www.instagram.com/p/DQ9q3UQCD0d/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
    //     }
    //     className="col-span-2"
    //   >
    //     <ImageBlock
    //       src="/images/TDOR-2025.png"
    //       altText="Presidio in Piazza Duomo il 20 Novembre alle 19"
    //       showOnMobile={true}
    //       link="v"
    //       colSpan="col-span-2"
    //     />
    //   </Link>
    //   <Link href={"/2025/corteo"} className="col-span-2">
    //     <ImageBlock
    //       src="/images/locandina.png"
    //       altText="Locandina del Brescia Pride 2025: 6 Settembre, Esistiamo ovunque, resistiamo unitɜ. Ore 12-21 Apertura parco pride in Campo Marte; H 15.30 - 17:30 Corteo per la città"
    //       showOnMobile={true}
    //       link="/2025/corteo"
    //       colSpan="col-span-2"
    //     />
    //   </Link>
    //   <Block className={`col-span-2 bg-green`}>
    //     <Button
    //       className="cursor-pointer transition-all duration-300 hover:bg-pink flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-pink hover:text-green"
    //       onPress={() => router.push("/2025/corteo")}
    //     >
    //       <div className="text-center relative">
    //         <h1
    //           className={`text-2xl lg:text-4xl leading-tight font-medium ${myFont.className}`}
    //         >
    //           6 SETTEMBRE 2025
    //         </h1>
    //         <h2
    //           className={`text-xl lg:text-2xl leading-tight font-medium ${myFont.className}`}
    //         >
    //           Parco Pride + Corteo
    //         </h2>
    //         <p className="text-xl font-bold">Clicca qui per tutte le info!</p>
    //       </div>
    //     </Button>
    //   </Block>
    //   <Block className={`col-span-2 bg-blue`}>
    //     <Button
    //       className="cursor-pointer transition-all duration-300 hover:bg-pink flex items-center justify-center h-full w-full p-6 rounded-lg relative overflow-hidden text-pink hover:text-blue"
    //       onPress={() => router.push("/2025/accessibilita")}
    //     >
    //       <div className="text-center relative">
    //         <h1
    //           className={`text-2xl lg:text-4xl leading-tight font-medium ${myFont.className}`}
    //         >
    //           6 SETTEMBRE 2025
    //         </h1>
    //         <h2
    //           className={`text-xl lg:text-2xl leading-tight font-medium ${myFont.className}`}
    //         >
    //           Accessibilità
    //         </h2>
    //         <p className="text-xl font-bold">Clicca qui per tutte le info!</p>
    //       </div>
    //     </Button>
    //   </Block>
    //   <Link href={"https://t.me/+r1wSY4YmbJgzNTI0"} className="col-span-2">
    //     <ImageBlock
    //       src="/images/telegram.png"
    //       altText="Vuoi partecipare al Brescia Pride 2025 ma non sai con chi andare? Entra nel nostro gruppo di telegram!"
    //       showOnMobile={true}
    //       linkText="Entra nel gruppo Telegram"
    //       link="https://t.me/+r1wSY4YmbJgzNTI0"
    //       colSpan="col-span-2"
    //     />
    //   </Link>
    //   <Link href={"/docs/manifesto-2025.pdf"} className="col-span-2">
    //     <ImageBlock
    //       src="/images/manifesto-post.png"
    //       altText="Il Manifesto 2025 è uscito! Leggilo qui!"
    //       showOnMobile={true}
    //       linkText=""
    //       link="/docs/manifesto-2025.pdf"
    //       colSpan="col-span-2"
    //     />
    //   </Link>
    //   <InfoCard
    //     title="Queercetto"
    //     backgroundColor="green"
    //     hoverColor="pink"
    //     textColor="pink"
    //     hoverTextColor="green"
    //     colSpan={2}
    //   >
    //     <p className="text-lg md:text-xl mt-1 font-semibold">
    //       Tutti i mercoledì alle 19!
    //     </p>
    //     <p className="text-md md:text-lg font-semibold">
    //       Scrivici un DM su Instagram o una mail per partecipare 🫶
    //     </p>
    //   </InfoCard>
    // </div>
  );
}
