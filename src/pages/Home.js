import React from "react";
import BlackLivesMatter from "../components/Home/BlackLiveMatter";
import FindWhatMatters from "../components/Home/findWhatMetters";

const Home = () => {
    return (
        <div className="screenSize">
            <div>search box</div>
            <FindWhatMatters />
            <div>picture box</div>
            <div>온라인체험</div>
            <BlackLivesMatter />
        </div>
    )
}

export default Home;