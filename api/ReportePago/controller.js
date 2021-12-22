const User = require("../users/model");
const ReportePago = require("./model");

const list = async(req, res) => {
    const reportePago = await ReportePago.find().populate("usuario", ["_id", "idUsuario", "nombre"]);
    res.status(200).json({reportePago})
}

const createReportePago = async(req, res) => {
    const { año, mes, usuario, concepto, valor } = req.body;
    const userFound = await User.find({ idUsuario: usuario });
    
    if (userFound.length === 0) {
        const reportePago = {
            año: año,
            mes,
            usuario,
            concepto,
            valor
        };

        const newReportePago = new ReportePago(reportePago);
        newReportePago.save().then((createdReportePago) => {
            res.status(200).json({ createdReportePago });
        });
    } else {
        res.status(400).json({error: "Usuario no existe"});
    }
}

const deleteReportePago = (req, res) => {
    const id = req.params.id;
    User.deleteOne({ _id: id }).then((result) => {
      res.status(200).json({ result })
    })
};
 
const updateReportePago = async(req, res) => {
    const { año, mes, usuario, concepto, valor } = req.body;
    const id = req.params.id;
    
    const reporteFound = await ReportePago.find({ _id: id });
    if (reporteFound.length === 0) {
        const reporte  = {
            año,
            mes,
            usuario,
            concepto,
            valor
        };

        ReportePago.updateOne({ _id: id }, reporte).then((result) => {
            res.status(200).json(result);
        });
    } else {
        res.status(400).json({error: "Reporte Pago no existe"});
    }
}

module.exports = {
    list,
    createReportePago,
    deleteReportePago,
    updateReportePago
}