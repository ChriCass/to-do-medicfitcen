

# Aplicación To-Do

Esta es una aplicación To-Do simple desarrollada como parte de una prueba técnica para Medicfitcen. La aplicación permite a los usuarios agregar, eliminar y marcar tareas como completadas. Utiliza React para el frontend, Node.js y Express para el backend, y MySQL para la persistencia de datos.

## Configuración del Proyecto

### Requisitos Previos

- Node.js
- npm
- MySQL

Asegúrate de tener instalado Node.js, npm y MySQL en tu sistema para ejecutar esta aplicación.

### Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar dependencias del backend:**

   Navega al directorio del backend y ejecuta `npm install`.

   ```bash
   cd back-end
   npm install
   ```

3. **Instalar dependencias del frontend:**

   En una nueva terminal, navega al directorio del frontend y ejecuta `npm install`.

   ```bash
   cd front-end
   npm install
   ```

### Configuración de la Base de Datos

1. **Crear la base de datos en MySQL:**

   Inicia sesión en MySQL y ejecuta el siguiente comando para crear tu base de datos.

   ```sql
   CREATE DATABASE to_do;
   ```

2. **Crear la tabla de tareas:**

   Usa el siguiente comando SQL para crear la tabla necesaria para almacenar las tareas.

   ```sql
   USE to_do;
   CREATE TABLE tasks (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     completed BOOLEAN NOT NULL DEFAULT FALSE
   );
   ```

3. **Configurar las credenciales de la base de datos en tu backend:**

   Asegúrate de actualizar el archivo de configuración del backend (`index.js` o un archivo `.env` si estás utilizando variables de entorno) con las credenciales correctas de tu base de datos MySQL.

### Ejecutar la Aplicación

1. **Iniciar el servidor backend:**

   Desde el directorio del backend, ejecuta el siguiente comando para iniciar el servidor Node.js.

   ```bash
   npm start
   ```

2. **Iniciar la aplicación frontend:**

   En una nueva terminal, navega al directorio del frontend y ejecuta el comando para iniciar la aplicación React.

   ```bash
   npm start
   ```

La aplicación debería estar ahora accesible en `http://localhost:3000`.

## Uso

- **Agregar una tarea:** Escribe el título de la tarea en el campo de entrada y haz clic en el botón "Agregar" para crear una nueva tarea.
- **Marcar tarea como completada:** Haz clic en el checkbox al lado de cada tarea para marcarla como completada o no completada.
- **Eliminar una tarea:** Haz clic en el ícono de eliminar al lado de cada tarea para eliminarla.

---

Este `README.md` proporciona una guía básica para configurar y comenzar a usar tu aplicación To-Do. Puedes expandirlo con más detalles específicos sobre la configuración, el uso y la contribución al proyecto según sea necesario.