document.addEventListener('DOMContentLoaded', function() {
    const neonIcons = document.querySelectorAll('.neon-icon');
    
    // Set unique neon colors
    neonIcons.forEach(icon => {
        const color = icon.getAttribute('data-color');
        icon.querySelector('.neon-tube').style.borderColor = color;
        icon.querySelector('.neon-glow').style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
        icon.querySelector('.neon-text').style.color = color;
    });
    
    // Optional: Add sound effect on hover (remove if unwanted)
    const hoverSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3');
    hoverSound.volume = 0.3;
    
    neonIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => console.log("Sound disabled"));
        });
    });
});