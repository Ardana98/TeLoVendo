// assets/js/main.js
console.log("main.js cargado correctamente!");

document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para activar el enlace de navegación actual (Bootstrap Navbar) ---
    const currentPath = window.location.pathname.split('/').pop();
    // Apuntamos a los nav-link dentro del navbar de Bootstrap
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        // Quita 'active' y 'aria-current' de todos primero
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        const linkPath = link.getAttribute('href');
        // Asegura que 'index.html' se active correctamente en la raíz y en el propio index.html
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else if (currentPath === '' && linkPath === 'index.html') { // Manejo especial para la página de inicio
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // --- Lógica del Modal de Detalle de Producto (Con Bootstrap Modal - Solo para catálogo.html) ---
    // Seleccionamos el elemento del modal de Bootstrap
    const productDetailModalElement = document.getElementById('productDetailModal');

    // Solo si el modal de producto existe en la página actual (ej. catalogo.html)
    if (productDetailModalElement) {
        // Creamos una instancia del modal de Bootstrap
        const productDetailModal = new bootstrap.Modal(productDetailModalElement);

        // Referencias a los elementos dentro del modal para rellenar dinámicamente
        const modalImage = productDetailModalElement.querySelector('.product-modal-image');
        const modalTitle = productDetailModalElement.querySelector('.product-modal-title');
        const modalPrice = productDetailModalElement.querySelector('.product-modal-price');
        const modalDescription = productDetailModalElement.querySelector('.product-modal-description');
        const modalSpecs = productDetailModalElement.querySelector('.product-modal-specs');

        // Seleccionamos todos los botones "Ver Detalle" que tienen data-bs-toggle y data-bs-target
        const viewDetailButtons = document.querySelectorAll('.products__grid .btn[data-bs-toggle="modal"]');

        if (viewDetailButtons.length > 0) {
            viewDetailButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productCol = button.closest('.col'); // La card está dentro de un .col
                    if (productCol) {
                        // Extraer la información de la card
                        const imageElement = productCol.querySelector('.card-img-top');
                        const nameElement = productCol.querySelector('.card-title');
                        const priceElement = productCol.querySelector('.card-text');

                        const productId = productCol.dataset.productId; // Obtener el ID del producto
                        const category = productCol.dataset.category; // Obtener la categoría del producto

                        // Objeto de datos del producto para el modal
                        const productData = {
                            imageSrc: imageElement ? imageElement.src : 'assets/img/placeholder.jpg',
                            imageAlt: imageElement ? imageElement.alt : 'Imagen de Producto',
                            name: nameElement ? nameElement.textContent : 'Producto Desconocido',
                            price: priceElement ? priceElement.textContent : '$XXX.XXX',
                            description: `Descripción detallada para ${nameElement ? nameElement.textContent : 'este producto'}. Este es un ejemplo de texto para el modal.`, // Ejemplo de descripción
                            specs: [ // Ejemplo de especificaciones
                                `<strong>Categoría:</strong> ${category.charAt(0).toUpperCase() + category.slice(1)}`,
                                `<strong>ID del Producto:</strong> ${productId}`,
                                `<strong>Condición:</strong> Reacondicionado` // Hardcoded por ahora
                            ]
                        };

                        // Rellenar el modal con la información del producto
                        modalImage.src = productData.imageSrc;
                        modalImage.alt = productData.imageAlt;
                        modalTitle.textContent = productData.name;
                        modalPrice.textContent = productData.price;
                        modalDescription.textContent = productData.description;

                        // Limpiar y rellenar las especificaciones
                        modalSpecs.innerHTML = '';
                        productData.specs.forEach(spec => {
                            const li = document.createElement('li');
                            li.innerHTML = spec;
                            modalSpecs.appendChild(li);
                        });
                    }
                });
            });
        }
    }


    // --- Lógica de Filtrado de Productos por Categoría (Catálogo con Bootstrap Display) ---
    // Solo si los botones de filtro existen en la página actual (ej. catalogo.html)
    const filterButtons = document.querySelectorAll('.filter-button');
    const productCols = document.querySelectorAll('.products__grid .col');

    if (filterButtons.length > 0 && productCols.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. Quitar 'active' y 'btn-primary' de todos los botones de filtro
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'btn-primary');
                    btn.classList.add('btn-outline-primary');
                });

                // 2. Añadir 'active' y 'btn-primary' al botón clicado
                button.classList.add('active', 'btn-primary');
                button.classList.remove('btn-outline-primary');

                // 3. Obtener la categoría del botón clicado
                const category = button.dataset.category;

                // 4. Mostrar u ocultar columnas de producto usando la clase 'd-none' de Bootstrap
                productCols.forEach(col => {
                    if (category === 'todos') {
                        col.classList.remove('d-none'); // Muestra todas las columnas
                    } else {
                        if (col.dataset.category === category) {
                            col.classList.remove('d-none'); // Muestra la columna
                        } else {
                            col.classList.add('d-none'); // Oculta la columna
                        }
                    }
                });
            });
        });
    }

    // --- Lógica del Formulario de Contacto (contacto.html) ---
    const contactForm = document.getElementById('contactForm');
    const successModalElement = document.getElementById('successModal');

    // Solo si el formulario de contacto y el modal de éxito existen en la página actual
    if (contactForm && successModalElement) {
        // Crear una instancia del modal de Bootstrap
        const successModal = new bootstrap.Modal(successModalElement);

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Previene el envío del formulario por defecto

            // Aquí podrías agregar lógica para enviar los datos del formulario
            // Por ahora, solo mostramos el modal de éxito.

            // Muestra el modal de éxito
            successModal.show();

            // Opcional: Reiniciar el formulario después de un breve retraso o cuando el modal se cierra
            // Para reiniciarlo inmediatamente:
            contactForm.reset();
        });
    }
});