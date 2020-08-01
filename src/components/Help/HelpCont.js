import React from "react";

class HelpCont extends React.Component {
    render() {
        const {tit, cont} = this.props;

        return (
            <div className="helpRecomendCont">
                <p className="HRTit">{tit}</p>
                <p className="HRCont">{cont}</p>
                <p className="HRRead">Read more &gt;</p>
            </div>
        )
    }
}

export default HelpCont;