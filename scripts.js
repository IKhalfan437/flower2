document.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation for petals
    const petals = document.querySelectorAll('.petal');
    petals.forEach((petal, index) => {
        petal.style.setProperty('--rot', `${index * 90}deg`);
        petal.style.animationDelay = `${2.2 + index * 0.1}s`;
    });

    // Optional: Click to restart animation
    document.querySelector('.flower').addEventListener('click', () => {
        const flower = document.querySelector('.flower');
        const clone = flower.cloneNode(true);
        flower.parentNode.replaceChild(clone, flower);
    });
});
