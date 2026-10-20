"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { IconType } from "react-icons";

type SkillDataProviderProps = {
  icon: IconType;
  name: string;
  index: number;
};

export const SkillDataProvider = ({
  icon: Icon,
  name,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Icon aria-label={name} className="h-10 w-10 text-cyan-300" />
    </motion.div>
  );
};
