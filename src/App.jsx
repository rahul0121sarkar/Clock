import React, { useState } from 'react'
import './index.css'
const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
  },1000)
  return (
    <div className='center'>
      <div className="clock">
        <div className='col-md-6'>
         <img className='picart' src="gojo.jpg" alt="" />
        </div>
        <div className='col-md-6'>
        <h1>{time}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
