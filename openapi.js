/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verificar la salud del servidor
 *     description: Endpoint para verificar la salud del servidor.
 *     responses:
 *       200:
 *         description: El servidor está saludable.
 *         content:
 *           text/plain:
 *             example: Welcome to root URL of Server
 */
  
  /**
   * @swagger
   * /login:
   *   post:
   *     summary: Iniciar sesión
   *     description: Endpoint para autenticarse y obtener un token.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               user:
   *                 type: string
   *               password:
   *                 type: string
   *             required:
   *               - user
   *               - password
   *     responses:
   *       200:
   *         description: Inicio de sesión exitoso.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 token:
   *                   type: string
   *                 user:
   *                   type: string
   *                 message:
   *                   type: string
   *               required:
   *                 - token
   *                 - user
   *                 - message
   *       401:
   *         description: Inicio de sesión fallido.
   *         content:
   *           application/json:
   *             example:
   *               message: Unauthorized
   */
  
  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Obtener la lista de usuarios
   *     description: Endpoint para obtener la lista de usuarios.
   *     security:
   *       - BearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de usuarios obtenida exitosamente.
   *         content:
   *           application/json:
   *             example:
   *               - id: 1
   *                 name: Usuario1
   *                 email: usuario1@example.com
   *               - id: 2
   *                 name: Usuario2
   *                 email: usuario2@example.com
   *       403:
   *         description: No se proporcionó un token.
   *         content:
   *           application/json:
   *             example:
   *               auth: false
   *               message: No token provided.
   */
  
  /**
   * @swagger
   * /users:
   *   put:
   *     summary: Agregar un nuevo usuario
   *     description: Endpoint para agregar un nuevo usuario.
   *     security:
   *       - BearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/components/schemas/NewUser"
   *     responses:
   *       200:
   *         description: Usuario agregado exitosamente.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/components/schemas/User"
   *       403:
   *         description: No se proporcionó un token.
   *         content:
   *           application/json:
   *             example:
   *               auth: false
   *               message: No token provided.
   *       400:
   *         description: Solicitud incorrecta.
   *         content:
   *           application/json:
   *             example: Bad Request
   */
  
  /**
   * @swagger
   * /users/{id}:
   *   delete:
   *     summary: Eliminar un usuario
   *     description: Endpoint para eliminar un usuario por su ID.
   *     security:
   *       - BearerAuth: []
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del usuario a eliminar.
   *     responses:
   *       200:
   *         description: Usuario eliminado exitosamente.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/components/schemas/User"
   *       403:
   *         description: No se proporcionó un token.
   *         content:
   *           application/json:
   *             example:
   *               auth: false
   *               message: No token provided.
   *       404:
   *         description: Usuario no encontrado.
   *         content:
   *           application/json:
   *             example: User not found
   */
  