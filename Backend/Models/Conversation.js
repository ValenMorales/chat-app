// tiene id, idroom, iduser
// diseño para mongo db
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ConversationSchema = new Schema({
    id: { type: String, required: true },
    room:  { type: Schema.Types.ObjectId, ref: "Room", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    timestamps: true
});

export default mongoose.model('Conversation', ConversationSchema);