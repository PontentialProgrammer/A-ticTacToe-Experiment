let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");
let b6 = document.querySelector("#b6");
let b7 = document.querySelector("#b7");
let b8 = document.querySelector("#b8");
let b9 = document.querySelector("#b9");
let winnerParagraph = document.getElementById('info');
let restartButton = document.getElementById('restart');
console.log(winnerParagraph)

let turn = true;
let winner = "";
let reference = ""
let gameStillOn = true;
let winningPositions = [
    [b1.textContent, b2.textContent, b3.textContent],
    [b4.textContent, b5.textContent, b6.textContent],
    [b7.textContent, b8.textContent, b9.textContent],
    [b1.textContent, b5.textContent, b9.textContent],
    [b3.textContent, b5.textContent, b7.textContent],
    [b1.textContent, b4.textContent, b7.textContent],
    [b2.textContent, b5.textContent, b8.textContent],
    [b3.textContent, b6.textContent, b9.textContent]
];
// console.log(winningPositions[0].join(''))

let possibleWins = ['XXX', 'OOO']


let board = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
let board2 = [b1.textContent, b2.textContent, b3.textContent, b4.textContent, b5.textContent,b6.textContent,b7.textContent,b8.textContent,b9.textContent,]

// loop to listen for clicks
for(let i = 0; i< board.length; i++){
    board[i].addEventListener('click', buttonClick)
}


restartButton.addEventListener('click', () => {
    restartButton.style.display = 'none'
    gameStillOn = true;
    turn = true;
    winnerParagraph.textContent = ''
    for(let i = 0; i <board.length; i++){
        board[i].textContent = ''
    }
})






function buttonClick() {
    //function that controls the player

    if(turn && this.textContent == "" && gameStillOn){
        this.textContent = "X";
        turn = false;
        
    }else if(gameStillOn){
        this.textContent = "O";
        turn = true
    }
    winningPositions = [
        [b1.textContent, b2.textContent, b3.textContent],
        [b4.textContent, b5.textContent, b6.textContent],
        [b7.textContent, b8.textContent, b9.textContent],
        [b1.textContent, b5.textContent, b9.textContent],
        [b3.textContent, b5.textContent, b7.textContent],
        [b1.textContent, b4.textContent, b7.textContent],
        [b2.textContent, b5.textContent, b8.textContent],
        [b3.textContent, b6.textContent, b9.textContent]
    ];
    board2 = [b1.textContent, b2.textContent, b3.textContent, b4.textContent, b5.textContent,b6.textContent,b7.textContent,b8.textContent,b9.textContent]

    // to check for wins
    for( let i = 0; i < winningPositions.length; i++){
        for(let j = 0; j < possibleWins.length; j++){
            if (winningPositions[i].join('') == possibleWins[j]){
                gameStillOn = false;
                restartButton.style.display = 'inline-block'
                if(turn){
                    winnerParagraph.innerHTML = `<p>O is the winner</p>`


                }else{
                    winnerParagraph.innerHTML = `<p>X is the winner</p>`
                }
            }
            
        
        
    }
    if (board2.indexOf('') == -1 && gameStillOn == true){
        winnerParagraph.innerHTML = `<p>The game is a tie</p>`
        restartButton.style.display = 'inline-block';
    }
    
}
}



