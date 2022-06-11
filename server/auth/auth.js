const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/database')

//register function
exports.register = async (req, res, next) => { 
    const { username, email, password, contact, role } = req.body
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password less than 6 characters'})
    }
    if (contact.length < 10) {
        return res.status(400).json({ message: 'Contact less than 10 digit'})
    }
    bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
            username,
            email,
            password: hash,
            contact, 
            role
        }) 
        .then((user) => {
        const maxAge = 3 * 60 * 60
        const token = jwt.sign(
            { id: user._id, email, role: user.role },
            config.secret,
            { expiresIn: maxAge } // 3hrs in sec  
        )
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
        })
        res.status(201).json({
            message: 'User successfully created',
            user: user._id,
            role: user.role
        })
    })
    .catch((error) => 
            res.status(400).json({
                message: 'Failed to create the user',
                error: error.message 
            })
        )
    }
)}

//login function
exports.login = async (req, res, next) => {
    const { email, password } = req.body
    // Check if email and password is provided
    if (!email || !password) {
        return res.status(400).json({
            message: 'Please include email and password',
        })
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(401).json({
                message: 'Invalid email or password',
                error: 'User not found'
            })
        } else {
            // comparing given password with hashed password
            bcrypt.compare(password, user.password).then(function (result) {
                if (result) {
                    const maxAge = 3 * 60 * 60
                    const token = jwt.sign(
                        { id: user._id, email, role: user.role },
                        config.secret,
                        {
                            expiresIn: maxAge // 3hrs in sec
                        }
                    )
                    res.cookie('jwt', token, {
                      httpOnly: true,
                      maxAge: maxAge * 1000, // 3hrs in ms
                    })
                    res.status(201).json({
                        message: 'User successfully logged in',
                        user: user._id,
                        role: user.role
                    })
                } else {
                    res.status(400).json({ message: 'Login not successful' })
                }
            })
        }
    } catch (error) {
        res.status(400).json({
            message: 'An error occurred',
            error: error.message
        })
    }
}

//update functionality
exports.update = async (req, res, next) => {
    const { role, id } = req.body
    // Verifying if role and id is presnt
    if (role && id) {
        // Verifying if the value of role is admin
        if (role === 'admin') {
            // Finds the user with the id
            await User.findById(id)
            .then((user) => {
                // Third - Verifies the user is not an admin
                if (user.role !== 'admin') {
                    user.role = role
                    user.save((err) => {
                        //Monogodb error checker
                        if (err) {
                            res
                            .status('400')
                            .json({ message: 'An error occurred', error: err.message })
                        process.exit(1)
                    }
                    res.status('201').json({ message: 'Update successful', user })
                })
            } else {
                res.status(400).json({ message: 'User is already an Admin' })
            }}) .catch((error) => {
                res
                .status(400)
                .json({ message: 'An error occurred', error: error.message })
            })
        } else {
            res.status(400).json({
            message: 'Role is not admin',
        })
    }
} else {
    res.status(400).json({ message: 'Role or Id not present' })
}}

//delete functionality
exports.deleteUser = async (req, res, next) => {
    const { id } = req.body
    await User.findById(id)
        .then(user => user.remove())
        .then(user =>
            res.status(201).json({ message: 'User successfully deleted', user })
            ) .catch(error =>
                res
                .status(400)
                .json({ message: 'An error occurred', error: error.message })
                )
            }