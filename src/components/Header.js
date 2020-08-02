import React from "react";
import { Link } from 'react-router-dom';
import log from '../scss/img/airbnbLog.png';
import SignUp from "./SignUp";
import HelpModal from "./Help/HelpModal";
import {FaBars} from 'react-icons/fa';
import {BsPeopleCircle} from 'react-icons/bs';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            helpModalOpen: false,
            isDropdown: false,
        }
    }

    openModal = () => {
        this.setState({isModalOpen: true});
    }

    closeModal = () => {
        this.setState({isModalOpen: false});
    }

    openHelpModal = (e) => {
        this.setState({
            helpModalOpen: true
        })
    }

    closeHelpModal = (e) => {
        this.setState({helpModalOpen: false})
    }

    handleToggle = () => {
        this.setState({
            isDropdown: !this.state.isDropdown
        })

    }


    render() {
        console.log(this.state.isDropdown)

        return (
            <div className="headerBox">
                <div className="airbnbLog">
                    <Link to="/"><img src={log} alt="airbnb homepage log"/></Link>
                </div>
                <div className="headerList">
                        <button className="togglebtn" onClick={this.handleToggle}>
                            <FaBars className="fabarsIcon"/> <BsPeopleCircle className="bsPople" />
                        </button>
                            {
                                this.state.isDropdown ? (
                                    <div className="toggleList">
                                        <ul>
                                            <li><button onClick={this.openModal}>Sign up</button></li>
                                            <SignUp isOpen={this.state.isModalOpen} close={this.closeModal} />
                                            <li><Link to="/Login">Log in</Link></li>
                                            <hr/>
                                            <li>Host your home</li>
                                            <li>Host an experience</li>
                                            <li><button onClick={this.openHelpModal}>Help</button></li>
                                            <HelpModal isOpen={this.state.helpModalOpen} close={this.closeHelpModal}/>
                                        </ul>
                                    </div>
                                    )
                                    :
                                    null
                            }
                </div>

            </div>
        )
    }
}



export default Header;