//Constant for RPS Values, and total scores
const vals = [['Rock',1],['Paper',2],['Scissors',3]];
const select_vals = ['rock','paper', 'scissors', 'exit'];
var cpuScore = 0;
var playerScore = 0;

//Add more Event Listeners
let playerPick = document.querySelector('#playerSelection');
let CPUPick = document.querySelector('#cpuSelection');
let result = document.querySelector('#result')
let resultContainer = document.querySelector('.results_container');
let finalResult = document.querySelector('.final_results_container');
let timeVariable;

//Add the Text for the Results
let playerScoreDisplay = document.querySelector('#playerScore');
let cpuScoreDisplay = document.querySelector('#cpuScore');
playerScoreDisplay.textContent = '0';
cpuScoreDisplay.textContent = '0';

//Add Button Event Listners
const allButtons = document.querySelectorAll('button');
const buttons = document.querySelectorAll('.playBtn');
buttons.forEach(button => button.addEventListener('click',play));
const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click',reset);

function play(e){
    let cpu = CPU_Pick();
    let player_selection = e.target.id;
    let idx = select_vals.indexOf(player_selection);
    let player = vals[idx];
    
    gameRound(cpu,player);
    playerScoreDisplay.textContent = String(playerScore);
    cpuScoreDisplay.textContent = String(cpuScore);
}

function CPU_Pick(){
    const r = Math.floor(Math.random() * 3);
    return vals[r];
}

function reset(){
    playerScore = 0
    cpuScore = 0
    playerScoreDisplay.textContent = 0;
    cpuScoreDisplay.textContent = 0;
    allButtons.forEach(button => button.classList.toggle('btnHide'));
    finalResult.classList.remove('unhide');
}

function gameRound(cpu,player){
    let cpuChoice = cpu[0];
    let playerChoice = player[0];
    let cpuNum = cpu[1];
    let playerNum = player[1];
    //Possibly a dumb way to do this...
    if (cpuNum == 1){ playerNum = playerNum % 3};
    if (playerNum == 1){cpuNum = cpuNum % 3};

    playerPick.textContent = playerChoice;
    CPUPick.textContent = cpuChoice;

    //Decide winner
    if(cpuNum == playerNum){
        result.textContent = '--Round Draw--';
    }
    else if(cpuNum > playerNum){
        result.textContent = '--CPU wins the round--';
        cpuScore += 1;
    }
    else{
        result.textContent = '--Player wins the round--';
        playerScore += 1;
    }

    //Check for final result
    let finalWin = document.querySelector('#winner_results');
    let finalLose = document.querySelector('#loser_results');

    if (cpuScore === 5){
        finalWin.classList.add('unhide');
        allButtons.forEach(button => button.classList.toggle('btnHide'))
    }
    else if (playerScore === 5){
        finalLose.classList.add('unhide');
        allButtons.forEach(button => button.classList.toggle('btnHide'))
    }

    //Show Result
    clearTimeout(timeVariable);
    resultContainer.classList.add('showResult');
    timeVariable = setTimeout(() => resultContainer.classList.remove('showResult'),1000);
}