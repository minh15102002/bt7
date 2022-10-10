const User       = require("../../models/user.model"),
      authHelper = require("../../helpers/auth.helper")

/**
 * Là function với method post để đăng ký 1 user vào hệ thống
 * @async
 * @method POST
 * @param {{ body: Object }} req 
 * @param { Object } res 
 * @returns { Promise<json> } là 1 json object trả về đối tượng user vừa đăng ký
 * @version 0.0.1
 * @see https://... đường đẫn đến swagger
 */
module.exports.register = async ( req, res ) => {

    let code     = 500,
        response = {}
    /// giả sử khúc này  tới đây bạn đã sử dụng middleware ở ngoài để validate dữ liệu đầu vào
    try {
        const { username, email, password } = req.body
        /// check email tồn tại
        const isExist = await User.findOne({ email })
        if( isExist ){
            code = 409 /// 409 Conflict
            throw new Error("email đã tồn tại!!")
        }
        /// lưu vào db mongo
        const user = await new User({ username, email, password }).save()
        /// khúc này nếu bạn kỹ tính hãy tạo 1 phương thức chung để format dữ liệu 
        /// còn mình làm nhanh thì trả ra dữ liệu luôn
        response.code             = 200
        response.data             = user.toResources()
        response.message          = "tạo user thành công"
        response.internal_message = `Bạn đã tạo thành công mới 1 user với email là ${email}`

        return res.status(response.code).json(response)

    } catch (error) {
        
        let err                       = { error: 'error', message: error.message }
            response.code             = code || 500
            response.message          = error.message
            response.internal_message = error.message
            response.errors           = [ err ]

        return res.status(response.code).json(response)
    }
}

/**
 * Là function với method post để login 1 user vào hệ thống
 * @async
 * @method POST
 * @param {{ body: Object }} req 
 * @param { Object } res 
 * @returns { Promise< JSON > } là 1 json object trả về jwt
 * @version 0.0.1
 * @see https://... đường đẫn đến swagger
 */
 module.exports.login = async ( req, res ) => {

    let code     = 500,
        response = {}
    /// giả sử khúc này  tới đây bạn đã sử dụng middleware ở ngoài để validate dữ liệu đầu vào
    try {
        const { email, password } = req.body
        /// check email tồn tại
        const user = await User.findOne({ email }) /// vì email duy nhất nên findOne
        if( !user ){
            code = 401 /// 401 Unauthorized
            throw new Error("Email hoặc password không đúng!!")
        }
        /// nếu có email cần check xem password có match đúng với db không? 
        const isMatch = await user.comparePassword(password)
        if( !isMatch ){
            /// nếu password không chính xác thì trả ra lỗi
            code = 401 /// 401 Unauthorized
            throw new Error("Email hoặc password không đúng!!")
        }
        /// nếu email và password chính xác thì tạo 1 mã jwt quăng ra cho ngừoi dùng
        const strJWT = await authHelper.hashTokenAccess(user.toResources())
        
        /// khúc này nếu bạn kỹ tính hãy tạo 1 phương thức chung để format dữ liệu 
        /// còn mình làm nhanh thì trả ra dữ liệu luôn
        response.code             = 200
        response.data             = strJWT
        response.message          = "User login thành công"
        response.internal_message = `Bạn đã login thành công mới 1 user với email là ${email}`

        return res.status(response.code).json(response)

    } catch (error) {
        
        let err                       = { error: 'error', message: error.message }
            response.code             = code || 500
            response.message          = error.message
            response.internal_message = error.message
            response.errors           = [ err ]
            
        return res.status(response.code).json(response)
    }
} 
module.exports.getUser = async (req, res) => {

    let response = {},
        code = 500
    try {
        const { user } = req
        /// response 
        response.code             = 200
        response.data             = user
        response.message          = "buộc phải login nè"
        response.internal_message = "buộc phải login nè"
        return res.status(response.code).json(response)

    } catch (error) {

        let err                       = { error: 'error', message: error.message }
            response.code             = code || 500
            response.message          = error.message
            response.internal_message = error.message
            response.errors           = [err]
        return res.status(response.code).json(response)
    }
}
//