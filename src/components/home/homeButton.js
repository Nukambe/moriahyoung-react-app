import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeButton({ text, link }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link to={link}>
        <button className="bg-rose-500 text-white font-semibold text-2xl px-4 py-2 rounded-lg hover:bg-rose-600 shadow-md">
          {text}
        </button>
      </Link>
    </motion.div>
  );
}
