console.log("Why Are You Checking Console You naughty boiii");
let box = document.getElementsByClassName("box");
let turn = "X";
let turncontent = document.getElementById("turnofplayer");
const TurnChange = () => {
    return turn === "X" ? "O" : "X";
};
let GameOver = false;
const CheckWin = () => {
    let boxtext = document.getElementsByClassName("text");
    let win = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [2, 4, 6],
        [2, 5, 8],
        [6, 7, 8],
        [1, 4, 7],
        [3, 4, 5],
    ];
    win.forEach((e) => {
        if (
            boxtext[e[0]].innerHTML == boxtext[e[1]].innerHTML &&
            boxtext[e[1]].innerHTML == boxtext[e[2]].innerHTML &&
            boxtext[e[0]].innerHTML !== ""
        ) {
            turncontent.innerHTML = boxtext[e[0]].innerHTML + " Won";
            GameOver = true;
            setTimeout(() => {
                reset();
            }, 3000);
        }
    });
};
const reset = () => {
    Array.from(box).forEach((element) => {
        let boxtext = element.querySelector(".text");
        boxtext.innerHTML = "";
        turncontent.innerHTML = `Turn of ${turn}`;
    });
};
document.getElementById("reset_button").addEventListener("click", () => {
    reset();
});
Array.from(box).forEach((element) => {
    let boxtext = element.querySelector(".text");
    element.addEventListener("click", () => {
        if (boxtext.innerHTML === "") {
            boxtext.innerHTML = turn;
            turn = TurnChange();
            CheckWin();
            if (!GameOver) {
                turncontent.innerHTML = `Turn of  "${turn}"`;
            }
        }
    });
});
