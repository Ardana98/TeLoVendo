// assets/js/main.js
console.log("main.js cargado correctamente!");

// Array de productos (Requerimiento 1)
const products = [
    {
        id: "prod-smartphone-003",
        code: "IPH13",
        name: "iPhone 13",
        description: "Potente rendimiento con chip A15 Bionic, sistema de cámara dual avanzado y pantalla Super Retina XDR.",
        price: 599990 ,
        imageSrc: "assets/img/i13.jpg",
        category: "celulares"
    },
    {
        id: "prod-tablet-001",
        code: "IPDA11",
        name: "Ipad Air 11",
        description: "Diseño ultradelgado, chip M1 para un rendimiento excepcional y compatibilidad con Apple Pencil y Magic Keyboard.",
        price: 549990,
        imageSrc: "assets/img/ipad.jpg",
        category: "tablets"
    },
    {
        id: "prod-laptop-002",
        code: "ASUS_TUF_A16",
        name: "ASUS TUF Gaming A16",
        description: "Laptop gaming robusta con procesador AMD Ryzen, gráficos Radeon y pantalla de alta frecuencia de actualización.",
        price: 1299990,
        imageSrc: "assets/img/lasus.jpg",
        category: "laptops"
    },
    {
        id: "prod-smartwatch-001",
        code: "GARMV5",
        name: "Garmin Vívoactive 5",
        description: "Smartwatch GPS con funciones de salud avanzadas, seguimiento de actividad física y duración de batería prolongada.",
        price: 399990,
        imageSrc: "assets/img/sw.jpg",
        category: "smartwatch"
    },
    {
        id: "prod-laptop-003",
        code: "MBA2015",
        name: "Macbook Air 2015",
        description: "Ligero y portátil, ideal para tareas diarias. Procesador Intel Core i5 y hasta 12 horas de batería.",
        price: 250000,
        imageSrc: "assets/img/mair2015.jpg",
        category: "laptops"
    },
    {
        id: "prod-smartwatch-004",
        code: "AWSE6",
        name: "Apple Watch Series 6",
        description: "Monitoreo de oxígeno en sangre, ECG, y pantalla Retina siempre activa. Conectividad celular opcional.",
        price: 218000,
        imageSrc: "assets/img/aw6.jpg",
        category: "smartwatch"
    },
    {
        id: "prod-smartphone-005",
        code: "IPH14PM",
        name: "iPhone 14 Pro Max",
        description: "Dynamic Island, cámara principal de 48MP y detección de accidentes. Batería para todo el día.",
        price: 640000,
        imageSrc: "assets/img/ip14.jpg",
        category: "celulares"
    },
    {
        id: "prod-laptop-004",
        code: "MBP16",
        name: "Macbook Pro 16",
        description: "Diseñado para profesionales, con chip M1 Pro/Max, pantalla Liquid Retina XDR y audio de seis parlantes.",
        price: 950000,
        imageSrc: "assets/img/mp.jpg",
        category: "laptops"
    },
    {
        id: "prod-laptop-005",
        code: "ASUSVIVOPRO",
        name: "Notebook Asus Vivobook Pro",
        description: "Ideal para creatividad y productividad. Pantalla OLED, procesadores Intel/AMD de alto rendimiento.",
        price: 1020000,
        imageSrc: "assets/img/nav.jpg",
        category: "laptops"
    },
    {
        id: "prod-laptop-006",
        code: "LENOVOT14",
        name: "Notebook Lenovo Thinkpad T14",
        description: "Fiabilidad empresarial con seguridad mejorada, ideal para trabajo remoto. Procesadores Intel Core.",
        price: 680000,
        imageSrc: "assets/img/nlt.jpg",
        category: "laptops"
    },
    {
        id: "prod-smartphone-006",
        code: "SGS23P",
        name: "Samsung Galaxy S23 Plus",
        description: "Cámara de alta resolución, rendimiento para juegos y diseño elegante. Batería duradera.",
        price: 520000,
        imageSrc: "assets/img/sg.jpg",
        category: "celulares"
    },
    {
        id: "prod-tablet-002",
        code: "SGTS9P",
        name: "Tablet Samsung Galaxy Tab S9 Plus",
        description: "Pantalla AMOLED, S Pen incluido y resistencia al agua. Perfecta para entretenimiento y productividad.",
        price: 850000,
        imageSrc: "assets/img/ts.jpg",
        category: "tablets"
    },
    {
        id: "prod-laptop-007",
        code: "MBA_M2",
        name: "MacBook Air M2",
        description: "Diseño renovado, chip M2, rendimiento mejorado y batería para todo el día. Muy ligero.",
        price: 1199990,
        imageSrc: "assets/img/mair.jpg",
        category: "laptops"
    },
    {
        id: "prod-smartphone-007",
        code: "SGS24U",
        name: "Samsung S24 Ultra",
        description: "Cámara de 200MP, S Pen integrado, y Galaxy AI. El smartphone más avanzado de Samsung.",
        price: 999990,
        imageSrc: "assets/img/ss24.jpg",
        category: "celulares"
    }
];

