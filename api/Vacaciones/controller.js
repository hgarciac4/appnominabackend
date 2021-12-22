const User = require("../users/model");
const Vacacion = require("./model");

const list = async(req, res) => {
    const vacaciones = await Vacacion.find().populate("usuario", ["_id", "idUsuario", "nombre"]);
    res.status(200).json({vacaciones})
}

const createVacacion = async(req, res) => {
    const { idVacaciones, usuario, fechaInicio, fechaFin, aprobado, activo } = req.body;
    const userFound = await User.find({ _id: usuario });
    
    if (userFound.length === 1) {
        const vacacion = {
            idVacaciones,
            usuario: usuario,
            fechaInicio,
            fechaFin,
            aprobado,
            activo
        };

        const newVacacion = new Vacacion(vacacion);
        newVacacion.save().then((createdVacacion) => {
            res.status(200).json({createdVacacion});
        });
    } else {
        res.status(400).json({error: "Usuario no existe", usuario});
    }
}

const updateVacacion = async(req, res) => {
    const { idVacaciones, usuario, fechaInicio, fechaFin, aprobado, activo } = req.body;
    const id = req.params.id;
    
    const vacacionFound = await Vacacion.find({ _id: id });
    if (vacacionFound.length === 0) {
        const permiso  = {
            idVacaciones,
            usuario,
            fechaInicio,
            fechaFin,
            aprobado,
            activo
        };

        Permiso.updateOne({ _id: id }, permiso).then((result) => {
            res.status(200).json(result);
        });
    } else {
        res.status(400).json({error: "Vacacion ya existe"});
    }
}

const deleteVacacion = (req, res) => {
    const id = req.params.id;
    Permiso.deleteOne({ _id: id }).then((result) => {
      res.status(200).json({ result })
    })
};

module.exports = {
    list,
    createVacacion,
    updateVacacion,
    deleteVacacion
}