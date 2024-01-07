// tiene id, tipo (privada o publica) y fecha
// diseño para mongo db
// I'm Defining const for this model.

export const Types = Object.freeze({
    PRIVATE: "private",
    PUBLIC: "public",
  });
  
  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    id: { type: String, required: true },
    type: { type: String, required: true, enum: Object.values(Types) },
    date: { type: String, required: true },
    timestamps: true
});

export default mongoose.model('Room', RoomSchema);