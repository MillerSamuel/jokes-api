const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true,"Content is required"],
        minlength:[5,"Content must be atleast 5 characters"]
    },
    punchline:{
        type:String,
        required: [true,"Content is required"],
        minlength:[2,"Content must be atleast 2 characters"]
    }

},{timestamps:true});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;
