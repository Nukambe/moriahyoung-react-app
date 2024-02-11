import { motion } from "framer-motion";

export default function AboutImage({ src, alt, delay }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={src}
        alt={alt}
        className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </motion.div>
  );
}
