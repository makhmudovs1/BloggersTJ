import React from 'react';
import Header from "./components/Header";
import "./styles/App.css";
import Audience from "./components/Audience";
import Service from "./components/Service";
import Bloggers from "./components/Bloggers";

function App() {
  return (
    <div className="App">
      <Header/>
      <Audience/>
      <Service/>
      <Bloggers/>
    </div>
  );
}

export default App;
