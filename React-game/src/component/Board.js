import React from "react";
import Board1 from "./Board1";
import SearchBox from "./SearchBox";
import Red from "./Red";
import Question from "./Question";
import TypeArea from "./TypeArea";
// import Submit from "./Submit"

export default class Board extends React.Component{
    handleRed=()=>{
        // introducing the question?
        document.getElementsByClassName("Question")[0].innerHTML=this.props.question
        // removing the play buttton
        let parent = document.getElementsByClassName("Red")[0].parentElement;
        parent.removeChild(document.getElementsByClassName("Red")[0]);
        // creating the sumbit button
        let green=document.createElement("button");
        let greenText=document.createTextNode("Submit");
        green.appendChild(greenText);
        document.getElementsByClassName("Board")[0].appendChild(green);
        green.className="Submit";
        // styling the page further
        document.getElementsByClassName("second-left1")[0].className="second-left";
        document.getElementsByClassName("second-right1")[0].className="second-right";
        document.getElementsByClassName("cover1")[0].className="cover";
        document.getElementsByClassName("figures1")[0].className="figures";
        document.getElementsByClassName("info-area1")[0].className="info-area";
        document.getElementsByClassName("Board")[0].className="BoardSecondPosition"
        // adding contents to the info-area
        let infoArea=document.getElementsByClassName("infoTextParagraph")[0];
        infoArea.innerHTML=`INFO <br/> ...loading....`;
        infoArea.style.marginTop="30%";
        infoArea.style.marginLeft="10%";  
        infoArea.style.color="yellow";
        // diplaying the random questions
        this.displayedWords();
    }
    displayedWords=()=> {
        let randomNumber = Math.round(Math.random() * 3);
        let theWord = this.props.arr[randomNumber];
        let words=document.getElementsByClassName("SaerchBox")[0];
            while (words.innerHTML.indexOf(this.props.arr[randomNumber]) != -1) {
                randomNumber = Math.round(Math.random() * 3);
            }
        theWord = this.props.arr[randomNumber];
        console.log(theWord)
        // introducing the random questions
        document.getElementsByClassName("SaerchBox")[0].innerHTML=(theWord);
    }
    render(){
        return(
            <div className="Board">
                <Board1 />
                <Question />
                <SearchBox arr1={this.props.arr} />
                <TypeArea />
                <Red handleRed={this.handleRed}/>
            </div>
        )
    }
}

