//display number in text box
function displayNum(num){
    result.value+=num
}
//clear text box
function clearBox(){
    result.value=""
}
//evaluate expression
function evaluateExpr(){
    result.value=eval(result.value)
}
//remove last item from text box

function removeItem(){
    curExpr=result.value
    result.value=curExpr.slice(0,-1)
} 