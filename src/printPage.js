export default function printMe() {
    
    const container = document.querySelector(".container");
    const titleBar = document.createElement("div");
    titleBar.className = "titleBar";
    titleBar.innerHTML = "TO DO LIST";
    container.appendChild(titleBar);
  }