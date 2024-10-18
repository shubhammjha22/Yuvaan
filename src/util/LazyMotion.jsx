import { LazyMotion, domAnimation } from "framer-motion";

const LazyMotionWrapper = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default LazyMotionWrapper;
