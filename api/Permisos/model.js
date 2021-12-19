const mongoose = require("mongoose");

const collection = "permisos";

const userSchema = {
    idPermisos: {type: int, required: true},
    idUsuario: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: Date, required: true},
    aprobado: {type: Boolean, required: true, default: false},
    activo: {type: Boolean, required: true, default: true}
}

const options = {
    timestamps: true,
}

const schema = new mongoose.Schema(userSchema, options)

const Permisos = mongoose.model(collection, schema);

module.exports = Permisos;