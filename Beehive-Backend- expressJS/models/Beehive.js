const mongoose = require('mongoose');

const BeehiveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  queen_birth_date: {
    type: Date,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  device_id: {
    type: String,
    required: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Beehive', BeehiveSchema);
