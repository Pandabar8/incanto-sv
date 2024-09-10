
function initImageReels() {
    const items = document.querySelectorAll('.item-card');
    items.forEach(item => {
        const reel = item.querySelector('.image-container');
        const images = reel.children;
        let index = 0;

        const nextBtn = item.querySelector('.next-btn');
        const prevBtn = item.querySelector('.prev-btn');

        nextBtn.addEventListener('click', () => {
            index = (index < images.length - 1) ? index + 1 : 0;
            reel.style.transform = `translateX(-${index * 100}%)`;
        });

        prevBtn.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : images.length - 1;
            reel.style.transform = `translateX(-${index * 100}%)`;
        });
    });
}

// Initialize all image reels when the page loads
window.onload = initImageReels