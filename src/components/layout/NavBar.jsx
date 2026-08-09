import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks, site } from "../../data/site";
import SocialLinks from "../ui/SocialLinks";

const desktopLinks = navLinks.filter((link) => link.to !== "/contact");

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes (adjusting state during
  // render rather than in an effect avoids a cascading re-render).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // Lock body scroll + allow Escape to dismiss while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
          scrolled || open
            ? "border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink-950/75 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            to="/"
            className="group flex flex-col leading-none"
            aria-label={`${site.name} — home`}
          >
            <span className="font-display text-2xl tracking-[0.12em] text-bone-50 transition-colors group-hover:text-gold-300">
              {site.name}
            </span>
            <span className="mt-1 hidden text-[0.6rem] tracking-[0.35em] text-bone-400 uppercase sm:block">
              {site.role}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {desktopLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="group relative py-2">
                {({ isActive }) => (
                  <>
                    <span
                      className={`text-[0.7rem] tracking-[0.22em] uppercase transition-colors ${
                        isActive ? "text-gold-300" : "text-bone-300 hover:text-bone-50"
                      }`}
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 h-px w-full bg-gold-400"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full border border-gold-500/60 px-5 py-2 text-[0.7rem] tracking-[0.22em] text-gold-300 uppercase transition-colors hover:border-gold-400 hover:bg-gold-400 hover:text-ink-950"
            >
              Get in touch
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 p-2 text-bone-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <XMarkIcon className="size-7" /> : <Bars3Icon className="size-7" />}
          </button>
        </div>
      </header>

      {/* Kept outside <header>: the header's backdrop-filter would otherwise
          become the containing block for this fixed drawer and collapse it. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-ink-700/70 bg-ink-950/97 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-6 py-10" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block border-b border-ink-800 py-5 font-display text-4xl tracking-wide transition-colors ${
                        isActive ? "text-gold-300" : "text-bone-100"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-12">
              <p className="eyebrow mb-5">Elsewhere</p>
              <SocialLinks size={22} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
