let boxes = document.querySelectorAll('.box');
let resetButton = document.getElementById('btn-reset');
let result=document.querySelector('.result');
let currentPlayer = 'X';

const winningCombinations = [
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
    box.addEventListener('click', () => {
        if (box.innerHTML === '') {
            box.innerHTML = currentPlayer;
            box.disabled = true;
            let winner = checkWinner();
            if (winner) {
                result.innerHTML=`Player ${winner} wins!`;
                result.classList.remove("hide");
                disableboxes();
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

resetButton.addEventListener("click",()=> {
        enableboxes();
});

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if ( boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
            return boxes[a].innerHTML;
        }
    }
    return null;
}



function disableboxes(){
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

function enableboxes(){
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = '';
    })
}

