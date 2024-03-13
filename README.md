# Descripción de la Aplicación Express

Esta aplicación Express proporciona un servidor con funciones de autenticación básicas y operaciones CRUD en una lista de usuarios. Utiliza JSON Web Tokens (JWT) para la autenticación y proporciona una documentación Swagger para facilitar la comprensión y prueba de las API.

## Características

- **Autenticación JWT:** Permite el inicio de sesión y emite tokens JWT para acceder a las rutas protegidas.
- **Operaciones CRUD de Usuarios:** Permite la obtención, actualización y eliminación de usuarios.

## Instalación

1. Clona este repositorio: `git clone https://github.com/mmartorellg/express-test-api.git`
2. Instala las dependencias: `npm install`

## Uso

1. Inicia la aplicación: `npm start`
2. Accede a la URL raíz para comprobar que el servidor está en funcionamiento: `http://localhost:3000/health`
3. Para autenticarte y obtener un token JWT, realiza una solicitud POST a: `http://localhost:3000/login` con las credenciales de prueba (usuario: 'test', contraseña: 'test').
4. Utiliza el token JWT obtenido para realizar operaciones CRUD en la lista de usuarios.

## Rutas

- **/health:** Ruta de prueba para verificar que el servidor está en funcionamiento.
- **/login:** Ruta para iniciar sesión y obtener un token JWT.
- **/users:** Ruta protegida para obtener la lista de usuarios.
- **/users (PUT):** Ruta protegida para agregar un nuevo usuario.
- **/users/:id (DELETE):** Ruta protegida para eliminar un usuario por ID.

## Documentación Swagger

Accede a la documentación Swagger en: `http://localhost:3000/api-docs`

## Requisitos

- Node.js instalado
- npm instalado

## Contribuir

Siéntete libre de contribuir o informar problemas creando un nuevo issue o enviando un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
