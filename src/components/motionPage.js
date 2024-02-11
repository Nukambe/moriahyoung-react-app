import { motion } from "framer-motion";

export default function MotionPage({ children, motionKey }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.25, type: "spring", mass: 0.5 }}
      exit={{ x: "-100%" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
