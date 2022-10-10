require('dotenv').config()
const jwt    = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'jsonwebtoken-secret' // mình có dùng dotenv 
// vào file .env tạo 1 chuỗi JWT_SECRET bất kỳ
let hashTokenAccess = async user => {

    return jwt.sign(user, secret, { expiresIn: '1800s' })
}
module.exports = {
    hashTokenAccess
}