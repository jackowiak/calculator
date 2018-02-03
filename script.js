var result = document.getElementsByClassName("totalresult")[0];
var clearBtn = document.getElementById("c");
var numBtns = document.getElementsByClassName("numbers");
var operBtns = document.getElementsByClassName("operators");
var getResult = document.getElementById("equals");
var signOperator = document.getElementById("sign");
var powerOperator = document.getElementById("power");
var pointOperator = document.getElementById("point");
var backspaceOperator = document.getElementById("backspace");
var zerobtn = document.getElementById("zero");

clearBtn.addEventListener("click", function() {
    result.style.fontSize = "40";
    result.textContent = "0";
})

for (var i=0; i<numBtns.length; i++) {
    numBtns[i].addEventListener("click", function() {
        if (result.textContent == "0") {
            result.textContent = "";
            if (result.textContent.length < 11) {
                result.style.fontSize = "40px";
                result.textContent += this.textContent;
            } else {
                result.textContent = result.textContent;
            }            
        } else {
            if (result.textContent.length < 11) {
                result.style.fontSize = "40px";
                result.textContent += this.textContent;
            } else {
                result.textContent = result.textContent;
            }            
        }
    })
}

for (var j=0; j<operBtns.length; j++) {
    operBtns[j].addEventListener("click", function() {
        var resLength = result.textContent.length;
        var checkLastOperator = result.textContent.charAt(resLength-1);
        
        if (resLength > 0) {
            if (checkLastOperator == '×' || checkLastOperator == '÷' || checkLastOperator == '+' || checkLastOperator == '-' || checkLastOperator == '.') {
                result.textContent = result.textContent.substring(0, resLength-1) + this.textContent;
            } else {
                result.textContent += this.textContent;
            }            
        }
    })
}

getResult.addEventListener("click", function() {
    
    var resLength = result.textContent.length;
    var checkLastOperator = result.textContent.charAt(resLength-1);
        
    if (checkLastOperator != '×' && checkLastOperator != '÷' && checkLastOperator != '+' && checkLastOperator != '-' && checkLastOperator != '.') {
        var finalResult = eval(result.textContent.replace(/×/g, "*").replace(/÷/g, "/"));
        if (finalResult.length > 10) {
            finalResult.style.fontSize = "12px";
            result.textContent = finalResult.toFixed(2);
        } else {
            result.textContent = finalResult.toFixed(2);
        }               
    } else {
        result.textContent = result.textContent;
    }   
})

signOperator.addEventListener("click", function() {
    if (result.textContent.charAt(0) != "-") {
        result.textContent = "-" + result.textContent;
    } else {
        var positiveResult = result.textContent.substr(1);
        result.textContent = positiveResult;
    }
})

powerOperator.addEventListener("click", function() {
    var resLength = result.textContent.length;
    var checkLastOperator = result.textContent.charAt(resLength-1);
    
    if (resLength == 0) {
        result.textContent == result.textContent;
    } else {
        if (checkLastOperator != '×' && checkLastOperator != '÷' && checkLastOperator != '+' && checkLastOperator != '-' && checkLastOperator != '.') {
            var finalResult = eval(result.textContent.replace(/×/g, "*").replace(/÷/g, "/"));      

            var poweredResult = Math.pow(finalResult, 2);

            if (poweredResult.toString().length > 10) {
                result.style.fontSize = "20px";
                result.textContent = poweredResult;
            } else {
                result.style.fontSize = "40px";
                result.textContent = poweredResult;
            }                
        } else {
            result.textContent = result.textContent;
        }        
    }        
})

pointOperator.addEventListener("click", function() {
    var resLength = result.textContent.length;
    var checkLastOperator = result.textContent.charAt(resLength-1);

    
    if (result.textContent.search(/[.]/g) > 0 || result.textContent == "") {
        result.textContent = result.textContent;
    } else if (checkLastOperator == '×' || checkLastOperator == '÷' || checkLastOperator == '+' || checkLastOperator == '-') {
        result.textContent = result.textContent.substring(0, resLength-1) + ".";
    } else {
        result.textContent += ".";
    }
})

backspaceOperator.addEventListener("click", function() {
    
    if (result.textContent == "Infinity") {
        result.style.fontSize = "40";
        result.textContent = "0";
    } else {
        if (result.textContent.length == "1") {
            result.textContent = "0";
        } else {
            var bkResult = result.textContent.substr(0, result.textContent.length-1);
            result.textContent = bkResult;           
        }
    }
})

zerobtn.addEventListener("click", function() {
    if (result.textContent == "0") {
        result.textContent == "0";
    } else {
        result.textContent += "0";
    }
})