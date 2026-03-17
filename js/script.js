const threeDotPost = document.querySelector(".three-dot-post");
const threeDotClick = document.querySelector(".three-dot-click");

if (threeDotPost && threeDotClick) {
  threeDotPost.addEventListener("click", (e) => {
    e.stopPropagation();
    threeDotClick.classList.toggle("active");
  });

  document.addEventListener("click", () => {
    threeDotClick.classList.remove("active");
  });
}
