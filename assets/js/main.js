function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => console.error(`Erro ao carregar ${file}:`, err));
}

// inicialização
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/partials/header.html");
  loadComponent("hero", "/partials/hero.html");
  loadComponent("aboutfirst", "/partials/aboutfirst.html");
  loadComponent("aboutsecond", "/partials/aboutsecond.html");
  loadComponent("footer", "/partials/footer.html");
});
