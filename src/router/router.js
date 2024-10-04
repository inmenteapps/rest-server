const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");
const { response } = require("express");
const router = require("express").Router();

// Simulación de usuario en la base de datos
const users = [{ username: "user1", password: "$2b$10$tvtm0XeTdc1HPjg9Xo2SuOS8BNJVf4dHonC288ThaTfG.ChnVHaX2" }];

// Ruta de autenticación
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ username: user.username }, "secreto", { expiresIn: "1h" });
    console.log(token);
    res.json({ token });
  } else {
    res.status(401).json({ message: "Credenciales incorrectas" });
  }
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(403).json({ message: "Token requerido" });

  // Extraer el token eliminando el prefijo 'Bearer'
  const token = authHeader.split(" ")[1];

  if (!token) return res.status(403).json({ message: "Formato de token incorrecto" });

  jwt.verify(token, "secreto", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token inválido" });

    req.user = decoded;
    next();
  });
};

router.get("/beer", verifyToken, async (req, res) => {
  const response = {
    data: {
      id: 1,
      uid: "1",
      brand: "Cerveza Cristal",
      name: "Amstel",
      style: "Pilsen",
      hop: "Amarillo",
      ibu: "25",
      alcohol: "5.0",
      blg: "5.5",
    },
  };

  return res.status(200).json(response.data);
});

module.exports = router;
