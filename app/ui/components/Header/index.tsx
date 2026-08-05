"use client";

import Block from "../Block";
import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-aria-components";
import { FiX, FiMenu } from "react-icons/fi";
import { Button, MenuTrigger, Menu, MenuItem } from "react-aria-components";
import { useRouter } from "next/navigation";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type BlockProps = {
  size?: number | 4;
};

const Header = ({ size }: BlockProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);
  const router = useRouter();

  return (
    <Block
      className={`w-full bg-white text-red sticky text-center p-4 border-b-4`}
    >
      <div className="flex justify-between items-center place-items-center">
        <Link href="/" aria-label="header">
          <h1
            className={`text-3xl md:text-3xl leading-tight font-medium mr-2 flex-1 ${myFont.className}`}
            aria-label="Brescia Pride"
          >
            Brescia Pride
          </h1>
        </Link>
        <MenuTrigger>
          <Button aria-label="Menu toggle" onClick={toggle}>
            {menuOpen === false ? (
              <FiMenu className="w-9 h-9" />
            ) : (
              <FiX className="w-9 h-9" />
            )}
          </Button>
        </MenuTrigger>
      </div>
      {menuOpen === true && (
        <div>
          <Menu className="md:flex w-full text-red text-2xl mt-4 border-white">
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-blue hover:text-white rounded"
              onAction={() => router.push("/2026/pride")}
            >
              Pride 2026
            </MenuItem>
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-purple hover:text-white rounded"
              onAction={() => router.push("/events")}
            >
              Eventi
            </MenuItem>
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-green hover:text-white rounded"
              onAction={() => router.push("/sostienici")}
            >
              Sostienici
            </MenuItem>
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-brown hover:text-white rounded"
              onAction={() => router.push("docs/manifesto-2025.pdf")}
            >
              Manifesto
            </MenuItem>
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-fuchsia hover:text-white rounded"
              onAction={() => router.push("/resources")}
            >
              Risorse
            </MenuItem>
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-blue hover:text-white rounded"
              onAction={() => router.push("/contact")}
            >
              Contatti
            </MenuItem>
          </Menu>
        </div>
      )}
    </Block>
  );
};

Header.displayName = "Header";

export default Header;
