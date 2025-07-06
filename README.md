# Te lo Vendo: Tu Plataforma de Electrónica Reacondicionada

¡Bienvenido al repositorio de Te lo Vendo! Este proyecto es una plataforma web de comercio electrónico dedicada a la venta de productos electrónicos reacondicionados de calidad.

## Visión General del Proyecto

Te lo Vendo nace con el objetivo de ofrecer una alternativa sostenible y económica para adquirir tecnología de alto rendimiento. Nuestra misión es brindar productos reacondicionados que cumplen con los más altos estándares de calidad, contribuyendo a la economía circular y al acceso a la tecnología para todos.

Este proyecto ha sido desarrollado como parte de un entregable de Front-End, demostrando habilidades en el diseño y desarrollo de interfaces de usuario modernas, responsivas y funcionales.

## Características Principales (Requerimientos Funcionales)

El portal "Te lo Vendo" ofrece las siguientes funcionalidades clave:

- **Página Principal (Inicio):** Una bienvenida atractiva con un banner promocional que destaca ofertas, y una sección de "Novedades y Destacados" mostrando productos populares.
- **Catálogo de Productos:** Un listado completo de nuestra electrónica reacondicionada, organizado por categorías. Incluye una **funcionalidad de filtrado** interactiva para que los usuarios puedan explorar productos específicos (Celulares, Tablets, Laptops, Smartwatch).
- **Ficha de Detalle de Producto (Modal):** Al hacer clic en "Ver Detalle" en cualquier tarjeta de producto, se abre un modal que muestra una imagen ampliada del producto, su nombre, precio y una descripción detallada (estática por ahora, pero lista para ser dinámica).
- **Página "Acerca del Proyecto":** Una sección dedicada a explicar los objetivos de "Te lo Vendo" y presentar a los responsables detrás de este portal.
* **Formulario de Contacto:** Una interfaz clara y funcional para que los usuarios puedan enviar consultas o comentarios directamente al equipo de "Te lo Vendo", incluyendo campos para nombre, email, teléfono y mensaje.
- **Navegación Intuitiva y Responsiva:** Un menú principal claro en la parte superior, que se transforma en un práctico menú de hamburguesa lateral para una navegación fluida en dispositivos móviles y tabletas. Los enlaces activos se resaltan para indicar la ubicación actual del usuario.

## 🛠️ Aspectos Técnicos y Buenas Prácticas

Este proyecto ha sido construido siguiendo rigurosos estándares y buenas prácticas de desarrollo Front-End:

