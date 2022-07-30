import { motion, Variants } from "framer-motion";
import { FC } from "react";
import { IPizza } from "../types";

const childVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order: FC<{ pizza: IPizza }> = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={{
        hidden: { x: "100vw", opacity: 0 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
