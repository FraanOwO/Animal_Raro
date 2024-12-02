document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('mouseover', function (event) {
            const rect = document.createElement('span');
            rect.classList.add('hover-rect');

            // Añadir el rectángulo dentro del enlace
            link.appendChild(rect);

            // Obtener las dimensiones del enlace
            const linkWidth = link.offsetWidth;
            const linkHeight = link.offsetHeight;

            // Reducir el ancho y la altura
            const reducedWidth = linkWidth * 0.9; // Reducir el ancho al 90% del original
            const reducedHeight = linkHeight * 0.6; // Reducir la altura al 70% del original (ajusta este valor)

            rect.style.width = `${reducedWidth}px`;
            rect.style.height = `${reducedHeight}px`;
            rect.style.top = `${(linkHeight - reducedHeight) / 2}px`; // Centrar verticalmente
            rect.style.left = `${(linkWidth - reducedWidth) / 2}px`; // Centrar horizontalmente
        });

        link.addEventListener('mouseout', function () {
            const rect = link.querySelector('.hover-rect');
            if (rect) {
                rect.remove();
            }
        });
    });
});
