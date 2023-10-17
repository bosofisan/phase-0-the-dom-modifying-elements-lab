// Write your code here!
const mainElement = document.querySelector("#main");
mainElement.parentNode.removeChild(mainElement);

const newHeader = document.createElement("h1");

newHeader.textContent = "My new header is the champion";
document.body.appendChild(newHeader);

newHeader.id = "victory";
document.body.appendChild(newHeader);