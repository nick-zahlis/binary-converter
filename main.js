var runningTotal = 0;
var finalArr = [];

function numToArray () {
    var inputString = document.getElementById("binaryInputRTL").value;
    if (inputString.length === 8) {
        console.log(inputString.length);
        binaryArr = inputString.split("");
        binaryArr.reverse();
        binaryToDec(runningTotal, binaryArr);
    } else if (inputString < 256){
        decToBinary(inputString , finalArr);   
    } else {
        document.write("The number that you entered either isn't valid or isn't supported.");
    }
}
     
function binaryToDec (runningTotal, binaryArr) {
    for (i = 0; i < binaryArr.length; i++){
        if (binaryArr[i] === "1") {
            binaryArr[i] = Math.pow(2, i);
        } else {
            binaryArr[i] = 0;
        }
        runningTotal += binaryArr[i];
    }
    document.write("The binary number that you entered equals:" + runningTotal);
}

function decToBinary (inputString , finalArr){
    for (i=7 ; i>=0 ; i--) {
        if (inputString >= Math.pow(2 , i)) {
            inputString -= Math.pow(2 , i);
                finalArr.push(1);
        } else {
            finalArr.push(0);
        }
    }
    finalArr = finalArr.join('');
    document.write(finalArr);
}