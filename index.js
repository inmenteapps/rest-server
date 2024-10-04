const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

const router = require("./src/router/router");

app.set("port", process.env.PORT || 3002);

app.use(helmet()); // Protege con cabeceras de seguridad
app.use(express.json()); // Parseo de JSON en las peticiones
app.use(cors());
app.use(router);

app.listen(app.get("port"), () => {
  console.log("rest-server working in port", app.get("port"));
});
