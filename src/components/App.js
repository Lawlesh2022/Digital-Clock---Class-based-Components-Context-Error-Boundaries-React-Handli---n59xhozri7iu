import React from 'react'
import '../styles/App.css';
import {useState} from 'react'
const App = () => {
const [datetime, setDatetime] = useState("")
setInterval(()=>{
    setDatetime(new Date().toLocaleString())
}, 1000)
  return (
    <div id="main">
      <div className="date-time">{datetime}</div>
    </div>
  )
}


export default App;
