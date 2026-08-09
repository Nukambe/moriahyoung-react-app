import NavBar from "./NavBar";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-full flex-col bg-ink-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to content
      </a>
      <NavBar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
