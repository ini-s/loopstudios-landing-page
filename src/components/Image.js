import React from "react"
import "./Styles/Image.css"
export default function Image({ imgName, topTitle, bottomTitle }) {
    return (
        <div className="image-box">
            <picture>
                <source media="(max-width:767px)" srcSet={"/images/mobile/" + imgName} />
                <img src={"/images/desktop/" + imgName} alt="image" />
            </picture>
            <div className="title">
                <h3>{topTitle}</h3>
                <h3>{bottomTitle}</h3>
            </div>
        </div>
    )
}