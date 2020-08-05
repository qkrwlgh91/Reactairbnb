import React from "react";
import {Link} from "react-router-dom";
import {FiSearch} from 'react-icons/fi';

const SearchRoom = () => {
    return (
        <div className="searchRoomBox">
            <div className="searchRoomTitle">
                <ul>
                    <li>Place to stay</li>
                    <li>Monthly stays</li>
                    <li>Experiences</li>
                    <li>Online Experiences <span>New</span></li>
                </ul>
            </div>
            <div className="searchList">
                <ul>
                    <li>
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" placeholder="Where are you going?"/>
                    </li>
                    <li>
                        <label htmlFor="checkIn">CHECK IN</label>
                        <input type="text" id="checkIn" placeholder="Add dates"/>
                    </li>
                    <li>
                        <label htmlFor="checkOut">CHECK OUT</label>
                        <input type="text" id="checkOut" placeholder="Add dates"/>
                    </li>
                    <li>
                        <label htmlFor="guestNumber">GUESTS</label>
                        <input type="text" id="guestNumber" placeholder="Add guests"/>
                    </li>
                    <li>
                        <Link to="/RoomInfoAndMap" className="searchBtn">
                            <button>
                                <FiSearch /> Search
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SearchRoom;