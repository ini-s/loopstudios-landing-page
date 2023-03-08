import React from "react"
import "./Styles/sideNav.css"

export default function SideNav({ isActive, setIsActive }) {
    const customStyle = { display: isActive && "block" }
    function closeSideNav() {
        setIsActive(prevValue => !prevValue)
    }
    return (
        <div className="side-nav" style={customStyle}>
            <div className="side-nav-top">
                <img className="logo" src="/images/logo.png" alt="logo" />
                <img className="close-icon" onClick={closeSideNav} src="/images/icon-close.png" alt="close-icon" />
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#event">Events</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#support">Support</a></li>
                </ul>
            </nav>
        </div>
    )
}