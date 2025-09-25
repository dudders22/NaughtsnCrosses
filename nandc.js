//Constant for RPS Values, and total scores
const vals = [['Rock',1],['Paper',2],['Scissors',3]];
const select_vals = ['rock','paper', 'scissors', 'exit'];
var cpuScore = 0;
var playerScore = 0;

//Add the Text for the Results
let playerScoreDisplay = document.querySelector('#playerScore');
let cpuScoreDisplay = document.querySelector('#cpuScore');
playerScoreDisplay.textContent = '0';
cpuScoreDisplay.textContent = '0';

//Add Event Listners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => addEventListener('click',play));

//CPU picker function
function CPU_Pick(){
    const r = Math.floor(Math.random() * 3);
    console.log('test - CPU value' + JSON.stringify(vals[r]));
    return vals[r];
}

function gameRound(cpu,player){
    let cpuChoice = cpu[0];
    let playerChoice = player[0];
    let cpuNum = cpu[1];
    let playerNum = player[1];
    //Possibly a dumb way to do this...
    if (cpuNum == 1){ playerNum = playerNum % 3};
    if (playerNum == 1){cpuNum = cpuNum % 3};

    //Decide winner
    if(cpuNum == playerNum){
        console.log('Player selected: ' + playerChoice);
        console.log('CPU selected: ' + cpuChoice);
        console.log('--Round Draw--')
    }
    else if(cpuNum > playerNum){
        console.log('Player selected: ' + playerChoice);
        console.log('CPU selected: ' + cpuChoice);
        console.log('--CPU wins the round--')
        cpuScore += 1
    }
    else{
        console.log('Player selected: ' + playerChoice);
        console.log('CPU selected: ' + cpuChoice);
        console.log('--Player wins the round--')
        playerScore += 1
    }
}

function reset(){
    playerScore = 0
    cpuScore = 0
    console.log('Scores reset to 0-0')
}

function play(e){
    let cpu = CPU_Pick();
    let player_selection = e.target.className;
    let idx = select_vals.indexOf(player_selection);
    let player = vals[idx];
    console.log(player_selection);
    console.log(player);
    
    gameRound(cpu,player);
    playerScoreDisplay.textContent = String(playerScore);
    cpuScoreDisplay.textContent = String(cpuScore);
}
