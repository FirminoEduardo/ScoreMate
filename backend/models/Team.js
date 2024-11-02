// backend/models/Team.js
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
   name: { type: String, required: true },
   players: [{ type: String }], // lista de jogadores
   coach: { type: String },
});

module.exports = mongoose.model('Team', teamSchema);
