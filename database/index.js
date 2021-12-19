const mongoose  = require("mongoose");
const config = require("../config");

const dbString = config.dbString;

const init = async() => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        await mongoose.connect(dbString, options);
        console.log("Conectado a la base de datos");
    } catch(error) {
        console.log(`Mensaje de Error: ${error.message}`);
    }
}

module.exports = { init }
