const User = require("./model");

const list = async(req, res) => {
    const usuarios = await User.find();
    res.status(200).json({usuarios})
}

const listOne = async(req, res) => {
    const cedula = req.params.id;
    const usuarios = await User.find({ cedula: parseInt(cedula) });
    res.status(200).json({usuarios})

    if (usuarios.length === 1) {
        res.status(200).json({usuarios})
    } else {
        res.status(400).json({error: "Usuario no existe"});
    }     
}

const createUser = async(req, res) => {
    const { idUsuario, contraseña, nombre, cedula, telefono, tipoUsuario, fechaIng, salario } = req.body;
    const userFound = await User.find(
        {idUsuario: idUsuario},
        {cedula: cedula}
    );
    
    if (userFound.length === 0) {
        const user  = {
            idUsuario: idUsuario,
            contraseña,
            nombre, 
            cedula,
            telefono,
            tipoUsuario,
            fechaIng,
            salario
        };

        const newUser = new User(user);
        newUser.save().then((createdUser) => {
            res.status(200).json({user});
        });
    } else {
        res.status(400).json({error: "Usuario ya existe"});
    }
}

const updateUser = async(req, res) => {
    const { idUsuario, contraseña, nombre, cedula, telefono, tipoUsuario, fechaIng } = req.body;
    const id = req.params.id;
    
    const userFound = await User.find({ _id: id});
    if (userFound.length === 1) {
        const user  = {
            nombre: nombre,
            cedula: cedula,
            telefono: telefono,
            tipoUsuario: tipoUsuario,
            fechaIng: fechaIng
        };

        User.updateOne({ _id: id }, user).then((result) => {
            res.status(200).json(result);
        });
    } else {
        res.status(400).json({error: "Usuario no existe"});
    }
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    User.deleteOne({ _id: id }).then((result) => {
      res.status(200).json({ result })
    })
};
  

module.exports = {
    list,
    createUser,
    deleteUser,
    updateUser,
    listOne
}