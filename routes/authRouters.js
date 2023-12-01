const express = require("express");
const router = express.Router();

const { ControleReservas, listTable, historicoGeral } = require("../controllers/reserverController");

router.get("/", listTable)
router.post("/reserve/add", ControleReservas)
router.get("/history", historicoGeral)

module.exports = router;
