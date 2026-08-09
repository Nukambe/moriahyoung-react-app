import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import RootLayout from "./components/layout/RootLayout";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Voice from "./pages/Voice";
import OnCamera from "./pages/OnCamera";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <RootLayout>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/oncamera" element={<OnCamera />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </RootLayout>
  );
}
