import { useState } from "react";
import Navigation from "./navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Hamburger() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="md:hidden flex justify-end text-5xl px-4 bg-rose-600 text-white relative w-full flex-col">
      <AnimatePresence mode="wait">
        {menu ? (
          <motion.div
            key={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenu(!menu)}
            style={{ height: "60px" }}
          >
            <i className="fi fi-rr-cross mt-2 block" />
          </motion.div>
        ) : (
          <motion.div
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenu(!menu)}
            style={{ height: "60px" }}
          >
            <i className="fi fi-rr-menu-burger mt-2 block" />
          </motion.div>
        )}
        {menu && <Navigation key={2} menu={menu} setMenu={setMenu} />}
      </AnimatePresence>
    </div>
  );
}
