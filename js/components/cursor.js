document.addEventListener("DOMContentLoaded", function () {
  // 🔥 CREATE FIREBALL CURSOR
  const cursor = document.createElement("div");
  cursor.className = "fireball-cursor";
  document.body.appendChild(cursor);

  // 🖱️ INSTANT CURSOR MOVEMENT (NO LAG)
  let mouseX = 0,
    mouseY = 0;
  document.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    },
    { passive: true },
  );

  // 🔢 BINARY TRAIL (RANDOM DIRECTION)
  function createBinaryTrail(x, y) {
    const binary = document.createElement("div");
    binary.className = "binary-trail";
    binary.textContent = Math.random() > 0.5 ? "1" : "0";
    binary.style.left = x + "px";
    binary.style.top = y + "px";

    // 🎲 RANDOM MOVEMENT DIRECTION (NOT JUST UP)
    binary.style.setProperty("--tx", (Math.random() - 0.5) * 2); // (-1 to 1)
    binary.style.setProperty("--ty", (Math.random() - 0.5) * 2); // (-1 to 1)

    document.body.appendChild(binary);
    setTimeout(() => binary.remove(), 1200); // Auto-remove
  }

  // 💥 CLICK EXPLOSION (BINARY BURST)
  function createBinaryExplosion(x, y) {
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const bit = document.createElement("div");
        bit.className = "binary-explosion";
        bit.textContent = Math.random() > 0.5 ? "1" : "0";
        bit.style.left = x + "px";
        bit.style.top = y + "px";

        // 💫 RANDOM EXPLOSION DIRECTION
        bit.style.setProperty("--tx", (Math.random() - 0.5) * 3);
        bit.style.setProperty("--ty", (Math.random() - 0.5) * 3);

        document.body.appendChild(bit);
        setTimeout(() => bit.remove(), 800);
      }, i * 20); // Staggered appearance
    }
  }

  // ⏱️ TRAIL ANIMATION LOOP (60FPS OPTIMIZED)
  let lastTrailTime = 0;
  function animateTrail(currentTime) {
    if (currentTime - lastTrailTime > 16) {
      // ~60FPS
      createBinaryTrail(mouseX, mouseY);
      lastTrailTime = currentTime;
    }
    requestAnimationFrame(animateTrail);
  }
  requestAnimationFrame(animateTrail);

  // 🖱️ CLICK EFFECT (BINARY EXPLOSION)
  document.addEventListener("click", (e) => {
    createBinaryExplosion(e.clientX, e.clientY);
  });

  // 🎨 HOVER EFFECT (PURPLE GLOW)
  const interactiveElements = document.querySelectorAll(
    "a, button, [data-cursor-hover]",
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
});
