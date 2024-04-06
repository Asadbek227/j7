const colorButtons = document.getElementById("colorButtons");
const resetColor = document.getElementById("resetColor");
const colors = ["#FF0000", "#0000FF", "#008000", "#FFFF00", "#800080"];


colors.forEach((color, index) => {
  const button = document.createElement("button");
  button.style.backgroundColor = color;

  
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
  });

 

  colorButtons.appendChild(button);
});



resetColor.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});