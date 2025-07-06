import {motion, MotionProps} from "framer-motion";

type BlockProps = {
    className?: string;
    id?: string;
} & MotionProps;

const Block = ({className, id, ...rest}: BlockProps) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={`rounded-lg border border-zinc-700 ${className}`}
            id={id}
            {...rest}
        />
    );
};

Block.displayName = "Block";

export default Block;