import logo from './logo.svg';
import './App.css';
import React ,{ useState } from 'react';

function App() {
  let currTime=new Date().toLocaleTimeString();
  const [time,updatedTime]=useState(currTime);
  function updateTime()
        {
          currTime=new Date().toLocaleTimeString();
          updatedTime(currTime);
        }
  setInterval(updateTime,100);
  const h1Style={
    // margin:'45vh auto',
    position: 'relative',
    left:'50%',
    top:'50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    border:'10px solid red',
    width:'70%',
    fontSize:'70px',
    color:'white',
    zIndex:'10',
    background: 'hsla(205, 46%, 30%, 1)',

    background: 'linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%)',
    
    background: '-moz-linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%)',
    
    background: '-webkit-linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%)',
    
    filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#295270", endColorstr="#524175", GradientType=1 )',
    boxShadow: '7px 9px 14px -7px rgba(0,0,0,0.78)',
webkitBoxShadow: '7px 9px 14px -7px rgba(0,0,0,0.78)',
mozBoxShadow: '7px 9px 14px -7px rgba(0,0,0,0.78)'
}; 
  return (

        <h1 style={h1Style}>{time}</h1>
  );
}

export default App;
