// Video Category Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const videoCards = document.querySelectorAll(".video-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.category;
    videoCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
        card.classList.add("fade-in");
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Hover Play/Pause
videoCards.forEach(card => {
  const video = card.querySelector("video");
  card.addEventListener("mouseenter", () => video.play());
  card.addEventListener("mouseleave", () => video.pause());
});
