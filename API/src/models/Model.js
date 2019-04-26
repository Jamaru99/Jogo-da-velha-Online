const mongo = require("mongoose");

const model = new mongo.Schema({
    tabuleiro:{
        type: Array,
        required: true,
    },
    simbolo:{
        type: String,
        required: true,
    }
});

mongo.model('jogodavelha', model);