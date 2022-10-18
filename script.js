let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(insNaN(value)){
        handlheSymbol(value);
    }else{
        handleNumber(value);
    }
}