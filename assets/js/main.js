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
    // --- Lógica del Modal de Detalle de Producto ---
    const productModal = document.getElementById('productModal');
    const modalCloseButton = document.querySelector('.modal-close-button');
    // Seleccionar todos los botones "Ver Detalle". ¡Asegurarse de que los botones de producto tengan esta clase!
    const viewDetailButtons = document.querySelectorAll('.product-card__button'); 

    // Solo si el modal y los botones existen en la página
    if (productModal && modalCloseButton && viewDetailButtons.length > 0) {
        // Función para abrir el modal
        function openModal() {
            productModal.classList.add('modal--active');
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
            // Opcional: Si tengo un overlay para el sidebar, asegurar de que no interfiera.
            // Si el overlay del sidebar ya está activo, no necesito activar otro.
            // Si no lo está, y quiero un overlay para el modal, aquí podré añadir 'overlay.classList.add('overlay--active');'
            // Sin embargo, el modal ya tiene su propio fondo oscuro.
        }

        // Función para cerrar el modal
        function closeModal() {
            productModal.classList.remove('modal--active');
            document.body.style.overflow = ''; // Restaura el scroll del fondo
            // Opcional: Si el overlay del sidebar se activó con el modal, se desactiva aquí.
            // overlay.classList.remove('overlay--active');
        }

        // Abrir modal al hacer clic en "Ver Detalle"
        viewDetailButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Evita que si el botón es un enlace, navegue.
                // Aquí se podrá añadir lógica para cargar contenido dinámico del producto
                // Por ahora, solo abrimos el modal
                openModal();
            });
        });

        // Cerrar modal al hacer clic en el botón de cerrar (X)
        modalCloseButton.addEventListener('click', closeModal);

        // Cerrar modal al hacer clic fuera del contenido del modal (en el fondo oscuro)
        productModal.addEventListener('click', (event) => {
            if (event.target === productModal) { // Solo si el clic es directamente en el fondo del modal
                closeModal();
            }
        });

        // Cerrar modal con la tecla Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && productModal.classList.contains('modal--active')) {
                closeModal();
            }
        });
    } // Fin del if (productModal...)
    
 // --- Lógica de Filtrado de Productos por Categoría (Catálogo) ---
    const filterButtons = document.querySelectorAll('.filter-button');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. Quitar 'active' de todos los botones de filtro
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // 2. Añadir 'active' al botón clicado
                button.classList.add('active');

                // 3. Obtener la categoría del botón clicado
                const category = button.dataset.category; // Usamos .dataset para data-category

                // 4. Mostrar u ocultar tarjetas de producto
                productCards.forEach(card => {
                    if (category === 'todos') {
                        card.style.display = 'block'; // Muestra todas las tarjetas
                    } else {
                        // Si la categoría de la tarjeta coincide con la categoría del botón
                        if (card.dataset.category === category) {
                            card.style.display = 'block'; // Muestra la tarjeta
                        } else {
                            card.style.display = 'none'; // Oculta la tarjeta
                        }
                    }
                });
            });
        });
    }

    
});