import React from "react";
import MapAction from "./MapAction";
import RoomList from "./RoomList";


function RoomAndMapBody () {
    return (
        <div className="roomAndMapBox">
            <div className="roomInfoBox">
                <div className="roomInfoHeader">
                    <h2 className="dateAndPersonInfo">300+ stay &middot; 5 Aug - 26 Sep &middot; 1 guest</h2>
                    <h1 className="searchLocationInfo">Syays in London</h1>
                    <ul>
                        <li><button>Cancellation flexibility</button></li>
                        <li><button>Type of place</button></li>
                        <li><button>price</button></li>
                        <li><button>Instant Book</button></li>
                        <li><button>More filters</button></li>
                    </ul>
                    <RoomList />
                </div>
            </div>
            <div className="mapPosition">
                <MapAction />
            </div>
        </div>
    )
}

export default RoomAndMapBody;