import React from "react";
import { Link } from 'react-router-dom';
import log from '../scss/img/airbnbLog.png';

const Header = () => {
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
                    <li><Link to="/SignIn">Sing up</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;