- **HTML Semántico:** Todo el marcado HTML utiliza etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<h1>`, `<h2>`, etc.) para asegurar la estructura lógica del contenido, mejorar la accesibilidad para lectores de pantalla y optimizar el SEO.

- **Arquitectura CSS: Metodología BEM y Sass Modular**

Para garantizar un código CSS robusto, mantenible y escalable, este proyecto sigue una arquitectura modular basada en **Sass (SCSS)** y la metodología **BEM (Bloque, Elemento, Modificador)**.

  ### **1. Organización de Archivos Sass**

  El código SCSS se organiza en varios parciales (`_*.scss`) que se importan en un archivo principal (`style.scss`), siguiendo una convención lógica:

  - `_config.scss`: Define variables globales (colores, tipografías, espaciados, sombras) para una gestión centralizada y fácil actualización de la identidad visual.
  - `_base.scss`: Contiene estilos base para elementos HTML (`body`, `a`, `h1-h6`), así como utilidades globales (ej. `.container`) y la lógica del "sticky footer".
  - `_layout.scss`: Define la estructura y el posicionamiento de los componentes principales del sitio (ej. `main-header`, `main-content`, `main-footer`, secciones generales).
  - `_components.scss`: Agrupa los estilos para componentes UI reutilizables (ej. `.button`, `.product-card`, `products__grid`).
  - `_form.scss`: Dedicado a la estilización del formulario de contacto y su barra lateral asociada.
  - `_modal.scss`: Contiene los estilos específicos para la ventana modal de detalles del producto.
  - `_responsive.scss`: (para `@media queries` globales o breakpoints).

  Esta modularización facilita la navegación, el mantenimiento y la colaboración al segregar responsabilidades de estilo en archivos dedicados.

  ### **2. Implementación de la Metodología BEM**

  Adopción de BEM para nombrar las clases CSS, lo que garantiza una alta modularidad, reusabilidad y especificidad plana, reduciendo conflictos y mejorando la legibilidad del HTML y SCSS.

  - **Bloques:** Representan componentes independientes y reutilizables (ej., `main-header`, `product-card`, `contact-form`, `modal`).
  - **Elementos:** Son partes de un bloque que no tienen significado por sí solas fuera del bloque (ej., `main-header__logo`, `product-card__image`, `main-nav__list`). Se usa la sintaxis `bloque__elemento`.
  - **Modificadores:** Son variaciones de un bloque o un elemento que cambian su apariencia o comportamiento (ej., `button--primary`, `modal--active`). Se usa la sintaxis `bloque--modificador` o `bloque__elemento--modificador`.

  **Justificación de Decisiones Específicas (Flexibilidad BEM):**

  Si bien la metodología BEM promueve estrictamente la sintaxis `bloque__elemento` para todas las partes de un bloque, en este proyecto he aplicado un **enfoque pragmático** para ciertos elementos, como:

  - **`modal-title`, `modal-price`, `modal-description`:**

    - En lugar de `modal__title`, `modal__price`, `modal__description`, se utilizó un solo guion (`-`).
    - **Justificación:** Estos elementos son detalles atómicos dentro del bloque `modal-details` y no se prevé que tengan sub-elementos complejos propios (ej., `price__currency`). La clase con guion simple sigue siendo **claramente contextual** al `modal` (`modal-price` no se confundirá con otro `price` en el sitio). Además, esta elección contribuye a una **lectura más fluida del HTML** para estos casos específicos, sin comprometer los principios de modularidad y especificidad plana de BEM. Los estilos se manejan mediante anidamiento en Sass (`.modal-details .modal-price`), lo que mantiene la encapsulación.

  - **`form-group` dentro de `contact-form`:**
    - `form-group` es una clase genérica para agrupar un `label` y un `input/textarea`.
    - **Justificación:** Se decidió usar `form-group` como un "micro-bloque" conceptualmente reusable que encapsula elementos de formulario. Aunque no tiene el prefijo `contact-form__` en el HTML, su pertenencia al `contact-form` está garantizada por el **anidamiento de estilos en Sass** (`.contact-form .form-group { ... }`). Esto permite que el concepto `form-group` sea potencialmente reutilizable en otros formularios si se necesitara, mientras que sus estilos permanecen correctamente acoplados al contexto del `contact-form` en el SCSS.

  Esta implementación de BEM busca la **máxima legibilidad y mantenibilidad** del código CSS, adaptando la estricta convención de nomenclatura a las necesidades y claridad del proyecto, sin desviarse de los principios fundamentales de la metodología.

- **Guía de Estilos Visual:** Se ha establecido una guía visual a través de la definición de variables y la construcción de componentes reutilizables (como las tarjetas de producto y botones), que incluyen tipografías y una paleta de colores coherente (destacando el amarillo Amazon para elementos clave).
- **JavaScript Interactivo:**
  - Manejo de la interactividad del **modal de productos**, poblando dinámicamente el título, precio e imagen del producto seleccionado.
  - Implementación de la **funcionalidad de filtrado por categoría** en el catálogo, mostrando u ocultando productos según la selección del usuario.
  - Lógica para el **menú de hamburguesa** que abre y cierra el menú lateral responsivo.
  - Control de la **clase activa** en la navegación para indicar la página actual.
- **Responsividad:** El diseño es completamente responsivo, adaptándose elegantemente a diferentes tamaños de pantalla (desktops, tablets, móviles) utilizando técnicas de CSS (Flexbox, Media Queries) para una experiencia de usuario óptima en cualquier dispositivo.
- **Organización de Carpetas:** Estructura de carpetas clara y estándar (`assets/css`, `assets/js`, `assets/img`, `assets/scss`) que facilita la navegación y el mantenimiento del proyecto.

## Rol del Desarrollador Front-End y Decisiones Clave

Como desarrollador Front-End de "Te lo Vendo", mi rol principal ha sido traducir el diseño visual en una interfaz de usuario interactiva y funcional. Las decisiones clave tomadas incluyen:

- **Elección de Sass:** Para optimizar la escritura y el mantenimiento del CSS, aprovechando variables, anidación y modularización.
- **Implementación del Modal con JavaScript:** Para mostrar detalles de productos sin navegar a una nueva página, mejorando la experiencia del usuario. La decisión inicial de no usar JSON para los datos del modal se tomó para cumplir con el alcance del entregable actual, priorizando la funcionalidad básica.
- **Filtrado por Categorías:** Implementado directamente con JavaScript y atributos `data-` en el HTML, ofreciendo una interactividad esencial para el catálogo de manera eficiente para este alcance.
- **Diseño Responsivo con Mobile-First:** Priorizando la experiencia móvil desde el inicio para asegurar la adaptabilidad en todos los dispositivos.
- **Gestión del Espaciado y Contraste Visual:** Ajustes precisos de `padding` y `margin` y la incorporación de un fondo suave y una imagen en el Hero para mejorar la legibilidad y el atractivo visual.
- **Integración de Logo y Banner:** Elementos clave para la identidad de marca y la promoción en la página principal.

## Cómo Ejecutar el Proyecto

Para ver "Te lo Vendo" en acción, simplemente abre los archivos `index.html` o `catalogo.html` en tu navegador web.

Asegúrate de que tu entorno de desarrollo tenga Sass watch activo para compilar los archivos SCSS a CSS:

```bash
sass --watch assets/scss/style.scss:assets/css/style.css
```
