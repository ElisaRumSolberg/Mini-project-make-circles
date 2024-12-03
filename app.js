// getting the html elements from index.html

const inputNum = document.querySelector("#input-num");
const circleContainer = document.querySelector("#circle-container");

//Function to make the circles
const makeCircles = () => {
  // Checking that the user entered number isn't under 1 or over 1000
  if (inputNum.value < 1 || inputNum.value > 1000) {
    //DON'T MAKE CIRCLES
    alert("Please enter a number between 1 and 1000.");
  } else {
    //MAKE CIRCLES!

    // Clear previous circles
    circleContainer.innerHTML = "";
    /*const circles = document.querySelectorAll(".circle");
for(circle of circles){
    circle.remove();

}*/
    // Create circles based on the entered number
    for (let i = 0; i < inputNum.value; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.textContent = i + 1;
      circle.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      circleContainer.append(circle);
    }
  }
};

// Trigger the function when the "Enter" key is pressed
inputNum.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      makeCircles(); // If the "Enter" key is pressed, create the circles
    }
  });
  
  // Also listen for button clicks
  document.querySelector("button").addEventListener("click", makeCircles);
  
