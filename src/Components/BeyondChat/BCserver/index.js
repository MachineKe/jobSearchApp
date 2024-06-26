const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const ws = require('ws')
const context = require('../../../../userpostsbackend/util/check-auth')
const User = require('./Models/User')
const { SECRET_KEY } = require("../../../../userpostsbackend/config");

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});


const jwtSecret = process.env.JWT_SECRET
const app = express()
app.use(express.json())

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}))

app.get('/test', (req, res) => {
  res.json('test ok')
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  try {
    const createdUser = await User.create({ username, password })
  jwt.sign({ userId: createdUser._id }, SECRET_KEY,{},(err, token)=> {
    if (err) throw err
res.cookie('token',token, {sameSite:'none',secure:false}).status(201).json('ok')
})

  } catch (err) {
    if(err) throw err
    res.status(500).json('ok')
  }
})


const server = app.listen(4040)

const wss = new ws.WebSocketServer({ server })
wss.on('connection', (connection,req) => {
  const cookies = req.headers.cookie
  if (cookies) {
    const tokenCookieString = cookies.split(';').find(str => str.startsWith('token='))
    const token = tokenCookieString.split('=')[1]
    if (token) {
      console.log(token)
      jwt.verify(token, SECRET_KEY, {}, (err, userData) => {
        if (err) throw err
        console.log(userData)
      })
    }
  }
})