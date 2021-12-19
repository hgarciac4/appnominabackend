const mongoose = require("mongoose");

const collection = "users";

const userSchema = {
    idUsuario: {type: String, required: true},
    contraseña: {type: String, required: true},
    nombre: {type: String, required: true},
    cedula: {type: Number, required: true},
    telefono: {type: Number},
    tipoUsuario: {type: String, required: true},
    fechaIng: {type: Date, required: true},
    salario: {type: Float32Array, required: true},
    activo: {type: Boolean, required: true, default: true}
}

const options = {
    timestamps: true,
}

const schema = new mongoose.Schema(userSchema, options)

const User = mongoose.model(collection, schema);

module.exports = User;