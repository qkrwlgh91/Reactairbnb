import React from "react";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {helpContReducer} from "../../redux/reducers/helpContent";

function HelpModal ({ isOpen, close }) {

    const help = useSelector(state=>state.helpContReducer)

    return (
        <>
            {
                isOpen ?
                    <>
                        <div className="helpModal-overlay" onClick={close}/>
                        <div className="helpModal">
                            <div className="helpModalTitle">
                                <h1>Recommended help</h1>
                                <span> X </span>
                            </div>
                            <div className="helpModalBody">
                                <div className="helpSearch">
                                    <h1 className="searchTitle">Search by Keyword</h1>
                                    <input type="text" placeholder="E.g.:reservation status"/>
                                </div>
                                <div className="helpRecommend">
                                    <h3>{help.title}</h3>
                                    <p>{help.hContents[0].tit}</p>
                                </div>
                                <div>
                                    <h2>Reservation requests</h2>
                                </div>
                                <div>
                                    <h2>Contacting hosts</h2>
                                </div>
                                <div>
                                    <h2>Prices & fees</h2>
                                </div>
                            </div>
                            <div className="helpFooter">
                                <button className="helpCentreBtn">Visit the Help Centre</button>
                                <button className="helpFeedbackBtn">Give feedback</button>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </>
    )
}

export default HelpModal;