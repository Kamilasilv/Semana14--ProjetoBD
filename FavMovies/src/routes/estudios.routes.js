const express = require("express")
const router = express.Router()
const controller = require("../controller/estudioController")

//GET - listar todos os studios OK
router.get("/", controller.getAll) 

//CREATE - criar um studio OK
router.post("/create", controller.createStudio)

//DELETE - deletar um studio por id  OK
router.delete("/:id", controller.deleteEstudio) 

//PATCH - atualizar qualquer dado do studio por id  OK
router.patch("/update/:id", controller.updateEstudio)

module.exports = router