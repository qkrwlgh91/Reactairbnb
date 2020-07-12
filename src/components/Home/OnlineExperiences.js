import React from "react";
import favourite from "../../scss/img/favourite.png";
import fruits from "../../scss/img/fruits.png";
import pairing from "../../scss/img/pairing.png";
import seasonal from "../../scss/img/seasonal.png";

const OnlineExperiences = () => {
    return (
        <div className="OnlineExperiencesBox">
            <div className="experiencesTitle">
                <h1>Online Experiences with top chefs</h1>
                <p>cook with culinary legends and learn the stories behind thair favourite dishes.
                    Join unique interactive activities led by one-of-a-kind hosts-all without leaving home. </p>
                <button>Explore all</button>
            </div>
            <div className="experiencesGrid">
                <div className="experiences1">
                    <img src={favourite} alt="favourites summer recipes"/>
                    <p>Learn favourite summer recipes with celebrated chef Roze Traore</p>
                </div>
                <div className="experiences2">
                    <img src={fruits} alt=""/>
                    <p>Fruits de mer with Michelin chef Marc Favier</p>
                </div>
                <div className="experiences3">
                    <img src={pairing} alt=""/>
                    <p>Pairing and plating with Michelin chef Soo Ahn</p>
                </div>
                <div className="experiences4">
                    <img src={seasonal} alt=""/>
                    <p>Make seasonal dishes with London's star chef Anthea Stephenson</p>
                </div>
            </div>
        </div>
    )
}

export default OnlineExperiences;