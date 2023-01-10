import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =() =>{
        //console.log("Upper case was clicked"+text)
        
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")

    }
    const handleLowClick =() =>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")

    }
    const handleClearClick =() =>{
        let newText=' ';
        setText(newText)
        props.showAlert("Text has been cleared","success");

    }
    const handleOnChange=(event)=>{
        //console.log("Change")
        setText(event.target.value);
    }
    const[text,setText]=useState('Enter text here');
    // text="new text"; //Wrong way to change the state
    // setText("New text");//Correct way
  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>
                {props.heading}
            </h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
            </div>
            <button  className='btn btn-primary mx-1' onClick={handleUpClick}> Convert to Upper Case </button>
            <button  className='btn btn-secondary mx-1' onClick={handleLowClick}> Convert to Lower Case </button>
            <button  className='btn btn-dark mx-1' onClick={handleClearClick}> Clear</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length}Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the box to preview here..."}</p>
        </div>
    </>
  )
}
