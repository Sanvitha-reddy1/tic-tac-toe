let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let audio;
let bgm;
let turno = true;
//bgm = new Audio("music.mp3");
//bgm.play();
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    audio = new Audio("ting.mp3");
    box.addEventListener("click", () => {
        audio.play();
        if(turno){
            box.innerText = "O";
            box.style.color = "#1d7874";
            turno = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#ee2e31";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) =>{
    msg.innerText = "Congratulations! " + winner + " wins!";
    msgContainer.classList.remove("hide");
}

const disableBoxes = () =>{
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
const checkWinner = () => {
    for(pattern of winpatterns){
        if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText && boxes[pattern[0]].innerText !== ""){
            disableBoxes();
            showWinner(boxes[pattern[0]].innerText);
        }
    }
}

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
});

newBtn.addEventListener("click", () => {
     msgContainer.classList.add("hide");
     boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
     });
});