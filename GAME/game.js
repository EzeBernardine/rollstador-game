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
function shuffle(e) {
    presentWord = Math.round(Math.random() * 3);
    while (e.target.innerHTML.indexOf(reversedWords[presentWord]) != -1) {
        Math.round(Math.random() * 3);
    }
    let theQuestion = document.getElementById("question").innerHTML = ("re-arrange the words in correct order");
    let theWord = reversedWords[presentWord];
    let theDiv = document.getElementById("words").innerHTML = (theWord);
     document.getElementById("words").style.fontSize="15px"
    e.preventDefault();
}
let green =document.getElementById("green").addEventListener("click", shuffle)


let typedWord= document.getElementById("type");
let errorMessage=document.getElementById("error")


function submit(e) {
    let theOther = diffWords[presentWord]
    let type = typedWord.value;
    if (type === theOther) {
        typedWord.style.color = "green";
        errorMessage.innerHTML = ("Weldone");
        errorMessage.style.color = "green";
    } else {
        typedWord.style.color = "red";
        errorMessage.innerHTML = ("error!!! Pls try again");
        errorMessage.style.color = "red";
    }
}
let red = document.getElementById("red").addEventListener("click", submit)




function display(e) {
    let len =typedWord.value.length;
    if (e.charCode === 32) {
        //alert(len);
        for (let i = 0; i < len; i++) {
            let index0 = typedWord.value.charAt(i);
            console.log(index0);
            let theOther = (diffWords[presentWord]).charAt(i);
            console.log(theOther);
            if (index0 === theOther) {
                //console.log("i did");
                typedWord.style.color = "green";
            } else {
                //console.log("itsnot");
                typedWord.style.color = "red";
            }
        }
    }
}

let typed = typedWord.addEventListener("keypress", display)

