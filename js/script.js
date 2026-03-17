let activeDropdown = null;
const likeBtn = document.querySelectorAll(".like-btn");

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

likeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const textNode = btn.childNodes[btn.childNodes.length - 1];
    let count = parseInt(textNode.textContent.trim()) || 0;

    if (btn.classList.contains("liked")) {
      count -= 1;
      btn.classList.remove("liked");
      btn.style.color = "";
      btn.style.backgroundColor = "";
      btn.style.border = "";
    } else {
      count += 1;
      btn.classList.add("liked");
      btn.style.color = "oklch(0.637 0.237 25.331)";
      btn.style.backgroundColor = "oklch(0.936 0.032 17.717)";
      btn.style.border = "1px solid oklch(0.637 0.237 25.331)";
    }

    textNode.textContent = " " + count;
  });
});