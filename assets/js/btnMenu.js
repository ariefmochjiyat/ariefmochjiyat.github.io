const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", openMenu);

function openMenu() {
    hamburger.classList.toggle("active");
}