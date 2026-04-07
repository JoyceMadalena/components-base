document.addEventListener("click", (e) => {
  if (e.target.closest("#menuToggle")) {
    const nav = document.getElementById("navMenu");
    const toggle = document.getElementById("menuToggle");

    nav.classList.toggle("active");
    toggle.classList.toggle("active");
  }
});
