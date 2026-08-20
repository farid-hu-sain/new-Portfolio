import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { motionConfig } from "../../data/profile";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = motionConfig.distance.medium,
  duration = motionConfig.duration.normal,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: motionConfig.ease },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
