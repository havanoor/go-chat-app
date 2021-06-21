
import {useState,useEffect} from 'react'
import './App.css';
import { connect, sendMsg } from './api';
import Allmessages from './components/Allmessages';

function App() {
  const [mesg,updateMsg]=useState([])
  
  useEffect(()=>{
    connect((msg)=>{
      console.log("New message",msg)
      updateMsg([...mesg,msg])
    })
    console.log(mesg);
  })
  
  
  const send=()=>{
    console.log("hello");
    sendMsg("Hello");
  };




  return (
    <div className="App">
      <Allmessages mesgs={mesg}/>
      <button onClick={send} >Click here</button>
    </div>
  );
}

export default App;
