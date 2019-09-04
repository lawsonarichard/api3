const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Products Page");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(` get to /products/${id}`);
});

module.exports = router;
