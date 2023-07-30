// Global variables
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const dieDiv = document.getElementById("dieDiv");
let diceVal = [];

class Die {
	constructor() {
		this.div = document.createElement("div");
		this.divStyle();
		this.roll();
		diceVal.push(this);
		dieDiv.appendChild(this.div);
	}

	// Could of just done this in my style.css file but i wanted to practice.
	divStyle() {
		this.div.style.height = "150px";
		this.div.style.width = "150px";
		this.div.style.border = "4px solid black";
		this.div.style.borderRadius = "15px";
		this.div.style.margin = "20px";
		this.div.style.cursor = "pointer";
		this.div.style.display = "flex";
		this.div.style.alignItems = "center";
		this.div.style.justifyContent = "center";
		this.div.style.fontSize = "70px";
	}

	roll() {
		this.value = Math.floor(Math.random() * 6 + 1);
		this.div.textContent = this.value;
	}
}

btnOne.addEventListener("click", () => {
	new Die();
	// console.log("Generate Die");
});

btnTwo.addEventListener("click", () => {
	for (let i = 0; i < diceVal.length; i++) {
		diceVal[i].roll();
	}
	// console.log("Roll Dice");
});

btnThree.addEventListener("click", () => {
	let sum = 0;
	for (let i = 0; i < diceVal.length; i++) {
		sum += diceVal[i].value;
	}
	alert(`The sum of the dice is ${sum}`);
});
