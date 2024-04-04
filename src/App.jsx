import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextProvider from "./context/Rohitcontext";
import Navbar from "./components/Navbar";
import Home from "./context/Home";
import Contact from "./context/Contact";
import Team from "./context/Team";
import WebService from "./context/Webservice";
import Footer from "./components/Footer";
import Datadriven from "./context/Datadriven";
import Graphic from "./context/Graphic";

export default function App() {
  return (
    <div>
      <Router>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/" element={<Home />} />
            <Route path="/Webservice" element={<WebService />} />
            <Route path="/Datadriven" element={<Datadriven />} />
            <Route path="/Graphic" element={<Graphic />} />

          </Routes>
          <Footer/>
        </ContextProvider>
      </Router>
    </div>
  );
}
