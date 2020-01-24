const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes.js')

const app = express();

mongoose.connect("mongodb+srv://mateo:mateo@cluster0-ieryg.mongodb.net/tienda?retryWrites=true&w=majority", { useNewUrlParser: true })
.then( db => console.log("Conexión a BD correcta") )
.catch( error => console.log("Error al conectarse a la BD" + error));

app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Servidor iniciado..."));
