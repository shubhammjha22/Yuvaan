import { motion } from "framer-motion";

export default function AnimationEffect({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      style={{ willChange: "opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
