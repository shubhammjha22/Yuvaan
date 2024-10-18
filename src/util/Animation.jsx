import { m } from "framer-motion";
import LazyMotionWrapper from "./LazyMotion";

export default function AnimationEffect({ children, className }) {
  return (
    <LazyMotionWrapper>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        style={{ willChange: "opacity" }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotionWrapper>
  );
}
