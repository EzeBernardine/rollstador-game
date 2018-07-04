import React, { Component } from 'react';
import './App.css';
import Haeder from "./component/Header";
import Board from "./component/Board";



class App extends Component {
  render() {
    let diffWords = [
      "Nigeria is the giant of Africa",
      "i am an intern at learnfactory Nigeria",
      "this is the best game you can ever play",
      "Build your trust on God"
  ]
  let infoMessage = [
      "Learnfactory internship started on 31st of April",
      "The Rolls Royes is made up of four members: Bernrdine, Grace, Emmanuel and Chibuike",
      "Goerge is a guy and a leader. Grace a lady, Shalom the last born, Emmanuel a guy and a leader too",
      "Emmanuel is the leader of this group",
      "Our chiefcodes smith is Sir IC",
      "We have vertually four teachers",
      "There are four departments here in Learnfactory",
      "Bernardine is a lady, Zoe a lady, and Chilaka a guy",
      "Prince is a handaome guy, and Izekiel; the tallest guy"
  ]
  let reversedWords = [
      "is Nigeria the giant Africa of",
      "learnfactory an am intern at Nigeria i",
      "is the play game best you can ever this",
      "trust your on Build God"
  ]
  let question="re-arrange the words in the correct order";
    return (
     <div>
      <Haeder />
      <Board  
        arr={reversedWords}
        question={question}
      />
     </div>
    );
  }
}

export default App;
