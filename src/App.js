import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import MotionPage from "./components/motionPage";
//-------------------------------------------------------------
import Header from "./components/root/header";
import About from "./components/about/about";
import OnCamera from "./components/onCamera/onCamera";
import Voice from "./components/voice/voice";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import NotFound from "./components/not-found/notFound";
import Hamburger from "./components/root/hamburger/hamburger";
//-------------------------------------------------------------
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col md:flex-row">
      <Header />
      <Hamburger />
      <div className="md:ml-[200px] w-full h-full overflow-x-hidden bg-rose-50">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route
              exact
              path="/"
              element={
                <MotionPage>
                  <Helmet>
                    <title>Moriah Young | Home</title>
                  </Helmet>
                  <Home />
                </MotionPage>
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <MotionPage>
                  <Helmet>
                    <title>Moriah Young | About</title>
                  </Helmet>
                  <About />
                </MotionPage>
              }
            />
            <Route
              exact
              path="/oncamera"
              element={
                <MotionPage>
                  <Helmet>
                    <title>Moriah Young | On Camera</title>
                  </Helmet>
                  <OnCamera />
                </MotionPage>
              }
            />
            <Route
              exact
              path="/voice"
              element={
                <MotionPage>
                  <Helmet>
                    <title>Moriah Young | Voice</title>
                  </Helmet>
                  <Voice />
                </MotionPage>
              }
            />
            <Route
              exact
              path="/contact"
              element={
                <MotionPage>
                  <Helmet>
                    <title>Moriah Young | Contact</title>
                  </Helmet>
                  <Contact />
                </MotionPage>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Helmet>
                    <title>Moriah Young | Not Found</title>
                  </Helmet>
                  <NotFound />
                </>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
