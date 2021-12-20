const User = require("./model");

const list = async(req, res) => {
    const usuarios = await User.find();
    res.status(200).json({usuarios})
}

const createUser = async(req, res) => {
    const { idUsuario, contraseña, nombre, cedula, telefono, tipoUsuario, fechaIng, salario } = req.body;
    const userFound = await User.find({idUsuario});
    
    if (userFound.length === 0) {
        const user = {
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

module.exports = {
    list,
    createUser
}