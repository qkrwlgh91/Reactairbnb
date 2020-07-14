import React from "react";
import BlackLivesMatter from "../components/Home/BlackLiveMatter";
import FindWhatMatters from "../components/Home/findWhatMetters";
import OnlineExperiences from "../components/Home/OnlineExperiences";
import SearchRoom from "../components/Home/SearchRoom";

const Home = () => {
    return (
        <div>
            <SearchRoom />
            <FindWhatMatters />
            <OnlineExperiences />
            <BlackLivesMatter />
        </div>
    )
}

export default Home;