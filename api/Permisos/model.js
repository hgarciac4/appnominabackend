const mongoose = require("mongoose");

const collection = "permisos";

const userSchema = {
    idPermisos: {type: Number},
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: Date, required: true},
    remunerado: {type: Boolean, default: true},
    aprobado: {type: Boolean, default: false}, 
    activo: {type: Boolean, default: true}
}

const options = {
    timestamps: true,
}

const schema = new mongoose.Schema(userSchema, options)

const Permisos = mongoose.model(collection, schema);

module.exports = Permisos;