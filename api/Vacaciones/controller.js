const Vacaciones = require("./model");

const list = async(req, res) => {
    const vacaciones = await Vacaciones.find().populate("idUsuario", ["idUsuario", "nombre", "tipoUsuario"]);
    res.status(200).json({vacaciones})
}

const createVacaciones = async(req, res) => {
    const { idVacaciones, idUsuario, fechaInicio, fechaFin, aprobado, activo } = req.body;
    const VacacionesFound = await Vacaciones.find({idVacaciones});
    
    if (VacacionesFound.length === 0) {
        const vacacion = {
            idVacaciones,
            idUsuario,
            fechaInicio,
            fechaFin,
            aprobado,
            activo
        };

        const newVacaciones = new Vacaciones(vacacion);
        newVacaciones.save().then((createdVacaciones) => {
            res.status(200).json({createdVacaciones});
        });
    } else {
        res.status(400).json({error: "Vacaciones ya existe"});
    }
}

module.exports = {
    list,
    createVacaciones
}