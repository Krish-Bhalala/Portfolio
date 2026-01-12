document.addEventListener("DOMContentLoaded", function () {
  const degreeCard = document.querySelector(".degree-card");

  // Add tilt effect on mouse move
  degreeCard.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    degreeCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-5px)`;
  });

  // Reset on mouse leave
  degreeCard.addEventListener("mouseleave", () => {
    degreeCard.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0)";
  });
});
