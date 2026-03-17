let activeDropdown = null;

document.querySelectorAll(".three-dot-post").forEach((dot) => {
  dot.addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = dot.querySelector(".three-dot-click");

    if (activeDropdown && activeDropdown !== dropdown) {
      activeDropdown.classList.remove("active");
    }

    dropdown.classList.toggle("active");
    activeDropdown = dropdown.classList.contains("active") ? dropdown : null;
  });
});

document.addEventListener("click", () => {
  if (activeDropdown) {
    activeDropdown.classList.remove("active");
    activeDropdown = null;
  }
});
