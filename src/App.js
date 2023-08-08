import React, {useState} from 'react';
import Header from "./components/Header";
import "./styles/App.css";
import Audience from "./components/Audience";
import Service from "./components/Service";
import Bloggers from "./components/Bloggers";

function App() {
    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([]);
    const [str, setStr] = useState("");
  return (
    <div className="App">
      <Header count = {count} arr={arr} setArr={setArr}/>
      <Audience/>
      <Service/>
      <Bloggers count = {count} setCount = {setCount} arr = {arr} setArr = {setArr} str={str}/>
    </div>
  );
}

export default App;
