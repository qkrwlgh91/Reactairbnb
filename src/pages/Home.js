import React from "react";
import BlackLivesMatter from "../components/Home/BlackLiveMatter";
import FindWhatMatters from "../components/Home/findWhatMetters";
import OnlineExperiences from "../components/Home/OnlineExperiences";

const Home = () => {
    return (
        <div className="screenSize">
            <div>search box</div>
            <FindWhatMatters />
            <OnlineExperiences />
            <BlackLivesMatter />
        </div>
    )
}

export default Home;