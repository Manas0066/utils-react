
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React ,{useState} from 'react'


export default function Text(props) {
 
    const handleUpClick=()=>{
      console.log("youcclicked "+text)
      let newText=text.toUpperCase();
      setText(newText)
    }

    const handleLowClick=()=>{
      console.log("youcclicked "+text)
      let newText=text.toLowerCase();
      setText(newText)
    }

    const clrtext=()=>{
      console.log("youcclicked "+text)
      let newText="";
      setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value)
    }



  const[text,setText]=useState("enter the text");
 

  return (
    <>
    <div>
      <h1 className='mx-auto'>{props.heading}</h1>
       
      
<div className="mx-3">
  
  <textarea className="form-control-lg" value={text} onChange={handleOnChange} id="mybox" rows="8" cols="132"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Covert to UpperCase</button>
<button className="btn btn-warning" onClick={handleLowClick}>Covert to LowerCase</button>
<button className="btn btn-danger" onClick={clrtext}>Clear text</button>

    </div>

    <div className="container my-3">
      <h1 className='textSummary'>Your text summary</h1>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minute read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
  
}
