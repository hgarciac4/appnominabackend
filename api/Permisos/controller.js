const Permiso = require("./model");

const list = async(req, res) => {
    const permisos = await Permiso.find().populate("idUsuario", ["idUsuario", "nombre", "tipoUsuario"]);
    res.status(200).json({permisos})
}

const createPermiso = async(req, res) => {
    const { idPermisos, idUsuario, fechaInicio, fechaFin, aprobado, activo } = req.body;
    const PermisoFound = await Permiso.find({idPermisos});
    
    if (PermisoFound.length === 0) {
        const permiso = {
            idPermisos,
            idUsuario,
            fechaInicio,
            fechaFin,
            aprobado,
            activo
        };

        const newPermiso = new Permiso(permiso);
        newPermiso.save().then((createdPermiso) => {
            res.status(200).json({createdPermiso});
        });
    } else {
        res.status(400).json({error: "Usuario ya existe"});
    }
}

module.exports = {
    list,
    createPermiso
}