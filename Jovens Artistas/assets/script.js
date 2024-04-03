document.addEventListener('DOMContentLoaded', function() {
    const toggleModeBtn = document.getElementById('toggleModeBtn');
    const carouselItems = document.querySelectorAll('.carousel-item');

    toggleModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            toggleModeBtn.textContent = 'Light';
            // Trocar para imagens do modo escuro
            carouselItems.forEach(item => {
                const imgSrc = item.querySelector('img').src;
                const darkModeImgSrc = imgSrc.replace('.jpg', '_dark.jpg');
                item.querySelector('img').src = darkModeImgSrc;
            });
        } else {
            toggleModeBtn.textContent = 'Dark';
            // Trocar para imagens do modo claro
            carouselItems.forEach(item => {
                const imgSrc = item.querySelector('img').src;
                const lightModeImgSrc = imgSrc.replace('_dark.jpg', '.jpg');
                item.querySelector('img').src = lightModeImgSrc;
            });
        }
    });
});

