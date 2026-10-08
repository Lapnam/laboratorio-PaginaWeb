# Catálogo de películas

Aplicación web de un catálogo interactivo de películas, hecha con React y Vite.
No usa backend: los datos están en el archivo `src/data/movies.js`.

## Funcionalidades

- Catálogo con tarjetas (imagen, título, género, año, calificación y descripción).
- Buscador por título que se actualiza mientras se escribe.
- Filtros por género, año y calificación mínima, combinables con el buscador.
- Detalle completo de cada película.
- Favoritos: agregar, quitar, ver la sección "Mis favoritas" y filtrar con "Solo favoritas".
- Valoración personal de 1 a 5 estrellas.
- Mensaje cuando no hay resultados.

## Cómo ejecutar el proyecto

1. Instalar Node.js (https://nodejs.org).
2. Abrir una terminal en la carpeta del proyecto.
3. Instalar las dependencias:

```bash
   npm install
```

4. Iniciar el servidor de desarrollo:

```bash
   npm run dev
```

5. Abrir en el navegador la dirección que aparece en la terminal (normalmente http://localhost:5173/).

## Estructura del proyecto