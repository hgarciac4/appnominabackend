const User = require("../users/model");
const Permiso = require("./model");

const list = async(req, res) => {
    const permisos = await Permiso.find().populate("usuario", ["_id", "idUsuario", "nombre"]);
    res.status(200).json({permisos})
}

const createPermiso = async(req, res) => {
    const { idPermisos, usuario, fechaInicio, fechaFin, remunerado, aprobado, activo } = req.body;
    const userFound = await User.find({ _id: usuario });
    
    if (userFound.length === 1) {
        const permiso = {
            idPermisos,
            usuario: usuario,
            fechaInicio,
            fechaFin,
            remunerado,
            aprobado,
            activo
        };

        const newPermiso = new Permiso(permiso);
        newPermiso.save().then((createdPermiso) => {
            res.status(200).json({createdPermiso});
        });
    } else {
        res.status(400).json({error: "Usuario no existe", usuario});
    }
}

const updatePermiso = async(req, res) => {
    const { idPermisos, usuario, fechaInicio, fechaFin, remunerado, aprobado, activo } = req.body;
    const id = req.params.id;
    
    const permisoFound = await Permiso.find({ _id: id });
    if (permisoFound.length === 0) {
        const permiso  = {
            idPermisos,
            usuario,
            fechaInicio,
            fechaFin,
            remunerado,
            aprobado,
            activo
        };

        Permiso.updateOne({ _id: id }, permiso).then((result) => {
            res.status(200).json(result);
        });
    } else {
        res.status(400).json({error: "Permiso ya existe"});
    }
}

const deletePermiso = (req, res) => {
    const id = req.params.id;
    Permiso.deleteOne({ _id: id }).then((result) => {
      res.status(200).json({ result })
    })
};

module.exports = {
    list,
    createPermiso,
    updatePermiso,
    deletePermiso
}