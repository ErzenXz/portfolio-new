// Mouse effect that makes a circle follow the cursor around the screen

// Get the circle element

let circle = document.querySelector(".circle");

// Add an event listener to the window that listens for mouse movement
window.addEventListener("mousemove", (e) => {
   // Check if the width is bigger than 800px
   if (window.innerWidth > 800) {
      // Calculate the center position of the circle
      let circleWidth = circle.offsetWidth;
      let circleHeight = circle.offsetHeight;
      let circleX = e.pageX - circleWidth / 2; // Increase the value by 10 for more movement
      let circleY = e.pageY - circleHeight / 2;

      // Check if the circle is going out of the screen horizontally
      if (circleX < 0) {
         circleX = 0;
      } else if (circleX + circleWidth > window.innerWidth - 200) {
         circleX = window.innerWidth - circleWidth - 200;
      }

      // Check if the circle is going out of the screen vertically
      if (circleY < 0) {
         circleY = 0;
      } else if (circleY + circleHeight > document.documentElement.scrollHeight - 200) {
         circleY = document.documentElement.scrollHeight - circleHeight - 200;
      }

      // Set the position of the circle to the calculated center position
      circle.style.left = circleX + "px";
      circle.style.top = circleY + "px";
   }
});

// Function that opens a link in a new tab

function openLink(url) {
   window.open(url, "_blank");
}

// Smooth scroll when clicking an anchor link

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
         behavior: "smooth",
      });
   });
});
