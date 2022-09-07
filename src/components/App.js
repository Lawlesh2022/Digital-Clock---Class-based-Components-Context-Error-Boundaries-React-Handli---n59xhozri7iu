import React from 'react'
import '../styles/App.css';
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
