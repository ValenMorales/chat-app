// tiene id, usuario, sala, contenido, fecha y tipo
// diseño para mongo db
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({

    id: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    room: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
    // mas adelante para recibir y enviar audios e imagenes
    type: { type: String, required: false },
    timestamps: true
});

export default mongoose.model('Message', MessageSchema);
 