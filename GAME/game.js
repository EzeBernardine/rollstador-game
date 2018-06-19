let diffWords = [
    "Nigeria is the giant of Africa",
    "i am an intern at learnfactory Nigeria",
    "this is the best game you can ever play",
    "Build your trust on God"
]

let infoMessage = [
    "Learnfactory internship started on 31st of April",
    "The Rolls Royes is made up of four members: Bernrdine, Grace, Emmanuel and ",
    "Goerge is a guy, Grace a lady, Shalom the last born, Emmanuel a guy and a leader",
    "Emmanuel is the leader of this group",
    "Our chiefcodes smith is Sir IC",
    "We have verually four teachers",
    "There are four departments here in Learnfactory",
    "Bernardine is a lady, Zoe a lady, and Chilaka a guy",
    "Prince is a handaome guy, and Izekiel: the tallest guy"
]




let reversedWords = [
    "is Nigeria the giant Africa of",
    "learnfactory an am intern at Nigeria i",
    "is the play game best you can ever this",
    "trust your on Build God"
]


let randomNumber = Math.round(Math.random() * 3);
//function that displays the questions
function displayedWords() {
    randomNumber = Math.round(Math.random() * 3);
    let theWord = reversedWords[randomNumber];
    while (Words.innerHTML.indexOf(reversedWords[randomNumber]) != -1) {
        randomNumber = Math.round(Math.random() * 3);
    }
    theWord = reversedWords[randomNumber];
    let theDiv = document.getElementById("words").innerHTML = (theWord);
}

//function housing the display of the info messages
let messageDisplayArea = document.getElementById("score")

function aboutUs() {
    randomNumber2 = Math.round(Math.random() * 10);
    let theWord2 = infoMessage[randomNumber2];
    while (messageDisplayArea.innerHTML.indexOf(infoMessage[randomNumber2]) != -1) {
        randomNumber2 = Math.round(Math.random() * 10);
    }
    theWord2= infoMessage[randomNumber2];
    document.getElementsByClassName("goodMessage")[0].innerHTML = (theWord2);
    // alert(randomNumber2)
}



let Drop1 = document.getElementById("drop1");
let Words = document.getElementById("words")

function play(e) {
    displayedWords()
    let theQuestion = document.getElementById("question").innerHTML = ("re-arrange the words in correct order");
    document.getElementById("words").style.fontSize = "15px"
    document.getElementById("scoreFigures").className = "scoreFigures";

    //adding the do you know paragraph
    let doYou=document.createElement("p");
    doYou.className = "doyou"
    messageDisplayArea.appendChild(doYou);
    doYou.style.marginTop="25%";
    // doYou.style.marginLeft="30%"; 
    doYou.innerHTML = `DO YOU KNOW <br/> ...loading...`; 
    doYou.style.color="yellow";

    //the info message paragraph
    let info = document.getElementById("score").className = "score";
    let thePara = document.createElement("p")
    thePara.className = "goodMessage"
    messageDisplayArea.appendChild(thePara);
    Drop1.className = "drop1";
    document.getElementById("drop2").className = "drop2";
    document.getElementsByClassName("board")[0].className = "board2";

    //adding the yellow button tag
    let Restart = document.createElement("button");
    let text = document.createTextNode("restart");
    Restart.appendChild(text)
    Restart.className = "restart";
    document.getElementById("score").appendChild(Restart)
    // removing the red button tag
    let bnt = e.target;
    bnt.parentElement.removeChild(bnt)
    // console.log(bnt)
    function reset(e) {
        location.reload();
    }
    Restart.addEventListener("click", reset);
    let redButton = document.createElement("button");
    let buttonText = document.createTextNode("submit")
    redButton.appendChild(buttonText)
    redButton.className = "red";
    document.getElementsByClassName("board2")[0].appendChild(redButton)

    let typedWord = document.getElementById("type");
    let errorMessage = document.getElementById("error")
    let increment = 0;

    function submit(e) {
        let correctWord = diffWords[randomNumber]
        let type = typedWord.value;
        // alert(correctWord)
        // alert(type)
        // alert(randomNumber)
        if (type === correctWord) {
            // alert("green")
            typedWord.style.color = "green";
            errorMessage.innerHTML = ("Weldone");
            errorMessage.style.color = "green";
            let winningScore = document.getElementById("scoreFigures");
            increment++;
            winningScore.innerHTML = increment;
            // alert("green")
            redButton.style.marginTop = "2%";
            displayedWords();
            doYou.innerHTML = "DO YOU KNOW";
            // alert("hi")
            doYou.className="DOYOU";
            aboutUs()

        } else {
            //  alert("failed")
            typedWord.style.color = "red";
            errorMessage.innerHTML = ("error!!! Pls try again");
            errorMessage.style.color = "red";
            let failingScore = document.getElementById("scoreFigures");
            increment--;
            failingScore.innerHTML = increment;
            redButton.style.marginTop = "2%";
            // aboutUs();
            doYou.innerHTML = "DO YOU KNOW";
            doYou.className="DOYOU";
            document.getElementsByClassName("goodMessage")[0].innerHTML = "oops!!!           give the correct answer first";
            document.getElementsByClassName("goodMessage")[0].style.color="red"


        }
    }
    let red = document.getElementsByClassName("red")[0].addEventListener("click", submit)
}
let green = document.getElementById("green").addEventListener("click", play)




function display(e) {
    let correctWord = diffWords[randomNumber]
    let len = typedWord.value.length;
    if (e.charCode === 32) {
        //alert(len);
        for (let i = 0; i < len; i++) {
            let index0 = typedWord.value.charAt(i);
            // console.log(index0);
            correctWord = (diffWords[randomNumber]).charAt(i);
            // console.log(correctWord);
            if (index0 === correctWord) {
                //console.log("i did");
                typedWord.style.color = "green";
            } else {
                //console.log("itsnot");
                typedWord.style.color = "red";
            }
        }
    }
}
let typedWord = document.getElementById("type");
let typed = typedWord.addEventListener("keypress", display)