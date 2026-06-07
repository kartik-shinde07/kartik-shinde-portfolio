// ===== TYPING EFFECT =====

const words = [
  "Full Stack Developer",
  "Java Developer",
  "Web Developer",
  "Tech Enthusiast",
  "Problem Solver",
];

const typingSpan = document.querySelector(".typing-text span");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingSpan) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typingSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ===== SMOOTH SCROLL =====

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===== ACTIVE NAVIGATION =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===== SCROLL ANIMATION =====

const cards = document.querySelectorAll(".card, .home-content, .home-img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

cards.forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});

// ===== CONTACT FORM =====

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you! Message received.");

    form.reset();
  });
}

// ===== PROGRESS BAR =====

const progressBar = document.createElement("div");
progressBar.className = "progress-bar";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (window.scrollY / totalHeight) * 100;

  progressBar.style.width = progress + "%";
});

// ===== BACK TO TOP =====

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

console.log("JavaScript Loaded Successfully");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
