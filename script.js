//your code here
// let count = 0;
let input = document.getElementById("evaluatedText");
let display = document.getElementById("letterCount");
input.addEventListener('input',myFunc);

function myFunc(){
	let text = document.getElementById("evaluatedText").value;
	display.innerText = text.length;
}