import React from "react";
import room1_1 from "../../../scss/img/room/room1_1.png";
import room1_2 from "../../../scss/img/room/room1_2.png";
import room1_3 from "../../../scss/img/room/room1_3.png";
import room1_4 from "../../../scss/img/room/room1_4.png";
import room1_5 from "../../../scss/img/room/room1_5.png";
import room1_6 from "../../../scss/img/room/room1_6.png";
import room1_7 from "../../../scss/img/room/room1_7.png";
import {FaStar} from 'react-icons/fa';

import RoomDetails from "./RoomDetails";
import Reservation from "./Reservation";
import RoomSite from "./RoomSite";
import HostInfo from "./HostInfo";
import RoomReview from "./RoomReview";

const RoomInformation = () => {
    return (
        <div className="roomInformation">
            <div className="roomDetailHeader">
                <h1>Private London bedroom close to tube</h1>
                <div>
                    <FaStar className="redStar" /> 5.0 (10)
                    &middot;<span className="locationInfo"> Greater London, England, United Kingdom</span>
                </div>
            </div>
            <div className="roomDetailImg">
                <img src={room1_1} alt="room1_1"/>
                <img src={room1_2} alt="room1_2"/>
                <img src={room1_3} alt="room1_3"/>
                <img src={room1_4} alt="room1_4"/>
                <img src={room1_5} alt="room1_5"/>
            </div>
            <div>
                <RoomDetails/>
                <Reservation />
            </div>
            <RoomReview />
            <RoomSite />
            <HostInfo />
        </div>
    )
}

export default RoomInformation;