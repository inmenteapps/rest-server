const bcrypt = require("bcrypt");

const generarHash = async () => {
  const saltRounds = 10; // Número de rondas de encriptación
  const plainTextPassword = "hola"; // La palabra que quieres encriptar

  try {
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
    console.log("Contraseña encriptada:", hashedPassword);
  } catch (error) {
    console.error("Error en la encriptación:", error);
  }
};

generarHash();
