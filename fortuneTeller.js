let motherFirstName = prompt("Mother First Name");
let nameOfTheStreet = prompt("The name of the street where you grew up");
let favoriteColourAsChild = prompt("Your favorite colour as a child");
let currentAge = Number(prompt("Your current age"));
let randomNumber = Number(prompt("A number between 1 and 10"));

let displayResult = document.getElementById("display-result");

displayResult.textContent += `
In ${randomNumber} years you are going to meet your best friend named ${motherFirstName + " " + nameOfTheStreet}.\n
You will get married in ${currentAge + randomNumber} years and have ${currentAge % randomNumber} children.\n
In ${Math.round(currentAge / randomNumber)} years you are going to dye your hair ${favoriteColourAsChild}.
`;