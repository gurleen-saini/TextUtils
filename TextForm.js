// import React,{useState} from 'react'

// export default function TextForm(props) {
//     const[text,setText]=useState("Enter your text here");
//     const[styletext,setstyletext]=useState("Enable dark mode");
//     const[style,setstyle]=useState({        color:"Black",
//     backgroundColor:"White"});

//     const handleCopy=()=>{
//         const text = document.getElementById("etext")
//         text.select()
//         navigator.clipboard.writeText(text.value)
//     }

//     const handlePaste = async () => {
//         let newtext = await navigator.clipboard.readText();
//         setText(newtext);
//     }

//     const handleUpclick=()=>{
//         let newtext=text.toUpperCase()
//         setText(newtext)
//     }

//     const handleClearclick=()=>{
//         let newtext=""
//         setText(newtext)
//     }

//     const handleExtraSpaces=()=>{
//         let newtext = text.split(/[" "]+/);
//         setText(newtext.join(" "))
//     }

//     const handleLoclick=()=>{
//         let newtext=text.toLowerCase()
//         setText(newtext)
//     }

//     const handleonchange = (event)=>{
//         setText(event.target.value);
//     }

//     const handleDarkMode = ()=>{
//         if(style.color==="Black"){
//             setstyle(
//             {color:"White",
//             backgroundColor:"Black"})

//             setstyletext("Enable Light Mode")
//         }
//         else
//         {
//             setstyle({
//             color:"Black",
//             backgroundColor:"White"})

//             setstyletext("Enable Dark Mode")
//         }
//     }

//   return (
//     <>
//         <div className='Container' style={style}>
//             <div className="mb-3"  style={style}>
//                 <h1>{props.heading}</h1>
//             </div>
//             <div className="mb-3" style={style}>
//                 <textarea  style={style}  className="form-control" id="etext" rows="8" value={text} onChange={handleonchange}></textarea>
//                 <button className="btn btn-primary my-3" onClick={handleUpclick}>Convert to Upper case</button>
//                 <button className="btn btn-primary my-3" onClick={handleLoclick}>Convert to Lower case</button>
//                 <button className="btn btn-primary my-3" onClick={handleClearclick}>Clear text</button>
//                 <button className="btn btn-primary my-3" onClick={handleDarkMode}>{styletext}</button>
//                 <button className="btn btn-primary my-3" onClick={handleCopy}>Copy text</button>
//                 <button className="btn btn-primary my-3" onClick={handlePaste}>Paste text</button>
//                 <button className="btn btn-primary my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//             </div>
//         </div>
//         <div className='Container' style={style}>
//             <div className="mb-3" style={style}>
//                 <h2>Your Text Summary</h2>
//             </div>
//             <div className="mb-3" style={style}>
//                 <p>{text.split(" ").length}   Words and {text.length} Characters</p>
//                 <p>{0.008 * text.split(" ").length} Minutes to read it</p>
//                 <h3>Preview</h3>
//                 <p>{text}</p>
//             </div>
//         </div>
//     </>
//   )
// }

import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here");

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showalert("Copied to clipboard", "success")
    }

    const handlePaste = async() => {
        let newtext = await navigator.clipboard.readText();
        setText(newtext);
        props.showalert("Pasted", "success")
    }

    const handleUpclick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert("Converted to uppercase", "success")
    }

    const handleClearclick = () => {
        let newtext = ""
        setText(newtext)
        props.showalert("Cleared", "success")
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[" "]+/);
        setText(newtext.join(" "))
        props.showalert("Extra spaces removed", "success")
    }

    const handleLoclick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert("Converted to lowercase", "success")
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    return ( <
        >
        <
        div className = 'Container' >
        <
        div className = "mb-4" >
        <
        h1 style = {
            { color: props.mode === "light" ? "black" : "white" }
        } > { props.heading } < /h1> < /
        div > <
        div className = "mb-3" >
        <
        textarea style = {
            { color: props.mode === "light" ? "black" : "white", background: props.mode === "light" ? "white" : "#13446e" }
        }
        className = "form-control"
        id = "etext"
        rows = "8"
        value = { text }
        onChange = { handleonchange } > < /textarea> <
        button disabled = { text.length === 0 }
        className = "btn btn-primary my-3"
        onClick = { handleUpclick } > Convert to Upper
        case </button> <
        button disabled = { text.length === 0 }
        className = "btn btn-primary my-3"
        onClick = { handleLoclick } > Convert to Lower
        case </button> <
        button disabled = { text.length === 0 }
        className = "btn btn-primary my-3"
        onClick = { handleClearclick } > Clear text < /button> <
        button disabled = { text.length === 0 }
        className = "btn btn-primary my-3"
        onClick = { handleCopy } > Copy text < /button> <
        button className = "btn btn-primary my-3"
        onClick = { handlePaste } > Paste text < /button> <
        button disabled = { text.length === 0 }
        className = "btn btn-primary my-3"
        onClick = { handleExtraSpaces } > Remove Extra Spaces < /button> < /
        div > <
        /div> <
        div style = {
            { color: props.mode === "light" ? "black" : "white" }
        }
        className = 'Container' >
        <
        div className = "mb-3" >
        <
        h2 > Your Text Summary < /h2> < /
        div > <
        div style = {
            { color: props.mode === "light" ? "black" : "white" }
        }
        className = "mb-3" >
        <
        p > { text.split(/\s+/).filter((element) => { return element.length !== 0 }).length }
        Words and { text.length }
        Characters < /p> <
        p > { 0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length }
        Minutes to read it < /p> <
        h3 > Preview < /h3> <
        p > { text.length > 0 ? text : "Enter text in above text-box to preview" } < /p> < /
        div > <
        /div> < /
        >
    )
}