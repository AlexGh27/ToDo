export default function printMe() {
    
    const container = document.querySelector(".container");
    const titleBar = document.createElement("div");
    titleBar.className = "titleBar";
    titleBar.innerHTML = "TO DO LIST";
    container.appendChild(titleBar);

    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    container.appendChild(sidebar);

    const inbox = document.createElement("div");
    inbox.className = "inbox";
    sidebar.appendChild(inbox);
  }