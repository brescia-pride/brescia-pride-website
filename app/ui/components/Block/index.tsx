import {motion, MotionProps} from "framer-motion";
import { forwardRef, HTMLAttributes } from "react";

type BlockProps = {
  className?: string;
  id?: string;
} & MotionProps &
  HTMLAttributes<HTMLDivElement>;

const Block = forwardRef<HTMLDivElement, BlockProps>(
  ({ className, id, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref} 
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
        className={`rounded-lg border ${className}`}
        id={id}
        {...rest}
      />
    );
  }
);



Block.displayName = "Block";

export default Block;