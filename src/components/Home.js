import React from "react"
import "./Styles/Home.css"

export default function Home() {
    return (
        <section className="home">
            <picture>
                <source className="hero-image"  srcSet="/images/mobile/image-hero.jpg" media="(max-width: 767px" />
                <img  className="hero-image" src="/images/desktop/image-hero.jpg" alt="hero-image" />
            </picture>
            <div className="text-container">
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
        </section>
    )
}