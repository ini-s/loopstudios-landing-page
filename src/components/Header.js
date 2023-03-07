import React, { useState } from "react"
import "./Styles/Header.css"
import logo from "../images/logo.png"
import hamburger from "../images/icon-hamburger.png"
import SideNav from "./SideNav.js"
import "./Styles/Header.css"

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    function openSideNav() {
        setIsActive(prevValue => !prevValue)
    }

    return (
        <header>
            <div className='main-nav'>
                <img className="logo" src={logo} alt="logo" />
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#event">Events</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </nav>
                <img className="open-menu" onClick={openSideNav} src={hamburger} alt="hamburger-menu" />
            </div>
            <SideNav isActive={isActive} ssetIsActive={setIsActive} />
        </header>
    )
}