// Clicking on the bell button will minimize the entire notifications container.
// Clicking again will make it appear back.

const btn = document.querySelector(".bell-btn");
const notifications = document.querySelector(".notifications-wrapper");

btn.addEventListener("click", () => {
  if (notifications.style.opacity === "0") {
    notifications.style.opacity = "1";
  } else {
    notifications.style.opacity = "0";
  }
});

// Clicking on the “Mark all as read” button will remove all the
// notification items from the notifications list.

const read = document.querySelector(".mark-as-read-btn");
const list = document.querySelector(".notifications-list");

read.addEventListener("click", () => {
  list.innerHTML = "";
})

// Clicking on the “Decline” button will remove the “Decline” and “Accept”
// buttons and will show a paragraph saying:
// “The notification has been declined”.

// Clicking on the “Accept” button will remove the “Decline” and “Accept” 
// buttons and will show a paragraph saying: “The notification has been accepted”.