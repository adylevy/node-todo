const express = require('express'),
    todos = require('../models/todo.js');

const Resource = function () {
    var api = express.Router();

    api.get('/', (req, res) => {
        res.json(todos);
});

    return api;
}

module.exports = Resource;
