let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".restGame");
let smsCont = document.querySelector(".massageCont");
let msg = document.querySelector(".sms");
let playAgain = document.querySelector(".Again");


let turnO = true

let winingPatren = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO === true) {
            box.innerHTML = "0";
            turnO = false;
        } else {
            box.innerHTML = "x";
            turnO = true;
        }
        box.disabled = true;
        checkWiner()
    });
});

const resetGame = () => {
    turnO = true
    enblableBtn();
    smsCont.classList.add("hide");

}

const disableBtn = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enblableBtn = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congrates ${winner} Player Win.`;
    smsCont.classList.remove("hide");
    disableBtn();
}

const checkWiner = () => {
    for (let patrean of winingPatren) {
        // console.log(patrean[0], patrean[1], patrean[2]);
        // console.log(boxes[patrean[0]].innerHTML, boxes[patrean[1]].innerHTML, boxes[patrean[2]].innerHTML);
        let pos1Val = boxes[patrean[0]].innerHTML;
        let pos2Val = boxes[patrean[1]].innerHTML;
        let pos3Val = boxes[patrean[2]].innerHTML;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
playAgain.addEventListener("click", resetGame);