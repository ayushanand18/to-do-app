import React from 'react';
import './App.css';
import Add from "./components/add";
import Footer from "./components/footer";
import Head from "./components/header"

function App() {
  return (
    <div className="App">
      <Head />
      <Add />
      <Footer />
    </div>
  );
}

export default App;
