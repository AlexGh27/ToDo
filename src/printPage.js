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
    inbox.className = "sideButton";
    sidebar.appendChild(inbox);
  
    const inboxImage = document.createElement("img");
    inboxImage.className = "icon";
    inboxImage.src = "inbox.png";
    inbox.appendChild(inboxImage);

    const inboxText = document.createElement("div");
    inboxText.className = "text";
    inboxText.innerHTML = "Inbox"
    inbox.appendChild(inboxText);


    const today = document.createElement("div");
    today.className = "sideButton";
    sidebar.appendChild(today);
  
    const todayImage = document.createElement("img");
    todayImage.className = "icon";
    todayImage.src = "today.png";
    today.appendChild(todayImage);

    const todayText = document.createElement("div");
    todayText.className = "text";
    todayText.innerHTML = "Today"
    today.appendChild(todayText);


    const week = document.createElement("div");
    week.className = "sideButton";
    sidebar.appendChild(week);
  
    const weekImage = document.createElement("img");
    weekImage.className = "icon";
    weekImage.src = "week.png";
    week.appendChild(weekImage);

    const weekText = document.createElement("div");
    weekText.className = "text";
    weekText.innerHTML = "This Week"
    week.appendChild(weekText);
  }