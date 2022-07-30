import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.5 } },
};
