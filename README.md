# Te lo Vendo: Tu Plataforma de Electrónica Reacondicionada

¡Bienvenido al repositorio de Te lo Vendo! Este proyecto es una plataforma web de comercio electrónico dedicada a la venta de productos electrónicos reacondicionados de calidad.

## Visión General del Proyecto

Te lo Vendo nace con el objetivo de ofrecer una alternativa sostenible y económica para adquirir tecnología de alto rendimiento. Nuestra misión es brindar productos reacondicionados que cumplen con los más altos estándares de calidad, contribuyendo a la economía circular y al acceso a la tecnología para todos.

Este proyecto ha sido desarrollado como parte de un entregable de Front-End, demostrando habilidades en el diseño y desarrollo de interfaces de usuario modernas, responsivas y funcionales.

## Características Principales (Requerimientos Funcionales)

El portal "Te lo Vendo" ofrece las siguientes funcionalidades clave, ahora potenciadas por **Bootstrap 5.3.7**:

-   **Página Principal (Inicio):** Una bienvenida atractiva con un banner que destaca ofertas y **Carousel de imágenes (implementado con Bootstrap)** para la sección de "Novedades y Destacados" mostrando productos populares.
-   **Catálogo de Productos:** Un listado completo de nuestra electrónica reacondicionada, organizado por categorías e implementado con **Cards de Bootstrap**. Incluye una **funcionalidad de filtrado** interactiva para que los usuarios puedan explorar productos específicos (Celulares, Tablets, Laptops, Smartwatch).
-   **Ficha de Detalle de Producto (Modal):** Al hacer clic en "Ver Detalle" en cualquier tarjeta de producto, se abre un **Modal de Bootstrap** que muestra una imagen ampliada del producto, su nombre, precio y una descripción detallada (estática por ahora, pero lista para ser dinámica), además, se implementó un boton de acción "añadir al carrito".
-   **Página "Acerca del Proyecto":** Una sección dedicada a explicar los objetivos de "Te lo Vendo" y presentar a los responsables detrás de este portal.
-   **Formulario de Contacto:** Una interfaz clara y funcional para que los usuarios puedan enviar consultas o comentarios directamente al equipo de "Te lo Vendo". **Al llenar todos los campos y presionar "enviar el formulario, un Modal de Bootstrap** confirma el "guardado exitosamente" del mensaje.
-   **Navegación Intuitiva y Responsiva:** Un menú principal claro en la parte superior, implementado con el **componente Navbar de Bootstrap**.
    * **`Menú Hamburguesa`**: Para entornos móviles y tablets, la Navbar incorpora el práctico "menú hamburguesa" de Bootstrap para una navegación fluida.
    * **`Barra de Navegación Fija`**: El menú principal permanece anclado en la parte superior de la ventana (`fixed-top`), permitiendo a los usuarios una navegación constante.
    * **`Diseño de Layout Consistente`**: El pie de página (`main-footer`) permanece siempre visible en la parte inferior de la ventana, incluso en páginas con poco contenido, asegurando una experiencia de usuario consistente y profesional.

## 🛠️ Aspectos Técnicos y Buenas Prácticas

Este proyecto ha sido construido siguiendo rigurosos estándares y buenas prácticas de desarrollo Front-End, con **Bootstrap 5.3.7** como framework principal:

