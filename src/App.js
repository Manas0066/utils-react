
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React,{useState}from 'react';











function App() {

  const[mode,setmode]=useState('light');

  const togglemode=()=>{
    if(mode ==='dark'){
    setmode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    document.title="Utils";
  }
    else{
      setmode('dark');
      document.body.style.backgroundColor='Black';
      document.body.style.color='white';
      document.title="Utils-darkmode";
      
    }
      
  }

 

  return (
     <>
     

      <Navbar title="Utils" mode={mode} togglemode={togglemode} />
<hum alert="this is an alert msg"/>
<div className="container my-3">

<Text  heading="Text Area"/>
</div>


   </>  
  );
}


export default App;
