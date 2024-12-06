// app.js

document.addEventListener("DOMContentLoaded", () => {
  // Enhanced Mouse Effect with Throttling
  let circle = document.querySelector(".circle");
  let throttleTimer = false;

  window.addEventListener("mousemove", (e) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      throttleTimer = false;
    }, 16); // ~60fps

    if (window.innerWidth > 800) {
      let circleWidth = circle.offsetWidth;
      let circleHeight = circle.offsetHeight;
      let circleX = e.pageX - circleWidth / 2;
      let circleY = e.pageY - circleHeight / 2;

      circleX = Math.max(
        0,
        Math.min(circleX, window.innerWidth - circleWidth - 200)
      );
      circleY = Math.max(
        0,
        Math.min(
          circleY,
          document.documentElement.scrollHeight - circleHeight - 200
        )
      );

      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;
    }
  });

  // Smooth Scroll Enhancement
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const openedMenu = document.querySelector(".openedMenu");

  if (hamburger && openedMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("opened");
      openedMenu.classList.toggle("active");
    });
  } else {
    console.error("Hamburger menu or openedMenu element not found.");
  }
});

// Function that opens a link in a new tab

function openLink(url) {
  window.open(url, "_blank");
}
// Check if current date is between December 1st and January 10th
const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();

const container = document.querySelector(".background2");
const fireworks = new Fireworks.default(container, {
  sound: {
    enabled: true,
    files: [
      "https://fireworks.js.org/sounds/explosion0.mp3",
      "https://fireworks.js.org/sounds/explosion1.mp3",
      "https://fireworks.js.org/sounds/explosion2.mp3",
    ],
    volume: {
      min: 1,
      max: 1,
    },
  },
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.02,
  friction: 0.98,
  gravity: 1.2,
  particles: 50,
  traceLength: 3,
  traceSpeed: 5,
  explosion: 5,
  intensity: 7,
  flickering: 40,
  lineStyle: "round",
  hue: {
    min: 0,
    max: 360,
  },
  delay: {
    min: 60,
    max: 120,
  },
  rocketsPoint: {
    min: 50,
    max: 50,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
    },
  },
  brightness: {
    min: 50,
    max: 80,
  },
  decay: {
    min: 0.01,
    max: 0.02,
  },
  mouse: {
    click: false,
    move: false,
    max: 1,
  },
});

if (month === 12 || (month === 1 && day <= 10)) {
  // Special New Year's Eve settings
  if (month === 12 && day === 31) {
    if (hours === 0 && minutes >= 0 && minutes <= 45) {
      fireworks.updateOptions({
        sound: { volume: { min: 5, max: 35 } },
        intensity: 200,
      });
    }

    if (hours === 23 && minutes >= 59) {
      fireworks.updateOptions({
        sound: { volume: { min: 5, max: 35 } },
        intensity: 200,
      });
    }

    if (hours === 0 && minutes === 0) {
      fireworks.updateOptions({
        intensity: 500,
      });
    }
  }
  fireworks.start();
} else {
  fireworks.stop();
  container.style.display = "none";
}
