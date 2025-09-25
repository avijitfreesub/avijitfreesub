// Typing effect for the hero section
const typingText = document.getElementById("typing");
const phrases = [
  "Instagram Followers",
  "Instagram Post Likes",
  "Instagram Reel Views",
  "Instagram Blue Tick",
  "YouTube Subscribers",
  "YouTube Views",
  "TikTok Followers"
];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let isDeleting = false;
let isEnd = false;

function type() {
  isEnd = false;

  if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
    currentPhrase = phrases[phraseIndex].substring(0, letterIndex);
    typingText.textContent = currentPhrase;
    letterIndex += 1;
  }

  if (isDeleting && letterIndex >= 0) {
    currentPhrase = phrases[phraseIndex].substring(0, letterIndex);
    typingText.textContent = currentPhrase;
    letterIndex -= 1;
  }

  if (letterIndex === phrases[phraseIndex].length + 1) {
    isEnd = true;
    isDeleting = true;
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

const speedUp = Math.random() * (80 - 50) + 50;       // delete speed
const normalSpeed = Math.random() * (150 - 60) + 50;  // faster typing speed
const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;


  setTimeout(type, time);
}

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  type();
});
