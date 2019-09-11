const db = require('../data/db.js');

module.exports = {
    get,
    getById,
    insert,
    remove
}

function get() {
    return db('cars');
}

function getById(id) {
    return db('cars')
        .where({id: id})
        // .then(car => )
}

function insert(car) {
    return db('cars')
        .insert(car)
        .then(([id]) => getById(id).first())
}

function remove(id) {
    return db('cars')
        .where({id: id})
        .del();
}