console.log("Hello World!!!");
// Comment
/* */
//will only select first selector in the body
const demo = document.querySelector("p");
demo.addEventListener("click", updateName);

function updateName() {
    let name = prompt("Enter your Name");
    alert("Hello, " + name);
}