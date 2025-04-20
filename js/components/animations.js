// Logo animation on hover
const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', () => {
    anime({
        targets: logo,
        scale: 1.1,
        duration: 300,
        easing: 'easeInOutQuad'
    });
});

logo.addEventListener('mouseleave', () => {
    anime({
        targets: logo,
        scale: 1,
        duration: 300,
        easing: 'easeInOutQuad'
    });
});

// Floating shapes animation enhancement
const shapes = document.querySelectorAll('.shape');
shapes.forEach(shape => {
    shape.addEventListener('mouseenter', () => {
        anime({
            targets: shape,
            scale: 1.2,
            opacity: 0.2,
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });

    shape.addEventListener('mouseleave', () => {
        anime({
            targets: shape,
            scale: 1,
            opacity: 0.1,
            duration: 500,
            easing: 'easeInOutQuad'
        });
    });
});

// Experience tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});