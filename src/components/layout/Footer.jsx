import { Link } from "react-router-dom";
import { navLinks, site } from "../../data/site";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-3xl tracking-[0.1em] text-bone-50">{site.name}</p>
            <p className="mt-2 text-[0.65rem] tracking-[0.32em] text-bone-400 uppercase">
              {site.role}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-sm text-bone-300 underline decoration-gold-500/40 underline-offset-8 transition-colors hover:text-gold-300"
            >
              {site.email}
            </a>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
            <nav aria-label="Footer">
              <p className="eyebrow mb-5">Explore</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-bone-300 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="eyebrow mb-5">Elsewhere</p>
              <SocialLinks size={18} />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-800 pt-8 text-xs text-bone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="tracking-[0.2em] uppercase">Available worldwide · Remote sessions</p>
        </div>
      </div>
    </footer>
  );
}
