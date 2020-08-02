import React from "react";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import HelpCont from './HelpCont';

import {connect} from "react-redux";
import HelpPriceAndFees from "./HelpPriceAndFees";
import HelpContacting from "./HelpContacting";
import HelpReservation from "./HelpReservation";

import {BsChevronDown} from 'react-icons/bs';
import {BsChevronUp} from 'react-icons/bs';
import {BsX} from 'react-icons/bs';


class HelpModal extends React.PureComponent {
// function HelpModal ({ isOpen, close, tit, cont}) {

    // const help = useSelector(state=>state.helpContReducer)
    state = {
        isReservationShow: false,
        isContactingShow: false,
        isPriceShow: false

    }

    handleReservationShow = () => {
        this.setState({
            isReservationShow: !this.state.isReservationShow
        })
    }

    handlecontactingShow = () => {
        this.setState({
            isContactingShow: !this.state.isContactingShow
        })
    }

    handlePriceShow = () => {
        this.setState({
            isPriceShow: !this.state.isPriceShow
        })
    }


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
                                    <span> <BsX/> </span>
                                </div>
                                <div className="helpModalBody">
                                    <div className="helpSearch">
                                        <h1 className="searchTitle">Search by Keyword</h1>
                                        <input type="text" placeholder="E.g.:reservation status"/>
                                    </div>
                                    <div className="helpRecommend">
                                        <h3>{this.props.title}</h3>
                                        {this.props.helps.map(item =>
                                            <HelpCont tit={item.tit} cont={item.cont} key={item.id.toString()}/>
                                        )}
                                        <h3>{this.props.topic}</h3>
                                    </div>
                                    <div className="reservation">
                                        <h2 onClick={this.handleReservationShow}>Reservation requests
                                            {this.state.isReservationShow ?
                                                (
                                                    <>
                                                        <BsChevronUp className="arrowPosition"/>
                                                        {this.props.reservation.map(item =>
                                                            <HelpReservation tit={item.tit} key={item.id.toString()}/>
                                                        )}
                                                    </>)
                                                :
                                                <BsChevronDown className="arrowPosition"/>}
                                        </h2>

                                    </div>
                                    <div className="contactingHost">
                                        <h2 onClick={this.handlecontactingShow}>Contacting hosts
                                            {this.state.isContactingShow ?
                                                (
                                                    <>
                                                        <BsChevronUp className="arrowPosition"/>
                                                        {this.props.contacting.map(item =>
                                                            <HelpContacting tit={item.tit} key={item.id.toString()}/>
                                                        )}
                                                    </>)
                                                :
                                                <BsChevronDown className="arrowPosition"/>}
                                        </h2>
                                    </div>
                                    <div className="priceAndFees">
                                        <h2 onClick={this.handlePriceShow}>Prices & fees
                                            {this.state.isPriceShow ?
                                                (
                                                    <>
                                                        <BsChevronUp className="arrowPosition"/>
                                                        {this.props.price.map(item =>
                                                            <HelpPriceAndFees tit={item.tit} key={item.id.toString()}/>
                                                        )}
                                                    </>)
                                                :
                                                <BsChevronDown className="arrowPosition"/>}
                                        </h2>
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
        topic: state.helpContReducer.topic,
        reservation: state.helpContReducer.reservation,
        contacting: state.helpContReducer.contacting,
        price: state.helpContReducer.pricesAndFees
    }
}

export default connect(mapStateToProps)(HelpModal);