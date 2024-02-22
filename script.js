var userInput = prompt("Enter text to display:");
var spanElement = document.getElementById("coloredSpan");
spanElement.textContent = userInput;

spanElement.addEventListener("mouseover", function (event) {
  spanElement.style.color = "red";
});
