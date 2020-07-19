import React from "react";

const HelpModal = ({ isOpen, close }) => {
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
                                    <h3>RECOMMENDED ARTICLES</h3>
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