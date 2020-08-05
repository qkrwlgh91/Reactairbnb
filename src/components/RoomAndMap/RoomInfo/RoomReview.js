import React from "react";
import host2 from "../../../scss/img/host/host2.png";

const RoomReview = () => {
    return (
        <div className="RoomReviewBox">
            <h1>
                5.0 (10 reviews)
            </h1>
            <div>

            </div>
            <div className="RoomReviewList">
                <div className="ReviewHeader">
                    <img src={host2} alt="host2"/>
                    <div className="ReviewerBox">
                        <h1 className="ReviewerNm">Andy</h1>
                        <p className="ReviewDt">January 2020</p>
                    </div>
                </div>
                <p>
                    Very nice room, and very nice guy. I only stayed one night, as I was just stopping in London before heading to the airport next day, but I had a few minutes chatting with Neil, who is clearly a good and very chilled out guy. I've stayed in a couple of pretty scuzzy places in London over the last few weeks (it's hard to tell from the photos, honestly), and this was definitely a nice one. A TV in the room - Luxury!!!
                </p>
            </div>
            <button>show all 10 reviews</button>
        </div>
    )
}

export default RoomReview;