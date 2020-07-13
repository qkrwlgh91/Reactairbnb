import React from "react";

const SignUp = ({isOpen, close}) => {
    return (
        <>
            {
                isOpen ?
                    <>
                        <div className="Modal-overlay" onClick={close}/>
                        <div className="Modal">
                            <p className="title">Modal Title</p>
                            <div className="content">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="button-wrap">
                                <button onClick={close}>Confirm</button>
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