const imagenes = document.querySelectorAll('.img, .img2');

imagenes.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('brillo');
    });

    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.transition = 'transform 0.3s ease';
    });
});

window.addEventListener('load', () => {
    console.log("Bienvenido al Blog Culinario de Diana")
});