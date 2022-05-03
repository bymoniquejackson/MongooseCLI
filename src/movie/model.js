const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not Specified",
    },
    rating: {
        type: Number, 
    },
    year: {
        type: String,
        default: "Not Specified",
    }
});
// const User = mongoose.model("User")
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

