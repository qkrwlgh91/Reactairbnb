import React from "react";
import {FaStar} from 'react-icons/fa';

const Reservation = () => {
    return (
        <div className="reservationBox">
            <div className="reservationHeader">
                <h3>&pound; 433 <span className="MonthOrNight">/ month</span></h3>
                <p><FaStar className="redStar"/> 5.0 (10)</p>
            </div>
            <div className="RdateAndGuest">
                <label htmlFor="checkIn">CHECK-IN</label>
                <input type="text" id="checkIn"/>
                <label htmlFor="checkOut">CHECKOUT</label>
                <input type="text" id="checkOut"/>
                <label htmlFor="guestOption">GUEST</label>
                <div id="guestOption">
                    1guest
                </div>
            </div>
            <button className="reserveBtn">Reserve</button>
            <div className="roomOptionFee">
                <p className="optionList">Accommodation<span className="optionFee">&pound; 740</span></p>
                <p className="optionList">Monthly discount: 29% off<span className="optionFee">-&pound; 215</span></p>
                <p className="optionList">Service fee<span className="optionFee">&pound; 67</span></p>
            </div>
            <div className="totalFeeBox">
                <h1 className="totalFeeTit">Total</h1>
                <h1 className="totalFee">&pound; 433</h1>
            </div>
        </div>
    )
}

export default Reservation;