-   **HTML Semántico:** Todo el marcado HTML utiliza etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<h1>`, `<h2>`, etc.) para asegurar la estructura lógica del contenido, mejorar la accesibilidad para lectores de pantalla y optimizar el SEO.

-   **Arquitectura CSS: Integración de Bootstrap, Sass Modular (7-1 Pattern) y BEM**

    Para garantizar un código CSS robusto, mantenible y escalable, este proyecto integra **Bootstrap 5.3.7** y sigue una arquitectura modular basada en **Sass (SCSS)** y la metodología **BEM (Bloque, Elemento, Modificador)**.

    ### **1. Organización de Archivos Sass (7-1 Pattern Adaptado)**

    El código SCSS se organiza en varios parciales (`_*.scss`) que se importan en un único archivo principal (`style.scss`), siguiendo la convención de la metodología 7-1 Pattern para una clara separación de responsabilidades, ahora con un enfoque en la integración de Bootstrap:

    * **`style.scss`**: El archivo principal que actúa como manifiesto y centraliza las importaciones de los demás parciales, incluido `_bootstrap-custom.scss`. Es el único archivo que se compila a `style.css`.
    * **`_bootstrap-custom.scss` (NUEVO)**: Archivo clave donde se importa la librería Bootstrap y se sobrescriben sus variables por defecto (`$primary`, `$font-family-base`, etc.) con las variables de configuración del proyecto (`_config.scss`). También incluye estilos personalizados para componentes de Bootstrap (como el Carousel) que requieren un alto nivel de especificidad o el uso de mixins de Bootstrap.

    * **`abstracts/`**: Contiene archivos auxiliares de Sass que no producen CSS directamente, sino que son usados por otros parciales.
        * `_config.scss`: Define variables globales (colores, tipografías, espaciados, sombras, breakpoints) para una gestión centralizada y fácil actualización de la identidad visual del proyecto y para la personalización de Bootstrap.

    * **`base/`**: Contiene los estilos base para elementos HTML y estilos globales que afectan a todo el documento.
        * `_reset.scss`: Incluye un reseteo o normalización de los estilos por defecto del navegador para asegurar consistencia.
        * `_typography.scss`: Define estilos base para elementos de texto (`body`, `a`) y encabezados (`h1-h6`), aplicando las fuentes y colores de la marca, complementando y sobrescribiendo las bases de Bootstrap.
        * `_global-styles.scss`: Contiene estilos globales para `body` y otras propiedades fundamentales, como configuraciones de Flexbox para el "sticky footer".

    * **`layout/`**: Define la estructura y el posicionamiento de los componentes principales del sitio.
        * `_common-layout.scss`: Contiene clases de ayuda para la estructura general del layout, como `.container` y `.main-content`.
        * `_footer.scss`: Estilos específicos para el pie de página (`.main-footer`).
        * `_hero-section.scss`: Estilos para la sección de bienvenida (`.hero-section`), que ahora integra el Carousel de Bootstrap.
        * `_promo-banner-section.scss`: Estilos para la sección del banner promocional.
        * `_sections.scss`: Estilos para secciones generales del contenido (ej. `.about-page-section`), con clases de Bootstrap incorporadas en el HTML.

    * **`components/`**: **Esta carpeta ha sido eliminada**, ya que sus estilos han sido reemplazados directamente por los componentes y las clases de utilidad de Bootstrap (ej. botones, formularios, tarjetas de producto, modales) o integrados en `_bootstrap-custom.scss` o parciales de `layout`.

    * **`pages/` (si aplica):** Archivos específicos para estilos únicos de páginas concretas.

    * **`themes/` (si aplica):** Estilos para diferentes temas del sitio.

    * **`vendors/` (si aplica):** Archivos de librerías o frameworks CSS de terceros.

    Esta modularización facilita la navegación, el mantenimiento y la colaboración al segregar responsabilidades de estilo en archivos dedicados, promoviendo la reutilización y escalabilidad del código.

### **Estructura de Directorios SCSS (Actualizada):**

La siguiente es una representación visual de la estructura de carpetas dentro de assets/scss/:
```
assets/
└── scss/
├── abstracts/
│   ├── _config.scss
│   
├── base/
│   ├── _global-styles.scss
│   ├── _reset.scss
│   └── _typography.scss
├── layout/
│   ├── _common-layout.scss
│   ├── _footer.scss
│   ├── _hero-section.scss
│   ├── _promo-banner-section.scss
│   └── _sections.scss
├── pages/
│   └── # Aquí irían parciales específicos de cada página (ej. _home.scss, _catalog.scss)
├── themes/
│   └── # Aquí irían parciales para diferentes temas (ej. _dark.scss)
├── vendors/
│   └── # Aquí irían parciales para librerías CSS externas (ej. _normalize.scss)
├── _bootstrap-custom.scss # Archivo para personalización de Bootstrap
└── style.scss             # Archivo principal que importa todo
```

### **2. Implementación de la Metodología BEM (Complemento con Bootstrap)**

    La metodología BEM se sigue para nombrar las clases CSS personalizadas, lo que garantiza una alta modularidad, reusabilidad y especificidad plana. Esto se combina con el uso extensivo de las clases de utilidad y componentes de Bootstrap para la mayor parte del diseño.

  - **Bloques:** Representan componentes independientes y reutilizables (ej., `main-header` (en desuso), `contact-form`, `main-footer`).
    -   **Elementos:** Son partes de un bloque (ej., `main-footer__info`).
    -   **Modificadores:** Variaciones de un bloque o un elemento.

   **Justificación de Decisiones Específicas (Flexibilidad BEM y Bootstrap):**

    El proyecto adopta un enfoque pragmático para BEM, especialmente al integrar Bootstrap:

  -   **`modal-title`, `modal-body` (ejemplos de antes):** Ahora son **componentes directos de Bootstrap** que ya tienen sus propias clases (`.modal-title`, `.modal-body`). No se aplican prefijos BEM custom a estos, sino que se utilizan las clases de Bootstrap.
    -   **Justificación:** Se prioriza el uso de la estructura y clases predefinidas de Bootstrap para sus componentes estándar, reduciendo la necesidad de CSS personalizado.

    -   **`form-group` y otros elementos de formulario:** Ahora se utilizan las clases de formulario de Bootstrap como `mb-3` (margin-bottom), `form-label`, `form-control`.
        -   **Justificación:** Se aprovechan las clases de utilidad y de componentes de formulario de Bootstrap, que son altamente personalizables a través de variables de Sass en `_bootstrap-custom.scss` y ofrecen una base robusta y responsiva.

    Esta implementación de BEM y la integración de Bootstrap buscan la **máxima legibilidad, mantenibilidad y eficiencia** del código CSS, adaptando las convenciones a la sinergia entre el diseño personalizado y el framework.

-   **Guía de Estilos Visual:** Se ha establecido una guía visual a través de la definición de variables en `_config.scss` y la construcción de componentes reutilizables (ahora muchos de ellos de Bootstrap, personalizados a través de variables), que incluyen tipografías y una paleta de colores coherente (destacando el naranja Amazon para elementos clave).
-   **JavaScript Interactivo:**
    -   Uso del **bundle de JavaScript de Bootstrap** para el manejo de componentes como la Navbar (menú hamburguesa) y los Modals.
    -   Implementación de la **funcionalidad de filtrado por categoría** en el catálogo, mostrando u ocultando productos según la selección del usuario.
    -   Lógica para mostrar un **Modal de Bootstrap** al enviar el formulario de contacto.
-   **Responsividad:** El diseño es completamente responsivo, adaptándose elegantemente a diferentes tamaños de pantalla (desktops, tablets, móviles) utilizando el sistema de rejilla, utilidades y mixins de media query de Bootstrap para una experiencia de usuario óptima en cualquier dispositivo.
    * **Puntos de Quiebre:** Se han definido puntos de quiebre claves en `_config.scss` y se aplican mediante los mixins `media-breakpoint-up()` y `media-breakpoint-down()` de Bootstrap, como se ve en los estilos del Carousel.
-   **Organización de Carpetas:** Estructura de carpetas clara y estándar (`assets/css`, `assets/js`, `assets/img`, `assets/scss`) que facilita la navegación y el mantenimiento del proyecto.

## Rol del Desarrollador Front-End y Decisiones Clave

Como desarrolladora Front-End de "Te lo Vendo", mi rol principal ha sido traducir el diseño visual en una interfaz de usuario interactiva y funcional, priorizando la eficiencia y la estandarización con Bootstrap. Las decisiones clave tomadas incluyen:

-   **Integración y Personalización de Bootstrap:** Decisión fundamental para acelerar el desarrollo, asegurar la responsividad y mantener la consistencia, personalizando sus variables globales vía Sass para la identidad de marca.
-   **Elección de Sass:** Para optimizar la escritura y el mantenimiento del CSS, aprovechando variables, anidación y modularización.
-   **Implementación de Modals con JavaScript y Bootstrap:** Para mostrar detalles de productos y confirmaciones de formulario sin navegar a una nueva página, mejorando la experiencia del usuario de manera eficiente con el framework.
-   **Filtrado por Categorías (JavaScript):** Implementado directamente con JavaScript y atributos `data-` en el HTML, ofreciendo una interactividad esencial para el catálogo de manera eficiente para este alcance.
-   **Diseño Responsivo con Mobile-First:** Priorizando la experiencia móvil desde el inicio y apalancándose en las capacidades inherentes de Bootstrap.
-   **Consolidación de CSS:** Eliminar parciales redundantes (`_header.scss`, `_sidebar.scss`, la carpeta `components/`) para mantener un código más limpio y modular, moviendo sus funcionalidades a Bootstrap o a parciales más generales.

## Cómo Ejecutar el Proyecto

Para ver "Te lo Vendo" en acción, sigue estos pasos:

1.  **Instala las dependencias de Bootstrap:**
    ```bash
    npm install
    ```
2.  **Compila tus archivos Sass a CSS:**
    Asegúrate de que tu entorno de desarrollo tenga Sass watch activo para compilar los archivos SCSS a CSS:
    ```bash
    sass --watch assets/scss/style.scss:assets/css/style.css
    ```
3.  **Abre el proyecto:**
    Simplemente abre los archivos `index.html` o `catalogo.html` en tu navegador web.

---