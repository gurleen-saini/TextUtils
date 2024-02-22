import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';



import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

// let name="<b>Gurleen</b>"
function App() {

    const [alert, setalert] = useState(null);

    const showalert = (message, type) => {
        setalert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setalert(null)
        }, 1500);
    }
    const [mode, setmode] = useState("light")
    const togglemode = (cls) => {
        if (mode === "light") {
            setmode("dark")
            document.body.style.backgroundColor = "#042743"
            showalert("Dark mode has been enabled", "success")
                // document.title="TextUtils - Dark Mode"
                // setInterval(() => {
                //   document.title="TextUtils is Amazing"
                // }, 2000);
                // setInterval(() => {
                //   document.title="Install TextUtils Now"
                // }, 1500);
        } else {
            setmode("light")
            document.body.style.backgroundColor = "white"
            showalert("Light mode has been enabled", "success")
                // document.title="TextUtils - Light Mode"
        }
    }

    return (
            // <>
            // <nav>
            //   <li>Home</li>
            //   <li>About</li>
            //   <li>Contact</li>
            // </nav>
            // <img src="" alt="" />
            // <h1>Hello {name}</h1>
            // <div className="container">
            //   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nobis minus in, expedita eaque magni? Temporibus voluptas quos, facilis maxime officiis labore aspernatur voluptatum fugit pariatur in, accusantium placeat perspiciatis ad error hic omnis.
            // </div>
            // </>

            // <>
            //   <nav className="navbar navbar-expand-lg bg-body-tertiary">
            //     <div className="container-fluid">
            //       <a className="navbar-brand" href="/">Textutils</a>
            //       <button className="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaexpanded="false" ariLabel="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //       </button>
            //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            //           <li className="nav-item">
            //             <a className="nav-link active" ariaCurrent="page" href="/">Home</a>
            //           </li>
            //           <li className="nav-item">
            //             <a className="nav-link" href="/">About</a>
            //           </li>
            //         </ul>
            //         <form className="d-flex" role="search">
            //           <input className="form-control me-2" type="search" placeholder="Search" ariaLabel="Search"/>
            //           <button className="btn btn-outline-success" type="submit">Search</button>
            //         </form>
            //       </div>
            //     </div>
            //   </nav>
            // </>

            <
            >
            { /* <Navbar ></Navbar> */ } <
            Router >
            <
            Navbar title = "Textutils"
            Abouttext = "About textutils"
            mode = { mode }
            togglemode = { togglemode } > < /Navbar> <
            Alert alert = { alert }
            /> <
            div className = "container my-3" > { /* <TextForm heading="Enter your text here" mode={mode} showalert={showalert} ></TextForm> */ } { /* <About mode={mode}></About> */ }

            <
            Routes >
            <
            Route exact path = "/"
            element = { < TextForm heading = "Try TextUtils - Word counter , Character counter , Remove extra spaces"
                mode = { mode }
                showalert = { showalert } > < /TextForm>} / >
                <
                Route exact path = "/about"
                element = { < About mode = { mode } > < /About>} / > { /* no need to use exact here beacuse it is in built */ } <
                    /Routes>

                    <
                    /div> < /
                    Router > <
                    />
                );
            }

            export default App;