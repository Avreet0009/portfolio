import React from "react";
import Navbar from "./components/Navabar";
import ProfileSection from "./components/About";
import ContactForm from "./components/Contact";
import Skills from "./components/Skills";
import ProjectSection from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="bg-white text-black dark:bg-[#222] dark:text-gray-700 min-h-screen">
      <Navbar />
      <ProfileSection/>
      <Skills/>
      <ProjectSection/>
      <ContactForm/>
    </div>
  );
}

export default App;
