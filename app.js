const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const users = require('./users');

const app = express()
const PORT = 3000
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/health', (req, res) => {
  res.status(200)
  res.send('Welcome to root URL of Server')
})

app.post('/login', (req, res) => {
  const secret = '123456'
  const cadToken = 3600
  const user = req.body
  if (user.user === 'test' && user.password === 'test') {
    let token = jwt.sign({ user: user.user }, secret, {
      expiresIn: cadToken,
    })
    return res.status(200).send({
      token: token,
      user: user.user,
      message: 'Login Successful',
    })
  } else {
    return res.status(401).send('Unauthorized')
  }
})

app.get('/users', (req, res) => {
  const token = req.headers['x-access-token']
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' })
  return res.status(200).send(users)
})

app.put('/users', (req, res) => {
  const token = req.headers['x-access-token']
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' })
  if (!req.body.name || !req.body.email || !req.body.roles) return res.status(400).send('Bad Request')
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    roles: req.body.roles
  }
  users.push(newUser)
  return res.status(200).send(newUser)
})

app.delete('/users/:id', (req, res) => {
  const token = req.headers['x-access-token']
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' })
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) return res.status(404).send('User not found')
  const index = users.indexOf(user)
  users.splice(index, 1)
  return res.status(200).send(user)
})

app.listen(PORT, (error) => {
  if (!error) console.log('Server is Successfully Running, and App is listening on port ' + PORT);
  else console.log("Error occurred, server can't start", error);
});

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      "title": "API para pruebas",
      "version": "1.0.0",
      "description": "Documentación de la API de prueba",
    },
  },
  apis: ['./openapi.js'],
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;