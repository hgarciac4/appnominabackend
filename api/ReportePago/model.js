const mongoose = require("mongoose");

const collection = "reportepago";

const userSchema = {
    idReportePago: {type: int, required: true},
    idUsuario: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    concepto: {type: String, required: true},
    fecha: {type: Date, required: true},
    valor: {type: Float32Array, required: true, default: 0}
}

const options = {
    timestamps: true,
}

const schema = new mongoose.Schema(userSchema, options)

const Vacaciones = mongoose.model(collection, schema);

module.exports = Vacaciones;