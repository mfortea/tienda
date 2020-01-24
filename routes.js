const controller = require('./controllers');
const express = require("express");

const router = express.Router();

// --------- API REST CRUD

router.get("/clientes", controller.listarClientes );        // Read All

router.get("/clientes/:id", controller.readCliente) ;       // Read

router.delete("/clientes/:id", controller.deleteCliente);   // Delete

router.put("/clientes/:id", controller.updateCliente);      // Update

router.post("/clientes", controller.createCliente);         // Create

module.exports = router;