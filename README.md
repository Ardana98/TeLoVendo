# Te lo Vendo: Tu Plataforma de Electrónica Reacondicionada

¡Bienvenido al repositorio de Te lo Vendo! Este proyecto es una plataforma web de comercio electrónico dedicada a la venta de productos electrónicos reacondicionados de calidad.

##  Visión General del Proyecto

Te lo Vendo nace con el objetivo de ofrecer una alternativa sostenible y económica para adquirir tecnología de alto rendimiento. Nuestra misión es brindar productos reacondicionados que cumplen con los más altos estándares de calidad, contribuyendo a la economía circular y al acceso a la tecnología para todos.

Este proyecto ha sido desarrollado como parte de un entregable de Front-End, demostrando habilidades en el diseño y desarrollo de interfaces de usuario modernas, responsivas y funcionales.

##  Características Principales (Requerimientos Funcionales)

El portal "Te lo Vendo" ofrece las siguientes funcionalidades clave:

* **Página Principal (Inicio):** Una bienvenida atractiva con un banner promocional que destaca ofertas, y una sección de "Novedades y Destacados" mostrando productos populares.
* **Catálogo de Productos:** Un listado completo de nuestra electrónica reacondicionada, organizado por categorías. Incluye una **funcionalidad de filtrado** interactiva para que los usuarios puedan explorar productos específicos (Celulares, Tablets, Laptops, Smartwatch).
* **Ficha de Detalle de Producto (Modal):** Al hacer clic en "Ver Detalle" en cualquier tarjeta de producto, se abre un modal que muestra una imagen ampliada del producto, su nombre, precio y una descripción detallada (estática por ahora, pero lista para ser dinámica).
* **Página "Acerca del Proyecto":** Una sección dedicada a explicar los objetivos de "Te lo Vendo" y presentar a los responsables detrás de este portal.
* **Navegación Intuitiva y Responsiva:** Un menú principal claro en la parte superior, que se transforma en un práctico menú de hamburguesa lateral para una navegación fluida en dispositivos móviles y tabletas. Los enlaces activos se resaltan para indicar la ubicación actual del usuario.

## 🛠️ Aspectos Técnicos y Buenas Prácticas

Este proyecto ha sido construido siguiendo rigurosos estándares y buenas prácticas de desarrollo Front-End:

* **HTML Semántico:** Todo el marcado HTML utiliza etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<h1>`, `<h2>`, etc.) para asegurar la estructura lógica del contenido, mejorar la accesibilidad para lectores de pantalla y optimizar el SEO.
* **Arquitectura de Estilos con Sass (SCSS):**
    * **Metodología BEM (Block-Element-Modifier):** Las clases CSS siguen la convención BEM (`.bloque__elemento--modificador`) para mantener el código CSS modular, escalable y fácil de entender y mantener.
    * **Modularización:** Los estilos están organizados en archivos `.scss` parciales (`_variables.scss`, `_base.scss`, `_layout.scss`, `_components.scss`) para una gestión eficiente y una clara separación de responsabilidades.
    * **Variables:** Uso extensivo de variables Sass para colores, tipografías y espaciados, garantizando consistencia visual y facilitando cambios rápidos en el diseño global.
* **Guía de Estilos Visual:** Se ha establecido una guía visual a través de la definición de variables y la construcción de componentes reutilizables (como las tarjetas de producto y botones), que incluyen tipografías y una paleta de colores coherente (destacando el amarillo Amazon para elementos clave).
* **JavaScript Interactivo:**
    * Manejo de la interactividad del **modal de productos**, poblando dinámicamente el título, precio e imagen del producto seleccionado.
    * Implementación de la **funcionalidad de filtrado por categoría** en el catálogo, mostrando u ocultando productos según la selección del usuario.
    * Lógica para el **menú de hamburguesa** que abre y cierra el menú lateral responsivo.
    * Control de la **clase activa** en la navegación para indicar la página actual.
* **Responsividad:** El diseño es completamente responsivo, adaptándose elegantemente a diferentes tamaños de pantalla (desktops, tablets, móviles) utilizando técnicas de CSS (Flexbox, Media Queries) para una experiencia de usuario óptima en cualquier dispositivo.
* **Organización de Carpetas:** Estructura de carpetas clara y estándar (`assets/css`, `assets/js`, `assets/img`, `assets/scss`) que facilita la navegación y el mantenimiento del proyecto.

## Rol del Desarrollador Front-End y Decisiones Clave

Como desarrollador Front-End de "Te lo Vendo", mi rol principal ha sido traducir el diseño visual en una interfaz de usuario interactiva y funcional. Las decisiones clave tomadas incluyen:

* **Elección de Sass:** Para optimizar la escritura y el mantenimiento del CSS, aprovechando variables, anidación y modularización.
* **Implementación del Modal con JavaScript:** Para mostrar detalles de productos sin navegar a una nueva página, mejorando la experiencia del usuario. La decisión inicial de no usar JSON para los datos del modal se tomó para cumplir con el alcance del entregable actual, priorizando la funcionalidad básica.
* **Filtrado por Categorías:** Implementado directamente con JavaScript y atributos `data-` en el HTML, ofreciendo una interactividad esencial para el catálogo de manera eficiente para este alcance.
* **Diseño Responsivo con Mobile-First:** Priorizando la experiencia móvil desde el inicio para asegurar la adaptabilidad en todos los dispositivos.
* **Gestión del Espaciado y Contraste Visual:** Ajustes precisos de `padding` y `margin` y la incorporación de un fondo suave y una imagen en el Hero para mejorar la legibilidad y el atractivo visual.
* **Integración de Logo y Banner:** Elementos clave para la identidad de marca y la promoción en la página principal.

## Cómo Ejecutar el Proyecto

Para ver "Te lo Vendo" en acción, simplemente abre los archivos `index.html` o `catalogo.html` en tu navegador web.

Asegúrate de que tu entorno de desarrollo tenga Sass watch activo para compilar los archivos SCSS a CSS:

```bash
sass --watch assets/scss/style.scss:assets/css/style.css