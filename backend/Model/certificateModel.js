const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
    certificateName: {
        type: String,
        required: true,
    },
    Disable: {
        type: Boolean,
        default: false,
    },
    requirements: {
        type: Array,
    },
});

module.exports = new mongoose.model("certificate", certificateSchema);
