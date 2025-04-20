document.addEventListener('DOMContentLoaded', function() {
    // Name drawing animation
    const hoverElements = document.querySelectorAll('[data-draw-name]');
    const name = "YourName"; // Change to your name
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const nameElement = document.createElement('div');
            nameElement.className = 'name-drawing';
            nameElement.style.left = `${e.clientX}px`;
            nameElement.style.top = `${e.clientY}px`;
            
            nameElement.innerHTML = name.split('').map(letter => 
                `<span>${letter}</span>`
            ).join('');
            
            document.body.appendChild(nameElement);
            
            anime({
                targets: nameElement.querySelectorAll('span'),
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: anime.stagger(100, { start: 100 }),
                easing: 'easeOutExpo'
            });
            
            const followMouse = (e) => {
                nameElement.style.left = `${e.clientX + 30}px`;
                nameElement.style.top = `${e.clientY + 30}px`;
            };
            
            element.addEventListener('mousemove', followMouse);
            
            element.addEventListener('mouseleave', () => {
                element.removeEventListener('mousemove', followMouse);
                anime({
                    targets: nameElement.querySelectorAll('span'),
                    opacity: 0,
                    translateY: -20,
                    duration: 500,
                    delay: anime.stagger(50),
                    easing: 'easeInExpo',
                    complete: () => nameElement.remove()
                });
            });
        });
    });
});