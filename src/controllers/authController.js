module.exports = class Auth {
    /**
     * Login
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     * @returns {Object} User Credentials
     */
    static async login(req, res, next){
       const { firstName, lastName, password, email, phone, country } = req.body;
       console.log(firstName, lastName, password, email, phone, country);
       return res.status(200).json({message: 'login user'});
    }
    /**
     * Signup
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     * @returns {Object} User Credentials
     */
    static async signup(req, res, next){
       const { email, password, phone } = req.body;
       console.log( email, phone, country);
       return res.status(200).json({message: 'login user'});
    }
}