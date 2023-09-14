import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ScreenContext } from "./context/ScreenContext";
//-------------------------------------------------------------
import Header from "./components/root/header";
import Footer from "./components/root/footer";
import About from "./components/about/about";
import OnCamera from "./components/onCamera/onCamera";
import Voice from "./components/voice/voice";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import NotFound from "./components/not-found/notFound";
//-------------------------------------------------------------
import "./App.css";

function App() {
  const mediaQueries = useContext(ScreenContext);

  return (
    <div style={{
      display: 'flex',
      flexDirection: mediaQueries.mobile ? 'column' : 'row',
      minHeight: '100vh'
    }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/oncamera" element={<OnCamera />} />
        <Route exact path="/voice" element={<Voice />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {mediaQueries.mobile && <Footer />}
    </div>
  );
}

export default App;
