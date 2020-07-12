import React from "react";

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
                        <h5>LOCATION</h5>
                        <input type="text" placeholder="Where are you going?"/>
                    </li>
                    <li>
                        <h5>CHECK IN</h5>
                        <input type="text" placeholder="Add dates"/>
                    </li>
                    <li>
                        <h5>CHECK OUT</h5>
                        <input type="text" placeholder="Add dates"/>
                    </li>
                    <li>
                        <h5>GUESTS</h5>
                        <input type="text" placeholder="Add guests"/>
                    </li>
                    <li>
                        <input type="submit" value="Search" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SearchRoom;