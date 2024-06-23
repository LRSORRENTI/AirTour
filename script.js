const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});


document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  document.querySelector(".container").classList.remove("change");
});
const colors = ["#C7F0ED", "#DCF8F7", "#FAFFFA", "#DCF8F7", "#C7F0ED"]
// const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.backgroundColor = colors[i++];
  item.addEventListener("click", () => {
    document.querySelector(".container").classList.remove("change");
  });
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// Add this to your existing script.js file or create a new one

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-stagger');
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // Special animation for the header
  const header = document.querySelector('.header');
  if (header) {
    header.classList.add('fade-in');
    setTimeout(() => {
      header.classList.add('visible');
    }, 100);
  }

  // Animate logo letters
  const logoLetters = document.querySelectorAll('.logo h1 span');
  logoLetters.forEach((letter, index) => {
    letter.style.transitionDelay = `${index * 0.1}s`;
    setTimeout(() => {
      letter.classList.add('visible');
    }, 500 + index * 100);
  });
});