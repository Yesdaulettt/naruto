const controller = new ScrollMagic.Controller();

const videos = document.querySelectorAll(".section-video");

videos.forEach((video) => {
  video.addEventListener("ended", () => {
    video.classList.add("video-blackout");
    video.pause();
  });

  new ScrollMagic.Scene({
    triggerElement: video.parentElement,
    duration: "80%",
  })
    .on("enter", () => {
      if (video.classList.contains("video-blackout")) {
        video.classList.remove("video-blackout");
        video.currentTime = 0;
        video.play();
      }
    })
    .addTo(controller);
});

videos.forEach((video) => {
  new ScrollMagic.Scene({
    triggerElement: video.parentElement,
    duration: "80%",
  })
    .setTween(video, { opacity: 1 })
    .addTo(controller);
});

const rasenganVideo = document.getElementById("rasengan-video");

new ScrollMagic.Scene({
  triggerElement: ".rasengan",
  duration: "80%",
})
  .setTween(rasenganVideo, { opacity: 1, scale: 1 })
  .addTo(controller);

const confettiSettings = {
  target: "confetti-canvas",
  colors: ["#FF8C42", "#FFD700", "#FFFFFF"],
  size: 1.5,
  rotate: true,
};
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

setTimeout(() => {
  confetti.clear();
}, 5000);

function goToMenu() {
  window.location.href = "menu.html";
}
