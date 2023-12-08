import { Routes, Route } from "react-router-dom";
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
  return (
    <div className="flex h-full flex-col md:flex-row">
      <Header />
      <Hamburger />
      <div className="md:ml-[200px] w-full h-full overflow-x-hidden bg-rose-50">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/oncamera" element={<OnCamera />} />
          <Route exact path="/voice" element={<Voice />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
