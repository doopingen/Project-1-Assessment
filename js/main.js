var totalCount = 0;
var btnUp = document.getElementById("submitplus");
var btnDown = document.getElementById("submitminus");
var outputField = document.getElementById("output");
var intInput = document.getElementById("input");
var intOutput = 0;
var test1 = 0;
var test2 = 0;

if(totalCount < 0){
    outputField.classList.add("negativenum");
}

btnUp.onclick = function() {
    test1 = intInput.valueAsNumber; 
    totalCount += test1;
    outputField.innerHTML = totalCount;
}

btnDown.onclick = function() {
    test2 = intInput.valueAsNumber; 
    totalCount -= test2;
    outputField.innerHTML = totalCount;
    if(totalCount < 0){
        outputField.classList.add("negativenum");
    }
}









