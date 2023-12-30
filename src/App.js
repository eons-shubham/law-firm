import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ContentPage from "./components/ContentPage/ContentPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContentPage />
      <Footer />
    </div>
  );
}

export default App;
