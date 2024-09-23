let cartQuantity = document.getElementsByClassName("Show quantity");
cartQuantity = 0;
let addToCart = document.getElementsByClassName("Add");
addToCart.addEventListener("click", function () {
  console.log(`Quantity is: ${cartQuantity}`);
});

console.log(`Quantity is: ${cartQuantity}`);
console.log(`Quantity is: ${addToCart}`);
