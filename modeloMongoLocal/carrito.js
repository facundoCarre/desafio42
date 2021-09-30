const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombreProducto: { type: String, required: true, max: 100 },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
});

const Carritos = mongoose.model('carritos', schema);

module.exports = Carritos;

/** nombreProducto: { type: String, required: true, max: 100 },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true }, */