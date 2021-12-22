const mongoose = require("mongoose");

const collection = "reportepago";

const userSchema = {
    año: {type: Number, required: true},
    mes: {type: Number, required: true},
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    concepto: {type: String, required: true},
    valor: {type: Number, required: true}
}

const options = {
    timestamps: true,
}

const schema = new mongoose.Schema(userSchema, options)

const ReportePago = mongoose.model(collection, schema);

module.exports = ReportePago;