import React from "react";

import Menu2Filled from "./MenuIcon";
import ExitIcon from "./ExistIcon";

import classes from './SideBarMobile.module.css'


function SideBarMobileLeft (props) {

// Hide of show menu
    const menuItems = document.getElementById('menu')
    function showMenu() {
        menuItems.style.left = "0"
    }

    function hideMenu() {
        menuItems.style.left = "-100%"
    }

// Create menu navigation
    function navigate(identification, e) {
        e.preventDefault()
    const theContactForm = document.querySelector(identification);
    theContactForm.scrollIntoView({behavior: "smooth", block: "start"  })
    menuItems.style.left = "-100%"
    }

    return (
        <>
        <nav className={classes['nav-section']}> 
        <button name="open menus" onClick={showMenu}><Menu2Filled /></button>
        </nav>
        <div id="menu" className={classes.menu}>
            <button name="close menu" onClick={hideMenu}><ExitIcon /></button>
            <ul>
                <li><button onClick={(e) => {navigate('#introduction', e)}}>home</button></li>
                <li><button onClick={(e) => {navigate('#skills', e)}}>Skills</button></li>
                <li><button onClick={(e) => {navigate('#projects', e)}}>Projects</button></li>
                <li><button onClick={(e) => {navigate('#experience', e)}}>Experience</button></li>
                <li><button onClick={(e) => {navigate('#technology', e)}}>Tech Stack</button></li>
                <li><button onClick={(e) => {navigate('#contact', e)}}>Contact Me</button></li>

            </ul>
        </div>
        </>
    )
}


export default SideBarMobileLeft;


