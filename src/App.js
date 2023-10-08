// import { useContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import { ScreenContext } from "./context/ScreenContext";
//-------------------------------------------------------------
import Navigation from "./components/Navigation";
import PageSection from "./components/PageSection";
//-------------------------------------------------------------
import "./App.css";

function App() {
  // const mediaQueries = useContext(ScreenContext);

  return (
    <div>
      <Navigation />
      <PageSection section="home">Home</PageSection>
      <PageSection section="voice">Voice</PageSection>
      <PageSection section="video">Video</PageSection>
      <PageSection section="about">About</PageSection>
      <PageSection section="contact">Contact</PageSection>
    </div>
  );
}

export default App;
