// assets/js/main.js
console.log("main.js cargado correctamente!");
document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Sidebar (Menú Hamburguesa) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.querySelector('.sidebar__close-btn');

    // Opcional: Crear un overlay para el fondo
    // Esto se puede hacer en JS para mayor control o tenerlo en HTML/CSS y solo activar/desactivar
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
    }

    // Función para abrir el sidebar
    const openSidebar = () => {
        sidebar.classList.add('sidebar--active');
        overlay.classList.add('overlay--active');
        document.body.style.overflow = 'hidden'; // Evita scroll en el body
    };

    // Función para cerrar el sidebar
    const closeSidebar = () => {
        sidebar.classList.remove('sidebar--active');
        overlay.classList.remove('overlay--active');
        document.body.style.overflow = ''; // Restaura scroll en el body
    };

    // Event Listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', openSidebar);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', closeSidebar); // Cierra el sidebar al hacer clic en el overlay
    }

    // --- Lógica para activar el enlace de navegación actual ---
    // (Esto es para resaltar "Inicio", "Catálogo", "Acerca" según la página actual)
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo (ej: index.html)
    const navLinks = document.querySelectorAll('.main-nav__link, .sidebar-nav__link');

    navLinks.forEach(link => {
        // Elimina 'active' de todos primero
        link.classList.remove('active');
        // Añade 'active' si el href del enlace coincide con la página actual
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- Lógica para el modal de producto (preparación futura) ---
    // Dejo un placeholder aquí para la lógica del modal que haré más adelante.
    // const productButtons = document.querySelectorAll('.product-card__button');
    // productButtons.forEach(button => {
    //     button.addEventListener('click', (e) => {
    //         // Lógica para abrir el modal de producto
    //         console.log('Botón Ver Detalle clicado para:', e.target.closest('.product-card').querySelector('.product-card__name').textContent);
    //     });
    // });
});