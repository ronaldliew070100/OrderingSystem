import React from "react"
import "./Hero.css"
import chef from "../../../../assets/chef.png"

function Hero() {
  return (
    <div className="">
      <section className="hero-section flexBetween">
        {/* left */}
        <div className="flexColStart leftSection">
          <div className="textbox-first">
            Recipe <br /> Contest
          </div>
          <div className="textbox-second">
            Recipe contests are like our big, <br />
            Recipe contests are like our big, <br />
            constantly-in-progress dinner party-and you're invited.
          </div>
          <div className="textbox-third">How they work →</div>
        </div>
        {/* right */}

        <img src={chef} style={{ width: "50%", borderRadius: "15px" }}></img>
      </section>
    </div>
  )
}

export default Hero
