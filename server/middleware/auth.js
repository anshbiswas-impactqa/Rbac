const jwt = require('jsonwebtoken')
const config = require('../config/database')

//admin middleware
exports.adminAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, config.secret, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: 'Not authorized' })
        } else {
            if (decodedToken.role !== 'admin') {
                return res.status(401).json({ message: 'Not authorized' })
            } else {
                next()
            }
        }
    })
} else {
    return res
        .status(401)
        .json({ message: 'Not authorized, token not available' })
    }
}

//user middleware
exports.userAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: 'Not authorized' })
            } else {
                if (decodedToken.role !== 'user') {
                    return res.status(401).json({ message: 'Not authorized' })
                } else {
                    next()
                }
            }
        })
    } else {
        return res
            .status(401)
            .json({ message: 'Not authorized, token not available' })
        }
}