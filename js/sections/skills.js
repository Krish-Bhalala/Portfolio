document.addEventListener('DOMContentLoaded', function() {
    // Skills hexagon hover effects
    const hexagons = document.querySelectorAll('.hexagon');
    
    hexagons.forEach(hexagon => {
        hexagon.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            anime({
                targets: this.querySelector('.skill-name'),
                opacity: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        hexagon.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
});