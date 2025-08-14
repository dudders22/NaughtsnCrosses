//Constant for RPS Values
const vals = [['Rock',1],['Paper',2],['Scissors',3]];
const select_vals = ['rock','paper', 'scissors', 'exit'];

//CPU picker function
function CPU_Pick(){
    const r = Math.floor(Math.random() * 3);
    console.log('test - CPU value' + JSON.stringify(vals[r]));
    return vals[r];
}

//Player option select function
function player_Pick(){
    let pass = 0;
    let p = '';
    while(pass === 0){
        p = prompt('Pick rock, paper or scissors! (or type "exit" to exit)');
        p = p.toLowerCase();
        //Make sure we only accept valid strings.
        if (select_vals.includes(p)){
            console.log('Player selected: ' + p);
            pass = 1;
        }
        else{
            console.log('invalid option, please select only rock, paper or scissors! (or exit)');
        }
    }
    
    //Convert to relevant array value.
    let idx = select_vals.indexOf(p);
    console.log('test - Player value' + JSON.stringify(vals[idx]));
    return vals[idx];
}

function gameRound(cpu,player){
    let cpuChoice = cpu[0];
    let playerChoice = player[0];
    let cpuNum = cpu[1];
    let playerNum = player[1];
    //Decide winner
    if(cpuNum == playerNum){
        console.log('Player selected: ' + playerChoice);
        console.log('CPU selected: ' + cpuChoice);
        console.log('--Round Draw--')
    }
    else if(cpuNum > (playerNum % 3)){
        console.log('Player selected: ' + playerChoice);
        console.log('CPU selected: ' + cpuChoice);
        console.log('--CPU wins the round--')
    }
    else{
        console.log('Player selected: ' + playerChoice);
        console.log('CPU selected: ' + cpuChoice);
        console.log('--Player wins the round--')
    }
}

function play(){
    let cpu = CPU_Pick();
    let player = player_Pick();
    gameRound(cpu,player);
}
