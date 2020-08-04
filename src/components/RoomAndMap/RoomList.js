import React from "react";
import {FaStar} from 'react-icons/fa';
import {FaPoundSign} from 'react-icons/fa';
import room1_1 from '../../scss/img/room/room1_1.png';
import room1_2 from '../../scss/img/room/room1_2.png';
import room1_3 from '../../scss/img/room/room1_3.png';

function RoomList () {
    return (
        <div className="roomListBox">
            <div className="roomListInner">
                <img src={room1_1} alt="roomImgList"/>
                <div className="roomListInfo">
                    <p>Private room in LB of Newham</p>
                    <h1>Private London bedroom close to tube</h1>
                    <div className="roomSimpleInfo">1guest &middot; 1bedroom &middot; 1bed &middot; 2shared bathrooms</div>
                    <div className="roomOptionList">Wifi &middot; Washing machine</div>
                    <div className="roomListInfoFooter">
                        <div className="roomScore"><FaStar className="starColor" /> 5.0 (10)</div>
                        <div className="roomPriceInfo"><FaPoundSign/> 488 / month</div>
                    </div>
                </div>
            </div>
            <div className="roomListInner">
                <img src={room1_2} alt="roomImgList"/>
                <div className="roomListInfo">
                    <p>Private room in LB of Newham</p>
                    <h1>Private London bedroom close to tube</h1>
                    <div className="roomSimpleInfo">1guest &middot; 1bedroom &middot; 1bed &middot; 2shared bathrooms</div>
                    <div className="roomOptionList">Wifi &middot; Washing machine</div>
                    <div className="roomListInfoFooter">
                        <div className="roomScore"><FaStar className="starColor" /> 5.0 (10)</div>
                        <div className="roomPriceInfo"><FaPoundSign/> 488 / month</div>
                    </div>
                </div>
            </div>
            <div className="roomListInner">
                <img src={room1_3} alt="roomImgList"/>
                <div className="roomListInfo">
                    <p>Private room in LB of Newham</p>
                    <h1>Private London bedroom close to tube</h1>
                    <div className="roomSimpleInfo">1guest &middot; 1bedroom &middot; 1bed &middot; 2shared bathrooms</div>
                    <div className="roomOptionList">Wifi &middot; Washing machine</div>
                    <div className="roomListInfoFooter">
                        <div className="roomScore"><FaStar className="starColor" /> 5.0 (10)</div>
                        <div className="roomPriceInfo"><FaPoundSign/> 488 / month</div>
                    </div>
                </div>
            </div>
            <div className="roomPaging">
                페이징 부분이다.
            </div>
        </div>
    )
}

export default RoomList;