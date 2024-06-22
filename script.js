const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
// const colors = [
//   "#6495ed",  
//   "#7fffd4",  
//   "#ffa07a",  
//   "#f08080",  
//   "#afeeee",  
//   "#f5deb3",  
//   "#d8bfd8",  
//   "#e6e6fa",   
//   "#ffb6c1",  
//   "#ffe4e1"
// ];
let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
