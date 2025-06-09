"use client";

import Block from "../Block";
import localFont from "next/font/local";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-aria-components";
import { FiHome, FiMenu } from "react-icons/fi";
import { Button, MenuTrigger, Popover, Menu, MenuItem } from "react-aria-components";
import { useRouter } from "next/navigation";

const myFont = localFont({ src: "../../fonts/ST.ttf" });

type BlockProps = {
    size?: number | 4;
};

const Header = ({ size }: BlockProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const router = useRouter();

    return (
        <Block className={`col-span-${size} flex items-center justify-between p-6 bg-red text-pink`}>
            {/* Home Button */}
            <Button
                onPress={() => router.push('/')}
                className="mr-4"
                aria-label="Homepage"
            >
                <FiHome className="w-7 h-7" />
            </Button>

            {/* Title */}
            <Link href="/">
                <h1 className={`text-2xl md:text-4xl font-medium leading-tight font-bold mr-2 flex-1 text-center transition-transform transition-colors duration-300 hover:scale-110 hover:text-pink-800 ${myFont.className}`}>
                    Brescia Pride
                </h1>
            </Link>

            {/* Menu Button */}
            <MenuTrigger>
                <Button aria-label="Menu"><FiMenu className="w-7 h-7" /></Button>
                <Popover>
                    <Menu className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-lg z-50 text-red text-2xl">
                        <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onAction={() => router.push('/manifesto.pdf')}>Manifesto (2024)</MenuItem>
                        <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onAction={() => router.push('/sostienici')}>Sostienici</MenuItem>
                        <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onAction={() => router.push('/events')}>Eventi</MenuItem>
                        <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onAction={() => router.push('/resources')}>Risorse</MenuItem>
                        <MenuItem className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onAction={() => router.push('/contact')}>Contatti</MenuItem>
                    </Menu>
                </Popover>
            </MenuTrigger>
        </Block>
    );
};

Header.displayName = "Header";

export default Header;