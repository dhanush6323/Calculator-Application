// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
function Solve(val) {
    var v = document.getElementById('inputvalue');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('inputvalue').value;
    var num2 = eval(num1);
    document.getElementById('inputvalue').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('inputvalue');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('inputvalue');
    ev.value = ev.value.slice(0,-1);
 }