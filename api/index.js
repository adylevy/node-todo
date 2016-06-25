const express = require('express'),
    todos = require('./todos.js');

var API = function () {
    var api = express.Router();

     //mount the todo resource
     api.use('/todo', todos());

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({
        version: '1.0'
    });
    });

    return api;
}

module.exports = API;
