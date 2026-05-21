const jwt = require("jsonwebtoken")

function authMiddleware(request, response, next) {

    try {

        const token = request.headers.authorization

        if (!token) {

            return response.status(401).send("Token Missing")

        }

        const verifiedToken = jwt.verify(
            token,
            "mySecretKey"
        )

        request.userId = verifiedToken.userId

        next()

    }

    catch(error) {

        response.status(401).send("Invalid Token")

    }

}

module.exports = authMiddleware