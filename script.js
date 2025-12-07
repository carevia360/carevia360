const toggleBtn = document.getElementById("toggle-btn");
const socialMenu = document.getElementById("social-menu");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");

    socialMenu.style.display =
        socialMenu.style.display === "flex" ? "none" : "flex";
});
