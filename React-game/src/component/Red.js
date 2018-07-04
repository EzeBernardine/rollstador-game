import React from "react";


export default class Red extends React.Component{
    render(){
        return(
            <div>
                <button className="Red"  onClick={this.props.handleRed}>Play</button>
            </div>
        )
    }
}