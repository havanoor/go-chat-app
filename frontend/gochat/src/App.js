
import {useState,useEffect} from 'react'
import './App.css';
import { connect, sendMsg } from './api';
import Allmessages from './components/Allmessages';
import ChatInput from './components/ChatInput';
function App() {
  const [mesg,updateMsg]=useState([])
  
  useEffect(()=>{
    connect((msg)=>{
      console.log("New message",msg)
      updateMsg([...mesg,msg])
    })
    console.log(mesg);
  },[mesg])
  
  
  const send=(event) =>{
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }




  return (
    <div className="App">
      <Allmessages mesgs={mesg}/>


      <ChatInput send={send} />
      <button onClick={send} >Click here</button>


    </div>
  );
}

export default App;
