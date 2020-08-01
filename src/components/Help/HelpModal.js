import React from "react";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import HelpCont from './HelpCont';

import {connect} from "react-redux";


class HelpModal extends React.PureComponent {
// function HelpModal ({ isOpen, close, tit, cont}) {

    // const help = useSelector(state=>state.helpContReducer)




    render() {
        const {isOpen, close} = this.props;

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
                                        <h3>{this.props.title}</h3>
                                        {this.props.helps.map(item =>
                                            <HelpCont tit={item.tit} cont={item.cont} key={item.id.toString()} />
                                        )}
                                        <h3>{this.props.topic}</h3>
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
}

HelpModal.propTypes = {
    hContents: PropTypes.arrayOf(PropTypes.shape({
        tit: PropTypes.string,
        cont: PropTypes.string
    }))
}

let mapStateToProps = (state) => {
    return {
        helps: state.helpContReducer.hContents,
        title: state.helpContReducer.title,
        topic: state.helpContReducer.topic
    }
}

export default connect(mapStateToProps)(HelpModal);