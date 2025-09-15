console.log("external js/events.js loaded");
// alert("External JS file loaded");
function makeYellow()
{
    document.body.style.backgroundColor = 'yellow';
}
function makeBlue()
{
    document.body.style.backgroundColor = 'blue';
}
function makePink()
{
    document.body.style.backgroundColor = 'pink';
}
const btnMakeBlack=document.getElementById('btn-make-black');
// console.log(btnMakeBlack);
btnMakeBlack.onclick=function makeBlack(){
    document.body.style.backgroundColor='black';
}
const btnMakeGreen=document.getElementById('btn-make-green');
        btnMakeGreen.onclick=makeGreen;
        function makeGreen()
        {
            document.body.style.backgroundColor='green';
        }