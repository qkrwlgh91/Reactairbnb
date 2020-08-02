import React from "react";
import {FaFacebookF, FaTwitter} from 'react-icons/fa';
import {TiSocialInstagram} from 'react-icons/ti';
import {GrLanguage} from 'react-icons/gr';

const Footer = () => {
    return (
        <div className="footerBox ">
            <div className="footerInfoBox">
                <ul>
                    <li>ABOUT</li>
                    <li>How Airbnb works</li>
                    <li>Diversity &amp; Belonging</li>
                    <li>Accessibility</li>
                    <li>Trust &amp; Safety</li>
                    <li>Aribnb Citizen</li>
                    <li>Olympics</li>
                    <li>Newsroom</li>
                </ul>
                <ul>
                    <li>COMMUNITY</li>
                    <li>Airbnb Magazine</li>
                    <li>Airbnb Associates</li>
                    <li>Airbnb for work</li>
                    <li>Invite friends</li>
                    <li>Careers</li>
                </ul>
                <ul>
                    <li>HOST</li>
                    <li>Host your home</li>
                    <li>Host an online experience</li>
                    <li>Message from CEO Brian Chesky</li>
                    <li>Responsible hosting</li>
                    <li>Open Homes</li>
                    <li>Resource Centre</li>
                    <li>Community Centre</li>
                </ul>
                <ul>
                    <li>SUPPORT</li>
                    <li>Updates for COVID-19</li>
                    <li>HELP Centre</li>
                    <li>Cancellation options</li>
                    <li>Neighbourhood Support</li>
                </ul>
            </div>
            <hr/>
            <div className="footerCopright">
                <ul>
                    <li>&copy;2020 AirBnb, Inc. All rights reserved</li>
                    <li>&middot; Provacy</li>
                    <li>&middot; Terms</li>
                    <li>&middot; Sitemap</li>
                    <li>&middot; UK Modern Slavery Act</li>
                    <li>&middot; Company details</li>
                </ul>
                <ul className="iconList">
                    <li><GrLanguage/></li>
                    <li className="underline">English&#40;GB&#41;</li>
                    <li>&pound; </li>
                    <li className="underline">GBP</li>
                    <li><FaFacebookF/></li>
                    <li><FaTwitter /></li>
                    <li><TiSocialInstagram /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;