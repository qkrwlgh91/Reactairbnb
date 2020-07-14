import React from "react";
import { Link } from 'react-router-dom';
import log from '../scss/img/airbnbLog.png';
import SignUp from "./SignUp";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }

    openModal = () => {
        this.setState({isModalOpen: true});
    }

    closeModal = () => {
        this.setState({isModalOpen: false});
    }

    render() {
        return (
            <div className="headerBox">
                <div className="airbnbLog">
                    <Link to="/"><img src={log} alt="airbnb homepage log"/></Link>
                </div>
                <div className="headerList">
                    <ul>
                        <li>사진</li>
                        <li>Host your home</li>
                        <li>Host an experience</li>
                        <li>Help</li>
                        <li><Link to="/Login">Log in</Link></li>
                        <li><button onClick={this.openModal}>Sign up</button></li>
                        <SignUp isOpen={this.state.isModalOpen} close={this.closeModal} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;