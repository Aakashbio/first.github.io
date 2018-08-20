var equal = document.querySelector('#equal');
var result = document.querySelector('#result');
var clear = document.querySelector('#c');

var plus = document.querySelector('#plus');
var minus = document.querySelector('#subs');
var divide = document.querySelector('#divide');
var multi = document.querySelector('#multi');


var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var three = document.querySelector('#three');
var two = document.querySelector('#two');
var one = document.querySelector('#one');
var zero = document.querySelector('#zero');
var decimal = document.querySelector('#dot');

clear.addEventListener('click',function(){
    result.value =  "";
})


seven.addEventListener('click',function(){
    result.value += 7;
})

eight.addEventListener('click',function(){
    result.value += 8;
})

nine.addEventListener('click',function(){
    result.value += 9;
})

four.addEventListener('click',function(){
    result.value += 4;
})

five.addEventListener('click',function(){
    result.value += 5;
})

six.addEventListener('click',function(){
    result.value += 6;
})

three.addEventListener('click',function(){
    result.value += 3;
})

two.addEventListener('click',function(){
    result.value += 2;
})

one.addEventListener('click',function(){
    result.value += 1;
})

plus.addEventListener('click',function(){
    result.value += "+";
})

minus.addEventListener('click',function(){
    result.value += "-";
})

multi.addEventListener('click',function(){
    result.value += "*";
})

divide.addEventListener('click',function(){
    result.value += "/";
})

zero.addEventListener('click',function(){
    result.value += 0;
})

dot.addEventListener('click',function(){
    result.value += ".";
})

equal.addEventListener('click',function(){
    result.value = eval(result.value);
})

