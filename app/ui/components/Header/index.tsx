"use client";

import Block from "../Block";
import localFont from "next/font/local";
import {
  Link,
  Button,
  MenuTrigger,
  Popover,
  Menu,
  MenuItem,
} from "react-aria-components";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";
// Importa il Link di Next.js per la navigazione ottimizzata
import NextLink from "next/link";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type BlockProps = {
  size?: number | 4;
};


const navLinks = [
  { href: "/corteo", label: "Pride 2025" },
  { href: "/sostienici", label: "Sostienici" },
  { href: "/events", label: "Eventi" },
  // { href: "/docs/manifesto-2025.pdf", label: "Manifesto", isExternal: true },
  { href: "/manifesto", label: "Manifesto"},
  // { href: "/resources", label: "Risorse" },
  { href: "/contact", label: "Contatti" },
];

const Header = ({ size }: BlockProps) => {
  const router = useRouter();

  return (
    <Block
      className={`col-span-${size} flex items-center justify-between p-6 bg-red text-pink`}
    >
      {/* Titolo */}
      <NextLink href="/" passHref legacyBehavior>
        <Link>
          <h1
            className={`text-2xl md:text-4xl leading-tight font-medium transition-transform transition-colors duration-300 hover:scale-110 hover:text-pink-300 ${myFont.className}`}
          >
            Brescia Pride
          </h1>
        </Link>
      </NextLink>

      {/* Navigazione Desktop (orizzontale) */}
      <nav className="hidden md:flex items-center gap-x-6">
        {navLinks.map((link) => (
          <NextLink key={link.href} href={link.href} passHref legacyBehavior>
            <Link
              className="text-lg font-medium hover:text-pink-300 transition-colors"
            >
              {link.label}
            </Link>
          </NextLink>
        ))}
      </nav>

      {/* Menu Mobile (Hamburger) */}
      <div className="md:hidden">
        <MenuTrigger>
          <Button aria-label="Menu">
            <FiMenu className="w-7 h-7" />
          </Button>
          <Popover>
            <Menu className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-lg z-50 text-red text-2xl">
              {navLinks.map((link) => (
                <MenuItem
                  key={link.href}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onAction={() => {
                
                      router.push(link.href);
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </Popover>
        </MenuTrigger>
      </div>
    </Block>
  );
};

Header.displayName = "Header";

export default Header;
