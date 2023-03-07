import React from "react"
import "./Styles/Gallery.css"
import Image from "./Image.js"

export default function Gallery() {
    return (
        <section className="gallery">
            <div className="top-text">
                <h2>OUR CREATIONS</h2>
                <button className="desktop-see-all">SEE ALL</button>
            </div>
            <div className="images-container">
                <Image
                    imgName="image-deep-earth.jpg"
                    topTitle="Deep"
                    bottomTitle="earth"
                />
                <Image
                    imgName="image-night-arcade.jpg"
                    topTitle="Night"
                    bottomTitle="arcade"
                />
                <Image
                    imgName="image-soccer-team.jpg"
                    topTitle="Soccer"
                    bottomTitle="team vr"

                />
                <Image
                    imgName="image-grid.jpg"
                    topTitle="The"
                    bottomTitle="grid"
                />
                <Image
                    imgName="image-from-above.jpg"
                    topTitle="From up"
                    bottomTitle="above vr"
                />
                <Image
                    imgName="image-pocket-borealis.jpg"
                    topTitle="Pocket"
                    bottomTitle="Borealis"
                />
                <Image
                    imgName="/image-curiosity.jpg"
                    topTitle="THE "
                    bottomTitle="CURIOSITY"
                />
                <Image
                    imgName="/image-fisheye.jpg"
                    topTitle="MAKE IT"
                    bottomTitle="FISHEYE"
                />
            </div>
            <button className="mobile-see-all">SEE ALL</button>
        </section>
    )
}