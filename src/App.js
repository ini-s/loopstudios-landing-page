import React from "react"
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Top from "./components/Top.js"
import Gallery from "./components/Gallery.js"
import Footer from "./components/Footer.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Top />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
