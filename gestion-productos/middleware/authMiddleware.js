const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      mensaje: "Acceso denegado"
    });
  }

  try {

    const tokenLimpio = token.replace("Bearer ", "");

    const verified = jwt.verify(
      tokenLimpio,
      process.env.JWT_SECRET
    );

    req.user = verified;

    next();

  } catch (error) {

    res.status(400).json({
      mensaje: "Token inválido"
    });

  }

};

module.exports = authMiddleware;
