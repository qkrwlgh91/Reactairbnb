import React from "react";
import host1 from "../../../scss/img/host/host1.png";
import {FaStar} from 'react-icons/fa';
import {AiFillSafetyCertificate} from 'react-icons/ai';

const HostInfo = () => {
    return (
        <>
            <div className="hostInfoHeader">
                <img src={host1} alt="host1"/>
                <div className="hostInfoTit">
                    <h1>Hosted by Jany</h1>
                    <p>Joined in January 2019</p>
                </div>
            </div>
            <div className="hostInfoBody">
                <div className="hostIntro">
                    <div className="hostIdentity">
                        <FaStar className="redstar"/> 10 Reviews <AiFillSafetyCertificate className="identitycolor"/> Identity verified
                    </div>
                    <p>Hi. I am a Londoner through and through. I am an Airbnb host and as looking towards travelling more. I like food, films, socialising and music.</p>
                </div>
                <div className="hostResponse">
                    <p>Response rate: 80%</p>
                    <p>Response time: Within an few hours</p>
                    <button>Contact host</button>
                </div>
            </div>

        </>
    )
}

export default HostInfo;