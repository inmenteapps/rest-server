const axios = require("axios");
const router = require("express").Router();

router.get("/beer", async (req, res) => {
  const response = {
    data: {
      id: 1,
      uid: "1",
      brand: "Brahmaaaa",
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
