import React from "react"
import mobileInteractive from "../images/mobile/image-interactive.jpg"
import "./Styles/Top.css"
export default function Top() {
    return (
        <section className="Top">
            <div className="left">
                <img className="Top-mobile" src={mobileInteractive} alt="interactive-img-mobile" />
            </div>
            <div className="right">
                <h2> THE LEADER IN INTERACTIVE VR </h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </section>
    )
}