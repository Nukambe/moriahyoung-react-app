import { Routes, Route } from 'react-router-dom';
import Header from './components/root/header'
import Footer from './components/root/footer'
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import NotFound from './components/not-found/notFound';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
