const connectDB = require('./db')
const express = require('express')
const {adminAuth, userAuth} = require('./middleware/auth')
const app = express()
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
const PORT = 5000

const server = app.listen(PORT, () => 
    console.log(`Server connected to port ${PORT}`)
)

//Handling error
process.on('unhandledRejection', err => {
    console.log('An error occurred: ${err.message}')
    server.close(() => process.exit(1))
})

app.use('/auth', require('./auth/route'))
app.get('/admin', adminAuth, (req, res) => res.send('Admin Route'))
app.get('/user', adminAuth, (req, res) => res.send('User Route'))

connectDB()