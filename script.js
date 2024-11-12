// Menu Responsivo (Hamburger)
const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector("nav ul");

// Alterna o menu ao clicar no ícone de hamburger
menuIcon.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

// Scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Modal de Contato
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-btn");

// Exibe o modal de contato
function openModal() {
  modal.style.display = "flex";
}

// Fecha o modal de contato
function closeModal() {
  modal.style.display = "none";
}

// Fechar o modal ao clicar no botão "X" ou fora do modal
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Botão "Voltar ao Topo"
const backToTopButton = document.getElementById("back-to-top");

// Aparece o botão de voltar ao topo quando o usuário rola a página para baixo
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Ao clicar no botão de voltar ao topo, rola suavemente para o topo da página
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
