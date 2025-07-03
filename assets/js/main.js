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
const viewDetailButtons = document.querySelectorAll('.product-card__button');

// Referencias a los elementos dentro del modal para rellenar dinámicamente
const modalImage = productModal.querySelector('.modal-image');
const modalTitle = productModal.querySelector('.modal-title');
const modalPrice = productModal.querySelector('.modal-price');
const modalDescription = productModal.querySelector('.modal-description'); // Mantendremos estática por ahora
const modalSpecs = productModal.querySelector('.modal-specs'); // Mantendremos estática por ahora

if (productModal && modalCloseButton && viewDetailButtons.length > 0) {
    // Función para abrir el modal
    function openModal(productData) { // Ahora recibe datos del producto
        // Rellenar el modal con la información del producto
        modalImage.src = productData.imageSrc;
        modalImage.alt = productData.imageAlt;
        modalTitle.textContent = productData.name;
        modalPrice.textContent = productData.price;
        // La descripción y specs quedan estáticas por ahora, o podrías tomarlas de un atributo data- en la card si existiera
        // modalDescription.textContent = productData.description;
        // modalSpecs.innerHTML = productData.specsHtml; // Si quieres poner specs, deberían ser un HTML

        productModal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar el modal
    function closeModal() {
        productModal.classList.remove('modal--active');
        document.body.style.overflow = '';
    }

    // Abrir modal al hacer clic en "Ver Detalle"
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            // Obtener la tarjeta de producto padre del botón clicado
            const productCard = button.closest('.product-card');
            if (productCard) {
                // Extraer la información de la tarjeta
                const imageElement = productCard.querySelector('.product-card__image');
                const nameElement = productCard.querySelector('.product-card__name');
                const priceElement = productCard.querySelector('.product-card__price');

                const productData = {
                    imageSrc: imageElement ? imageElement.src : 'assets/img/placeholder.jpg',
                    imageAlt: imageElement ? imageElement.alt : 'Imagen de Producto',
                    name: nameElement ? nameElement.textContent : 'Producto Desconocido',
                    price: priceElement ? priceElement.textContent : '$XXX.XXX'
                };

                openModal(productData);
            } else {
                // Si por alguna razón no encuentra la tarjeta padre, abre el modal con placeholder
                openModal({
                    imageSrc: 'assets/img/placeholder.jpg',
                    imageAlt: 'Producto',
                    name: 'Producto sin Información',
                    price: '$0'
                });
            }
        });
    });

    // Cerrar modal al hacer clic en el botón de cerrar (X)
    modalCloseButton.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera del contenido del modal
    productModal.addEventListener('click', (event) => {
        if (event.target === productModal) {
            closeModal();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && productModal.classList.contains('modal--active')) {
            closeModal();
        }
    });
}

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