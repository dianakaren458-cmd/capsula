
function guardarCarta() {
    const mensaje = document.getElementById('mensaje-futuro').value;
    if (mensaje) {
        localStorage.setItem('cartaFuturo', mensaje);
        alert('¡Tu carta se ha guardado para el futuro!');
    } else {
        alert('Por favor, escribe un mensaje antes de guardar.');
    }
}

function cargarCarta() {
    const mensajeGuardado = localStorage.getItem('cartaFuturo');
    if (mensajeGuardado) {
        document.getElementById('mensaje-futuro').value = mensajeGuardado;
    }
}

function iniciarContador() {
    let segundos = 0;
    const contadorElemento = document.getElementById("contador");

    setInterval(() => {
        segundos++;
        contadorElemento.textContent = segundos;
    }, 1000); 
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.img, .img2').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('brillo');
            setTimeout(() => {
                img.classList.remove('brillo');
            }, 500);
        });
    });
});

window.onload = function () {
    cargarCarta();
    iniciarContador();
};