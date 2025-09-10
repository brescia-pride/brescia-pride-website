import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import {motion} from "framer-motion";
import Header from './ui/components/Header'
import StickersContainer from './ui/components/StickerContainers';


const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Brescia Pride',
    description: 'Vi aspettiamo ai nostri eventi e al corteo il 6 settembre 2025!',
    keywords: 'Brescia Pride, Brescia Pride 2025, Pride',
    authors: [{name: 'Brescia Pride'}],
    openGraph: {
        title: 'Brescia Pride',
        description: 'Vi aspettiamo ai nostri eventi e al corteo il 6 settembre 2025!',
        locale: 'it_IT',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
      <html lang="it">
        <body
          className={`${inter.className} bg-neutral-200 min-h-screen focus-visible:outline-none`}
        >
          {/* <StickersContainer /> */}
          <main
            id="main-content"
            role="main"
            className="focus:outline-none"
            tabIndex={-1}
          >
            {children}
          </main>
        </body>
      </html>
    );
}