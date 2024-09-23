document.addEventListener("DOMContentLoaded", function () {
  // Select the button element
  let button = document.getElementById("myButton");
  let greet = document.getElementById("greeting");
  greet.addEventListener("click", function () {
    let newDiv = document.createElement("div");
    newDiv.textContent = `This is ${button}`;

    document.body.appendChild(newDiv); // Adds the new div to the body
  });

  document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
  });

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    alert("Button clicked!");
  });
});
