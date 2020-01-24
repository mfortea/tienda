const { Cliente, Artículo } = require("./models");

exports.listarClientes = (req, res) => {
  Cliente.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.readCliente = (req, res) => {
  Cliente.findOne({ _id: req.params.id }, (err, data) => {
    // La _ de _id se indica porque es un campo de MongoDB automático
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.deleteCliente = (req, res) => {
  Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};

exports.updateCliente = (req, res) => {
  Cliente.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, // Llama al campo nombre del formulario
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
};

exports.createCliente = (req, res) => {
  const cliente = new Cliente({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos
  });
  cliente.save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
};
