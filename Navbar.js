import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return ( <
        >
        <
        nav className = { `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
        <
        div className = "container-fluid" >
        <
        Link className = "navbar-brand"
        to = "/" > { props.title } < /Link> <
        button className = "navbar-toggler"
        type = "button" >
        <
        span className = "navbar-toggler-icon" > < /span> < /
        button > <
        div className = "collapse navbar-collapse"
        id = "navbarSupportedContent" >
        <
        ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/" > Home < /Link> < /
        li > <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/about" > { props.Abouttext } < /Link> < /
        li > <
        /ul> <
        div className = 'd-flex' >
        <
        div className = 'btn btn-primary mx-1'
        onClick = { props.togglemode }
        style = {
            { height: "30px", width: "30px" }
        } > < /div> <
        div className = 'btn btn-secondary mx-1'
        onClick = { props.togglemodeg }
        style = {
            { height: "30px", width: "30px" }
        } > < /div> <
        div className = 'btn btn-success mx-1'
        onClick = { props.togglemodegr }
        style = {
            { height: "30px", width: "30px" }
        } > < /div> <
        div className = 'btn btn-danger mx-1'
        onClick = { props.togglemoder }
        style = {
            { height: "30px", width: "30px" }
        } > < /div> <
        div className = 'btn btn-warning mx-1'
        onClick = { props.togglemodey }
        style = {
            { height: "30px", width: "30px" }
        } > < /div> < /
        div > <
        div className = { `form-check form-switch text-${props.mode==="light"?"dark":"light"}` } >
        <
        input className = "form-check-input"
        onClick = { props.togglemode }
        type = "checkbox"
        role = "switch"
        id = "flexSwitchCheckDefault" / >
        <
        label className = "form-check-label"
        htmlFor = "flexSwitchCheckDefault" > Enable Dark Mode < /label> < /
        div > <
        /div> < /
        div > <
        /nav> < /
        >
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    Abouttext: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "this is title",
    Abouttext: "This is about the text"
}