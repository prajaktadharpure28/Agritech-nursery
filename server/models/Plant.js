const mongoose = require('mongoose');

const Plant = mongoose.Schema({
    id : {type: 'number'},
    name: {type : 'string'},
    description:{type: 'string'},
    amount:{type: 'number'},
    quantity:{type: 'number'},
    category:{type: 'string'}
});

const model = mongoose.model('Plant', Plant);
module.exports = model;
