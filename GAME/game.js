let diffWords = [
    "Nigeria is the giant of Africa",
    "i am an intern at learnfactory Nigeria",
    "this is the best game you can ever play",
    "Build your trust on God"
]





let reversedWords = [
    " is Nigeria the giant  Africa of",
    "learnfactory an am  intern at  Nigeria i",
    " is the play game best you can ever  this",
    "trust  your on Build God"
]


let presentWord = Math.round(Math.random() * 3);

function displayedWords() {
    presentWord = Math.round(Math.random() * 3);
    let theWord = reversedWords[presentWord];
    while (Words.innerHTML.indexOf(reversedWords[presentWord]) != -1) {
        presentWord = Math.round(Math.random() * 3);
    }
    theWord = reversedWords[presentWord];
    let theDiv = document.getElementById("words").innerHTML = (theWord);
}


let Drop1 = document.getElementById("drop1");
let Words = document.getElementById("words")

function play(e) {
    displayedWords()
    let theQuestion = document.getElementById("question").innerHTML = ("re-arrange the words in correct order");
    document.getElementById("words").style.fontSize = "15px"
    document.getElementById("scoreFigures").className = "scoreFigures";
    document.getElementById("score").className = "score";
    Drop1.className = "drop1";
    document.getElementById("drop2").className = "drop2";
    document.getElementsByClassName("board")[0].className = "board2";

    let Restart = document.createElement("button");
    let text = document.createTextNode("restart");
    Restart.appendChild(text)
    document.body.appendChild(Restart);
    Restart.className = "restart";
    let bnt=e.target;
    e.target.parentElement.removeChild(bnt)
    console.log(bnt)
  

    function reset(e) {
        location.reload();
    }
    Restart.addEventListener("click", reset);

    let buttonTag = document.createElement("button");
    let buttonText = document.createTextNode("submit")
    buttonTag.appendChild(buttonText)
    document.body.appendChild(buttonTag)
    buttonTag.className = "red";


    let typedWord = document.getElementById("type");
    let errorMessage = document.getElementById("error")
    let increment = 0;

    function submit(e) {
        let correctWord = diffWords[presentWord]
        let type = typedWord.value;
        //alert(correctWord)
        //alert(type)
        if (type === correctWord) {
            // alert("green")
            typedWord.style.color = "green";
            errorMessage.innerHTML = ("Weldone");
            errorMessage.style.color = "green";
            let winningScore = document.getElementById("scoreFigures");
            increment++;
            winningScore.innerHTML = increment;
            buttonTag.style.marginTop = "2%"
            displayedWords();
        } else {
            // alert("red")
            typedWord.style.color = "red";
            errorMessage.innerHTML = ("error!!! Pls try again");
            errorMessage.style.color = "red";
            let failingScore = document.getElementById("scoreFigures");
            increment--;
            failingScore.innerHTML = increment;
            buttonTag.style.marginTop = "2%"
           // alert("red2")
            // displayedWords();
        }
    }
    let red = document.getElementsByClassName("red")[0].addEventListener("click", submit)
}
let green = document.getElementById("green").addEventListener("click", play)




function display(e) {
    let correctWord = diffWords[presentWord]
    let len = typedWord.value.length;
    if (e.charCode === 32) {
        //alert(len);
        for (let i = 0; i < len; i++) {
            let index0 = typedWord.value.charAt(i);
            // console.log(index0);
            correctWord = (diffWords[presentWord]).charAt(i);
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