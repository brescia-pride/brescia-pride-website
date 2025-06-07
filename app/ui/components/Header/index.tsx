import Block from "../Block";
import localFont from "next/font/local";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {FiHome, FiMenu} from "react-icons/fi";

const myFont = localFont({src: "../../fonts/ST.ttf"});

type BlockProps = {
    size?: number | 4;
};

const Header = ({size}: BlockProps) => {
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

    return (
        <Block className={`col-span-${size} flex items-center justify-between p-6 bg-red text-pink`}>
            {/* Home Button */}
            <Link href="/" aria-label="Home" className="mr-4">
                <FiHome className="w-7 h-7"/>
                <span className="sr-only">Homepage</span>
            </Link>
            {/* Title */}
            <Link href="/">
                {/* <h1 className={`text-2xl md:text-4xl font-medium leading-tight font-bold mr-2 flex-1 text-center ${myFont.className}`}> */}
                <h1 className={`text-2xl md:text-4xl font-medium leading-tight font-bold mr-2 flex-1 text-center transition-transform transition-colors duration-300 hover:scale-110 hover:text-pink-800 ${myFont.className}`}>
                    Brescia Pride
                </h1>
            </Link>
            {/* Menu Button */}
            <div className="relative" ref={menuRef}>
                <button
                    aria-label="Menu"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="ml-4"
                >
                    <FiMenu className="w-7 h-7"/>
                    <span className="sr-only">Menu</span>
                </button>
                {menuOpen && (
                    <div
                        className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-lg z-50 text-red text-2xl">
                        <ul className="flex flex-col">
                            <li>
                                <Link href="/manifesto.pdf" className="block px-4 py-2 hover:bg-gray-100"
                                      onClick={() => setMenuOpen(false)}>
                                    Manifesto (2024)
                                </Link>
                            </li>
                            <li>
                                <Link href="/sostienici" className="block px-4 py-2 hover:bg-gray-100"
                                      onClick={() => setMenuOpen(false)}>
                                    Sostienici
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="block px-4 py-2 hover:bg-gray-100"
                                      onClick={() => setMenuOpen(false)}>
                                    Eventi
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="block px-4 py-2 hover:bg-gray-100"
                                      onClick={() => setMenuOpen(false)}>
                                    Risorse
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100"
                                      onClick={() => setMenuOpen(false)}>
                                    Contatti
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </Block>
    );
};

Header.displayName = "Header";

export default Header;