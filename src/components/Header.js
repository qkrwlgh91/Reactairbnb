import React from "react";
import { Link } from 'react-router-dom';
import log from '../scss/img/airbnbLog.png';

const Header = () => {
    return (
        <div className="headerBox">
            <Link to="/"><img src={log} alt="airbnb homepage log"/></Link>
            <ul>
                <li>숙소 호스트 되기</li>
                <li>체험 호스팅하기</li>
                <li>도움말</li>
                <li><Link to="/Login">로그인</Link></li>
                <li><Link to="/Login/smart">Login</Link></li>
                <li><Link to="/SignIn">회원가입</Link></li>
            </ul>
            <hr/>
        </div>
    )
}

export default Header;