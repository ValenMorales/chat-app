// id, nombre, correo, contraseña 

// diseño para mongo db

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true }
});

export default mongoose.model('User', UserSchema);