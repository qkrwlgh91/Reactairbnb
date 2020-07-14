import React from "react";
import emailPic from "../scss/img/emailPic.png";

const SignUp = ({isOpen, close}) => {
    return (
        <>
            {
                isOpen ?
                    <>
                        <div className="Modal-overlay" onClick={close}/>
                        <div className="Modal">
                            <div className="modalTitle">
                                <button className="modalX"> &#215; </button>
                                <p className="title">Sign up</p>
                            </div>
                            <div className="userInfoBox">
                                <label htmlFor="RegionNo" className="RegionSelectBox">
                                    <div>Country&#47;Region</div>
                                    <select name="RegionNo" id="RegionNo">
                                        <option value="44">United Kingdom (+44)</option>
                                        <option value="82">Republic of Korea (+82)</option>
                                    </select>
                                    <div>&#94;</div>
                                </label>
                                <label htmlFor="" className="phoneNumberLabel">
                                    <input type="text" placeholder="Phone number"/>
                                </label>
                                <p>We'll call or text you to confirm your number. Standard message and data rates
                                    apply.</p>
                            </div>
                            <div className="button-wrap">
                                <button onClick={close}>continue</button>
                            </div>
                            <span className="orLine">or</span>
                            <div className="joinOthersWay">
                                <button><img src={emailPic} alt="email picture"/><span className="JoinwayTitle">Continue with email</span></button>
                                <button><img src={emailPic} alt="email picture"/><span className="JoinwayTitle">Continue with Facebook</span></button>
                                <button><img src={emailPic} alt="email picture"/><span className="JoinwayTitle">Continue with Google</span></button>
                                <button><img src={emailPic} alt="email picture"/><span className="JoinwayTitle">Continue with Apple</span></button>
                            </div>
                            <div className="moveToLogIn">
                                <p>Already have an account? <button className="LoginBtn">Log in</button></p>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </>
    )
}

export default SignUp;