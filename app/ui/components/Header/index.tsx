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

type ColorName = {
  color: string;
};

const Header = ({ size }: BlockProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);
  const router = useRouter();

  const [defaultColor, newColor] = useState("red");
  const [defaultBackgroundColor, newBackgroundColor] = useState("white");

  function changeColor(color: string) {
    newColor(color);
  }

  function changeBackgroundColor(color: string) {
    newBackgroundColor(color);
  }

  return (
    <Block
      className={`w-full bg-${defaultBackgroundColor} text-${defaultColor} sticky text-center p-4`}
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
          <Menu className="md:flex w-full text-${defaultColor} text-2xl mt-4 border-white">
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-blue hover:text-white rounded"
              onAction={() => {
                router.push("/2026/pride");
                changeColor("blue");
                changeBackgroundColor("lightblue");
              }}
            >
              Pride 2026
            </MenuItem>
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-purple hover:text-white rounded"
              onAction={() => {
                router.push("/events");
                changeColor("purple");
                changeBackgroundColor("lilac");
              }}
            >
              Eventi
            </MenuItem>
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-green hover:text-white rounded"
              onAction={() => {
                router.push("/sostienici");
                changeColor("green");
                changeBackgroundColor("lime");
              }}
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
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-red hover:text-white rounded"
              onAction={() => {
                router.push("/resources");
                changeColor("red");
                changeBackgroundColor("pink");
              }}
            >
              Risorse
            </MenuItem>
            <MenuItem
              className="cursor-pointer flex-1 transition-all duration-300 hover:bg-blue hover:text-white rounded"
              onAction={() => {
                router.push("/contact");
                changeColor("blue");
                changeBackgroundColor("lightblue");
              }}
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
