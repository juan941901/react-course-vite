# Curso React-Vite

Curso de react con vite, en el cual desarrollamos una tienda virtual

## Creacción de carpeta para el proyecto 

Ejecutamos el comando

`npm create vite@latest`

Esto empezara la creación del proyecto el cual nos pedira unas configuraciones simples, la cual es seleccionar el framework que en este casi es react y el tipo de lenguaje a utilizar el cual para este proyecto es javascript.

luego instalamos los paquetes necesarios para el uso de taildwind con los siguientes comando el proyecto

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

Y Agregamos las siguientes instrucciones a las archivos de CSS y configuración de

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

las anteriores instrucciones son para el archivo tailwind.config.js

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

Y estas para nuestro archivo Principal de CSS, igual mente todos estos pasos los podemos verificar en la documentación de taildwind.