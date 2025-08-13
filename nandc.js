//Constant for RPS Values
const vals = [['Rock',1],['Paper',2],['Scissors',3]]

//CPU picker function
function CPU_Pick(){
    const r = Math.floor(Math.random() * 3) + 1
    return vals[r]
}