document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para activar el enlace de navegación actual (Bootstrap Navbar) ---
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else if (currentPath === '' && linkPath === 'index.html') {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // --- Referencias a elementos del DOM (Obtener una sola vez) ---
    const productsGrid = document.getElementById('productsGrid');
    const productDetailModalElement = document.getElementById('productDetailModal');

    // Referencias a los elementos dentro del modal para rellenar dinámicamente
    const modalImage = productDetailModalElement ? productDetailModalElement.querySelector('.product-modal-image') : null;
    const modalTitle = productDetailModalElement ? productDetailModalElement.querySelector('.product-modal-title') : null;
    const modalPrice = productDetailModalElement ? productDetailModalElement.querySelector('.product-modal-price') : null;
    const modalDescription = productDetailModalElement ? productDetailModalElement.querySelector('.product-modal-description') : null;
    const modalSpecs = productDetailModalElement ? productDetailModalElement.querySelector('.product-modal-specs') : null;
    const productQuantityInput = productDetailModalElement ? productDetailModalElement.querySelector('#productQuantity') : null;
    const addToCartButton = productDetailModalElement ? productDetailModalElement.querySelector('.product-modal-add-to-cart') : null;


    // --- Carrito de compras y totalizador ---
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || []; // Cargar carrito desde localStorage
    const cartItemsList = document.getElementById('cartItemsList');
    const cartSummaryDetails = document.getElementById('cartSummaryDetails');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const clearCartButton = document.getElementById('clearCartButton');
    const confirmPurchaseButton = document.getElementById('confirmPurchaseButton'); // Referencia al nuevo botón "Confirmar Compra"
    const cartSummarySection = document.getElementById('cart-summary-section'); // Referencia a la sección principal del carrito
    const IVA_RATE = 0.19; // 19% de IVA
    const DESPATCH_CHARGE_RATE = 0.05; // 5% de cargo por despacho
    const DESPATCH_CHARGE_THRESHOLD = 100000; // Umbral de $100.000 para el cargo por despacho

    // --- Referencias a elementos del modal de Checkout y Éxito ---
    const checkoutModalElement = document.getElementById('checkoutModal');
    const checkoutModal = checkoutModalElement ? new bootstrap.Modal(checkoutModalElement) : null;
    const checkoutForm = document.getElementById('checkoutForm');
    const successSendModalElement = document.getElementById('successSendModal');
    const successSendModal = successSendModalElement ? new bootstrap.Modal(successSendModalElement) : null;
    const sentEmailDisplay = document.getElementById('sentEmailDisplay');


    // Función para guardar el carrito en localStorage
    function saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Función para renderizar los productos en la cuadrícula
    function renderProducts(productsToRender) {
        productsGrid.innerHTML = ''; // Limpia el grid antes de añadir nuevos productos

        productsToRender.forEach(product => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            colDiv.setAttribute('data-category', product.category);
            colDiv.setAttribute('data-product-id', product.id);

            colDiv.innerHTML = `
                <div class="card h-100 text-center shadow-sm">
                    <img src="${product.imageSrc}" class="card-img-top mx-auto mt-3" alt="${product.name}"
                        style="max-width: 200px; height: 180px; object-fit: contain;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text text-info fw-bold fs-5">$${product.price.toLocaleString('es-CL')} + IVA</p>
                        <button class="btn btn-primary mt-auto" data-bs-toggle="modal"
                            data-bs-target="#productDetailModal" data-product-id="${product.id}">Ver Detalle</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(colDiv);
        });
        attachModalEventListeners(); // Vuelve a adjuntar los event listeners después de renderizar
    }

    // Función para adjuntar EventListeners al modal (reutilizable)
    function attachModalEventListeners() {
        if (!productDetailModalElement) return;

        const viewDetailButtons = document.querySelectorAll('.products__grid .btn[data-bs-toggle="modal"]');

        viewDetailButtons.forEach(button => {
            button.removeEventListener('click', handleViewDetailClick); // Evitar duplicados
            button.addEventListener('click', handleViewDetailClick);
        });

        function handleViewDetailClick(event) {
            const productId = event.currentTarget.dataset.productId;
            const product = products.find(p => p.id === productId);

            if (product) {
                if (modalImage) modalImage.src = product.imageSrc;
                if (modalImage) modalImage.alt = product.name;
                if (modalTitle) modalTitle.textContent = product.name;
                if (modalPrice) modalPrice.textContent = `$${product.price.toLocaleString('es-CL')} + IVA`;
                if (modalDescription) modalDescription.textContent = product.description;

                if (modalSpecs) {
                    modalSpecs.innerHTML = '';
                    const specsList = [
                        `<strong>Código:</strong> ${product.code}`,
                        `<strong>Categoría:</strong> ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`,
                        `<strong>Condición:</strong> Reacondicionado`
                    ];
                    specsList.forEach(spec => {
                        const li = document.createElement('li');
                        li.innerHTML = spec;
                        modalSpecs.appendChild(li);
                    });
                }
                // Resetear la cantidad a 1 cada vez que se abre el modal para un nuevo producto
                if (productQuantityInput) productQuantityInput.value = 1;

                // Almacenar el ID del producto actual en el botón "Añadir al Carrito"
                if (addToCartButton) addToCartButton.dataset.productId = product.id;
            }
        }
    }

    // --- Lógica de Filtrado de Productos por Categoría ---
    const filterButtons = document.querySelectorAll('.filter-button');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'btn-info');
                    btn.classList.add('btn-outline-info');
                });
                button.classList.add('active', 'btn-info');
                button.classList.remove('btn-outline-info');

                const category = button.dataset.category;
                const filteredProducts = category === 'todos' ? products : products.filter(p => p.category === category);
                renderProducts(filteredProducts);
            });
        });
    }

    // --- Lógica del Formulario de Contacto (contacto.html) ---
    const contactForm = document.getElementById('contactForm');
    // Ya tengo successModalElement y su instancia para el checkout, hay que reusar  el mismo id o crear uno nuevo si es diferente en contacto.html
    // successModalElement también es el modal de éxito en contacto.html
    if (contactForm && successSendModalElement) { // Uso successSendModalElement para referirme al modal de éxito general
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const contactSuccessModal = new bootstrap.Modal(successSendModalElement); // Creamos una nueva instancia solo para contacto
            contactSuccessModal.show();
            contactForm.reset();
        });
    }


    // --- Funciones del Carrito ---

    // Añadir producto al carrito
    function addToCart(productId, quantity) {
        const productToAdd = products.find(p => p.id === productId);
        if (!productToAdd) return;

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...productToAdd, quantity });
        }
        saveCart();
        updateTotalizerDisplay();
    }

    // Eliminar un producto del carrito
    function removeItemFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateTotalizerDisplay();
    }

    // Vaciar el carrito completamente
    function clearCart() {
        cart = [];
        saveCart();
        updateTotalizerDisplay();
    }

    // Actualizar la cantidad de un producto en el carrito
    function updateCartItemQuantity(productId, newQuantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, newQuantity); // Asegura que la cantidad no sea menor a 1
            saveCart();
            updateTotalizerDisplay();
        }
    }

    // Renderizar los elementos del carrito y el totalizador
    function updateTotalizerDisplay() {
        // Verifica que todos los elementos DOM necesarios existan.
        // Si falta alguno, probablemente no estamos en catalogo.html o hay un problema con los IDs.
        if (!cartItemsList || !cartSummaryDetails || !emptyCartMessage || !clearCartButton || !confirmPurchaseButton || !cartSummarySection) {
            console.error("Alguno de los elementos del DOM del carrito no fue encontrado. Asegúrate de estar en catalogo.html y que los IDs sean correctos.");
            return;
        }

        cartItemsList.innerHTML = ''; // Limpiar lista de ítems del carrito
        cartSummaryDetails.innerHTML = ''; // Limpiar resumen de totales

        if (cart.length === 0) {
            cartSummarySection.style.display = 'none'; // Oculta toda la sección del carrito
            emptyCartMessage.style.display = 'block'; // Muestra mensaje de carrito vacío
            clearCartButton.style.display = 'none'; // Oculta botón de vaciar carrito
            confirmPurchaseButton.style.display = 'none'; // Oculta el botón de confirmar compra
            return; // Salir de la función si el carrito está vacío
        }

        // Si hay ítems en el carrito
        cartSummarySection.style.display = 'block'; // Muestra toda la sección del carrito
        emptyCartMessage.style.display = 'none'; // Oculta mensaje de carrito vacío
        clearCartButton.style.display = 'inline-block'; // Muestra botón de vaciar carrito
        confirmPurchaseButton.style.display = 'inline-block'; // Muestra el botón de confirmar compra


        let subtotal = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-2', 'py-2', 'border-bottom');
            itemDiv.innerHTML = `
                <span>${item.name} (${item.code} x${item.quantity})</span> <div class="d-flex align-items-center">
                    <input type="number" class="form-control form-control-sm me-2 cart-item-quantity" data-product-id="${item.id}" value="${item.quantity}" min="1" max="99" style="width: 70px;">
                    <span class="fw-bold me-2">$${Math.round(itemTotal).toLocaleString('es-CL')}</span>
                    <button class="btn btn-sm btn-outline-danger remove-from-cart-btn" data-product-id="${item.id}">&times;</button>
                </div>
            `;
            cartItemsList.appendChild(itemDiv);
        });

        // Adjuntar event listeners a los botones de eliminar y campos de cantidad
        document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.currentTarget.dataset.productId;
                removeItemFromCart(productId);
            });
        });

        document.querySelectorAll('.cart-item-quantity').forEach(input => {
            input.addEventListener('change', (event) => {
                const productId = event.currentTarget.dataset.productId;
                const newQuantity = parseInt(event.currentTarget.value, 10);
                updateCartItemQuantity(productId, newQuantity);
            });
        });


        const netTotal = Math.round(subtotal); // Redondear el neto
        const ivaAmount = Math.round(netTotal * IVA_RATE); // Redondear el IVA
        const subtotalIVAIncluded = netTotal + ivaAmount; // Valor total IVA incluido

        let despatchCharge = 0;
        // Solo aplicar cargo por despacho si el valor total (IVA incluido) es menor a $100.000
        if (subtotalIVAIncluded < DESPATCH_CHARGE_THRESHOLD) {
            despatchCharge = Math.round(subtotalIVAIncluded * DESPATCH_CHARGE_RATE); // Redondear el cargo por despacho
        }
        
        const finalTotal = Math.round(subtotalIVAIncluded + despatchCharge); // Redondear el total final


        cartSummaryDetails.innerHTML = `
            <div class="d-flex justify-content-between mb-1">
                <span>Subtotal (Neto):</span>
                <span class="fw-bold">$${netTotal.toLocaleString('es-CL')}</span>
            </div>
            <div class="d-flex justify-content-between mb-1">
                <span>IVA (19%):</span>
                <span class="fw-bold">$${ivaAmount.toLocaleString('es-CL')}</span>
            </div>
            <div class="d-flex justify-content-between mb-1">
                <span>Subtotal (IVA Incluido):</span>
                <span class="fw-bold">$${subtotalIVAIncluded.toLocaleString('es-CL')}</span>
            </div>
            <div class="d-flex justify-content-between mb-1">
                <span>Cargo por Despacho (5%):</span>
                <span class="fw-bold">$${despatchCharge.toLocaleString('es-CL')}</span>
            </div>
            <div class="d-flex justify-content-between fs-5 fw-bold mt-2 pt-2 border-top bg-success">
                <span>Total Final:</span>
                <span>$${finalTotal.toLocaleString('es-CL')}</span>
            </div>
        `;
    }

    // --- Event Listeners Globales ---

    // Listener para el botón "Añadir al Carrito" en el modal
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const productId = addToCartButton.dataset.productId;
            const quantity = parseInt(productQuantityInput.value, 10);
            if (productId && quantity > 0) {
                addToCart(productId, quantity);
                // Cerrar el modal después de añadir al carrito
                const modalInstance = bootstrap.Modal.getInstance(productDetailModalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        });
    }

    // Listener para el botón "Vaciar Carrito"
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }

    // Listener para el botón "Confirmar Compra" (abre el modal de checkout)
    if (confirmPurchaseButton) {
        confirmPurchaseButton.addEventListener('click', () => {
            if (checkoutModal) { // Asegurarse de que el modal de checkout exista
                checkoutModal.show();

                // Limpiar los campos del formulario cada vez que se abre el modal
                if (checkoutForm) {
                    checkoutForm.reset(); // Resetea todos los campos
                    checkoutForm.classList.remove('was-validated'); // Quita las clases de validación
                }
            }
        });
    }

    // --- Lógica para el formulario de Checkout y generación de boleta ---
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar el envío por defecto del formulario

            // Validar el formulario con las clases de Bootstrap
            if (!checkoutForm.checkValidity()) {
                event.stopPropagation(); // Detener la propagación del evento si no es válido
                checkoutForm.classList.add('was-validated'); // Mostrar feedback de validación
                return; // Salir de la función si la validación falla
            }

            checkoutForm.classList.add('was-validated'); // Asegurar que se muestre como validado si pasa

            // Recopilar datos del cliente
            const clientEmail = document.getElementById('clientEmail').value;
            const clientName = document.getElementById('clientName').value;
            const shippingAddress = document.getElementById('shippingAddress').value;
            const shippingComuna = document.getElementById('shippingComuna').value;
            const shippingRegion = document.getElementById('shippingRegion').value;

            // Calcular totales para la boleta (reusando la lógica de updateTotalizerDisplay)
            let subtotal = 0;
            cart.forEach(item => {
                subtotal += item.price * item.quantity;
            });

            const netTotal = Math.round(subtotal);
            const ivaAmount = Math.round(netTotal * IVA_RATE);
            const subtotalIVAIncluded = netTotal + ivaAmount;

            let despatchCharge = 0;
            if (subtotalIVAIncluded < DESPATCH_CHARGE_THRESHOLD) {
                despatchCharge = Math.round(subtotalIVAIncluded * DESPATCH_CHARGE_RATE);
            }
            const finalTotal = Math.round(subtotalIVAIncluded + despatchCharge);

            // Generar contenido de la boleta (simulada)
            let boletaContent = `
                <h4 class="text-center">Boleta Electrónica</h4>
                <p><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-CL')}</p>
                <p><strong>Hora:</strong> ${new Date().toLocaleTimeString('es-CL')}</p>
                <hr>
                <h5>Detalle de Productos:</h5>
                <ul class="list-unstyled">
            `;

            cart.forEach(item => {
                boletaContent += `<li>${item.name} (${item.code} x${item.quantity}) - $${(item.price * item.quantity).toLocaleString('es-CL')}</li>`; // AÑADIDO: Código del producto
            });

            boletaContent += `
                </ul>
                <hr>
                <p>Subtotal (Neto): <strong>$${netTotal.toLocaleString('es-CL')}</strong></p>
                <p>IVA (19%): <strong>$${ivaAmount.toLocaleString('es-CL')}</strong></p>
                <p>Subtotal (IVA Incluido): <strong>$${subtotalIVAIncluded.toLocaleString('es-CL')}</strong></p>
                <p>Cargo por Despacho (5%): <strong>$${despatchCharge.toLocaleString('es-CL')}</strong></p>
                <h5 class="text-end">Total Final: <strong>$${finalTotal.toLocaleString('es-CL')}</strong></h5>
                <hr>
                <h5>Datos de Despacho:</h5>
                <p><strong>Cliente:</strong> ${clientName}</p>
                <p><strong>Correo:</strong> ${clientEmail}</p>
                <p><strong>Dirección:</strong> ${shippingAddress}, ${shippingComuna}, ${shippingRegion}</p>
                <p class="text-muted">Esta es una boleta simulada para propósitos de demostración.</p>
            `;

            // Mostrar el contenido de la boleta en algún lugar si se desea, por ejemplo en la consola o en otro modal.
            // Por ahora, sirve el modal de éxito general.
            console.log("Contenido de la Boleta Generada:\n", boletaContent);

            // Actualizar el correo en el modal de éxito y mostrarlo
            if (sentEmailDisplay) {
                sentEmailDisplay.textContent = clientEmail;
            }
            if (successSendModal) {
                successSendModal.show();
            }

            // Ocultar el modal de checkout
            if (checkoutModal) {
                checkoutModal.hide();
            }

            // Limpiar el carrito después de una compra exitosa
            clearCart();
        });
    }


    // --- LLAMADAS INICIALES ---
    renderProducts(products); // Renderiza todos los productos cuando la página carga
    updateTotalizerDisplay(); // Actualiza el display del carrito al cargar la página
});