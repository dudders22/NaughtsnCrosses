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
    return idx

}

CPU_Pick()
player_Pick()