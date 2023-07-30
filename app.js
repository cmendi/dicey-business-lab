let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");

btnOne.addEventListener("click", () => {
	console.log("Generate Die");
});

btnTwo.addEventListener("click", () => {
	console.log("Roll Dice");
});

btnThree.addEventListener("click", () => {
	console.log("Sum Die");
});
