import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");

  //   uppercase function
  const uppercaseConversion = () => {
    let temp = text.toUpperCase();
    setText(temp);
  };

  //   lowercase function
  const lowercaseConversion = () => {
    let temp = text.toLowerCase();
    setText(temp);
  };

   //   Clear Data function
   const clearData = () => {
    let temp = ''
    setText(temp);
  };

   //   trim function
   const  trimtext= () => {
    let temp = text.trim();
    setText(temp);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

const [CopySuccess,setCopySuccess]=useState('Copy Document');


const [copyBtn, setcopyBtn] = useState('primary');

  const copyDoc=()=>
  {
    const temp=text;
    navigator.clipboard.writeText(temp);
    setCopySuccess('Copied!');
    setcopyBtn('success');
    setTimeout(() => {
      setCopySuccess('Copy Document');
      setcopyBtn('primary');
    }, 800);
    
    
  }

  let myStyle={
    backgroundColor : props.mode==="light"?"#212529":"white",
    color : props.mode==="light"?"white":"black",
  }


  return (
    <>
      <section>
        <div className="container my-4">

          <div>
            <h4>{props.heading}</h4>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              id="mybox"
              value={text}
              onChange={handleOnChange}
              rows="8"
              style={myStyle}
            ></textarea>
          </div>

          <div>
            <button
              className="btn btn-primary btn-convert mx-1 my-1"
              onClick={uppercaseConversion}
            >
              Convert into UpperCase
            </button>
            <button
              className="btn btn-primary mx-1 my-1"
              onClick={lowercaseConversion}
            >
              Convert into LowerCase
            </button>
            <button
              className="btn btn-primary mx-1 my-1"
              onClick={clearData}
            >
              Clear
            </button>
            <button
              className="btn btn-primary mx-1 my-1"
              onClick={trimtext}
            >
                Trim text
            </button>
            <button
              className={`btn btn-${copyBtn} mx-1 my-1`}
              onClick={copyDoc}
            >
               {CopySuccess}
            </button>
            
          </div>


        </div>

        <div className="container my-2">
          <h4>Counter in ReactJs</h4>
          <p>{countWords(text)} Words and {text.length} Character</p>
          
          <p> {(0.0008 * text.length).toFixed(4)} Time required to read</p>
          <h4>Preview</h4>
          <p>{text}</p>
          <hr />
        </div>



      </section>
    </>
  );
}
