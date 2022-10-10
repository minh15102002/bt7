'use strict'

const bcrypt           = require('bcrypt'),
      SALT_WORK_FACTOR = 12,
      mongoose         = require('mongoose'),
      Schema           = mongoose.Schema
      
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 3000
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 1,
            maxlength: 500
        },
        password: {
            type: String,
            required: true,
            maxlength: 100000,
        }
    }, {
        timestamps: true
    }
)

/**
 * Là function để so sánh chuỗi hash password đã gửi vào có đúng với trên hệ thống không? 
 * @param { String } _password là password đang được hash 
 * @version 0.0.1
 */
UserSchema.methods.comparePassword = function(_password) {
    return bcrypt.compareSync(_password, this.password);
}

/**
 * Là function để trước khi lưu mới hoặc update mới password thì sẽ modify nó trước khi lưu
 * @async
 * @version 0.0.1
 */
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()
    /// nếu là thêm mới hoặc update password thì băm trước
    try {
        const salt    = await bcrypt.genSalt(SALT_WORK_FACTOR)
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (err) {
        return next(err)
    }
})
UserSchema.methods.toResources = function() {   
    return {
        _id      : this._id,
        username : this.username,
        email    : this.email,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    }
}
module.exports = mongoose.model("users", UserSchema)
 