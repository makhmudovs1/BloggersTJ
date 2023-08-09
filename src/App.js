import React, {useState} from 'react';
import Header from "./components/Header";
import "./styles/App.css";
import Audience from "./components/Audience";
import Service from "./components/Service";
import Bloggers from "./components/Bloggers";

function App() {
    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
  return (
    <div className="App">
      <Header count = {count} arr={arr} setArr={setArr} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
      <Audience/>
      <Service/>
      <Bloggers count = {count} setCount = {setCount} arr = {arr} setArr = {setArr} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
    </div>
  );
}

export default App;
