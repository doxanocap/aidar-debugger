import logo from './logo.png';
import helpMark from './help.png'
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [hovered, setHovered] = useState(false);
  const [clickedchat, setclickedchat] = useState(false);
  const [items, setItems] = useState([])
  const [value, setValue] = useState("")
  const slovechki = ["Аа, тема тема", "Нуу хз если честно", "Базару нет", "Учи jQuery хз почему"]
  const style = hovered ? {visibility: "visible"} : {visibility: 'hidden'}
  const stylechat = clickedchat ? {visibility: "visible"} : {visibility: 'hidden'}
  const sendText = (e) => {
    e.preventDefault()
    setItems((prevItems) => [...prevItems, "ты: "+value])
    setValue("")
    const newItem = slovechki[Math.floor(Math.random() * slovechki.length)]
    setItems((prevItems) => [...prevItems, "Айдар: " + newItem])
    document.getElementById('mapim').scrollTop = document.getElementById('mapim').scrollHeight
  }
  return (
    <div className="App">
      <div className='centerContent'>
        <div className='headerText'><span style={{color:"red"}}>n!</span> <span style={{fontWeight:"bold"}}>Aidar</span> Debugger</div>
        <a href="https://www.nfactorial.school/" target="_blank" rel="noopener noreferrer">
        <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <span className='helpContent' id='helpContent' style={style}>n! Aidar debugging technique involves talking to Aidar about a bug in their code (or their lives)</span>
      <div className='help' id='help' onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}><img src={helpMark} alt="Help mark" style={{width:"4vh"}}/>

      </div>
      <div className='chathist' id='chathist' style={stylechat}>
        <div className='talkAidar'>Talk to <span style={{fontWeight:"bold"}}>Aidar</span></div>
        <div className='mapim' id='mapim'>
          {items.map((item, index) => (
            <div key={index} className="mapElems"> {item}</div>
          ))}
        </div>
        <form onSubmit={sendText}>
          <input type="textarea" className='input' id='input' value={value} placeholder="Айдар помоги!" onChange={(e) => setValue(e.target.value)} />
          <button style={{display:"none"}} className="textSubmit">Submit</button>
        </form>
      </div>
      <div className='chatButton' id='chatButton' onClick={() => {setclickedchat(!clickedchat)}}>button</div>
    </div>
  );
}

export default App;
