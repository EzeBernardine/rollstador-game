import React from "react";

export default class Haeder extends React.Component{
    render(){
        return(
            <div>
                <div className="Haeder">
                   <h1>ROLLSTADOR</h1>
                </div>
                <div>
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="middle"></div>
                    <div className="second-left1"></div>
                    <div className="second-right1"></div>
                    <div className="cover1"></div>
                    <div className="figures1"></div>
                    <div className="info-area1">
                        <p className="infoTextParagraph"></p>
                    </div>
                </div>
            </div>
        );
    }
}