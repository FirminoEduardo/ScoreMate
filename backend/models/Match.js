// backend/models/Match.js
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
   homeTeam: { type: String, required: true },
   awayTeam: { type: String, required: true },
   score: { type: String, required: true },
   status: { type: String, enum: ['scheduled', 'live', 'finished'], default: 'scheduled' },
   startTime: { type: Date, required: true },
});

module.exports = mongoose.model('Match', matchSchema);
