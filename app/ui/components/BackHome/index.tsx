import Block from "../Block";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

type BlockProps = {
    size: number
};

const BackHome = ({size}: BlockProps) => {
    return (
        <Block className={`col-span-${size} p-3 text-black`}>
            <header>
            <Link
                href="."
                className="flex items-center gap-1 hover:underline"
            >
                <FiArrowLeft /> Torna alla homepage
            </Link>
            </header>
        </Block>
    );
};

BackHome.displayName = "BackHome";

export default BackHome;