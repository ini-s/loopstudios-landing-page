import React from "react"
import "./Styles/Footer.css"
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img className="footer-logo" src="/images/logo.png" alt="logo" />
                <ul className="footer-nav">
                    <li><a>About</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Events</a></li>
                    <li><a>Products</a></li>
                    <li><a>Support</a></li>
                </ul>
            </div>
            <div className="footer-right">
                <div className="footer-icons">
                    <img src="/images/icon-facebook.png" alt="icon" />
                    <img src="/images/icon-twitter.png" alt="icon" />
                    <img src="/images/icon-pinterest.png" alt="icon" />
                    <img className="instagram" src="/images/icon-instagram.png" alt="icon" />
                </div>
                <div className="copyright">
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}