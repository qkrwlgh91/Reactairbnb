import React from "react";
import experience from '../../scss/img/onlineExperiences.png';
import getaway from '../../scss/img/getaway.png';
import entireHomes from '../../scss/img/Entirehomes.png';

const FindWhatMatters = () => {
    return (
        <div className="findWhatMattersBox">
            <div className="whatMattersTitle">
                <h1>You don't need to go far to find what matters.</h1>
            </div>
            <div className="whatMattersList">
                <div>
                    <img src={experience} alt="online Experiences"/>
                    <h2>Online Experience</h2>
                    <p>Unique activities We can do together, led by a would of hosts.</p>
                </div>
                <div>
                    <img src={getaway} alt="Your next getaways"/>
                    <h2>Your next getaway</h2>
                    <p>Switch off or reconnect on a trip that's just short drive away.</p>
                </div>
                <div>
                    <img src={entireHomes} alt="Entire homes"/>
                    <h2>Entire homes</h2>
                    <p>Comfortable private places, with room for friends or family.</p>
                </div>
            </div>
        </div>
    )
}

export default FindWhatMatters;